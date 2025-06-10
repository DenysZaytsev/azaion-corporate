import Image from "next/image"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-4">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Empowering UAV Operations with AI</h1>
              <p className="text-xl text-gray-700 mb-8">
                Revolutionizing drone technology for defense, security, and beyond.
              </p>
              <a
                href="#"
                className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full"
              >
                Learn More
              </a>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/drone-hero.png"
                alt="AI Drone"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the advanced capabilities of our AI-powered UAV solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Autonomous Navigation</h3>
              <p className="text-gray-700">Intelligent navigation system for precise and reliable drone control.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Real-time Data Analysis</h3>
              <p className="text-gray-700">Advanced AI algorithms for instant data processing and decision-making.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-700">
                Robust security measures to protect sensitive data and prevent unauthorized access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the minds behind our innovative UAV solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Users Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Users</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by elite Ukrainian military units in their critical operations
            </p>
          </div>

          {/* Military Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/3sso.jpeg"
                  alt="3rd Separate Special Purpose Regiment"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                3rd Separate Special Purpose Regiment
              </h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/15th-brigade.png"
                  alt="15th Operational Brigade"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">15th Operational Brigade</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/38-marine-brigade.png"
                  alt="38 Ukrainian Marine Brigade"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">38 Ukrainian Marine Brigade</h3>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-24 h-24 mb-4 flex items-center justify-center">
                <Image
                  src="/images/k2.png"
                  alt="20th Separate Regiment of K-2 Unmanned Systems"
                  width={96}
                  height={96}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                20th Separate Regiment of K-2 Unmanned Systems
              </h3>
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Featured by CSIS</h3>
            <div className="max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/WvSY973xWig?si=RnZ1alkvf_VSbzvb"
                  title="Featured by CSIS"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Transform Your UAV Operations? */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your UAV Operations?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today to learn more about our AI-powered UAV solutions.
            </p>
            <a
              href="#"
              className="inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} AI Drone Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
