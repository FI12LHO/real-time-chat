import React, { useState } from "react";
import SideMenu from "../components/sidemenu";
import MessageBoard from "../components/messageBoard";

const Dashboard = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [messages, setMessages] = useState([]);

    return (
        <div className='flex flex-1'>
            <SideMenu data={[]} onChatPress={setIsVisible} />
            { isVisible ? <MessageBoard data={[]} user_id={''} /> : '' }
        </div>
    );
};

export default Dashboard;