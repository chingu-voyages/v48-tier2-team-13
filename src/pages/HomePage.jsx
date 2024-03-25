//Components
import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

const HOME_PAGE = "HOME_PAGE";

function HomePage() {
  return (
    <>
      <div className="h-auto pb-[70px] xl:pb-0 xl:h-screen bg-bg-primary relative pt-[14%] 2xl:pt-[230px]">
        <Navbar activePage={HOME_PAGE} />
        <section className="container text-text-light">
          <div className="flex md:flex-col xl:flex-row">
            <div className="md:mb-[70px] flex-1 mt-5 sm:mt-0 flex flex-col justify-center items-center xl:justify-start xl:items-start">
              <h1 className="max-w-[750px] text-center font-black text-[49px] sm:text-[65px]  leading-[75px] mb-3 xl:text-start">
                Explore the most ancient creatures
              </h1>
              <p className="text-[15px] sm:text-[17px] mb-[35px] sm:mb-[45px] text-center xl:text-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                quas sint vel error, incidunt numquam ratione ducimus
                repudiandae, nostrum cupiditate quaerat corporis!
              </p>
              <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-5">
                <Link
                  to={"/search"}
                  className="w-full sm:w-auto flex justify-center items-center leading-[0px] gap-3 p-3 bg-primary-600 hover:bg-primary-700 font-bold rounded-2xl shadow-md text-md"
                >
                  <div className="w-[30px] h-[30px] bg-primary-50 rounded-md shadow-md p-[5px] relative">
                    <div className="w-full h-full bg-[url('../assets/img/magnifying-glass-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
                  </div>
                  <span>Browse Creatures</span>
                </Link>

                <button
                  type="button"
                  className="w-full sm:w-auto flex justify-center items-center leading-[0px] gap-3 p-3 bg-secondary-500 hover:bg-secondary-400 font-bold rounded-2xl shadow-md text-md"
                >
                  <div className="w-[30px] h-[30px] bg-secondary-50 rounded-md shadow-md p-[5px] relative">
                    <div className="w-full h-full bg-[url('../assets/img/chart-simple-solid.svg')] bg-contain bg-center bg-no-repeat"></div>
                  </div>
                  <span className="text-text-dark">Explore Charts</span>
                </button>
              </div>
            </div>
            <div className="flex-1 hidden md:flex md:justify-center relative">
              <div className="md:translate-y-[-20px] md:w-[740px] md:h-[450px] 2xl:translate-y-[-55px] 2xl:w-[830px] 2xl:h-[550px] md:bg-[url('../assets/img/dinosaur-body.png')] md:bg-contain md:bg-no-repeat"></div>
            </div>
          </div>
        </section>
      </div>
      <div className="h-screen bg-bg-secondary"></div>
    </>
  );
}

export default HomePage;
