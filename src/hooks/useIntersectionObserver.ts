import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (
  elementRef: React.RefObject<HTMLElement>,
  // يمكنك تعديل هذه الخيارات
  options: IntersectionObserverInit = {
    root: null, // الـ viewport الافتراضي
    rootMargin: '0px', // ابدأ في تتبع العنصر عندما يكون على بعد 0 بكسل من الـ viewport
    threshold: 0.1, // العنصر يعتبر مرئيًا إذا ظهر 10% منه على الأقل
  }
) => {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null); // لحفظ مرجع للـ observer

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // يمكنك طباعة هذا في الكونسول للمراقبة:
        // console.log('Intersection Entry:', entry.target.id, 'isIntersecting:', entry.isIntersecting, 'Intersection Ratio:', entry.intersectionRatio);
        setIsVisible(entry.isIntersecting);
      });
    }, options); // استخدم الـ options المعدّلة هنا

    observerRef.current = observer; // حفظ مرجع الـ observer

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options.root, options.rootMargin, options.threshold]); // اعتماديات الـ useEffect

  return isVisible;
};