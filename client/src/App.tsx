import React, { useEffect } from 'react';
import useEcho from './hooks/useEcho';

function App() {  
  const echo = useEcho();

  useEffect(() => {
    if (!echo) {
      return;
    }

    echo.channel('chat').listen('MessageSentEvent', (event: any) => {
      console.log(event);
    });

    return () => {
      if (echo) {
        echo.leaveChannel("chat");
      }
    };

  }, [echo]);

  return (
    <div className="App"></div>
  );
}

export default App;
