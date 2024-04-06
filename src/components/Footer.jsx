function Footer() {
  return (
    <footer className="container py-14 bg-primary text-text-light w-full">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-14 md:gap-28 border-solid border-b-2 border-bg-secondary pb-14">
        <div className="flex-[1] flex flex-col gap-7">
          <img src="/dinozz-logo.svg" alt="logo" width={125} />
          <p className="block text-sm">
            All content on this website is protected by copyright and may not be
            used without permission from DinozzApp. For more information about
            our Privacy Policy, please contact our Support Center.
          </p>

          <p className="block text-sm mb-7">
            Copyright © 2024 DinozzApp. All Rights Reserved.
          </p>

          <p className="block font-bold">Get Our Updates</p>

          <div className="w-full relative flex flex-col sm:flex-row lg:justify-center gap-1 sm:gap-0 items-stretch bg-secondary">
            <input
              type="text"
              placeholder=""
              className="lg:flex-[1] p-2 border-[none]"
            />
            <button
              type="submit"
              className="px-5 py-2 sm:py-0 font-bold cursor-pointer bg-primary-600"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex-[1] flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-12">
          <div className="flex-[1] h-full flex flex-col justify-between mb-6">
            <div className="flex flex-col">
              <div className="font-bold mb-3.5">Company</div>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                About Us
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Testimonials
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                FAQs
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Terms & Condition
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Latest Update
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm mt-3">
                <div className="bg-[url(../assets/img/location-dot-solid.svg)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>123 Main Street, Anytown, USA</div>
              </div>

              <div className="flex items-center gap-2 text-sm mt-3">
                <div className="bg-[url(../assets/img/phone-solid.svg)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>+1 (555) 123-4567</div>
              </div>

              <div className="flex items-center gap-2 text-sm mt-3">
                <div className="bg-[url(../assets/img/envelope-solid.svg)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>dinozzapp@example.com</div>
              </div>
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
              <a
                href="https://github.com/chingu-voyages/v48-tier2-team-13"
                target="_blank"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Github Repository
              </a>
            </div>

            <div>
              <div className="font-bold mb-3.5">Contact</div>
              <div className="flex items-center gap-6">
                <div className="bg-[url(../assets/img/instagram.svg)] w-7 h-7 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
                <div className="bg-[url(../assets/img/square-facebook.svg)] w-7 h-7 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
                <div className="bg-[url(../assets/img/twitter.svg)] w-7 h-7 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-start items-center text-xs mx-0 my-4 gap-3">
        <a href="#" className="block cursor-pointer hover:text-primary-600">
          Privacy Policy
        </a>
        <div>|</div>
        <a href="#" className="block cursor-pointer hover:text-primary-600">
          Terms & Conditions
        </a>
        <div>|</div>
        <a href="#" className="block cursor-pointer hover:text-primary-600">
          Sitemap
        </a>
      </div>
    </footer>
  );
}

export default Footer;
