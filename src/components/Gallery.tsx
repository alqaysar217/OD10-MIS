import React, { useState, useRef } from 'react';
import { Calendar, MapPin, X } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { gallery } from '../data/gallery';
import { GalleryItem } from '../types';

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(galleryRef);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'الكل' },
    { id: 'workshop', label: 'ورش العمل' },
    { id: 'fieldtrip', label: 'الزيارات الميدانية' },
    { id: 'ceremony', label: 'الحفلات' },
    { id: 'project', label: 'المشاريع' },
    { id: 'social', label: 'الأنشطة الاجتماعية' },
  ];

  const filteredGallery = filter === 'all' 
    ? gallery 
    : gallery.filter(item => item.category === filter);

  return (
    <section id="gallery" ref={galleryRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              معرض 
              <span className="text-primary-600 dark:text-primary-400"> الذكريات</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              لحظات لا تُنسى من رحلتنا الأكاديمية والأنشطة والفعاليات التي جمعتنا معاً
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-3 line-clamp-2">{item.description}</p>
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="ml-2" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredGallery.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                لا توجد صور في هذه الفئة حالياً
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 left-4 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {selectedImage.description}
              </p>
              <div className="flex items-center text-primary-600 dark:text-primary-400">
                <Calendar size={20} className="ml-2" />
                <span className="font-medium">{selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;