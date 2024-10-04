export default function Blog() {
    return (
      <>
          <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome to IkonMytri Blog
        </h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600">
            IkonMytri Services is a Bengaluru-based firm specializing in several functional areas such as educational consulting, BPO, HR services, recruitment services, and more. Our flexible business approach enables us to identify and fulfill current market demands. Since our establishment in 2019, we have earned a reputation for quality and adherence to our core values.
          </p>
          <p className="text-lg text-gray-600 mt-2">
            We aim to offer high-standard services to all our clients. Our mission is to support our clients in achieving their business goals and generate sales through excellent services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">IkonMytri Learning Services</h3>
              <p className="mt-2 text-gray-600">
                We provide innovative educational consulting and online learning platforms. Our services are designed to meet the growing demand for quality education in the digital space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">BPO Service</h3>
              <p className="mt-2 text-gray-600">
                We offer comprehensive BPO services to streamline your business operations. Our team ensures efficient customer support, data management, and back-office processing tailored to your business needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800">Recruitment Service</h3>
              <p className="mt-2 text-gray-600">
                IkonMytri is one of the reputed recruitment firms, dedicated to serving diverse companies looking to expand their workforce. Our services are dynamic and responsive to the constantly changing demands of the global market.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Mission</h2>
          <p className="text-lg text-gray-600">
            Our aim is to enable digital transformation and help in creating a better online space for learning and growth. We strive to build long-term customer relations with our exceptional services, interaction, and support.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-700 mb-4">Vision</h2>
          <p className="text-lg text-gray-600">
            We take pride in the solutions we have developed for our clients. Our vision is to provide unparalleled services for the long run with complete support and management. At IkonMytri, we feel privileged to be a part of the industry that derives education with modern means of technology.
          </p>
        </section>
      </div>
    </div>
      </>
    );
}