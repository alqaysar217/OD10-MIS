import React from 'react';
import { Heart, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

// استورد الصورة هنا أيضًا، بنفس المسار الذي استخدمته في Header.tsx
// تأكد أن مسار الصورة صحيح
import logoImage from '/public/logo2.png'; // <--- **هنا المسار الجديد لصورتك**

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'عن الدفعة' },
    { href: '#students', label: 'الطلاب' },
    { href: '#projects', label: 'المشاريع' },
    { href: '#gallery', label: 'المعرض' },
    { href: '#developer', label: 'المطور' }
  ];

  const socialLinks = [
    { 
      name: 'فيسبوك', 
      href: '#', 
      icon: '📘',
      color: 'hover:text-blue-500' 
    },
    { 
      name: 'إنستغرام', 
      href: '#', 
      icon: '📷',
      color: 'hover:text-pink-500' 
    },
    { 
      name: 'لينكد إن', 
      href: '#', 
      icon: '💼',
      color: 'hover:text-blue-700' 
    },
    { 
      name: 'واتساب', 
      href: '#', 
      icon: '💬',
      color: 'hover:text-green-500' 
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 space-x-reverse mb-6">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl overflow-hidden"> 

                <img src={logoImage} alt="OD Logo" className="w-full h-full object-contain" /> 
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">مطور المنظمة</h3>
                <p className="text-primary-400 text-sm">OD-10</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              دفعة متميزة من قسم نظم المعلومات الإدارية بجامعة حضرموت، 
              نسعى للتميز والإبداع في مجال التكنولوجيا والمعلومات.
            </p>
            <div className="flex items-center space-x-2 space-x-reverse text-red-400">
              <Heart size={16} />
              <span className="text-sm">صُنع بحب لدفعة مطور المنظمة</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-right w-full"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">معلومات التواصل</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <Mail className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">البريد الإلكتروني</p>
                  <a 
                    href="mailto:pr.mahmoud.20@gmail.com"
                    className="text-white hover:text-primary-400 transition-colors"
                  >
                    pr.mahmoud.20@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <Phone className="text-secondary-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">رقم الهاتف</p>
                  <a 
                    href="tel:+967775258830"
                    className="text-white hover:text-secondary-400 transition-colors"
                  >
                    +967 775 258 830
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="text-accent-400 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-gray-300 text-sm">الموقع</p>
                  <p className="text-white">جامعة حضرموت</p>
                  <p className="text-gray-400 text-sm">كلية العلوم الإدارية</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">تابعنا</h4>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`flex items-center space-x-2 space-x-reverse p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                >
                  <span className="text-lg">{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-gray-800 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-3">ساعات الرد على الرسائل</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 ص - 9:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} دفعة مطور المنظمة - OD-10. جميع الحقوق محفوظة.
              </p>
            </div>
            
            <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-white transition-colors">
                شروط الاستخدام
              </a>
              <a href="#" className="hover:text-white transition-colors">
                خريطة الموقع
              </a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-sm">
                تم تطوير الموقع بواسطة{' '}
                <span className="text-primary-400 font-semibold">محمود عمر حساني</span>
                {' '}مع الحب والتقدير لدفعة مطور المنظمة
              </p>
              <div className="flex justify-center items-center space-x-2 space-x-reverse mt-2 text-xs text-gray-600">
                <span>صُنع باستخدام</span>
                <span className="text-blue-400">React</span>
                <span>•</span>
                <span className="text-blue-500">TypeScript</span>
                <span>•</span>
                <span>•</span>
                <span className="text-teal-400">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;