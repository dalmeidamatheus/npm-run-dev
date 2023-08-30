import Title from "../components/Text";
import Image from "next/image";
import cardnoticia from "../components/Card";

export default function Hom() {
  const megatubarao = {
    titulo: "megatubarao2",
    nota: 6,
    poster:""
  }
  const barbie = {
    titulo: "barbie",
    nota: 7,
    poster:""
  }
  return (
    <>
      <nav className="bg-slate-900 p-4 flex items-center justify-between">
        <ul style={{ paddingTop: "1px" }}>
          <li>
            <a href="#">
              <h1 className="custom-heading">Chocante!</h1>
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
      <section className="flex flex-wrap">
        <cardnoticia filme="barbie"/>
        <cardnoticia />
        <cardnoticia />
      </section>

      <Title>Novidades</Title>

      <div
        id="card"
        className="flex flex-col w-40 justify-center items-center m-2"
      >
        <img
          className="rounded"
          src="https://pbs.twimg.com/media/FgbIUchXwAEgG1O?format=jpg&name=360x360"
          alt=""
        />
        <span className="font-bold text-center line-clamp-1">
          Mercado reage após a vitória de Lula. O Dólar cai e o Real se torna a
          moeda que mais se valoriza no mundo.
        </span>
        <div>
          <span>Há 20 minutos</span>
        </div>
        <a href="#" className="bg-yellow-600 py-2 w-full rounded text-center">
          Veja mais
        </a>
      </div>

      <Title>Destaques</Title>

      <div
        id="card"
        className="flex flex-col w-40 justify-center items-center m-2"
      >
        <img
          className="rounded"
          src="https://s2-extra.glbimg.com/ozFRwKd2gtywvgqG6qMpEw4iEsQ=/0x0:1115x989/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f551ea7087a47f39ead75f64041559a/internal_photos/bs/2023/q/s/jN9kRERwyaSLNyuQUXyw/whatsapp-image-2023-08-23-at-14.00.12.jpeg"
          alt=""
        />
        <span className="font-bold text-center line-clamp-1">
          Tatuagem anal de Andressa Urach doeu?{" "}
        </span>
        <div>
          <span>Há 20 minutos</span>
        </div>
        <a href="#" className="bg-yellow-600 py-2 w-full rounded text-center">
          Veja mais
        </a>
      </div>
    </>
  );
}
