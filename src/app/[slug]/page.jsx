export default async function DogPage({ params }) {
  const { slug } = params;

  const url = `https://nice-dogs.vercel.app/api/dogs?slug=${slug}`;
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);

  return <h1>{slug}</h1>;
}
