import React, { useState } from "react";
import SideMenu from "../components/sidemenu";
import MessageBoard from "../components/messageBoard";

export type UserDataType = {
    name: string | null,
    email?: string,
    id: string,
    token: string,
};

export type ChatType = {
    id: string,
    chat_id: string,
    user_id: string,
    name: string,
    owner_id: string,
    created_at: string,
    updated_at: string,
};

export type MessageType = {
    id?: string,
    author?: string,
    name: string,
    message: string,
    date?: string,
    chat_id?: string,
    user_id: string,
    created_at?: string,
    updated_at?: string,
};

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [chat, setChat] = useState<null | ChatType>(null);

    return (
        <div className='flex flex-1'>
            <SideMenu setChat={setChat} onChatPress={setIsVisible} />
            { isVisible ? <MessageBoard chat={chat} /> : '' }
        </div>
    );
};

export default Dashboard;