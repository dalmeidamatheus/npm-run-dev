import CardFilme from 'src/components/CardFilme.jsx'
import Title from 'src/components/Title.jsx'

export default function Home() {
  const filmes = [
    {
      titulo: "Bella Campos negou os rumores de reconciliação com MC Cabelinho.",
      nota: "12 minutos",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    },
    {
      titulo: "Jogador Richarlison passa horas atendendo fãs",
      nota: "15 minutos",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    },
    {
      titulo: "Bella Campos negou os rumores de reconciliação com MC Cabelinho.",
      nota: "20 minutos",
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    }
  ]

  return ( //JSX
    <>
      <nav className="bg-slate-900 p-3 flex items-center justify-between">
        <ul style={{ paddingTop: "1px" }}>
          <li>
            <a href="#">
            <h1 className="custom-heading" style={{ fontSize: "25px", fontWeight: "bold", color:"yellow" }}>Chocante!</h1>
            </a>
          </li>
        </ul>
        <ul className="flex space-x-8" style={{ color: "white" }}>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Em alta</a>
          </li>
          <li>
            <a href="#">Destaques</a>
          </li>
        </ul>
      </nav>

     <Title>Em alta</Title>

      <section className='flex flex-wrap'>
        {filmes.map(filme => <CardFilme filme={filme} /> )}
      </section>

     <Title>Destaques</Title>
     <Title>Novidades</Title>
   
    </>
   
  )
}
