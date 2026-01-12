"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Play, ChevronDown, ArrowRight, Code, Palette, Share2, Camera, Sparkles, Zap, Shield, Users } from "lucide-react"
import { useEffect } from "react"

export default function HomePage() {
  // Move the useEffect INSIDE the component function
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('[data-width]');
          progressBars.forEach(bar => {
            const element = bar as HTMLElement; // Type assertion
            const width = element.getAttribute('data-width');
            if (width) {
              element.style.width = `${width}%`;
            }
          });
        }
      });
    }, { threshold: 0.5 });

    const section = document.querySelector('section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      





      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-gray-950 to-black pt-25">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-custom-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-custom-pulse delay-700" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-transparent rounded-full blur-3xl" />
  </div>

  {/* Grid pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

  {/* Floating particles */}
  <div className="absolute inset-0">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.2}s`,
          animationDuration: `${10 + Math.random() * 10}s`,
        }}
      />
    ))}
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center">
      {/* Badge with animation */}
      <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-4 animate-fade-in-up">
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-custom-pulse" />
        <span className="text-sm font-semibold text-blue-300 tracking-wide">
          TRUSTED BY FORTUNE 500 COMPANIES
        </span>
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-custom-pulse delay-300" />
      </div>

      {/* Main heading with gradient and typing effect */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8">
        <span className="block text-white animate-fade-in-up delay-100">
          Transform Your
        </span>
        <span className="relative block mt-4 animate-fade-in-up delay-200">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Digital Future
          </span>
          {/* <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-slide" /> */}
        </span>
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300">
        We engineer <span className="font-semibold text-blue-300">cutting-edge solutions</span> that drive innovation,
        accelerate growth, and transform businesses in the digital era.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-400">
        <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
          <span className="relative z-10">Start Innovation Journey</span>
          <svg className="inline-block ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>

        <button className="px-10 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 group">
          <svg className="inline-block mr-3 w-5 h-5 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Watch Demo
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 mb-5 max-w-4xl mx-auto animate-fade-in-up delay-500">
        {[
          { value: "10K+", label: "Projects Completed", suffix: "with excellence" },
          { value: "99.7%", label: "Uptime", suffix: "guaranteed" },
          { value: "150+", label: "Global Partners", suffix: "worldwide" },
          { value: "24/7", label: "Support", suffix: "always active" }
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400">{stat.label}</div>
            <div className="text-xs text-gray-500 mt-1">{stat.suffix}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Services Overview Section */}
<section className="py-32 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Minimalist header with morph animation */}
    <div className="text-center mb-20">
      <div className="relative inline-block mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5e4e99] to-transparent animate-shimmer h-px" />
        <span className="relative text-sm font-medium text-gray-500 tracking-widest uppercase inline-block px-6">
          Services
        </span>
      </div>
      
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
        <span className="block text-gray-900">
          Digital
        </span>
        <span className="relative">
          <span className="text-gray-300">Excellence</span>
          <span className="absolute inset-0 text-[#5e4e99] animate-morph-text">
            Excellence
          </span>
        </span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed opacity-70">
        Strategic solutions that transform your digital presence with precision and innovation.
      </p>
    </div>

    {/* Grid with interconnected lines */}
    <div className="relative">
      {/* Connection lines */}
      <div className="absolute inset-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path 
            d="M25,50 Q50,30 75,50" 
            stroke="#5e4e99" 
            strokeWidth="0.5" 
            fill="none"
            className="opacity-0 group-hover:opacity-30 transition-opacity duration-500"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {[
          {
            icon: "⎔",
            title: "Web Development",
            description: "Custom solutions with modern stack for peak performance.",
        
            color: "#5e4e99",
            gradient: "from-blue-400 to-purple-500"
          },
          {
            icon: "◈",
            title: "Brand Identity",
            description: "Strategic positioning with cohesive visual systems.",
        
            color: "#7c6aa8",
            gradient: "from-purple-400 to-pink-500"
          },
          {
            icon: "▣",
            title: "Social Media",
            description: "Engagement-driven campaigns for community growth.",
         
            color: "#9d8bc7",
            gradient: "from-green-400 to-teal-500"
          },
          {
            icon: "⬡",
            title: "Digital Marketing",
            description: "Data-driven strategies for measurable conversion.",
           
            color: "#beacde",
            gradient: "from-orange-400 to-red-500"
          }
        ].map((service, index) => (
          <div 
            key={service.title}
            className="group relative"
          >
            {/* Card */}
            <div className="relative h-full p-12 hover:bg-white/50 transition-all duration-500">
              {/* Expanding border effect */}
              <div className="absolute inset-4 border border-gray-200 rounded-lg group-hover:border-[#5e4e99]/30 transition-all duration-500 group-hover:scale-105" />
              
              {/* Animated number - Visible by default */}
              <div className="absolute top-6 left-6 text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                0{index + 1}
              </div>
              
              {/* Icon with rotation - Always visible */}
              <div className="relative mb-8">
                <div className="inline-block text-3xl text-gray-400 group-hover:text-[#5e4e99] transition-all duration-500 group-hover:scale-125 group-hover:rotate-180">
                  {service.icon}
                </div>
              </div>
              
              {/* Title with underline animation - Always visible */}
              <h3 className="relative text-2xl font-light text-gray-900 mb-6 pb-4">
                {service.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-[#5e4e99] to-transparent group-hover:w-full transition-all duration-700" />
              </h3>
              
              {/* Description - Always visible (fades in on hover) */}
              <p className="text-gray-500 mb-8 leading-relaxed opacity-80 group-hover:opacity-100 transform group-hover:translate-y-0 transition-all duration-500">
                {service.description}
              </p>
              
              {/* Features list - Visible by default (enhanced on hover) */}
              <div className="mb-8">
                
               
                
                {/* Additional features appear on hover */}
                
              </div>
              
              {/* Stats - Visible by default (enhanced on hover) */}
             
              
              {/* CTA - Always visible but enhanced on hover */}
              <div className="flex items-center justify-between opacity-100 group-hover:opacity-100 transform translate-y-0 transition-all duration-500">
                <div className="flex items-center">
                  <div className="w-8 h-px bg-gradient-to-r from-[#5e4e99] to-transparent mr-3" />
                  <span className="text-sm text-gray-400 group-hover:text-[#5e4e99] transition-colors duration-300">
                    Explore
                  </span>
                </div>
                <svg 
                  className="w-4 h-4 text-gray-400 group-hover:text-[#5e4e99] group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-500`} />
            </div>
            
            {/* Connection dot */}
            <div className="absolute top-1/2 right-0 w-3 h-3 bg-white border-2 border-gray-300 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
          </div>
        ))}
      </div>
    </div>

  </div>
