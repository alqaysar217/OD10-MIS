import React, { useState, useRef } from 'react';
import { Mail, Phone, Facebook, Instagram, Linkedin, X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { allStudents } from '../data/students';
import { Student } from '../types';

const Students: React.FC = () => {
  const studentsRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(studentsRef);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 12;

  const totalPages = Math.ceil(allStudents.length / studentsPerPage);
  const startIndex = (currentPage - 1) * studentsPerPage;
  const currentStudents = allStudents.slice(startIndex, startIndex + studentsPerPage);

  const openModal = (student: Student) => {
    setSelectedStudent(student);
  };

  const closeModal = () => {
    setSelectedStudent(null);
  };

  return (
    <section id="students" ref={studentsRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              طلاب 
              <span className="text-primary-600 dark:text-primary-400"> الدفعة</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              تعرف على زملاء الدفعة وإنجازاتهم المتميزة في رحلة التعلم والإبداع
            </p>
          </div>

          {/* Students Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {currentStudents.map((student, index) => (
              <div
                key={student.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
                onClick={() => openModal(student)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {student.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-3 line-clamp-2">
                    {student.graduationProject}
                  </p>
                  
                  <div className="flex justify-center space-x-2 space-x-reverse">
                    {student.social.facebook && (
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Facebook size={16} className="text-white" />
                      </div>
                    )}
                    {student.social.instagram && (
                      <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                        <Instagram size={16} className="text-white" />
                      </div>
                    )}
                    {student.social.linkedin && (
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Linkedin size={16} className="text-white" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-2 space-x-reverse">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
            >
              السابق
            </button>
            
            <span className="px-4 py-2 text-gray-700 dark:text-gray-300">
              صفحة {currentPage} من {totalPages}
            </span>
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors"
            >
              التالي
            </button>
          </div>
        </div>
      </div>

      {/* Student Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedStudent.image}
                alt={selectedStudent.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 left-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                {selectedStudent.name}
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">الاقتباس الشخصي</h3>
                  <p className="text-gray-700 dark:text-gray-300 italic">"{selectedStudent.quote}"</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">مشروع التخرج</h3>
                  <p className="text-gray-700 dark:text-gray-300">{selectedStudent.graduationProject}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">المهارات</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="border-t dark:border-gray-700 pt-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">معلومات التواصل</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Mail className="text-primary-600" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">{selectedStudent.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <Phone className="text-secondary-600" size={20} />
                      <span className="text-gray-700 dark:text-gray-300">{selectedStudent.phone}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 space-x-reverse mt-4">
                    {selectedStudent.social.facebook && (
                      <a href={selectedStudent.social.facebook} className="text-blue-600 hover:text-blue-700">
                        <Facebook size={24} />
                      </a>
                    )}
                    {selectedStudent.social.instagram && (
                      <a href={selectedStudent.social.instagram} className="text-pink-600 hover:text-pink-700">
                        <Instagram size={24} />
                      </a>
                    )}
                    {selectedStudent.social.linkedin && (
                      <a href={selectedStudent.social.linkedin} className="text-blue-700 hover:text-blue-800">
                        <Linkedin size={24} />
                      </a>
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Students;