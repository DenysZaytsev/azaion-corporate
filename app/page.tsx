import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Target, Users, Globe, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Azaion</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
              <a href="#team" className="text-gray-600 hover:text-gray-900 transition-colors">
                Team
              </a>
              <a href="#users" className="text-gray-600 hover:text-gray-900 transition-colors">
                Users
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <Badge variant="outline" className="mb-4">
                Next-Gen UAV Technology
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering UAV Operations with <span className="text-blue-600">AI Intelligence</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Revolutionizing drone technology for defense, security, and critical operations with cutting-edge
                artificial intelligence and autonomous systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center text-white">
                    <Zap className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-semibold">AI-Powered UAV</p>
                    <p className="text-sm opacity-90">Next Generation Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Key Capabilities
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Advanced UAV Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the cutting-edge features that make our AI-powered UAV systems the choice for critical
              operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Autonomous Navigation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced AI algorithms enable precise autonomous flight paths and intelligent obstacle avoidance for
                  mission-critical operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Intelligence</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instant data processing and analysis capabilities provide actionable intelligence for rapid
                  decision-making in the field.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Precision Targeting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhanced targeting systems with machine learning capabilities ensure maximum accuracy and operational
                  effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Connectivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  Secure satellite communication systems enable operations in remote areas with reliable command and
                  control links.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Military-grade encryption and cybersecurity measures protect sensitive data and prevent unauthorized
                  access.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with existing command systems and compatibility with various UAV platforms and
                  configurations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Expert Team
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the innovative minds behind our cutting-edge UAV solutions, combining decades of experience in
              defense technology and artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JD</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">John Doe</h3>
                <p className="text-blue-600 font-medium mb-3">CEO & Founder</p>
                <p className="text-gray-600 text-sm">
                  Former defense contractor with 15+ years in UAV systems development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Jane Smith</h3>
                <p className="text-green-600 font-medium mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  AI researcher specializing in autonomous systems and machine learning
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MB</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mike Brown</h3>
                <p className="text-purple-600 font-medium mb-3">Head of Operations</p>
                <p className="text-gray-600 text-sm">
                  Military veteran with extensive field experience in UAV operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Users Section */}
      <section id="users" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Trusted Partners
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Users</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by elite Ukrainian military units in their critical operations and defense missions.
            </p>
          </div>

          {/* Military Units Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="/images/3sso.jpeg"
                    alt="3rd Separate Special Purpose Regiment"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  3rd Separate Special Purpose Regiment
                </h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="/images/15th-brigade.png"
                    alt="15th Operational Brigade"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">15th Operational Brigade</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="/images/38-marine-brigade.png"
                    alt="38 Ukrainian Marine Brigade"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">38 Ukrainian Marine Brigade</h3>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <Image
                    src="/images/k2.png"
                    alt="20th Separate Regiment of K-2 Unmanned Systems"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm leading-tight">
                  20th Separate Regiment of K-2 Unmanned Systems
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* Featured Video Section */}
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Media Coverage
            </Badge>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured by CSIS</h3>
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl overflow-hidden">
                <div className="relative aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/WvSY973xWig?si=RnZ1alkvf_VSbzvb"
                    title="Featured by CSIS"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your UAV Operations?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Contact us today to learn more about our AI-powered UAV solutions and how they can enhance your
              operational capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold text-white">Azaion</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering the future of UAV operations with cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Autonomous Navigation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    AI Intelligence
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security Systems
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Azaion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
