function Footer() {
  return (
    <footer className="container py-14 bg-primary text-text-light w-full">
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-14 md:gap-28 border-solid border-b-2 border-bg-secondary pb-14">
        <div className="flex-[1] flex flex-col gap-7">
          <img src="src/assets/img/DINOZZ-LOGO.png" alt="logo" width={125} />
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
              <div className="flex items-center gap-1 text-sm mt-3">
                <div className="bg-[url(../assets/img/location_temp.png)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>123 Main Street Chicago, IL</div>
              </div>

              <div className="flex items-center gap-1 text-sm mt-3">
                <div className="bg-[url(../assets/img/phone_temp.png)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>+3818714081</div>
              </div>

              <div className="flex items-center gap-1 text-sm mt-3">
                <div className="bg-[url(../assets/img/envelope_temp.png)] bg-center bg-no-repeat bg-contain w-4 h-4"></div>
                <div>dinozzapp@email.com</div>
              </div>
            </div>
          </div>

          <div className="flex-[1] h-full flex flex-col justify-between gap-6 lg:gap-0">
            <div className="flex flex-col">
              <a className="font-bold mb-3.5">Support</a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Order Tracking
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Payment Guide
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Help Centre
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm mb-3 cursor-pointer hover:text-primary-600"
              >
                Return Policy
              </a>
            </div>

            <div>
              <div className="font-bold mb-3.5">Contact</div>
              <div className="flex items-center gap-6">
                <div className="bg-[url(../assets/img/FB_temp.png)] w-6 h-6 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
                <div className="bg-[url(../assets/img/IG_temp.png)] w-5 h-5 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
                <div className="bg-[url(../assets/img/TW_temp.png)] w-8 h-8 bg-center bg-no-repeat bg-contain [transition:transform_100ms_ease] cursor-pointer hover:scale-110"></div>
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
