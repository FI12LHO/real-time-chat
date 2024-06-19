import React from "react";

type MessageType = {
    id?: string,
    message: string,
    date?: string,
    chat_id?: string,
    user_id: string,
    created_at?: string,
    updated_at?: string,
};

interface Props {
    data: Array<MessageType>,
    user_id: string,
}

const MessageBoard = ({data, user_id}: Props) => {
    return (
        <div className='flex flex-col justify-between w-[70vw] h-screen absolute right-0 py-[5vh] px-4'>
            <div className='
                flex max-h-16 flex-1 flex-row justify-between items-center px-5
                border-[1px] border-[#00000040] rounded-md shadow-sm shadow-[#00000040]
            '>
                <span className='text-lg font-bold capitalize'>{'Chat Test'}</span>
                <span>:</span>
            </div>
            <div className='flex flex-1 flex-col gap-2 py-2'>
                {
                    data.map((item: MessageType) => {
                        const orientation = user_id === item.user_id ? 'justify-end' : 'justify-start';
                        const color = user_id === item.user_id ? 'bg-green-400' : 'bg-slate-400';

                        return (
                            <div className={`flex w-full bg-transparent ${orientation}`} key={item.id}>
                                <div className={`px-4 py-2 border-[0.5px] border-[#00000040] rounded-md ` + color}>
                                    <span className="text-sm font-semibold">{item.user_id}</span>
                                    <p className="mt-2">{item.message}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='
                flex max-h-16 flex-1 flex-row justify-between items-center px-2 py-2 gap-2
                border-[1px] border-[#00000040] rounded-md shadow-sm shadow-[#00000040]
            '>
                <input
                    className='w-full h-full shadow-inner border-b-2 border-[#00000060] focus:outline-none'
                    value={''} onChange={e => console.log(e.target.value)} />
                
                <button
                    className='
                        flex w-10 h-10 rounded-full items-center justify-center border-[1px] border-[#00000040]
                        shadow-sm shadow-[#00000040]
                    '
                    onClick={() => {}}>
                    ^
                </button>
            </div>
        </div>
    );
};

export default MessageBoard;