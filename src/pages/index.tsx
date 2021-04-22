export default function Home(props) {
  return <h1>Index</h1>;
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3333/episodes");
  const data = await response.json();
  const OITO_HORAS = 60 * 60 * 8;

  return {
    props: {
      episodes: data,
    },
    revalidate: OITO_HORAS,
  };
}
