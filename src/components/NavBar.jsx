"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const { push } = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    }

    return (
        <nav className="bg-slate-900 p-3 flex items-center justify-between">
            <ul style={{ paddingTop: "1px" }}>
                <li>
                    <a href="#">
                        <h1 className="custom-heading" style={{ fontSize: "25px", fontWeight: "bold", color: "yellow" }}>Chocante!</h1>
                    </a>
                </li>
            </ul>
            <ul className="flex space-x-8" style={{ color: "white" }}>
                <li>
                    <a href="#novidades">Novidades</a>
                </li>
                <li>
                    <a href="#emalta">Em alta</a>
                </li>
                <li>
                    <a href="#destaques">Destaques</a>
                </li>
                <button onClick={logout}>logout</button>
            </ul>
        </nav>)}