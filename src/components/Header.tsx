import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

import logoImage from '/public/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const menuItems = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'عن الدفعة' },
    { href: '#students', label: 'الطلاب' },
    { href: '#gallery', label: 'المعرض' },
    { href: '#projects', label: 'المشاريع' },
    { href: '#timeline', label: 'الخط الزمني' },
    { href: '#leaders', label: 'الأبطال' },
    { href: '#appreciation', label: 'الشكر' },
    { href: '#developer', label: 'المطور' },
    { href: '#contact', label: 'التواصل' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 space-x-reverse">
            {/* هنا سيتم وضع الصورة بدلاً من النص "OD" */}
            <div className="w-12 h-12 flex items-center justify-center rounded-lg overflow-hidden"> 
              {/* تأكد أن مسار الصورة صحيح وأنها موجودة في مجلد public/images */}
              {/* استخدام className="w-full h-full object-cover" للتأكد من أن الصورة تملأ المربع وتناسبه */}
              <img src={logoImage} alt="OD Logo" className="w-full h-full object-contain" /> {/* <--- **التعديل هنا** */}
            </div>
            <div className="text-lg font-bold">
              <span className="text-primary-600 dark:text-primary-400">مطور </span>
              <span className="text-secondary-600 dark:text-secondary-400 mr-2">المنظمة</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 space-x-reverse">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 rounded-lg shadow-lg mt-2 py-4">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleMenuClick(item.href)}
                className="block w-full text-right px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;