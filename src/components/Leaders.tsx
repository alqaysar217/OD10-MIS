import React, { useRef } from 'react';
import { Award, Star, Crown, Trophy, Zap, TrendingUp, Users, Lightbulb, Link } from 'lucide-react'; // تم إضافة أيقونات إضافية هنا لتجنب أخطاء Linting في حال استخدامها مستقبلاً
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { leaders } from '../data/leaders';

const Leaders: React.FC = () => {
  const leadersRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(leadersRef);

  // تم استرجاع هذه الدوال لضمان عمل المكون بشكل صحيح إذا تم استخدامها
  const getLeaderIcon = (type: string) => {
    switch (type) {
      case 'team_lead': return Crown;
      case 'innovator': return Lightbulb;
      case 'motivator': return Zap;
      case 'collaborator': return Users;
      case 'high_achiever': return TrendingUp;
      default: return Crown;
    }
  };

  const getLeaderColor = (type: string) => {
    switch (type) {
      case 'team_lead': return 'from-yellow-400 to-amber-500';
      case 'innovator': return 'from-teal-400 to-emerald-500';
      case 'motivator': return 'from-orange-400 to-red-500';
      case 'collaborator': return 'from-blue-400 to-indigo-500';
      case 'high_achiever': return 'from-purple-400 to-pink-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };


  return (
    <section id="leaders" ref={leadersRef} className="py-20 bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      {/* التعديل هنا: تم تغيير px-4 إلى px-2 على الشاشات الصغيرة جداً، وإضافة lg:px-8 لمرونة أكبر */}
      <div className="container mx-auto px-2 sm:px-4 lg:px-8">
<div className={`transition-all duration-1000 animate-fade-in`}> {/* أو حتى قم بإزالة التحريك بالكامل مؤقتاً */}          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl mb-6 shadow-lg">
              <Crown className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              أبطال 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> الدفعة</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              نجوم ساطعة في سماء دفعة مطور المنظمة، تميزوا بإبداعهم وقيادتهم وإنجازاتهم المتميزة
            </p>
          </div>

          {/* Leaders Grid */}
          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-4 lg:gap-x-8">
            {leaders.map((leader, index) => {
                const IconComponent = getLeaderIcon(leader.type); // تم استخدام الدالة هنا
                return (
                <div
                    key={leader.id}
                    className="group relative w-full max-w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-6 overflow-hidden border border-gray-100 dark:border-gray-700"
                    style={{ animationDelay: `${index * 0.2}s` }}
                >
                    {/* Crown Badge */}
                    <div className="absolute top-4 right-4 z-10">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                        <Crown size={20} />
                    </div>
                    </div>

                    {/* Leader Image */}
                    <div className="relative h-64 overflow-hidden">
                    <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    
                    {/* Star Decoration */}
                    <div className="absolute top-4 left-4">
                        <Star className="text-yellow-400 fill-current animate-pulse" size={24} />
                    </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                        {leader.name}
                    </h3>
                    
                    <div className="text-center mb-4">
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 text-amber-800 dark:text-amber-200 rounded-full text-sm font-medium shadow-sm">
                        <Award size={16} className="ml-1" />
                        {leader.role}
                        </span>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        <Trophy size={16} className="ml-2 text-amber-600" />
                        الإنجازات:
                        </h4>
                        {leader.achievements.map((achievement, achievementIndex) => (
                        <div
                            key={achievementIndex}
                            className="flex items-start space-x-2 space-x-reverse text-sm text-gray-600 dark:text-gray-400"
                        >
                            <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed break-words">{achievement}</span>
                        </div>
                        ))}
                    </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white text-center w-full">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Crown className="text-white" size={24} />
                        </div>
                        <h3 className="text-lg font-bold mb-1">{leader.name}</h3>
                        <p className="text-sm opacity-90">{leader.role}</p>
                    </div>
                    </div>
                </div>
                );
            })}
          </div>

          {/* Recognition Section */}
          <div className="mt-20">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-10 text-center shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl mb-6 shadow-lg">
                <Star className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
                تقدير واعتراف
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                كل فرد في دفعة مطور المنظمة هو بطل بطريقته الخاصة
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Trophy className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">التميز الأكاديمي</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">العمل الجماعي</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Star className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">الإبداع والابتكار</div>
                </div>
                <div className="text-center p-6 bg-white/50 dark:bg-gray-700/50 rounded-2xl backdrop-blur-sm border border-gray-100 dark:border-gray-600 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Crown className="text-white" size={28} />
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">تحقيق الأهداف</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;