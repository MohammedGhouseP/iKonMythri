export default function Contact() {
  return <>
  
  <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Reach Out To Us
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We’d love to hear from you! Feel free to reach out to us through any of the channels below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600">Call</h3>
            <p className="mt-4 text-gray-600">+91 789-273-0639</p>
            <p className="mt-2 text-gray-600">+91 960-650-0309</p>
          </div>

          {/* Email Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600">Email</h3>
            <p className="mt-4 text-gray-600">info@ikonmytri.com</p>
          </div>

          {/* Address Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl">
            <h3 className="text-xl font-semibold text-indigo-600">Address</h3>
            <p className="mt-4 text-gray-600">
              91Springboard, Bannerghatta Main Rd, <br />
              Dollars Colony, Bilekahalli, <br />
              Bengaluru, Karnataka 560076
            </p>
          </div>
        </div>
      </div>
    </div>
  

    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We'd love to hear from you! Fill out the form or find us at our location.
          </p>
        </div>

        {/* Main Section with Form and Map */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="+91 123-456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 border-2 rounded-lg font-semibold border-[#e2b951] text-[#e2b951] hover:bg-[#e2b951] hover:text-white"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Google Map Embed */}
          <div className="relative overflow-hidden shadow-lg rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.06256373518!2d77.59853247507525!3d12.903698587405495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15ef633547f7%3A0x2208210cdde85ebd!2sIkonMytri%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1728046161639!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map Location"
              className="h-96 w-full rounded-lg"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  
  </>;
}
