import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function Navbar({ activePage }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-bg-primary fixed top-0 w-screen z-50">
      <nav className="container">
        <div className="py-3 sm:py-5 flex justify-between text-text-light">
          <div className="flex items-center">
            <Link to={"/"} className="text-[25px] font-bold">
              <img src="/dinozz-logo.svg" alt="logo" width={104} />
            </Link>
          </div>
          <div>
            <button
              type="button"
              className="absolute top-[6px] right-[12px] z-50 md:hidden"
              onClick={() => setIsNavbarOpen((val) => !val)}
            >
              {isNavbarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            <div
              className={`transition-transform  bg-neutral-950 flex flex-col justify-center py-[30px] items-center gap-[10px] font-[600] absolute top-[-500px] ${
                isNavbarOpen ? "translate-y-[500px]" : "translate-y-[-500px]"
              } left-0 w-screen md:translate-y-[0px] md:bg-bg-primary md:static md:flex-row md:justify-end md:w-auto md:gap-[50px] md:p-0`}
            >
              <Link
                to={"/"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "HOME_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                Home
              </Link>
              <Link
                to={"/search"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "SEARCH_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                Dinosaurs
              </Link>
              <Link
                to={"/favorites"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "FAVORITES_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                Favorites
              </Link>
              <Link
                to={"/about"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "ABOUT_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                About Us
              </Link>
              <Link
                to={"/dynamicMapPage"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "DYNAMIC_MAP_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                Dynamic Map
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  activePage: PropTypes.string.isRequired,
};

export default Navbar;
