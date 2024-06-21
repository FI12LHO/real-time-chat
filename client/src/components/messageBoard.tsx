import React, { useEffect, useState } from "react";
import { ChatType, MessageType } from "../pages/dashboard";
import Api from "../service/api";
import useEcho from "../hooks/useEcho";

interface Props {
    chat: ChatType | null,
}

const MessageBoard = ({chat}: Props) => {
    const username = localStorage.getItem('name');
    const userId = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    const [message, setMessage] = useState('');
    const [data, setData] = useState<Array<MessageType>>([]);
    const echo = useEcho();

    const sendMessage = async () => {
        if (message === '') {
            return;
        }

        await Api.post(`/message/send/${chat?.id}`, {
            author: username,
            message: message,
            date: new Date().toISOString(),
            user_id: userId,
            chat_id: chat?.id,
        },
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => console.error(error));

        setMessage('');
        return;
    };

    const openMenu = () => {
        return;
    };

    const getMessages = async () => {
        await Api.post(`/message/${chat?.id}`, undefined, {headers: {'Authorization': `Bearer ${token}`}})
            .then(res => res.data as Array<MessageType>)
            .then(res => setData(res))
            .catch(error => console.error(error));
    };

    useEffect(() => {
        getMessages();
    }, [chat?.chat_id]);

    useEffect(() => {
        if (echo === null) {
            return;
        }

        echo.channel('chat').listen('MessageSentEvent', async (e: any) => await getMessages());

    }, [echo])

    return (
        <div className='flex flex-col justify-between w-[70vw] h-screen absolute right-0 py-[5vh] px-4'>
            <div className='
                flex max-h-16 flex-1 flex-row justify-between items-center px-5
                border-[1px] border-[rgba(0,0,0,0.4)] rounded-md shadow-sm shadow-[rgba(0,0,0,0.4)]
            '>
                <span className='text-lg font-bold capitalize'>{chat?.name}</span>
                <button className='hover:opacity-70' onClick={openMenu}>
                    <img className='w-6 h-6'
                        src='/assets/more_vert_black.svg' alt='vertical menu' />
                </button>
            </div>
            <div className='flex flex-1 flex-col gap-2 py-2 overflow-auto'>
                {
                    data.map((item: MessageType) => {
                        const orientation = userId === item.user_id ? 'justify-end' : 'justify-start';
                        const color = userId === item.user_id ? 'bg-green-400' : 'bg-slate-400';

                        return (
                            <div className={`flex w-full bg-transparent ${orientation}`}>
                                <div className={`px-4 py-2 border-[0.5px] border-[rgba(0,0,0,0.4)] rounded-md ` + color}>
                                    <span className='text-sm font-semibold'>{item.name}</span>
                                    <p className='mt-2'>{item.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='
                flex max-h-16 flex-1 flex-row justify-between items-center px-2 py-2 gap-2
                border-[1px] border-[rgba(0,0,0,0.4)] rounded-md shadow-sm shadow-[rgba(0,0,0,0.4)]
            '>
                <input
                    className='
                        w-full h-full border-b-2 border-[rgba(0,0,0,0.4)] focus:outline-none focus:border-[rgba(0,0,0,0.8)]
                        text-md text-[rgba(0,0,0,0.8)] pl-2
                    '
                    value={message} onChange={e => setMessage(e.target.value)} />
                
                <button
                    className='
                        flex w-10 h-10 rounded-lg items-center justify-center border-[1px] border-[rgba(0,0,0,0.4)]
                        shadow-sm shadow-[rgba(0,0,0,0.4)] hover:opacity-75
                    '
                    onClick={sendMessage}>
                    <img className='w-6 h-6'
                        src='/assets/arrow_upward.svg' alt='send message' />
                </button>
            </div>
        </div>
    );
};

export default MessageBoard;