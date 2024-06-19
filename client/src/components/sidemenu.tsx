import React from "react";

type ChatType = {
    id: string,
    chat_id: string,
    user_id: string,
    name: string,
    owner_id: string,
    created_at: string,
    updated_at: string,
};

interface Props {
    data: Array<ChatType>,
    onChatPress: (value: boolean) => void
}

const SideMenu = ({data, onChatPress}: Props) => {
    const onOpenChat = (chat: ChatType) => {
        onChatPress(true);
        return;
    };

    return (
        <div className='
            flex flex-col h-[90vh] w-[25vw] absolute top-[5vh] left-2
            shadow-md shadow-[#00000050] border-[1px] border-[#00000040] rounded-md
        '>
            <div className="
                flex w-full flex-row items-center justify-between p-4 border-b-[1px] border-[#00000020]
            ">
                <div className="flex flex-row items-center gap-4">
                    <div className="
                        flex items-center justify-center w-10 h-10 uppercase text-center rounded-full border-[1px] border-[#00000040] text-lg
                    ">
                        {'J'}
                    </div>
                    <span className="font-semibold text-2xl capitalize">{'John doe'}</span>
                </div>
                <button>:</button>
            </div>
            <div className="flex flex-col w-full h-full gap-2 px-4 pt-5">
                {
                    data.map((item: ChatType) => (
                        <div className="flex flex-row w-full px-2 py-2 border-b-[1px] border-[#00000020]"
                            onClick={() => {onOpenChat(item)}} key={item.id}>
                            <span className="text-xl">
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