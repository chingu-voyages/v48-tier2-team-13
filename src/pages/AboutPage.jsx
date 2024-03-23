import Navbar from "../components/Navbar";

const ABOUT_PAGE = "ABOUT_PAGE";

function AboutPage() {
  return (
    <>
      <Navbar activePage={ABOUT_PAGE} />
      <section className="pt-[100px] w-screen text-center">
        <h1 className="text-xl font-bold text-text-light">ABOUT PAGE</h1>
        <h2 className="text-text-light">
          Here is a page where we tell more about this project or about
          ourselves:
        </h2>
      </section>
    </>
  );
}

export default AboutPage;
