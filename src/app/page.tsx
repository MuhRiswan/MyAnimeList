import AnimeList from "@/components/anime-list";
import Image from "next/image";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const datas = await response.json();
  return (
    <div className="container mx-auto mt-20 relative">
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-blue-500">Popular Anime</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {datas.data.map((data: any) => {
            return (
              <AnimeList
                id={data.mal_id}
                key={data.mal_id}
                title={data.title}
                image={data.images.webp.image_url}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;
