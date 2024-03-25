function Footer() {
  return (
    <footer className="w-full h-auto px-20 py-14 bg-primary text-text-light">
      <div className="flex justify-center items-stretch gap-28 border-b-[2px_solid_bg-secondary] pb-14">
        <div className="flex-[1] flex flex-col gap-7">
          <div className="w-28 h-7 bg-[url(../assets/img/LOGO_temp.png)] bg-center bg-no-repeat bg-contain"></div>
          <p className="text-sm">
          All content on this website is protected by copyright and may not be used without 
          permission from DinozzApp. For more information about our Privacy Policy, please 
          contact our Support Center.
          </p>

          <div className="text-sm">
            Copyright © 2024 DinozzApp. All Rights Reserved.
          </div>

          <h3 className="updates-header">Get Our Updates</h3>

          <div className="w-full relative flex justify-center items-stretch">
            <input
              type="text"
              placeholder=""
              className="flex-[1] p-2 appearance-none border-[none]"
            />
            <button type="submit" className="appearance-none border-[none] outline-[none] px-5 py-0 font-bold cursor-pointer">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div className="flex-[1] flex justify-center items-stretch gap-12">
          <div className="flex-[1] h-full flex flex-col justify-between">
            <div className="links-container">
              <div className="font-bold mb-3.5">Company</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">About Us</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Testimonials</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">FAQs</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Terms & Condition</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Latest Update</div>
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

          <div className="flex-[1] h-full flex flex-col justify-between">
            <div>
              <div className="font-bold mb-3.5">Support</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Order Tracking</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Payment Guide</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Help Centre</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Privacy Policy</div>
              <div className="text-sm mb-3 cursor-pointer hover:text-primary-400">Return Policy</div>
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
      <div className="flex items-center text-xs mx-0 my-4 gap-3">
        <div className="hover:cursor-pointer">Privacy Policy</div>
        <div>|</div>
        <div className="hover:cursor-pointer">Terms & Conditions</div>
        <div>|</div>
        <div className="hover:cursor-pointer">Sitemap</div>
      </div>
    </footer>
  );
}

export default Footer;