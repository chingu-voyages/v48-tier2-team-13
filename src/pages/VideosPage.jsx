import Navbar from "../components/Navbar";

const VIDEOS_PAGE = "VIDEOS_PAGE";

function VideosPage() {
  return (
    <>
      <Navbar activePage={VIDEOS_PAGE} />
      <section className="pt-[100px] w-screen text-center">
        <h1 className="text-xl font-bold text-text-light">VIDEOS PAGE</h1>
        <h2 className="text-text-light">
          Here is a list of best dinosaur videos that we prepared for you:
        </h2>
      </section>
    </>
  );
}

export default VideosPage;