</section>


<section className="relative py-24 bg-gradient-to-b from-white to-gray-50">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-[#5e4e99]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#5e4e99]" />
        <span className="text-sm font-medium text-[#5e4e99] tracking-wider uppercase">
          About TechFly.Cloud
        </span>
        <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#5e4e99]" />
      </div>
      
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        We Engineer
        <br />
        <span className="relative">
          <span className="text-[#5e4e99]">Digital Excellence</span>
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#5e4e99] to-purple-600 rounded-full" />
        </span>
      </h1>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A dynamic digital agency transforming businesses through innovative solutions
        in design, development, and marketing.
      </p>
    </div>

    {/* Main Content Grid */}
    <div className="grid lg:grid-cols-3 gap-12 mb-20">
      {/* Mission Card */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 h-full">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#5e4e99]/10 to-purple-600/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#5e4e99]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Our Mission</h3>
              <p className="text-gray-500">Transforming digital experiences</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              TechFly.Cloud is dedicated to helping businesses thrive in the digital landscape 
              through cutting-edge solutions and strategic partnerships.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl hover:bg-[#5e4e99]/5 transition-colors duration-300">
                <div className="text-3xl font-bold text-[#5e4e99] mb-2">10K+</div>
                <div className="font-medium text-gray-900">Projects Delivered</div>
                <div className="text-sm text-gray-500 mt-1">With excellence & precision</div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl hover:bg-[#5e4e99]/5 transition-colors duration-300">
                <div className="text-3xl font-bold text-[#5e4e99] mb-2">150+</div>
                <div className="font-medium text-gray-900">Global Clients</div>
                <div className="text-sm text-gray-500 mt-1">Across 30+ countries</div>
              </div>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl hover:bg-[#5e4e99]/5 transition-colors duration-300">
                <div className="text-3xl font-bold text-[#5e4e99] mb-2">10K+</div>
                <div className="font-medium text-gray-900">Projects Delivered</div>
                <div className="text-sm text-gray-500 mt-1">With excellence & precision</div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl hover:bg-[#5e4e99]/5 transition-colors duration-300">
                <div className="text-3xl font-bold text-[#5e4e99] mb-2">150+</div>
                <div className="font-medium text-gray-900">Global Clients</div>
                <div className="text-sm text-gray-500 mt-1">Across 30+ countries</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Services Overview */}
      <div>
        <div className="bg-gradient-to-br from-[#5e4e99] to-purple-600 rounded-2xl p-10 text-white h-full">
          <h3 className="text-2xl font-bold mb-8">Our Expertise</h3>
          
          <div className="space-y-6">
            {[
              { icon: "💻", title: "Web Development", desc: "Modern frameworks & technologies" },
              { icon: "🎨", title: "UI/UX Design", desc: "User-centric design systems" },
              { icon: "📈", title: "Digital Marketing", desc: "Growth-focused strategies" },
              { icon: "🔧", title: "Tech Consulting", desc: "Strategic technical guidance" }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-2xl">{service.icon}</div>
                <div>
                  <div className="font-medium mb-1">{service.title}</div>
                  <div className="text-sm text-white/70">{service.desc}</div>
                </div>
                <svg className="w-5 h-5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>



    {/* CTA */}
    <div className="text-center mt-16">
      <button className="group relative px-12 py-4 bg-gradient-to-r from-[#5e4e99] to-purple-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-[#5e4e99]/30 transition-all duration-300">
        <span className="relative z-10 flex items-center justify-center">
          Start Your Digital Journey
          <svg className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </button>
      <p className="text-gray-500 mt-4 text-sm">
        Schedule a free consultation with our experts
      </p>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
<section className="py-24 bg-gradient-to-b from-white to-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div className="w-10 h-px bg-gray-300" />
        <span className="text-sm font-medium text-[#5e4e99] tracking-wider uppercase">
          Our Process
        </span>
        <div className="w-10 h-px bg-gray-300" />
      </div>
      
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Development<span className="text-[#5e4e99]"> Timeline</span>
      </h2>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A structured workflow for delivering exceptional digital solutions
      </p>
    </div>

    {/* Timeline Container */}
    <div className="relative py-8">
      {/* Central Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-[#5e4e99] to-transparent">
        {/* Animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-0 animate-shimmer" />
      </div>

      {/* Timeline Steps */}
      <div className="relative">
        {/* Step 1 - LEFT SIDE */}
        <div className="flex items-center mb-20">
          {/* Left Card */}
          <div className="w-5/12 pr-8 flex justify-end">
            <div className="group relative w-80">
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-[#5e4e99] to-transparent opacity-50" />
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#5e4e99]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5e4e99]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📋</span>
                  </div>
                  <div>
                    <div className="text-sm text-[#5e4e99] font-medium mb-1">Step 01</div>
                    <h3 className="text-xl font-bold text-gray-900">Discovery & Planning</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Understanding goals and creating project roadmap</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Research</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Strategy</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Roadmap</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Node */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#5e4e99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#5e4e99]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5e4e99] animate-ping opacity-20" />
            </div>
          </div>
          
          {/* Right Empty Space */}
          <div className="w-5/12 pl-8"></div>
        </div>

        {/* Step 2 - RIGHT SIDE */}
        <div className="flex items-center mb-20">
          {/* Left Empty Space */}
          <div className="w-5/12 pr-8"></div>
          
          {/* Center Node */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#5e4e99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#5e4e99]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5e4e99] animate-ping opacity-20" />
            </div>
          </div>
          
          {/* Right Card */}
          <div className="w-5/12 pl-8">
            <div className="group relative w-80">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-[#5e4e99] to-transparent opacity-50" />
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#5e4e99]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5e4e99]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <div className="text-sm text-[#5e4e99] font-medium mb-1">Step 02</div>
                    <h3 className="text-xl font-bold text-gray-900">Design & Prototyping</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Creating user interfaces and interactive prototypes</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">UI/UX</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Wireframes</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Prototype</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 - LEFT SIDE */}
        <div className="flex items-center mb-20">
          {/* Left Card */}
          <div className="w-5/12 pr-8 flex justify-end">
            <div className="group relative w-80">
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-[#5e4e99] to-transparent opacity-50" />
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#5e4e99]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5e4e99]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <div className="text-sm text-[#5e4e99] font-medium mb-1">Step 03</div>
                    <h3 className="text-xl font-bold text-gray-900">Development</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Building robust solutions with modern technologies</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Frontend</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Backend</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">API</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Node */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#5e4e99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#5e4e99]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5e4e99] animate-ping opacity-20" />
            </div>
          </div>
          
          {/* Right Empty Space */}
          <div className="w-5/12 pl-8"></div>
        </div>

        {/* Step 4 - RIGHT SIDE */}
        <div className="flex items-center mb-20">
          {/* Left Empty Space */}
          <div className="w-5/12 pr-8"></div>
          
          {/* Center Node */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-[#5e4e99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#5e4e99]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5e4e99] animate-ping opacity-20" />
            </div>
          </div>
          
          {/* Right Card */}
          <div className="w-5/12 pl-8">
            <div className="group relative w-80">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-[#5e4e99] to-transparent opacity-50" />
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#5e4e99]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5e4e99]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <div className="text-sm text-[#5e4e99] font-medium mb-1">Step 04</div>
                    <h3 className="text-xl font-bold text-gray-900">Testing & QA</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Comprehensive testing for flawless performance</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Testing</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Quality</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 5 - LEFT SIDE */}
        <div className="flex items-center">
          {/* Left Card */}
          <div className="w-5/12 pr-8 flex justify-end">
            <div className="group relative w-80">
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-[#5e4e99] to-transparent opacity-50" />
              
              <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-[#5e4e99]/30 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5e4e99]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-sm text-[#5e4e99] font-medium mb-1">Step 05</div>
                    <h3 className="text-xl font-bold text-gray-900">Launch & Support</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">Deployment and ongoing support for success</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Deploy</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Monitor</span>
                  <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-lg">Support</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Center Node */}
          <div className="w-2/12 flex justify-center">
            <div className="relative">
              <div className="w-6 h-6 rounded-full bg-white border-2 border-[#5e4e99] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#5e4e99]" />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#5e4e99] animate-ping opacity-20" />
            </div>
          </div>
          
          {/* Right Empty Space */}
          <div className="w-5/12 pl-8"></div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              What Our{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Don't just take our word for it - hear from the businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Mitchell",
                role: "CEO, TechStart Inc",
                content:
                  "CloudTech transformed our online presence completely. Their attention to detail and creative approach exceeded all our expectations.",
                rating: 5,
              },
              {
                name: "James Chen",
                role: "Founder, Digital Ventures",
                content:
                  "The team delivered our project ahead of schedule with exceptional quality. Their expertise in web development is truly outstanding.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Marketing Director, BrandCo",
                content:
                  "From branding to social media, CloudTech handled everything professionally. Our engagement rates have tripled since working with them.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={testimonial.name}
                className="p-6 border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help your business grow. Get in touch today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 h-12"
            >
              <Link href="/contact">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-12 hover:bg-muted bg-transparent">
              <Link href="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
