export default function Footer() {
  return (
    <>
      <footer className="bg-[#54595f] text-white py-5 pb-0">
        <div className=" mx-auto  pt-4">
          <div className="text-center mb-6 ">
            <h2 className="text-3xl font-bold mb-2 p-2">
              Skill Development Portal Launching Soon..
            </h2>
            <hr className="w-1/2 mx-auto border-t-2 border-gray-300 p-2"  />
            <p className="text-lg p-3">Ikon Mytri Services Private Limited</p>
            <p className="text-lg px-14 py-3">
              IkonMytri Services is a Bengaluru-based firm specializing in
              several functional areas such as Education Technology, Software
              Engineering, HR and Recruitment services, and more.
            </p>
          </div>

          <div className="flex justify-center mb-6 text-lg">
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              Facebook-f
            </a>
            <a href="#" className="mx-2 text-gray-400 hover:text-white">
              Linkedin-in
            </a>
          </div>

          <div className="flex flex-wrap justify-around m-6">
            <div className="mx-4 p-3">
              <h3 className="text-lg font-semibold ">Company</h3>
              <ul className="p-3  ">
                <li className="hover:underline cursor-pointer p-1">About Us</li>
                <li className="hover:underline cursor-pointer p-1">Contact Us</li>
                <li className="hover:underline cursor-pointer p-1">Blog</li>
                <li className="hover:underline cursor-pointer p-1">Sitemap</li>
                <li className="hover:underline cursor-pointer p-1">
                  Privacy Policy
                </li>
                <li className="hover:underline cursor-pointer p-1">
                  Terms and Conditions
                </li>
                <li className="hover:underline cursor-pointer p-1">
                  Refunds & Cancellations
                </li>
              </ul>
            </div>
            <div className="mx-4">
              <h3 className="text-lg font-semibold p-3">Services</h3>
              <ul className="p-3">
                <li className="hover:underline cursor-pointer p-1">
                  IkonMytri Learning Solutions
                </li>
                <li className="hover:underline cursor-pointer p-1">
                  Recruitment Services
                </li>
                <li className="hover:underline cursor-pointer p-1">BPO Services</li>
              </ul>
            </div>

            <div className="text-center mb-6 ">
              <h3 className="text-lg font-semibold p-3  ">Contact Us</h3>
              <p>Call: +91 789-273-0639</p>
              <p>Call: +91 960-650-0309</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@ikonmytri.com"
                  className="text-gray-400 hover:text-white"
                >
                  info@ikonmytri.com
                </a>
              </p>
              <p className="text-md p-2 shrink w-72">
                Address: 91 Springboard, Bannerghatta Main Road, Dollars Colony,
                Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>

          <div className="  bg-[#333333] p-8 ">
            <p className="text-center text-md m-0">
              Copyright © 2024 IkonMytri Services Pvt Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
