import Title from '../components/Text'
import Image from 'next/image'

export default function Hom() {
  return (
    <>
      <nav className="bg-slate-900 p-4 flex items-center justify-between">
    <ul style={{ paddingTop: '1px' }}>
        <li><a href="#"><h1 className="custom-heading">Chocante!</h1></a></li>
    </ul>
    <ul className="flex space-x-8" style={{ color: 'white' }}>
        <li><a href="#">Novidades</a></li>
        <li><a href="#">Em alta</a></li>
        <li><a href="#">Destaques</a></li>
    </ul>
</nav>




      <Title>Em alta</Title>

      <div id="card" className='flex flex-col w-40 justify-center items-center m-2'>
        <img className='rounded' src="https://place-hold.it/150x220/666" alt="" />
        <span className='font-bold text-center line-clamp-1'>titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="#" className='bg-pink-600 py-2 w-full rounded text-center'>
          detalhes
        </a>
      </div>

      <Title>lançamentos</Title>
      <Title>favoritos</Title>

    </>

  )
}