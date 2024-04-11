import Navbar from "../components/Navbar";
import { useEffect } from "react";
import TeamMember from "../components/TeamMember";
import Footer from "../components/Footer";

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
        <section className="container text-text-light">
          <h2 className="font-bold text-[25px] pt-[35px]">Team Members</h2>
          <div className="flex flex-col gap-[45px] pt-[25px] pb-[70px]">
            <TeamMember
              image={"/andra.jpeg"}
              role="FRONTEND DEVELOPER"
              fullname="Andra Mertilos"
              email="mertilosandra@gmail.com"
              linkedin="https://www.linkedin.com/in/andra-mertilos-49008055/"
              github="https://github.com/andram11"
              text="Hi, I am Andra👋, daytime business analyst for software engineering projects and web dev enthusiast. 
            I got into web development during a rough period of my life because it was the only activity that kept my brain so busy, I couldn't think about anything else.
            At the end of the day, I was so tired, my brain chatter was minimal. I like it because the process of solving software engineering problems allows me
            to use my skills as a business analyst and, because of how quickly technology changes, it immediately reveals areas I need to improve or work on. 
            The feedback loop is almost immediate.
            Fun fact about me that not many may expect, is that I teach pole dance at a local dance studio.
            If I wouldn't be doing this, then I would probably be in a lab somewhere doing research and reading books."
            />
            <TeamMember
              image={"/stefan.jpeg"}
              role="FRONTEND DEVELOPER"
              fullname="Stefan Brkic"
              email="stefanbrkic.inbox@gmail.com"
              linkedin="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
              github="https://github.com/stefanbrkic1"
              text="Hi, I'm Stefan👋, a Frontend Developer based in Belgrade, Serbia. With a solid foundation in both Graphic Design and UI/UX, I bring a unique blend of creativity and technical expertise to every project I undertake. I love solving problems. It's how I approach life – a series of challenges to overcome. My journey into coding began while working on a software project as a designer. I realized that I could devise effective solutions for coding problems, even though I didn't yet know how to write the code myself. This passion for problem-solving seamlessly translated into my coding approach. When I'm not coding, you can find me on a football field or in a gym, lifting weights and kick-boxing."
              imagePosition="RIGHT"
            />
            <TeamMember
              image={"/andrei.jpeg"}
              role="FRONTEND DEVELOPER"
              fullname="Andrei Olteanu"
              email="andreiolteanu2014@gmail.com"
              linkedin="https://www.linkedin.com/in/andrei-olteanu-9009/"
              github="https://github.com/andreiolteanu555"
              text="Hi, I am Andrei👋 and the first things that come to mind when I think about myself are: curiosity, strategic thinking and adventure. I have a passion for both web development and digital marketing and this started when I realized that it was important for me to understand 'the big picture' in every project. I enjoy analyzing ideas and data, conducting research and finding ways to solve problems.
              One lesser-known fact about me is that I used to act in comedy plays and improvisation theatre. This taught me about how to approach challenges and how to deal with the unexpected things that come in life. After that, I became a bit of a globetrotter, as I am fascinated by foreign cultures and learning about them. I love traveling and try to explore the world as much as I can."
            />
            <TeamMember
              image={"/chukuli.jpeg"}
              role="PRODUCT OWNER"
              fullname="Osayande Osarumen"
              email="osarumenlande@gmail.com"
              linkedin="https://www.linkedin.com/in/osarumen-osayande-019a3823b"
              github="https://github.com/Chukuli12"
              text="As a Product Manager, I'm captivated by the dynamic role's fusion of technology, problem-solving, and creativity. Understanding user needs, shaping product strategies, and collaborating with diverse teams to innovate is both challenging and fulfilling. Witnessing direct user impact and product success drives my passion. Additionally, beyond my professional persona, I possess a hidden talent for guitar playing, cultivated since adolescence, providing solace amidst life's chaos. Music serves as a cherished outlet for joy and relaxation. If not in Product Management, I envision exploring entrepreneurship. The prospect of creating ventures from scratch, embracing risks, and fostering growth entices me. Whether launching a tech startup or venturing into new industries, I'd channel my problem-solving acumen and innovation fervor to craft impactful ventures."
              imagePosition="RIGHT"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
