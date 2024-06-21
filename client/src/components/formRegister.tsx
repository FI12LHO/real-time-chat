import React, { FormEvent, useState } from "react";
import Api from "../service/api";

const FormRegister = ({setForm}: {setForm: (value: 'login' | 'register') => void}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (password !== confirmPass) {
            alert('As senhas não condizem');
            setPassword('');
            setConfirmPass('');
            return;
        }

        // Cadastrando usuario
        const response = await Api.post('/auth/register', {
            name,
            email,
            password
        })
        .then(res => res.data)
        .catch(error => console.error(error));

        if (response.status !== 'success') {
            console.log(response);
            alert('Ocorreu um erro interno e não foi possivel criar seu cadastro');
            return;
        }

        alert('Usuario cadastrado com sucesso');

        // Limpando formulario
        setEmail('');
        setPassword('');
        setConfirmPass('');
        setName('');

        // Alterando formulario
        setForm('login');

        return;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <form onSubmit={handleSubmit} className="hidden" id="form"></form>
            <div>
                <strong className="text-2xl text-[rgba(0,0,0,0.8)]">Cadastrar</strong>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="name">Nome:</label>
                <input form="form" value={name} onChange={e => setName(e.target.value)} required
                    type="text" id="name" className="
                    text-md text-[rgba(0,0,0,0.8)]
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="email">Email:</label>
                <input form="form" value={email} onChange={e => setEmail(e.target.value.toLowerCase())} required
                    type="email" id="email" className="
                    text-md text-[rgba(0,0,0,0.8)]
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="password">Senha:</label>
                <input form="form"  value={password} onChange={e => setPassword(e.target.value)} required
                    type="password" id="password" className="
                    text-md text-[rgba(0,0,0,0.8)]
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="confirm">Confimar senha:</label>
                <input form="form"  value={confirmPass} onChange={e => setConfirmPass(e.target.value)} required
                    type="password" id="confirm" className="
                    text-md text-[rgba(0,0,0,0.8)]
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="w-full">
            <button className="
                    text-[rgba(0,0,0,0.9)] font-bold text-sm
                    w-full h-10 bg-white hover:opacity-70 shadow-md border border-[rgba(0,0,0,0.5)] rounded-md
                " form="form" type="submit">
                    Cadastrar
                </button>
            </div>
        </div>
    )
};

export default FormRegister;