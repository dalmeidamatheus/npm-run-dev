import CardNoticia from 'src/components/CardNoticia.jsx'
import Title from 'src/components/Title.jsx'
import NavBar from "src/components/navbar.jsx";


async function carregarNoticias() {
  const url = "https://newsapi.org/v2/everything?q=choquei&from=2023-09-24&sortBy=popularity&apiKey=6b2922947e9c469cb6f5535998ef6419"
  const resposta = await fetch(url)
  const json = await resposta.json()

  console.log(json)

  return json.articles
}

export default async function Home() {
  const noticias = await carregarNoticias()

  return ( //JSX
    <>
      <NavBar />

      <Title>Em alta</Title>

          <section className='flex flex-wrap'>
            {noticias.map(noticia => <CardNoticia noticia={noticia} />)}
          </section>

      <Title>Destaques</Title>
      <Title>Novidades</Title>

    </>

  )
}
