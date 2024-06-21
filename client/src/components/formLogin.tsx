import React, { FormEvent, useState } from "react";
import Api from "../service/api";
import { UserDataType } from "../App";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await Api.post('/auth/login', {
            email,
            password
        })
        .then(res => res.data)
        .catch(error => console.error(error));

        if (response.status !== 'success') {
            alert('Erro ao realizar login, usuario não encontrado');
            setEmail('');
            setPassword('');
            return;
        }

        const user = await Api.post('/auth/me', undefined, {headers: {'Authorization': `Bearer ${response.authorisation.token}`}})
        .then(res => res.data as UserDataType)
        .catch(error => console.log(error));

        if (!user) {
            alert('Ocorreu um erro interno, tente novamente mais tarde');
            setEmail('');
            setPassword('');
            return;
        }

        setEmail('');
        setPassword('');

        await localStorage.setItem('name', user.name);
        await localStorage.setItem('email', user.email);
        await localStorage.setItem('id', user.id);
        await localStorage.setItem('token', response.authorisation.token);

        window.location.reload();

        return;
    };

    return (
        <div className="flex flex-col items-center justify-center gap-8">
            <form onSubmit={handleSubmit} className="hidden" id="form"></form>
            <div>
                <strong className="text-2xl text-[rgba(0,0,0,0.8)]">Login</strong>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="email">Email:</label>
                <input form="form" value={email} onChange={e => setEmail(e.target.value.toLowerCase())} required
                    type="email" id="email" className="
                    text-md text-[rgba(0,0,0,0.8)] rounded-sm
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-md font-bold capitalize text-[rgba(0,0,0,0.8)]"
                    htmlFor="password">Senha:</label>
                <input form="form"  value={password} onChange={e => setPassword(e.target.value)} required
                    type="password" id="password" className="
                    text-md text-[rgba(0,0,0,0.8)] rounded-sm
                    w-[25vw] h-10 shadow-md border border-b-2 border-[rgba(0,0,0,0.2)] pl-3 focus:outline-none focus:border-b-[#00000030]
                " />
            </div>
            <div className="w-full">
                <button className="
                    text-[rgba(0,0,0,0.9)] font-bold text-sm
                    w-full h-10 bg-white hover:opacity-70 shadow-md border border-[rgba(0,0,0,0.5)] rounded-md
                " form="form" type="submit">
                    Entrar
                </button>
            </div>
        </div>
    )
};

export default FormLogin;