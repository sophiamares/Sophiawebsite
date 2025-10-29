'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Linkedin, Mail, Music, BookOpen, Users, Briefcase, GraduationCap } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50/50 text-slate-800">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-blue-100/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-slate-700">
              Sophia
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition font-medium">About</a>
              <a href="#coaching" className="text-slate-600 hover:text-blue-600 transition font-medium">Coaching</a>
              <a href="#workshops" className="text-slate-600 hover:text-blue-600 transition font-medium">Workshops</a>
              <a href="#advising" className="text-slate-600 hover:text-blue-600 transition font-medium">Advising</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition font-medium">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 bg-white/50 rounded-b-xl">
              <a href="#about" className="block py-2 text-slate-600 hover:text-blue-600 font-medium">About</a>
              <a href="#coaching" className="block py-2 text-slate-600 hover:text-blue-600 font-medium">Coaching</a>
              <a href="#workshops" className="block py-2 text-slate-600 hover:text-blue-600 font-medium">Workshops</a>
              <a href="#advising" className="block py-2 text-slate-600 hover:text-blue-600 font-medium">Advising</a>
              <a href="#contact" className="block py-2 text-slate-600 hover:text-blue-600 font-medium">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-slate-800">
              Hi, I'm <span className="text-blue-500">Sophia</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Career coach, educator, and mentor dedicated to helping you navigate your professional journey and achieve your goals.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition font-medium shadow-lg shadow-blue-200 hover:shadow-blue-300">
                Book a Session
              </button>
              <button className="px-8 py-3 border-2 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-full transition font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-blue-200 via-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200/50">
            <div className="text-6xl">🚀</div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="bg-gradient-to-b from-blue-50/50 via-white to-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-slate-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm passionate about helping others succeed in their careers and education. With years of experience in career development and mentoring, I've guided hundreds of students and professionals toward their goals.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                My approach is personalized, supportive, and practical. I believe everyone has unique potential, and my goal is to help you unlock yours.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coaching, you can find me hosting my podcast, speaking at workshops, or staying current with industry trends.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                <h3 className="font-bold text-lg mb-2 text-slate-800">✨ My Mission</h3>
                <p className="text-slate-600">Empower individuals to achieve career success and fulfillment through personalized guidance and mentorship.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                <h3 className="font-bold text-lg mb-2 text-slate-800">🎯 My Approach</h3>
                <p className="text-slate-600">Tailored strategies, honest feedback, and actionable insights to help you navigate your unique path.</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                <h3 className="font-bold text-lg mb-2 text-slate-800">💼 Areas of Expertise</h3>
                <p className="text-slate-600">Career transitions, resume building, interview prep, and professional development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1:1 Career Coaching Section */}
      <section id="coaching" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <h2 className="text-4xl font-bold mb-12 text-slate-800">1:1 Career Coaching</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 transition duration-300 border border-blue-100/50">
            <div className="h-48 bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-200 flex items-center justify-center">
              <Briefcase size={60} className="text-blue-600" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Personalized Coaching</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Get customized guidance tailored to your specific career goals, challenges, and aspirations. I'll help you develop a strategic plan for success.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Career strategy & planning</li>
                <li>✓ Job search preparation</li>
                <li>✓ Interview coaching</li>
                <li>✓ Resume & portfolio review</li>
              </ul>
              <button className="w-full px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition font-medium shadow-lg shadow-blue-200">
                Book Coaching Session
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-200/50 transition duration-300 border border-blue-100/50">
            <div className="h-48 bg-gradient-to-br from-blue-200 via-indigo-200 to-blue-300 flex items-center justify-center">
              <Users size={60} className="text-blue-600" />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-slate-800">Group Sessions</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Join group coaching sessions to learn alongside others, share experiences, and build a supportive community of like-minded professionals.
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li>✓ Monthly group workshops</li>
                <li>✓ Peer mentoring programs</li>
                <li>✓ Networking opportunities</li>
                <li>✓ Professional development</li>
              </ul>
              <button className="w-full px-6 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition font-medium shadow-lg shadow-blue-200">
                Join a Group
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="bg-gradient-to-b from-white via-blue-50/30 to-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-slate-800">Workshops & Seminars</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            I offer comprehensive workshops designed to equip you with practical skills and knowledge for career success.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resume Writing Mastery",
                description: "Learn how to create a resume that gets noticed and opens doors.",
                topics: ["ATS Optimization", "Impact Statements", "Formatting Tips"]
              },
              {
                title: "Interview Excellence",
                description: "Master interview techniques to confidently land your dream job.",
                topics: ["Question Preparation", "Behavioral Interviews", "Salary Negotiation"]
              },
              {
                title: "Career Transitions",
                description: "Navigate career changes with confidence and clarity.",
                topics: ["Skills Assessment", "Market Research", "Action Planning"]
              },
              {
                title: "LinkedIn Optimization",
                description: "Build a professional brand that attracts opportunities.",
                topics: ["Profile Setup", "Content Strategy", "Networking Tips"]
              },
              {
                title: "Leadership Development",
                description: "Develop essential skills to lead with impact and influence.",
                topics: ["Emotional Intelligence", "Team Building", "Decision Making"]
              },
              {
                title: "Personal Branding",
                description: "Create a compelling personal brand that reflects your value.",
                topics: ["Brand Strategy", "Online Presence", "Storytelling"]
              }
            ].map((workshop, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-blue-100/50 hover:shadow-2xl hover:shadow-blue-200/50 transition duration-300">
                <h3 className="text-xl font-bold mb-3 text-slate-800">{workshop.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{workshop.description}</p>
                <div className="mb-4">
                  {workshop.topics.map((topic, j) => (
                    <span key={j} className="inline-block text-sm bg-blue-100/70 text-blue-700 px-3 py-1 rounded-full mr-2 mb-2">
                      {topic}
                    </span>
                  ))}
                </div>
                <button className="w-full px-4 py-2 text-blue-600 border-2 border-blue-300 hover:bg-blue-50 rounded-full transition font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* College Advising Section */}
      <section id="advising" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <h2 className="text-4xl font-bold mb-12 text-slate-800">College Advising</h2>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Navigating the college journey can be challenging. From choosing the right school to succeeding once you're there, I'm here to guide you every step of the way.
            </p>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Whether you're in high school exploring college options or already enrolled and looking to make the most of your experience, I offer comprehensive advising to help you succeed.
            </p>
            <button className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition font-medium shadow-lg shadow-blue-200">
              Schedule Your Advising Session
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-2xl border border-blue-200/50">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-800">
                <GraduationCap size={24} className="text-blue-600" />
                College Selection
              </h3>
              <p className="text-slate-600">Help finding schools that match your goals, strengths, and interests.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-2xl border border-blue-200/50">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-800">
                <BookOpen size={24} className="text-blue-600" />
                Application Support
              </h3>
              <p className="text-slate-600">Essays, personal statements, and application strategy to stand out.</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-100/50 to-indigo-100/50 rounded-2xl border border-blue-200/50">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2 text-slate-800">
                <Users size={24} className="text-blue-600" />
                College Success
              </h3>
              <p className="text-slate-600">Guidance on academics, major selection, and campus involvement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-blue-50/50 to-white py-20 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">Get In Touch</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to take the next step in your career or education? Let's connect and discuss how I can support your success.
          </p>
          <button className="px-8 py-3 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition font-medium text-lg shadow-lg shadow-blue-200">
            Start Your Journey Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-700 to-slate-800 text-white border-t border-slate-600 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-300">Sophia</h3>
              <p className="text-slate-300">Career coaching, education advising, and professional development.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-300">Quick Links</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#about" className="hover:text-blue-300 transition">About</a></li>
                <li><a href="#coaching" className="hover:text-blue-300 transition">Coaching</a></li>
                <li><a href="#workshops" className="hover:text-blue-300 transition">Workshops</a></li>
                <li><a href="#advising" className="hover:text-blue-300 transition">Advising</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-blue-300">Connect With Me</h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="https://linkedin.com" className="p-3 bg-slate-600 hover:bg-blue-500 rounded-full transition shadow-lg">
                  <Linkedin size={24} />
                </a>
                <a href="https://spotify.com" className="p-3 bg-slate-600 hover:bg-green-500 rounded-full transition shadow-lg">
                  <Music size={24} />
                </a>
                <a href="mailto:hello@sophia.com" className="p-3 bg-slate-600 hover:bg-red-500 rounded-full transition shadow-lg">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-600 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Sophia. All rights reserved.</p>
            <p className="mt-2 text-sm">Helping you achieve your career and educational goals.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
