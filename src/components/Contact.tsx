import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(contactRef);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              تواصل 
              <span className="text-primary-600 dark:text-primary-400"> معنا</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              نسعد بتواصلكم معنا. شاركونا آراءكم واقتراحاتكم أو أي استفسارات حول دفعة مطور المنظمة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  معلومات التواصل
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        البريد الإلكتروني
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">pr.mahmoud.20@gmail.com</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        للتواصل الرسمي والاستفسارات
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary-600 dark:text-secondary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        رقم الهاتف
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">+967 775 258 830</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        متاح من 9 صباحاً إلى 9 مساءً
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 space-x-reverse">
                    <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent-600 dark:text-accent-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        الموقع
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">جامعة حضرموت</p>
                      <p className="text-gray-600 dark:text-gray-300">كلية العلوم الإدارية</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        قسم نظم المعلومات الإدارية
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">إحصائيات سريعة</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">52</div>
                    <div className="text-sm opacity-90">طالب متميز</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">7+</div>
                    <div className="text-sm opacity-90">مشروع تخرج</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">4</div>
                    <div className="text-sm opacity-90">سنوات دراسة</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">2025</div>
                    <div className="text-sm opacity-90">سنة التخرج</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                أرسل رسالة
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    تم إرسال الرسالة بنجاح!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    شكراً لك، سنتواصل معك قريباً
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        الاسم الكامل *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="أدخل اسمك الكامل"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        البريد الإلكتروني *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      موضوع الرسالة *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors"
                      placeholder="ما موضوع رسالتك؟"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      الرسالة *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:text-white transition-colors resize-none"
                      placeholder="اكتب رسالتك هنا..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-4 rounded-lg font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 space-x-reverse"
                  >
                    <Send size={20} />
                    <span>إرسال الرسالة</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                ملاحظات مهمة
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
                <div className="text-center">
                  <div className="text-2xl mb-2">📧</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">سرعة الرد</h4>
                  <p>نرد على جميع الرسائل خلال 24 ساعة</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">🔒</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">الخصوصية</h4>
                  <p>جميع المعلومات المرسلة محمية وسرية</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">التواصل</h4>
                  <p>نرحب بجميع الاستفسارات والاقتراحات</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;