import Page from "../components/page";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <header></header>
      <main>
        <Image
          src="/images/mountains.jpg"
          alt="mountains"
          layout="responsive"
          width={1920}
          height={1080}
        />
        <Page />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
