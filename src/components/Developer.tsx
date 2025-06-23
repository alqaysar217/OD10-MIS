// src/components/Developer.tsx

import React, { useRef } from 'react';
import { Code, Mail, Phone, ExternalLink, Award, Heart, Star, Car, Github, Linkedin, Youtube, Instagram, Facebook } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Developer: React.FC = () => {
  const developerRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(developerRef);

  const skills = [
    'تطوير الويب الشامل (Full-Stack Development)',
    'برمجة وتطوير تطبيقات المؤسسات (C++, C#, .NET Framework)',
    'إدارة وتحليل قواعد البيانات (SQL)',
    'تحليل وتصميم النظم والبيانات',
    'أمن المعلومات واكتشاف الثغرات',
    'تصميم واجهات المستخدم (UI/UX)',
    'تطوير التطبيقات (العامة والمخصصة)',
    'أتمتة المهام ومعالجة البيانات (Python)'
  ];

 
  const projects = [
    {
      title: 'موقع دفعة مطور المنظمة',
      description: 'موقع شامل لعرض طلاب إنجازات وذكريات ومسار ومشاريع دفعة مطور المنظمة OD-10',
      tech: 'React, TypeScript, Tailwind CSS',
      image: 'public/projects/app-1.png',
      url: 'https://OD10-MIS.vercel.app/' 
    },
    {
      title: 'منصة فيونكة التجارية',
      description: 'منصة ويب لبيع المستلزمات البناتية (أدوات تجميل - مجوهرات - شنط - احذية) في فيونكه ستجد النادر.',
      tech: 'Vue.js, Node.js, MongoDB',
      image: 'public/projects/app-2.png',
      url: 'https://fioncah-ecommerce.vercel.app/' 
    },
    {
      title: 'موقع محلات باشعيب للدراجات',
      description: 'موقع الكتروني لبيع الدراجات النارية بانواعها وقطع الغيار والزينة وكل ما يتعلق بالصيانة.',
      tech: 'Html, CSS, Javascript',
      image: 'public/projects/app-3.png',
      url: 'https://bashaib-ecommerce.vercel.app/' 
    },
    {
      title: 'تطبيق سقيا الخيري',
      description: 'تطبيق سقيا للتبرع للمساجد بالمياة، المنظفات، المناديل، الوجبات يمكنك من خلاله التبرع بكل سهولة.',
      tech: 'React, TypeScript, Tailwind CSS',
      image: 'public/projects/app-4.png',
      url: 'https://saqia-charity-app.vercel.app/' 
    },
    {
      title: 'تطبيق سكينة الاسلامي',
      description: 'تطبيق للاستما الى القران، قصص الانبياء، ادعية، احاديث، اذكار، اسئلة دينة، يضم اكثر من 60 قارى.',
      tech: 'Vue.js, Node.js, MongoDB',
      image: 'public/projects/app-5.png',
      url: 'https://sakina-islam.vercel.app/' 
    },
    {
      title: 'تطبيق العمقي موبايل',
      description: 'يضم فروع الشركة والوكلاء وتواجد 24 ساعة والرخدمات المالية والرسائل والخدمات المتقدمة',
      tech: 'React, TypeScript, Tailwind CSS',
      image: 'public/projects/app-6.png',
      url: 'https://omqi-mobile-app.vercel.app/' 
    }
  ];

  const services = [
    {
      icon: Code,
      title: 'تطوير الويب',
      description: 'تصميم وتطوير مواقع ويب حديثة ومتجاوبة',
      color: 'text-primary-500'
    },
    {
      icon: Award,
      title: 'تصميم واجهات المستخدم',
      description: 'تصميم تجارب مستخدم مميزة وسهلة الاستخدام',
      color: 'text-secondary-500'
    },
    {
      icon: Star,
      title: 'الاستشارات التقنية',
      description: 'تقديم الاستشارات والحلول التقنية المتخصصة',
      color: 'text-accent-500'
    }
  ];

  return (
    <section id="developer" ref={developerRef} className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              مطور
              <span className="text-primary-600 dark:text-primary-400"> الموقع</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              تعرف على محمود عمر حساني، مطور ومصمم هذا الموقع وعضو فعال في دفعة مطور المنظمة
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Developer Profile */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                {/* Profile Image */}
                <div className="relative h-80 bg-gradient-to-br from-primary-600 to-secondary-600">
                  <img
                    src="public/leaders/2.png" // تأكد من صحة هذا المسار لصورتك
                    alt="محمود عمر علي حساني"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">محمود عمر حساني</h3>
                    <p className="text-primary-200">مطور ومصمم ويب</p>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <Heart className="text-red-500 ml-2" size={20} />
                      <span className="font-semibold text-gray-900 dark:text-white">اقتباسي الشخصي</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      "البرمجة ليست مجرد كتابة كود، بل فن في حل المشاكل وإبداع في بناء المستقبل"
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Phone className="text-secondary-600 dark:text-secondary-400" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">+967 775 258 830</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Mail className="text-primary-600 dark:text-primary-400" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">pr.mahmoud.20@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Instagram className="text-primary-600 dark:text-primary-400" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">pr.mahmoud_20</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Youtube className="text-primary-600 dark:text-primary-400" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">pr.mahmoud</span>
                    </div>
                  </div>

                  {/* Contact Button */}
                  <button className="w-full mt-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105">
                    تواصل معي
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">من أنا؟</h3>
                <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
                  <p className="mb-4 leading-relaxed">
                    أنا محمود عمر حساني، طالب في قسم نظم المعلومات الإدارية بجامعة حضرموت،
                    وعضو فعال في دفعة مطور المنظمة (OD-10). أتخصص في تطوير الويب وتصميم
                    واجهات المستخدم، وأسعى دائماً للإبداع والتميز في كل مشروع أعمل عليه.
                  </p>
                  <p className="mb-4 leading-relaxed">
                    بدأت رحلتي في البرمجة منذ سنوات، وطورت مهاراتي في تقنيات متعددة لأصبح
                    قادراً على تحويل الأفكار إلى مواقع وتطبيقات تفاعلية حديثة. أؤمن بأن
                    التكنولوجيا يجب أن تخدم الناس وتحل مشاكلهم الحقيقية.
                  </p>
                  <p className="leading-relaxed">
                    هذا الموقع هو ثمرة جهدي وحبي لدفعة مطور المنظمة، حيث أردت أن أخلد
                    ذكرياتنا وإنجازاتنا في منصة رقمية تليق بتميزنا وطموحاتنا.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">مهاراتي التقنية</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300"
                    >
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">خدماتي</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <div key={index} className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all duration-300">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white dark:bg-gray-700 mb-4 ${service.color}`}>
                        <service.icon size={28} />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                        {service.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Portfolio */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">معرض أعمالي</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                مجموعة من المشاريع التي عملت عليها بشغف وإتقان
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                // **هنا تم استخدام وسم <a> مع خصائص href, target="_blank", rel="noopener noreferrer"**
                <a
                  key={index} // استخدام index كـ key مقبول هنا، أو يمكن إضافة id للمشاريع
                  href={project.url} // هذا هو الرابط الفعلي الذي سيتم فتحه
                  target="_blank" // يفتح الرابط في تبويبة جديدة
                  rel="noopener noreferrer" // يضيف طبقة أمان عند فتح روابط خارجية
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {project.tech}
                      </span>
                      {/* أيقونة ExternalLink هنا تشير إلى أنه رابط خارجي */}
                      <ExternalLink className="text-secondary-600 dark:text-secondary-400" size={20} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4">
                هل لديك مشروع في ذهنك؟
              </h3>
              <p className="text-xl mb-8 opacity-90">
                تواصل معي لتحويل فكرتك إلى حقيقة رقمية مميزة
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 sm:space-x-reverse">
                <a
                  href="mailto:pr.mahmoud.20@gmail.com"
                  className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  راسلني الآن
                </a>
                <a
                  href="tel:+967123456789"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300"
                >
                  اتصل بي
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;