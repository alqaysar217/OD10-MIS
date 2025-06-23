import React, { useRef } from 'react';
import { ExternalLink, Github, FileText, Users, User } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { projects } from '../data/projects'; // تأكد من وجود هذا الملف واستيراده

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(projectsRef);

  const getProjectTypeColor = (type: string) => {
    switch (type) {
      case 'web': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'mobile': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'desktop': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'research': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  const getProjectTypeLabel = (type: string) => {
    switch (type) {
      case 'web': return 'موقع ويب';
      case 'mobile': return 'تطبيق جوال';
      case 'desktop': return 'أفلام'; // إذا كانت هذه تعني أفلام/فيديوهات، تأكد من أن الروابط تشير إلى ملفات فيديو أو صفحات عرض فيديو
      case 'research': return 'تحليل'; // تأكد من أن ملفات التحليل يمكن عرضها في المتصفح (مثل PDF)
      default: return 'مشروع';
    }
  };

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              مشاريع 
              <span className="text-primary-600 dark:text-primary-400"> التخرج</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              إبداعات وابتكارات طلاب الدفعة في مشاريع التخرج التي تعكس ما تعلموه خلال رحلتهم الأكاديمية
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProjectTypeColor(project.type)}`}>
                      {getProjectTypeLabel(project.type)}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Students */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Users className="text-primary-600 ml-2" size={18} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">الطلاب:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.students.map((student, studentIndex) => (
                        <span
                          key={studentIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                        >
                          {student}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Supervisor */}
                  <div className="mb-6">
                    <div className="flex items-center">
                      <User className="text-secondary-600 ml-2" size={18} />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        المشرف: <span className="font-medium text-gray-900 dark:text-white">{project.supervisor}</span>
                      </span>
                    </div>
                  </div>

                  {/* Project Links */}
                  {project.links && (
                    <div className="flex flex-wrap gap-3">
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank" // هذا يفتح الرابط في تبويب جديد
                          rel="noopener noreferrer" // لتحسين الأمان والأداء
                          className="flex items-center space-x-2 space-x-reverse bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span>معاينة المشروع</span>
                        </a>
                      )}
                      
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank" // هذا يفتح الرابط في تبويب جديد
                          rel="noopener noreferrer" // لتحسين الأمان والأداء
                          className="flex items-center space-x-2 space-x-reverse bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                        >
                          <Github size={16} />
                          <span>الكود</span>
                        </a>
                      )}
                      
                      {project.links.presentation && (
                        <a
                          href={project.links.presentation}
                          target="_blank" // هذا يفتح الرابط في تبويب جديد
                          rel="noopener noreferrer" // لتحسين الأمان والأداء
                          className="flex items-center space-x-2 space-x-reverse bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors"
                        >
                          <FileText size={16} />
                          <span>العرض التقديمي</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">هل لديك مشروع تريد إضافته؟</h3>
              <p className="text-lg mb-6 opacity-90">
                شارك مشروعك مع زملائك في الدفعة ليكون جزءاً من معرض المشاريع
              </p>
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                إضافة مشروع
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;