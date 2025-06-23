import React, { useRef } from 'react';
import { ChevronDown, Play, Users, Calendar, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(heroRef);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701592/blog-1_tjyo4d.jpg"
          alt="دفعة مطور المنظمة"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/70 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-arabic-serif text-shadow">
            كن مميزًا...
            <span className="block text-secondary-300 mt-2">لأنك تستحق الأفضل</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            دفعة <span className="text-accent-400 font-bold">مطور المنظمة (OD-10)</span> - 
            نظم المعلومات الإدارية
            <span className="block mt-2">جامعة حضرموت • 2025</span>
          </p>

          {/* Stats */}
          <div className="flex justify-center items-center space-x-8 space-x-reverse mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="text-secondary-400 ml-2" size={24} />
                <span className="text-3xl font-bold text-white">52</span>
              </div>
              <p className="text-gray-300 text-sm">طالب</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="text-accent-400 ml-2" size={24} />
                <span className="text-3xl font-bold text-white">2021</span>
              </div>
              <p className="text-gray-300 text-sm">سنة الالتحاق</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="text-primary-400 ml-2" size={24} />
                <span className="text-3xl font-bold text-white">7+</span>
              </div>
              <p className="text-gray-300 text-sm">مشروع</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
            <button
              onClick={scrollToAbout}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              ابدأ التصفح
            </button>
            
            <button className="flex items-center space-x-2 space-x-reverse bg-white/10 backdrop-blur-sm text-white px-6 py-4 rounded-lg hover:bg-white/20 transition-all duration-300">
              <Play size={20} />
              <span>شاهد الفيديو</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="text-white/70 cursor-pointer hover:text-white transition-colors" 
            size={32}
            onClick={scrollToAbout}
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-secondary-500/20 rounded-full blur-2xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;