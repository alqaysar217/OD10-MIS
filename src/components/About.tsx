import React, { useRef } from 'react';
import { GraduationCap, Users, Trophy, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(aboutRef);

  const stats = [
    { icon: Users, number: '52', label: 'طالب وطالبة', color: 'text-primary-500' },
    { icon: Trophy, number: '7+', label: 'مشروع تخرج', color: 'text-secondary-500' },
    { icon: Calendar, number: '4', label: 'سنوات دراسة', color: 'text-accent-500' },
    { icon: GraduationCap, number: '2025', label: 'سنة التخرج', color: 'text-primary-500' },
  ];

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              عن دفعة 
              <span className="text-primary-600 dark:text-primary-400"> مطور المنظمة</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="../blog/blog-6.jpg"
                  alt="دفعة مطور المنظمة"
                  className="w-full h-96 object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold">OD-10</div>
                  <div className="text-sm opacity-90">2021-2025</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-arabic">
                رحلة التميز والإبداع
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                دفعة <strong className="text-primary-600 dark:text-primary-400">مطور المنظمة (OD-10)</strong> من 
                قسم نظم المعلومات الإدارية بجامعة حضرموت، التحقت بالجامعة في عام 2021 وتضم 
                <strong className="text-secondary-600 dark:text-secondary-400"> 52 طالباً وطالبة</strong> 
                يسعون لتحقيق التميز في مجال التكنولوجيا وأنظمة المعلومات.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                تتميز دفعتنا بالشغف للتعلم والإبداع، حيث نعمل معاً على تطوير مهاراتنا 
                التقنية والإدارية لنكون جاهزين لسوق العمل المستقبلي. نؤمن بأن 
                <strong className="text-accent-600 dark:text-accent-400"> العمل الجماعي والتعاون</strong> 
                 هما مفتاح النجاح والتميز.
              </p>

              <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">رؤيتنا</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  أن نكون خريجين متميزين قادرين على المساهمة في التطور التقني والإداري 
                  في مجتمعنا، وأن نحدث تأثيراً إيجابياً في مجال نظم المعلومات الإدارية.
                </p>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-700 mb-4`}>
                  <stat.icon className={`${stat.color} w-8 h-8`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;