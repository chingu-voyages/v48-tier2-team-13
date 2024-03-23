//Components
import Navbar from "../components/Navbar";

const HOME_PAGE = "HOME_PAGE";

function HomePage() {
  return (
    <>
      <div className="h-screen bg-bg-primary">
        <Navbar activePage={HOME_PAGE} />
      </div>
      <div className="h-screen bg-bg-secondary"></div>
    </>
  );
}

export default HomePage;
