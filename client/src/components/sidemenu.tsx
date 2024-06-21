import React, { useEffect, useState } from "react";
import { ChatType } from "../pages/dashboard";
import Api from "../service/api";

interface Props {
    onChatPress: (value: boolean) => void,
    setChat: (value: ChatType) => void,
}

const SideMenu = ({onChatPress, setChat}: Props) => {
    const username = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const [data, setData] = useState<Array<ChatType>>([]);

    const onOpenChat = (chat: ChatType) => {
        onChatPress(true);
        setChat(chat)
        return;
    };

    const openMenu = () => {
        return;
    };

    useEffect(() => {
        /**
         * Faz a requisicao dos chats e define data
         */
        Api.post('/chat', undefined, {headers: {'Authorization': `Bearer ${token}`}})
        .then(res => res.data as Array<ChatType>)
        .then(res => setData(res))
        .catch(error => console.log(error));
    }, []);

    return (
        <div className='
            flex flex-col h-[90vh] w-[25vw] absolute top-[5vh] left-2
            shadow-md shadow-[rgba(0,0,0,0.5)] border-[1px] border-[rgba(0,0,0,0.4)] rounded-md
        '>
            <div className='flex w-full flex-row items-center justify-between p-4 border-b-[1px] border-[rgba(0,0,0,0.2)]'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='flex items-center justify-center w-10 h-10 uppercase text-center rounded-full border-[1px] border-[rgba(0,0,0,0.4)] text-lg'>
                        {username?.charAt(0)}
                    </div>
                    <span className='font-semibold text-2xl capitalize'>{username}</span>
                </div>
                <button className='hover:opacity-70' onClick={openMenu}>
                    <img className='w-6 h-6'
                        src='/assets/more_vert_black.svg' alt='vertical menu' />
                </button>
            </div>
            <div className='flex flex-col w-full h-full px-4 pt-5 overflow-auto'>
                {
                    data.map((item: ChatType) => (
                        <div className='flex flex-row w-full px-2 py-2 border-b-[1px] border-[rgba(0,0,0,0.2)] hover:opacity-65 my-2'
                            onClick={() => {onOpenChat(item)}} key={item.id}>
                            <span className='text-xl'>
                                {item.name}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SideMenu;