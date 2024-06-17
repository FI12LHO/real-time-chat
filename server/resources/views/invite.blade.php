<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Chat App</title>
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="w-screen h-screen p-0 m-0 flex items-center justify-center">
        <div class="h-[50vh] w-[50vw] flex flex-col items-center justify-center">
            @if (isset($id, $name, $invite))
                <div class="flex flex-col gap-4 mb-2">
                    <h1 class="text-3xl font-bold text-center">Você recebeu um convite!</h1>
                    <p class="text-lg mb-8">Você foi convidado para há sala de bate-papo <b class="uppercase">{{$name}}</b>. Preencha o formulario com seus dados de login e clique no botão abaixo para entrar.</p>
                </div>
                <div class="flex flex-col w-full gap-4 mb-8">
                    <div class="flex w-full flex-col gap-2 items-center justify-center">
                        <label class="w-2/4" for="email">Seu e-mail:</label>
                        <input type="email" id="email" name="email" placeholder="john-doe@gmail.com" form="join-form"
                            class="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                    </div>
                    <div class="flex w-full flex-col gap-2 items-center justify-center">
                        <label class="w-2/4" for="password">Sua senha:</label>
                        <input type="password" id="password" name="password" placeholder="1A2B3C4D" form="join-form"
                            class="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                    </div>
                </div>
                <button
                    form="join-form"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Entrar na sala
                </button>
        
                <form id="join-form" action="{{ route('participants.join') }}" method="POST" class="hidden">
                    @csrf
                    <input type="hidden" id="chat-id" name="chat_id" value="{{$id}}">
                    <input type="hidden" id="invite" name="invite" value="{{$invite}}">
                </form>               
            @else
                <div class="flex flex-col gap-4 mb-8">
                    <h1 class="text-3xl font-bold text-center">Houve um problema, não encontrei nenhum convite!</h1>
                </div>
            @endif
        </div>
    </body>
</html>
