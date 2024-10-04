import AboutUs from "../assets/About-us.jpg";
import improveImg from "../assets/productivity.png";
import responsibilityImg from "../assets/responsibility.png";
import insight from "../assets/insight.png";
import innovative from "../assets/creativity.png";
import mission from "../assets/mission.png";
import visionEye from "../assets/vision.png";
export default function About() {
  const values = [
    {
      title: "Improve Productivity & Collaboration",
      description: `With our exclusive services, we aim to improve the productivity of your organization. 
                        Our team constantly works to offer complete client satisfaction. Our OneScreen platforms 
                        help to improve collaboration and communication throughout the enterprises.`,
      image: improveImg, 
    },
    {
      title: "Responsibility and Integrity",
      description: `We strongly believe that professionalism is the essence of the client relationship. 
                        We maintain honest and open communication while delivering our services, supporting 
                        our vision and mission for long-term success.`,
      image: responsibilityImg, 
    },
    {
      title: "Insightful",
      description: `We don’t just sell services, we understand our client requirements and find the best 
                        solution as per their needs. We think, plan, and develop ideas for our customers to 
                        deliver the appropriate results.`,
      image: insight, 
    },
    {
      title: "Innovative",
      description: `We are always looking for innovative ways to help and support our clients. Whether it's 
                        adopting the latest technology or rethinking how we offer services, we are open to new ideas.`,
      image: innovative, 
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Who We Are
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            IkonMytri Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Bengaluru-based firm specializing in Educational Consulting, BPO, HR
            services, and recruitment since 2019.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg w-full h-80 object-cover sm:h-96"
              src={AboutUs}
              alt="IkonMytri Services"
            />
          </div>
          <p className="mt-8 text-lg text-gray-500">
            We operate across varied sectors, offering flexibility and
            proficiency in identifying and fulfilling market demands. Our
            reputation for quality and adherence to core values has set us apart
            in the industry.
          </p>

          <p className="mt-4 text-lg text-gray-500">
            Our educational consulting services help us excel in the online
            education sector by providing a cutting-edge platform for learning.
            We are committed to maintaining high standards in BPO and
            recruitment, continuously evolving to meet industry needs. Our
            mission is to help our clients achieve their business goals and
            drive sales through our tailored, high-quality services.
          </p>

          <p className="mt-4 text-lg text-gray-500">
            IkonMytri Services continues to grow as a one-stop solution for
            businesses and organizations, always staying ahead of the curve by
            being innovative and informed on market trends.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Our Goals
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Mission & Vision
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
              <img
                src={mission} 
                alt="Mission"
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">
                  Mission
                </h3>
                <p className="mt-4 text-gray-600">
                  Our aim is to enable this digital transformation and help in
                  creating better online space for learning and growth. We
                  strive to build long-term customer relations with our
                  exceptional services, interaction, and support.
                </p>
              </div>
            </div>

            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl">
              <img
                src={visionEye} 
                alt="Vision"
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-600">
                  Vision
                </h3>
                <p className="mt-4 text-gray-600">
                  We take pride in the solutions we have developed for our
                  clients. Our vision is to provide unparalleled services for
                  the long-run with complete support and management. At
                  IkonMytri, we feel privileged to be a part of the industry
                  that derives education with modern means of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              What We Stand For
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={value.image}
                  alt={value.title}
                  className="w-full h-48 object-contain bg-gray-200"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-indigo-600">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
