import CardNoticia from 'src/components/CardNoticia.jsx'
import Title from 'src/components/Title.jsx'


async function carregarNoticias() {
  const url = "https://newsapi.org/v2/everything?q=choquei&from=2023-09-07&sortBy=popularity&apiKey=6b2922947e9c469cb6f5535998ef6419"
  const resposta = await fetch(url)
  const json = await resposta.json()

  console.log(json)

  return json.articles
}

export default async function Home() {
  const noticias = await carregarNoticias()

  return ( //JSX
    <>
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
            {noticias.map(noticia => <CardNoticia noticia={noticia} />)}
          </section>

      <Title>Destaques</Title>
      <Title>Novidades</Title>

    </>

  )
}
