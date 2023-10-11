import CardNoticia from 'src/components/CardNoticia.jsx'
import Title from 'src/components/Title.jsx'
import NavBar from "src/components/NavBar.jsx";

async function carregarNoticias() {
  const url = "https://newsapi.org/v2/everything?q=choquei&from=2023-10-09&sortBy=popularity&apiKey=6b2922947e9c469cb6f5535998ef6419"
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)

  return json.articles
}
async function carregarDestaques() {
  const url2 = "https://newsapi.org/v2/everything?q=influenciador&from=2023-10-09&sortBy=popularity&apiKey=6b2922947e9c469cb6f5535998ef6419"
  const response2 = await fetch(url2)
  const json2 = await response2.json()
  console.log(json2)

  return json2.articles
}
async function carregarNovidades() {
  const url3 = "https://newsapi.org/v2/everything?q=rave-faixa-de-gaza&from=2023-10-09&sortBy=popularity&apiKey=6b2922947e9c469cb6f5535998ef6419"
  const response3 = await fetch(url3)
  const json3 = await response3.json()
  console.log(json3)

  return json3.articles
}

export default async function Home() {

  const noticias = await carregarNoticias()
  const destaques = await carregarDestaques()
  const novidades = await carregarNovidades()



  return (
    <>
      <NavBar />

      <Title>Em alta</Title>

      <section className='flex flex-wrap'id="emalta">
        {noticias.map(noticia => <CardNoticia noticia={noticia} />)}
      </section>

      <Title>Destaques</Title>
      <section className='flex flex-wrap' id="destaques">
        {destaques.map(destaque => <CardNoticia noticia={destaque} />)}
      </section>
      <Title>Novidades</Title>
      <section className='flex flex-wrap'id="novidades">
        {novidades.map(novidade => <CardNoticia noticia={novidade} />)}
      </section>

    </>
  )
}
