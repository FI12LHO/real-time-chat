import PusherJs from "pusher-js";
import Echo from "laravel-echo";
import { useEffect, useState } from "react";

const useEcho = () => {
    const [echoInstance, setEchoInstance] = useState<null | Echo>(null);

    useEffect(() => {
        const pusherClient = new PusherJs('ovzq2kzhsfxkgpgrwfaq', {
            wsHost: 'localhost',
            wsPort: 8080,
            wssPort: 443,
            forceTLS: false,
            enabledTransports: ['ws', 'wss'],
            disableStats: true,
            cluster: '',
        });

        const echo = new Echo({
            client: pusherClient,
            broadcaster: 'reverb',
        });

        if (!echo) {
            return;
        }

        setEchoInstance(echo);

        return () => {
            echo.disconnect();
        };
    }, []);

    return echoInstance;
};

export default useEcho;