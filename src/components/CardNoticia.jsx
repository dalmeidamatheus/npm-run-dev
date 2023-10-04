"use client"

import { StarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

function calcularDiferencaDeDias(dataString) {
    const dataNoticia = new Date(dataString)
    const dataAtual = new Date()
    const diferencaEmMilissegundos = dataAtual - dataNoticia
    const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24))
    return diferencaEmDias
}

export default function CardNoticia({ noticia }) {
    const [favorito, setFavorito] = useState(true)
    const url_imagem = `${noticia.urlToImage}`
    const url_noticia = `${noticia.url}`
    const diferencaDias = calcularDiferencaDeDias(noticia.publishedAt)

    function favoritar() {
        setFavorito(true)
    }


    return (
        <div id="card" className='flex flex-col w-60 justify-center items-center m-2' style={{ height: '300px' }}>
            <img className='rounded object-cover h-full' src={url_imagem} alt="" />
            <div className="flex flex-col justify-center items-center mt-2" style={{ textAlign: 'center' }}>
                <span className='font-bold text-center line-clamp-1'>
                    {noticia.title}
                </span>
                <div>
                    <span>Há {diferencaDias} dia(s)</span>
                </div>
            </div>
            <a href={url_noticia} className='bg-yellow-600 py-2 w-full rounded text-center'>
                detalhes
            </a>
            {favorito ?
                <StarIcon onClick={() => setFavorito(false)} className="h-10 w-10 text-slate-100 cursor-pointer " />
                :
                <StarIcon onClick={favoritar} className="h-10 w-10 text-yellow-300 cursor-pointer" />
            }
        </div>
    )
}