import React, { useRef } from 'react';
import { Calendar, MapPin, BookOpen, Target, Trophy, GraduationCap, Users, Award } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { timeline } from '../data/timeline';

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(timelineRef);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'academic': return BookOpen;
      case 'activity': return Target;
      case 'achievement': return Trophy;
      case 'graduation': return GraduationCap;
      default: return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'academic': return 'border-blue-500 bg-blue-500';
      case 'activity': return 'border-emerald-500 bg-emerald-500';
      case 'achievement': return 'border-amber-500 bg-amber-500';
      case 'graduation': return 'border-purple-500 bg-purple-500';
      default: return 'border-gray-500 bg-gray-500';
    }
  };

  return (
    <section id="timeline" ref={timelineRef} className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <Calendar className="text-white w-7 h-7 sm:w-8 sm:h-8" /> {/* Use w- and h- classes for responsive sizing */}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 font-arabic-serif">
              الخط
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> الزمني</span>
            </h2>
            <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
              رحلة تاريخية عبر أهم المحطات والإنجازات في مسيرة دفعة مطور المنظمة
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-emerald-500 to-purple-500 rounded-full shadow-sm"></div>

            {/* Timeline Events */}
            <div className="space-y-12 md:space-y-16">
              {timeline.map((event, index) => {
                const IconComponent = getEventIcon(event.type);
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={event.id}
                    className={`relative flex flex-col items-center md:flex-row md:items-stretch
                                  ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Event Content Card */}
                    <div className={`w-full md:w-5/12 p-2 md:p-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-500 transform md:hover:-translate-y-3 border border-gray-100 dark:border-gray-700">
                        {/* Date */}
                        <div className="flex items-center mb-3 sm:mb-4">
                          {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 rounded-xl flex items-center justify-center ml-2 sm:ml-3">
                            <Calendar className="text-blue-600 dark:text-blue-400 w-4 h-4 sm:w-5 sm:h-5" /> {/* Use w- and h- classes for responsive sizing */}
                          </div>
                          <span className="text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg">
                            {event.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                          {event.description}
                        </p>

                        {/* Image */}
                        <div className="rounded-xl overflow-hidden shadow-lg w-full">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node (The circle with icon) */}
                    {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
                    <div className="absolute top-0 md:static transform -translate-y-1/2 md:translate-y-0
                                    left-1/2 -translate-x-1/2 md:translate-x-0
                                    flex items-center justify-center z-10
                                    md:w-auto md:mx-4 lg:mx-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 ${getEventColor(event.type)} flex items-center justify-center z-10 shadow-lg hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-white w-5 h-5 sm:w-6 sm:h-6" /> {/* Use w- and h- classes for responsive sizing */}
                      </div>
                    </div>

                    {/* Empty Space on Desktop for Alternating Layout */}
                    <div className="hidden md:block w-5/12"></div>
                  </div>
                );
              })}
            </div>

            {/* Timeline End */}
            <div className="relative flex justify-center mt-12 md:mt-16">
              {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                <Target className="text-white w-8 h-8 sm:w-9 h-9" /> {/* Use w- and h- classes for responsive sizing */}
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-16 md:mt-20 text-center">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-700">
              {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-4 sm:mb-6 shadow-lg">
                <Target className="text-white w-7 h-7 sm:w-8 sm:h-8" /> {/* Use w- and h- classes for responsive sizing */}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 font-arabic-serif">
                نحو آفاق أوسع
              </h3>
              <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
                رحلتنا لم تنته بعد... نتطلع إلى مستقبل مشرق مليء بالإنجازات والنجاحات
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="text-center p-4 sm:p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Users className="text-white w-6 h-6 sm:w-7 sm:h-7" /> {/* Use w- and h- classes for responsive sizing */}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">فرص العمل</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">الانطلاق في مسيرة مهنية ناجحة</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Award className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">الريادة</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">بناء مشاريع ريادية مبتكرة</p>
                </div>
                <div className="text-center p-4 sm:p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  {/* CORRECTED: Icon size adjusted by parent div's size, not directly on icon */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                    <Target className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">التواصل</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">البقاء على تواصل كعائلة واحدة</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;