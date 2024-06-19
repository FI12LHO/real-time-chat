import React, { useState } from "react";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        return;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <div>
                <strong className="text-2xl text-[rgba(0,0,0,0.8)]">Login</strong>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="email">Email:</label>
                <input value={email} onChange={e => setEmail(e.target.value.toLowerCase())}
                    type="email" id="email" className="
                    text-md text-[rgba(0,0,0,0.8)] rounded-sm
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="password">Senha:</label>
                <input  value={password} onChange={e => setPassword(e.target.value)}
                    type="password" id="password" className="
                    text-md text-[rgba(0,0,0,0.8)] rounded-sm
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="w-full">
                <button className="
                    text-[rgba(0,0,0,0.9)] font-bold text-sm
                    w-full h-10 bg-white hover:opacity-70 shadow-md border border-[rgba(0,0,0,0.5)] rounded-md
                " onClick={handleSubmit}>
                    Entrar
                </button>
            </div>
        </div>
    )
};

export default FormLogin;