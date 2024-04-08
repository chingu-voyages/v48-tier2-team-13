import Navbar from "../components/Navbar";
import { useEffect } from "react";

const ABOUT_PAGE = "ABOUT_PAGE";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar activePage={ABOUT_PAGE} />
      <section className="container flex flex-col lg:flex-row items-stretch pt-[80px] sm:pt-[110px] pb-[75px]">
        <div className="flex-1 hidden relative lg:flex items-center justify-center lg:justify-start">
          <div className="bg-[url('../assets/img/about-logo.png')] bg-center bg-no-repeat bg-contain w-[80%] h-[140px] sm:w-[70%] sm:h-[150px] lg:w-[90%] lg:h-[175px]"></div>
        </div>
        <div className="flex-1 text-text-light flex flex-col">
          <h1 className="font-bold text-[25px] mb-1">About Us</h1>
          <p className="max-w-[800px]">
            We are a team created by Chingu Voyage that participated in a
            project focused on collaborative web development. Drawing upon our
            diverse skill sets and backgrounds, each teammate brought their
            unique expertise to the table, enriching the project&apos;s scope
            and creativity. We tackled challenges in creating a dynamic and
            responsive web application, leveraging our diverse skills and
            backgrounds. Through effective communication and teamwork, we
            navigated through complex coding tasks, ensuring smooth
            functionality and an engaging user experience. Our project
            exemplified the spirit of Chingu Voyage, fostering collaboration and
            skill development within a supportive community of learners.
          </p>
        </div>
      </section>
      <div className="bg-bg-secondary">
        <section className="container h-[600px] text-text-light">
          <h2 className="font-bold text-[25px] pt-[35px]">Team Members</h2>
        </section>
      </div>
    </>
  );
}

export default AboutPage;
