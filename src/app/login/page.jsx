"use client"

import Image from "next/image";
import loginimage from "src/images/fofoca.jpg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "src/actions/auth.js";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email === "rm87560@fiap.com.br" && senha === "fiap"){
            serverLogin()
            push("/")
        }else{
            toast.error("Credenciais inválidas", {
                style: {
                    backgroundColor: '#333',
                    color: '#fff'
                }
            })
        }
    }

    return(
        <div className="flex">
            <aside className="hidden lg:flex h-screen">
                <Image src={loginimage} className="h-auto w-auto object-cover" />   
            </aside>
            <main className="flex flex-col justify-center items-center p-4 h-screen w-full">
                <h2>Chocante!</h2>
                <form onSubmit={login} className="flex flex-col gap-2">

                    <label htmlFor="email">E-mail</label>

                    <input  type="email" 
                            id = 'email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-slate-600 p-1 rounded"
                    />

                    <label htmlFor="senha">Senha</label>
                    <input  type="password" 
                            id = 'senha'
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="bg-slate-600 p-1 rounded"/>
                    
                    <button className='bg-yellow-600 py-2 w-full rounded text-center'>Entrar</button>
                </form>
            </main>
        </div>
    )
}