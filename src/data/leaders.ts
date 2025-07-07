// src/data/leaders.ts

import { Leader } from '../types'; // تأكد من أن المسار صحيح لملف تعريف الواجهة Leader

export const leaders: Leader[] = [
  {
    id: 1,
    name: "عديلة الوصابي",
    role: "الأولى على الدفعة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701215/female-13_vzajdh.png",
    achievements: [
      "المتفوقة دراسيًا في جميع الفصول",
      "المساهمة الفعّالة في اللجان العلمية والأنشطة",
      "المشاركة في دورة ريادة الأعمال "
    ],
    badge: "🏆",
    type: "high_achiever" // تم إضافة النوع هنا
  },
  {
    id: 2,
    name: "أحمد بامدحج",
    role: "مندوب وقائد الدفعة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701650/dev-2_bgxiki.png",
    achievements: [
      "تنسيق الجداول والفعاليات والامتحانات",
      "تنظيم النزولات الميدانية للدفعة",
      "الدفاع عن مصالح الدفعة وتلبية احتياجاتها"
    ],
    badge: "🤝",
    type: "team_lead" // تم إضافة النوع هنا
  },
  {
    id: 3,
    name: "محمود حساني",
    role: "المبرمج التقني (القيصر)",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701648/2_sjumdz.png",
    achievements: [
      "إنشاء مشاريع برمجية ومنصات متقدمة",
      "تقديم دورات تدريبية وشروحات للطلاب",
      "تزويد الزملاء بالملخصات والمساعدة البرمجية"
    ],
    badge: "💻",
    type: "innovator" // تم إضافة النوع هنا
  },
  {
    id: 4,
    name: "مشعل العمودي",
    role: "مخرج وإعلامي الدفعة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701652/dev-3_npsrb9.png",
    achievements: [
      "إخراج وتصوير مقاطع احترافية للدفعة",
      "إدارة حسابات الدفعة على وسائل التواصل",
      "عضو فعال في لجنة الأنشطة"
    ],
    badge: "🎬",
    type: "collaborator" // تم إضافة النوع هنا (يمكنك تغييرها إذا كان هناك نوع أفضل)
  },
  {
    id: 5,
    name: "عائض بن ماخش",
    role: "نائب رئيس المجلس الطلابي",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701646/dev-11_sdlihr.png",
    achievements: [
      "المساهمة في مشروع التخرج بالذكاء الاصطناعي (موسيقى تصويرية)",
      "المعرفة بإنشاء الأفلام بالذكاء الاصطناعي",
      "دعم ومساعدة الزملاء بهدوء وخلق"
    ],
    badge: "🤖",
    type: "innovator" // تم إضافة النوع هنا
  },
  {
    id: 6,
    name: "عبدالله بامسعود",
    role: "قائد اللجنة المالية والتخرج",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701651/dev-4_tvtoqy.png",
    achievements: [
      "إدارة الأمور المالية للدفعة وجمع مبالغ التخرج",
      "تقديم تقارير مالية دقيقة وواضحة",
      "التميز في فن الإلقاء والتواصل"
    ],
    badge: "💰",
    type: "team_lead" // تم إضافة النوع هنا
  },
  {
    id: 7,
    name: "صفاء باذيب",
    role: "الحجر الأساس (منسقة المهام)",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701317/female-17_uqtb6q.png",
    achievements: [
      "التواصل الممتاز مع المدرسين وإدارة المهام الشاملة",
      "القيادة الفعّالة للفريق وتنسيق الجهود",
      "المشاركة الفعّالة في لجان الأنشطة والمالية والتخرج"
    ],
    badge: "⚙️",
    type: "collaborator" // تم إضافة النوع هنا
  },
  {
    id: 8,
    name: "عائشة باعشن",
    role: "عضو الأنشطة والتنسيق",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701534/female-3_vg3inz.png",
    achievements: [
      "تنسيق وتنظيم الحفلات وتجهيز الأغراض",
      "دعم وتجهيز التوزيعات والهدايا للنزولات الميدانية",
      "الخبرة في أمور الاحتفالات والحجوزات"
    ],
    badge: "🎉",
    type: "motivator" // تم إضافة النوع هنا (يمكنك تغييرها)
  },
  {
    id: 9,
    name: "وليد بن قبوس",
    role: "محلل الدفعة (الشرس)",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701653/dev-6_rd3er5.png",
    achievements: [
      "تحليل الأعمال والمهام الصعبة بذكاء",
      "الاعتماد على الذكاء الاصطناعي لإنجاز المهام",
      "التميز بالصبر والهدوء والكلام الموزون"
    ],
    badge: "💡",
    type: "innovator" // تم إضافة النوع هنا
  },
  {
    id: 10,
    name: "مروان بن سهيلان",
    role: "كوميدي الدفعة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701653/dev-7_exaxig.png",
    achievements: [
      "نشر البهجة والأمل بضحكته المميزة",
      "التعامل مع الأمور بيسر وهدوء",
      "التوازن في الأداء الأكاديمي والشخصي"
    ],
    badge: "😂",
    type: "motivator" // تم إضافة النوع هنا
  },
  {
    id: 11,
    name: "عمر العكبري",
    role: "شخصية مهمة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1751908200/IMG-mckpgubt_kkedji.jpg",
    achievements: [
      "القدرة على إنهاء المواد الدراسية في اللحظات الأخيرة",
      "نقطة توازن الدفعة وروحها المرحة",
      "الجرأة في التعامل مع المحاضرين"
    ],
    badge: "🥊",
    type: "high_achiever" // تم إضافة النوع هنا (أو نوع آخر مناسب)
  },
  {
    id: 12,
    name: "محمد الهندي",
    role: "جوجل الخاص بالدفعة",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701655/dev-9_kuhbtn.png",
    achievements: [
      "القدرة على استيعاب المفاهيم الحسابية والبرمجية بسرعة",
      "إيجاد الحلول الذكية في الاختبارات",
      "الخبرة في قيادة باصات الرحلات"
    ],
    badge: "🧠",
    type: "innovator" // تم إضافة النوع هنا
  },
];