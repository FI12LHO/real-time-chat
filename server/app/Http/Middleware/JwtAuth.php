<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class JwtAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $header = $request -> header();

        if (!isset($header['authorization'])) {
            return response() -> json([
                'status' => 'fail',
                'error' => 'Jwt authentication failed',
                'message' => 'Bearer token not found.'
            ], 401);    
        }

        if (!$request -> user()) {
            return response() -> json([
                'status' => 'fail',
                'error' => 'Jwt authentication failed',
                'message' => 'Bearer token invalid.',
            ], 403);    
        }

        return $next($request);
    }
}
