import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

function Navbar({ activePage }) {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="bg-bg-primary fixed w-screen z-50">
      <nav className="container">
        <div className="py-5 flex justify-between text-text-light">
          <div>
            <div className="text-[25px] font-bold">LOGO</div>
          </div>
          <div>
            <button
              type="button"
              className="absolute right-[30px] z-50 md:hidden"
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
              className={`transition-all flex flex-col justify-center p-5 items-center gap-[10px] font-[600] absolute ${
                isNavbarOpen ? "top-[0px]" : "top-[-500px]"
              } left-0 w-screen bg-bg-primary md:static md:flex-row md:justify-end md:w-auto md:gap-[60px] md:p-0`}
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
                to={"/videos"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "VIDEOS_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                Videos
              </Link>
              <Link
                to={"/about"}
                className={`px-4 py-1 border-b-[3px] transition-all ${
                  activePage === "ABOUT_PAGE"
                    ? "border-primary-500"
                    : "border-transparent"
                }`}
              >
                About
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
