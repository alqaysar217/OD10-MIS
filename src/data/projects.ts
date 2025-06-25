import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "تطبيق ادوات الذكاء الاصطناعي في التعليم (EduAi)",
    description: "يهدف مشروع (EduAI) إلى دمج أدوات الذكاء الاصطناعي في التعليم بجامعة حضرموت، لمعالجة تحديات مثل نقص المصادر المخصصة وتشتت الأدوات. يوفر التطبيق منصة موحدة للطلاب (مساعد افتراضي، تنظيم دراسة، تحليل تقدم) وللمعلمين (خطط دراسية، تحليل أداء، تغذية راجعة فعالة). يركز على زيادة دقة التعليم، توفير الوقت والجهد، وتعزيز المهارات الرقمية في بيئة تعليمية مبتكرة. يدعم (EduAi) أنظمة Android و iOS ويشمل أدوات متنوعة مثل الترجمة والبرمجة وحل المسائل.",
    students: ["محمود حساني", "وليد بن قبوس", "سلطان باهبري", "محمد الهندي", "ندى العمودي", "عائشة باعشن", "فاتن بن سميدع"],
    supervisor: "د. فائز بازنبور",
    type: "mobile",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702012/pr-1_hzxv7o.png",
    links: {
      demo: "https://drive.google.com/uc?export=view&id=1bqgFfVfKn4AV9tedICdXNuhhid9Zs28_",
      presentation: "https://drive.google.com/uc?export=view&id=1joArncnSiZPtYCM6KicM8OrzL8o28i5W"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 2,
    title: "منصة (ركن) لانشاء المتاجر الالكترونية",
    description: "منصة (ركن) هي مشروع يمني يهدف لتسهيل التجارة الإلكترونية للأفراد والشركات الصغيرة والمتوسطة، خصوصًا في المكلا وصنعاء وعدن. تهدف المنصة إلى التغلب على تحديات السوق المحلية مثل نقص التكامل مع أنظمة الدفع المحلية، وضعف الوعي الرقمي، وارتفاع تكاليف الحلول التقنية. ستمكن (منصة ركن) المستخدمين من إنشاء متاجر إلكترونية بسهولة وإدارة شاملة للمبيعات والمخزون، مما يسهم في تعزيز ريادة الأعمال الرقمية، وتوسيع نطاق الأعمال، وبناء الثقة بين البائعين والعملاء، ودعم الاقتصاد الرقمي في اليمن.",
    students: ["عبدالله بامسعود", "مشعل العمودي", "بركات الوهيبي", "عمر العكبري", "أحمد الهمس", "صفاء باذيب", "جواهر بن ركيز", "هية عوشان"],
    supervisor: "د. عصام باسليمان",
    type: "web",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702044/pr-2_nmmont.png",
     links: {
      demo: "https://drive.google.com/uc?export=view&id=1RSBk1ZzWuw9k9qF_VddvE43DnFhWeaNQ",
      presentation: "https://drive.google.com/file/d/1oIV1WoYG4D_MlRGplPjKwJVvM8Pu5yW6/view?usp=drive_link"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 3,
    title: "فيلم الانميشن بالذكاء الاصطناعي",
    description: "يهدف مشروع فيلم الأنيميشن بالذكاء الاصطناعي إلى إنتاج فيلم قصير مبتكر باستخدام الذكاء الاصطناعي في مراحل مثل التصميم والتحريك والموسيقى. يسعى المشروع لاستكشاف الإمكانيات الإبداعية للذكاء الاصطناعي في صناعة الأفلام المتحركة، وتجاوز القيود التقليدية من حيث التكلفة والوقت. يهدف إلى إظهار الذكاء الاصطناعي كأداة قوية للإبداع، واستكشاف أساليب جديدة في سرد القصص، وإلهام الآخرين لتبني هذه التقنيات.",
    students: ["نظمي باظروس", "محمد بن كوير", "عائض بن ماخش", "أحمد التميمي", "محمد صالح", "ريناد باراس", "مريم بن هامل"],
    supervisor: "د. فايز بازنبور",
    type: "desktop",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702103/pr-3_dosxvr.png",
      links: {
      demo: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg",
      presentation: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpgg"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 4,
    title: "منصة (وثاق) لخمات التجارة البحرية",
    description: "تهدف منصة (وثاق) الإلكترونية إلى رقمنة عمليات الشحن البحري في ميناء المكلا باليمن، لربط التجار بالوكلاء الملاحيين. تعالج المنصة المشاكل الناتجة عن الأساليب اليدوية مثل ضياع الوقت والمعلومات، وعدم الدقة، وازدحام الموانئ، وتأخير الشحنات، مما يرفع التكاليف ويقلل رضا العملاء. ستمكن (وثاق) التجار من تقديم طلبات الشحن رقمياً، ويتلقاها الوكلاء الملاحيون لإدارة الشحنات بفاعلية. توفر المنصة واجهة سهلة الاستخدام، ونظام دردشة للتواصل المباشر، وإشعارات فورية، مما يحول العمليات الورقية المعقدة إلى سلسلة رقمية شفافة ومنظمة، ويساهم في توفير الوقت، وتقليل الأخطاء، وزيادة الثقة بين الأطراف.",
    students: ["أحمد بامدحج", "أحمد شوالة", "مروان بن سهيلان", "أمواج النهدي", "أمل الملاح", "أحلام النهدي", "سلمى حمدان", "رهف العمودي"],
    supervisor: "د. عصام باسليمان",
    type: "web",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702053/pr-4_cfiimd.png",
      links: {
      demo: "https://drive.google.com/uc?export=view&id=1ohvWLvbnC9q0SptLY2_Nu1o2LVDWVmzK",
      presentation: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 5,
    title: "تاثير تطبيقات الحوسبة السحابية",
    description: "يهدف مشروع (تأثير تطبيقات الحوسبة السحابية) إلى دراسة وتحليل الآثار المتعددة لاعتمادها في قطاعات متنوعة. يركز المشروع على فهم كيفية تحسين الحوسبة السحابية للكفاءة التشغيلية، وتقليل التكاليف، وزيادة المرونة والابتكار، مع استعراض تحديات مثل الأمن السيبراني وخصوصية البيانات. تكمن أهميته في توفير رؤى شاملة لمتخذي القرار لتبني التقنيات السحابية بفاعلية ودعم التحول الرقمي.",
    students: ["أماني يعقوب", "حنين بن عتيق", "خديجة حسينون", "تسنيم عريض", "شيماء بامحفوظ"],
    supervisor: "د. فائز بازنبور",
    type: "research",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702082/pr-5_ynv0yy.png",
     links: {
      demo: "https://drive.google.com/file/d/1QDPPX-yTslU_H6qDzuShwgtVUumVBC96/view?usp=drive_link",
      presentation: "https://drive.google.com/file/d/1rOpe2HpsqWuIC1W61DWtbp6Z_HLXi5AK/view?usp=drive_link"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 6,
    title: "دراسة سلوك المستهلك الحضرمي (مركز فوة التجاري - المكلا)",
    description: "يهدف مشروع (دراسة سلوك المستهلك الحضرمي) إلى تحليل شامل لأنماط الشراء والعوامل المؤثرة على قرارات المستهلكين في حضرموت، تحديداً في مركز فوة التجاري بالمكلا. يركز المشروع على فهم الدوافع الثقافية، الاجتماعية، الاقتصادية، والنفسية التي تشكل سلوكهم. تهدف الدراسة لتقديم رؤى وتوصيات عملية للمنشآت التجارية، لمساعدتها على تحسين استراتيجياتها التسويقية وتطوير منتجاتها بما يتناسب مع احتياجات السوق المحلي، وبالتالي زيادة المبيعات وتعزيز رضا العملاء.",
    students: ["همام الدوعني", "عمر بن سعد", "عمر الخلاقي", "سعيد بابقي", "سعيد باكيلي", "عديلة الوصابي", "نجاة باحميد ", "بشرى باراس", "أخلاص بن سلمة"],
    supervisor: "د. واثق كعويلة",
    type: "research",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702172/pr-6_ctoc8t.png",
     links: {
      demo: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg",
      presentation: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg"
    //github: "public/pdf/EduAi.pptx"
    }
  },
  {
    id: 7,
    title: "دراسة تحليل مرضى (مستشفى هيا لطب العيون)",
    description: "يهدف مشروع (دراسة تحليل مرضى مستشفى هيا لطب العيون) إلى تحليل شامل لأنواع أمراض العيون الشائعة وخصائص المرضى ونتائج العلاج. تهدف الدراسة إلى فهم أفضل لاحتياجات المرضى، وتحسين جودة الرعاية المقدمة، وتعزيز كفاءة العمليات التشغيلية في المستشفى، مما يدعم اتخاذ قرارات مبنية على الأدلة ويساهم في تطوير خدمات طب العيون.",
    students: ["صالح سويدان", "سالم بن عروة", "أنس مزروع", "ناصر حيابك", "صفاء البطاطي", "حنين باجابر", "شهد دنه", "سلمى الصويل"],
    supervisor: "د. واثق كعويلة",
    type: "research",
    image: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750702183/pr-7_y1qhwe.png",
      links: {
      demo: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg",
      presentation: "https://res.cloudinary.com/ddayx3vdf/image/upload/v1750701691/none_xpuuwc.jpg"
    //github: "public/pdf/EduAi.pptx"
    }
  },
];
