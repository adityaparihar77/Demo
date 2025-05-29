import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin, Instagram, Facebook, Youtube, ChevronRight, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container px-4 sm:px-6 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl text-white">
            <div className="bg-green-600 text-white p-1 rounded-md">W.E.</div>
            <span>Fitness</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              About
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-green-500 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="hidden md:flex bg-green-600 hover:bg-green-700">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Button>
          <Button variant="outline" size="icon" className="md:hidden text-gray-300 border-gray-700">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div
            className="h-[400px] sm:h-[500px] md:h-[600px] bg-cover bg-center"
            style={{ backgroundImage: "url('https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?uid=R202299826&ga=GA1.1.1855974877.1747731257&semt=ais_items_boosted&w=740')" }}
          />
          <div className="container px-4 sm:px-6 absolute inset-0 z-20 flex flex-col justify-center items-start text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Transform Your Body, <br className="hidden sm:block" />
              Transform Your Life
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg text-gray-200">
              Personalized fitness training tailored to your goals and lifestyle. Start your fitness journey with W.E.
              Fitness today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                Book a Free Consultation
              </Button>
            
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 sm:py-16 bg-gray-800">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col md:flex-row gap-8 sm:gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">About W.E. Fitness</h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  At W.E. Fitness, we believe that wellness and exercise go hand in hand. Our personalized approach to
                  fitness ensures that each client receives a tailored program designed to meet their specific goals and
                  needs.
                </p>
                <p className="text-gray-300 mb-6 text-sm sm:text-base">
                  Founded with a passion for helping people transform their lives through fitness, our certified
                  personal trainers bring years of experience and expertise to every session.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Certified Trainers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Personalized Plans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Nutrition Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-green-600 p-2 rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm sm:text-base">Progress Tracking</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-48 sm:w-64 h-48 sm:h-64 bg-green-600 rounded-lg -z-10" />
                  <img
                    src="https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-20.jpg?uid=R202299826&ga=GA1.1.1855974877.1747731257&semt=ais_items_boosted&w=740"
                    alt="Personal trainer working with client"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 sm:py-16 bg-gray-900">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Our Services</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                We offer a range of personalized fitness services designed to help you achieve your health and wellness
                goals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: "Personal Training",
                  description: "One-on-one training sessions tailored to your specific fitness goals and needs.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  ),
                },
                {
                  title: "Nutrition Coaching",
                  description: "Expert guidance on nutrition to complement your fitness routine and maximize results.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M12 20v-6" />
                      <path d="M6 20V10" />
                      <path d="M18 20V4" />
                    </svg>
                  ),
                },
                {
                  title: "Group Fitness",
                  description:
                    "Energetic group sessions that combine fun with effective workouts in a motivating environment.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-green-900/50 p-3 rounded-full w-fit mb-4">
                    <div className="text-green-500">{service.icon}</div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">{service.description}</p>
                  <Button variant="link" className="text-green-500 p-0 flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-green-600 text-white">
          <div className="container px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Ready to Start Your Fitness Journey?</h2>
                <p className="text-green-100 text-sm sm:text-base">
                  Book your free consultation today and take the first step towards a healthier you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-green-600 hover:bg-gray-100">
                  Book Consultation
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-green-700">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-12 sm:py-16 bg-gray-800">
          <div className="container px-4 sm:px-6">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">What Our Clients Say</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
                Don't just take our word for it. Hear from our clients who have transformed their lives with W.E.
                Fitness.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  quote:
                    "Working with W.E. Fitness has completely transformed my approach to health and fitness. The personalized training plan was exactly what I needed.",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  quote:
                    "The trainers at W.E. Fitness are knowledgeable, supportive, and truly care about helping you achieve your goals. Best decision I've made for my health.",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  quote:
                    "Not only did I lose weight, but I gained confidence and strength. The nutrition guidance alongside the training made all the difference.",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md border border-gray-700">
                  <div className="flex mb-4">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center">
                      <span className="text-gray-300 font-semibold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <span className="font-medium text-white">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 sm:py-16 bg-gray-900">
          <div className="container px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">Get In Touch</h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                  Have questions or ready to start your fitness journey? Contact us today and one of our expert trainers
                  will get back to you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-900/50 p-3 rounded-full">
                      <Phone className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium text-white">+1 (518) 947-8858</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-900/50 p-3 rounded-full">
                      <Clock className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Business Hours</p>
                      <p className="font-medium text-white">Monday - Friday: 6am - 8pm</p>
                      <p className="font-medium text-white">Saturday: 8am - 4pm</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-900/50 p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="font-medium text-white">Contact us for session locations</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-semibold mb-3 text-white">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors">
                      <Instagram className="h-5 w-5 text-gray-300 hover:text-green-500" />
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors">
                      <Facebook className="h-5 w-5 text-gray-300 hover:text-green-500" />
                    </a>
                    <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-green-900/50 transition-colors">
                      <Youtube className="h-5 w-5 text-gray-300 hover:text-green-500" />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-white">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                        Phone
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-white"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 sm:py-12">
        <div className="container px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <div className="bg-green-600 text-white p-1 rounded-md">W.E.</div>
                <span>Fitness</span>
              </div>
              <p className="text-gray-400 mb-4 text-sm sm:text-base">
                Transforming lives through personalized fitness training and nutrition guidance.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Personal Training
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Nutrition Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Group Fitness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Online Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm sm:text-base">+1 (518) 947-8858</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400 text-sm sm:text-base">Mon-Fri: 6am-8pm</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} W.E. Fitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
