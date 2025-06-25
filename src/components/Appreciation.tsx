import React, { useRef } from 'react';
import { Heart, MessageCircle, User, Calendar } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AppreciationMessage {
  id: number;
  from: string;
  to?: string;
  message: string;
  type: 'student-to-student' | 'teacher-to-students' | 'student-to-teacher';
  image?: string;
  date: string;
}

const Appreciation: React.FC = () => {
  const appreciationRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(appreciationRef);


  const messages: AppreciationMessage[] = [
  {
    id: 1,
    from: " أ. سوزان السييلي",
    to: "دفعة مطور المنظمة",
    message: "كم أنا فخورة بكم اليوم، وأشعر أنني لم أدرّس طلابًا فقط، بل صنعت جزءًا من مستقبل مشرق، من خلال عقول تحمل فكرًا، وقلوب تنبض بالشغف، وأيادٍ قادرة على البناء والتطوير.    كنتم دفعة استثنائية… مليئة بالحيوية، بالأسئلة الذكية، والنقاشات التي لم تكن فقط علمية، بل إنسانية أيضًا. دفعة (مطورو منظمة) لم تكن اسمًا فقط، بل كانت روحًا واضحة في كل عمل قمتم به.    وها أنتم اليوم على مشارف الانطلاق، تحملون أدوات التطوير، لا لتصنعوا وظائف فقط، بل لتصنعوا فرقًا. في كل منظمة ستدخلونها، أو مشروع تقودونه، تذكّروا أن القيمة ليست في الشهادة فقط، بل في الأثر الذي تتركونه... أنصحكم: استمروا في التعلّم، وكونوا مرنين، وازرعوا الاحترام حيثما ذهبتم. لا تخشوا التحديات، فهي الطريق الحقيقي للنضج والتميّز.    وأخيرًا… لا تنسوا أن هناك أختا لكم تذكركم بكل خير، وتفتخر أنها كانت يومًا جزءًا من رحلتكم.    دفعة مطورو منظمة ، دمتم دائمًا أهلًا للتطوير والتغيير.  ",
    type: "teacher-to-students",
    date: "2024-03-10"
  },
  {
    id: 2,
    from: "أ. أميرة الحدادي",
    to: "دفعة مطور المنظمة",
    message: "سعيدة جداً بوجودي كجزءٍ بسيط في رحلتكم الجامعية، في الحقيقة لم أعد نفسي كأستاذة لكم بقدر ما شعرت أنني واحدة منكم ،كنتم خير الطلاب ونعم المعين لي في أولى خطواتي كمعيدة و أعدّكم من الدفعات التي لن ينساها قسم نظم المعلومات الإدارية ولا أنا كذلك بحماسكم وشغفكم الكبير ، أرجو لكم كل التوفيق بخطواتكم القادمة، دمتم بود دائم ودمت فخورة بكم دوماً ⭐🎓",
    type: "teacher-to-students",
    date: "2024-03-14"
  },
   {
    id: 3, 
    from: "أ. أسماء بانوبي",
    to: "دفعة مطور المنظمة",
    message: "مرت السنوات، وها انتم أولاء تغاذرون مقاعد الدراسة نحو مياديين الحياة، مزودين بالعلم والطموح. دعواتي الصادقة لكم بمستقبل يليق بكم وبجهودكم، وأن تكونوا لبنة صالحة في مجتمعكم",
    type: "teacher-to-students",
    date: "2024-03-14"
  },
  
  {
    id: 4,
    from: "أ. زينة باعوم",
    to: "دفعة مطور المنظمة",
    message: "مبارك لكم التخرج يا دفعة 'مطور المنظمة'! لقد أثبتم أنكم جيل طموح ومبدع. أتمنى لكم كل النجاح في خطواتكم القادمة، وأن تستثمروا ما تعلمتموه لخدمة مجتمعكم ووطنكم. إلى الأمام دائماً.",
    type: "teacher-to-students",
    date: "2024-03-10"
  },
   {
    id: 5,
    from: "أ. عصام باسليمان",
    to: "دفعة مطور المنظمة",
    message: "فخور جداً بما حققتموه يا أبنائي. دفعة مطور المنظمة ستبقى في ذاكرتي كواحدة من أفضل الدفعات التي درّستها. تمنياتي لكم بمستقبل مشرق وأنتم تبنون اليمن الرقمي.",
    type: "teacher-to-students",
    date: "2024-03-10"
  },
  {
    id: 6,
    from: "عائض سالم بن ماخش",
    to: "زملاء الدفعة",
    message: "بين جدران الجامعة كبرنا، وتحت ظلالها صقلنا طموحاتنا، واليوم نغادرها ونحن نحمل في قلوبنا ذكريات لا تُنسى، وصداقات ستبقى ما حيينا، شكرا لكل من كان جزءا من هذا المشوار، زملائي، أساتذتي، كل من ترك فينا أثراً طيباً. هي نهاية مرحلة، وبداية لحياة جديدة، نسأل الله فيها التوفيق والسداد، وداعاً دفعة العطاء، إلى اللقاء في ميادين الإنجاز بإذن الله.",
    type: "student-to-student",
    date: "2024-03-15"
  },
  {
    id: 7,
    from: "أحمد بامدحج",
    to: "زملاء الدفعة",
    message: "أيامنا في 'دفعة مطور المنظمة' كانت أكثر من مجرد دراسة، كانت رحلة مليئة بالتعلم، التحديات، والضحكات التي لن تُنسى. من أعماق قلبي، شكراً لكل زميل وزميلة، كنتم السند والعون والرفقة الصادقة. لنودّع هذه المرحلة ونحن نحمل أجمل الذكريات، ونستقبل المستقبل بروح الإنجاز التي صقلناها معاً. إلى لقاء قريب في ميادين النجاح، أتمنى لكم جميعاً كل التوفيق والسداد.",
    type: "student-to-student",
    date: "2024-03-15"
  },
  {
    id: 8,
    from: "محمد صالح عبد المانع",
    to: "زملاء الدفعة",
    message: "لكل لحظة جميلة قضيناها معًا، لكل تحدي واجهناه وتغلبنا عليه، ولكل ضحكة شاركناها، شكراً لكم يا دفعة العطاء. هذه ليست نهاية الطريق، بل بداية لمسيرة حافلة بالإنجازات. فخور بكل واحد منكم، وإلى الأمام دائماً.",
    type: "student-to-student",
    date: "2024-03-15"
  },
   {
    id: 9, 
    from: "مروان بن سهيلان",
    to: "أصدقاء الدراسة",
    message: "يا رفاق الدرب، مرت الأيام كالحلم، تاركةً خلفها أجمل الذكريات وأقوى الروابط. شكراً لكل لحظة دعم، ولكل يد عون. أتمنى لكم مستقبلاً زاهراً مليئاً بتحقيق الأحلام. إلى لقاء يجمعنا على الخير دائماً.",
    type: "student-to-student",
    date: "2024-03-08"
  },
  {
    id: 10, 
    from: "سلطان باهبري",
    to: "أصدقاء الدراسة",
    message: "صداقتكم كانت كنزاً لا يُقدر بثمن في هذه الرحلة. تعلمنا، كبرنا، وتطورنا معاً. شكراً لكل لحظة من الدفء والمرح والدعم. أتمنى أن نلتقي قريباً وأن نرى نجاحاتكم في كل مكان. لن تُنسوا أبداً.",
    type: "student-to-student",
    date: "2024-03-08"
  },
  {
    id: 11,
    from: "صالح سويدان",
    to: "أ. عصام باسليمان",
    message: "إلى أستاذنا الفاضل د. عصام باسليمان، كلمات الشكر والامتنان لا تكفي للتعبير عن عظيم تقديرنا لدوركم في مسيرتنا التعليمية. لقد كنتم لنا خير معلم ومرشد، لم تدخروا جهداً في دعمنا وتزويدنا بالعلم والمعرفة، وكانت توجيهاتكم القيمة نبراساً يضيء لنا الطريق. بفضل الله ثم بفضلكم، وصلنا إلى هذا الإنجاز. ندعو الله أن يجزيكم خير الجزاء على كل ما قدمتموه لنا. شكراً جزيلاً من القلب.",
    type: "student-to-teacher",
    date: "2024-03-12"
  },
  {
    id: 12,
    from: "محمود عمر حساني",
    to: "د. خالد الجابري",
    message: "أستاذنا الفاضل د. خالد الجابري، نتقدم بخالص الشكر والتقدير لكم على كل ما قدمتموه لنا من علم ومعرفة وتوجيهات قيمة. لقد كنتم سنداً لنا في رحلتنا التعليمية، ونأمل أن نكون عند حسن ظنكم دائماً. بارك الله في جهودكم.",
    type: "student-to-teacher",
    date: "2024-03-12"
  },
 
 
  
];

  const getMessageTypeColor = (type: string) => {
    switch (type) {
      case 'student-to-student': return 'border-r-blue-500';
      case 'teacher-to-students': return 'border-r-emerald-500';
      case 'student-to-teacher': return 'border-r-purple-500';
      default: return 'border-r-gray-500';
    }
  };

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case 'student-to-student': return User;
      case 'teacher-to-students': return MessageCircle;
      case 'student-to-teacher': return Heart;
      default: return MessageCircle;
    }
  };

  return (
    <section id="appreciation" ref={appreciationRef} className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl mb-6 shadow-lg">
              <Heart className="text-white" size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-arabic-serif">
              كلمات من 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"> القلب</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              الامتنان هو ذاكرة القلب - كلمات صادقة تعبر عن الحب والتقدير بين أفراد دفعة مطور المنظمة ومعلميهم
            </p>
          </div>

          {/* Messages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {messages.map((message, index) => {
              const IconComponent = getMessageTypeIcon(message.type);
              return (
                <div
                  key={message.id}
                  className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-r-4 ${getMessageTypeColor(message.type)} border border-gray-100 dark:border-gray-700`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Message Header */}
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {message.from}
                          </h3>
                          {message.to && (
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              إلى: {message.to}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar size={16} className="ml-1" />
                        <span className="text-sm">{message.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message Content */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      <MessageCircle className="text-rose-500 mt-1 flex-shrink-0" size={20} />
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed flex-1 text-lg">
                        "{message.message}"
                      </p>
                    </div>
                  </div>

                  {/* Message Image */}
                  {message.image && (
                    <div className="px-6 pb-6">
                      <img
                        src={message.image}
                        alt="رسالة شكر"
                        className="w-full h-32 object-cover rounded-xl shadow-lg"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appreciation;