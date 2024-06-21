import React, { useEffect, useState } from "react";
import FormLogin from "../components/formLogin";
import FormRegister from "../components/formRegister";
import Api from "../service/api";

const Auth = () => {
    const [form, setForm] = useState<'login' | 'register'>('login')
    const [count, setCount] = useState({users: 0, messages: 0, chats: 0});

    const changeForm = () => setForm(form === 'login' ? 'register' : 'login');

    useEffect(() => {
        Api.get('/dashboard/count')
            .then(res => res.data)
            .then(res => setCount({
                users: res.users as number,
                messages: res.messages as number,
                chats: res.chats as number,
            }))
            .catch(error => console.log(error));
      }, []);

    return (
        <div className='flex flex-1 h-screen p-8'>
            <div className="flex flex-1 flex-row h-full justify-between items-center">
                <div className="flex flex-col rounded-md h-fit p-10 items-center justify-center gap-8 shadow-lg border border-[rgba(0,0,0,0.15)] hover:">
                    <strong className="text-3xl font-bold text-[rgba(0,0,0,0.8)] select-none">Chat App</strong>
                    <p className="w-full text-xl font-semibold text-[rgba(0,0,0,0.6)] hover:underline select-none">
                        <b className="text-[rgba(0,0,0,0.7)]">{count.users}</b> Usuarios cadastrados
                    </p>
                    <p className="w-full text-xl font-semibold text-[rgba(0,0,0,0.6)] hover:underline select-none">
                        <b className="text-[rgba(0,0,0,0.7)]">{count.chats}</b> Chats criados
                    </p>
                    <p className="w-full text-xl font-semibold text-[rgba(0,0,0,0.6)] hover:underline select-none">
                        <b className="text-[rgba(0,0,0,0.7)]">{count.messages}</b> Messagens enviadas
                    </p>
                </div>
                <div className="flex flex-col h-full items-end justify-between py-10 px-4">
                    {
                        form === 'login' ?
                        <FormLogin /> :
                        <FormRegister setForm={setForm} />
                    }
                    <div className="flex w-full items-center justify-center">
                        <span onClick={changeForm} className="hover:opacity-75 text-slate-800 font-bold">
                            {
                                form === 'login' ?
                                'Criar uma conta' :
                                'Fazer login com sua conta'
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;