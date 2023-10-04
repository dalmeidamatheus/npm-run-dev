"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){
    cookies().set("user_email", "rm87560@fiap.com.br", {
        maxAge: 60 * 60 * 24 * 7 
    })
}

export async function serverLogout(){
    cookies().delete("user_email")
}