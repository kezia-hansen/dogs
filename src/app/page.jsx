export const dynamic = "force-static"; // SSR

export const metadata = {
  title: "Frontpage",
  description: "Description",
};

export default async function Home() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const res = await fetch(url);
  const data = await res.json();

  console.log(data);
  return (
    <main>
      <h1>And so it begins...</h1>
      <img src={data.message} alt="random dog" />
    </main>
  );
}
