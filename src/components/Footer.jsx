

function Footer() {
  return (
    <footer className="container py-14 bg-primary text-text-light w-full">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-14 md:gap-28 border-solid border-b-2 border-bg-secondary pb-14">
        <div className="flex-[1] flex flex-col gap-7">
          <img src="/dinozz-logo.svg" alt="logo" width={125} />
          <p className="block text-sm">
            All content on this website is protected by copyright and may not be
            used without permission from DinozzApp. 
          </p>

          <p className="block text-sm mb-7">
            Copyright © 2024 DinozzApp. All Rights Reserved.
          </p>

        
        </div>
        <div className="flex-[1] flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-12">
          <div className="flex-[1] h-full flex flex-col justify-between mb-6">
            <div className="flex flex-col">
              <div className="font-bold mb-3.5">Company</div>
              <a
                href="/about"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                About Us
              </a>
            
              <a
                href="https://www.chingu.io/"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                About Chingu
              </a>

              <a
                href="https://github.com/chingu-voyages/v48-tier2-team-13"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Project Github Repository
              </a>
            </div>

          </div>

          <div className="flex-[1] h-full flex flex-col justify-between gap-6 lg:gap-0">
            <div className="flex flex-col">
              <a className="font-bold mb-3.5">Our Team</a>
              <a
                href="https://www.linkedin.com/in/andra-mertilos-49008055/"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Andra Mertilos
              </a>
              <a
                href="https://www.linkedin.com/in/stefan-brkic-4014012a3/"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Stefan Brkic
              </a>
              <a
                href="https://www.linkedin.com/in/andrei-olteanu-9009/"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Andrei Olteanu
              </a>
              <a
                href="https://www.linkedin.com/in/osarumen-osayande-019a3823b"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Osayande Osarumen
              </a>
             
            </div>

            <div>
  
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center text-xs mx-0 my-4 gap-3">
       
      </div>
    </footer>
  );
}

export default Footer;
