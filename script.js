'use strict';
const GITHUB = 'https://github.com/a30369814-code/';
const projects = {
  aquagent: {
    index: '01 / RESEARCH & ENGINEERING', type: ['AI / ENGINEERING', 'ذكاء اصطناعي / هندسة'],
    status: ['Prototype in progress', 'نموذج أولي قيد التطوير'],
    name: 'AquaGent',
    description: [
      'A course prototype for AI-assisted water harvesting in Saudi environments. Operators enter weather, energy, and safety inputs; a Bayesian uncertainty model and a constraint-satisfaction approach are designed to recommend between a fog collector, a MOF collector, or no safe option. The prototype includes an operator approval workflow.',
      'نموذج أولي جامعي لتخطيط جمع المياه باستخدام الذكاء الاصطناعي. يُدخل المشغّل بيانات الطقس والطاقة والسلامة، ويقترح النظام خيارًا بين مجمّع الضباب ومجمّع مواد MOF أو عدم التشغيل عند وجود مخاطر، باستخدام الشبكات البايزية وحل القيود، مع خطوة موافقة المشغّل.'
    ],
    highlights: [
      ['Two collection approaches: fog capture and MOF-based collection', 'Safety-aware planning and energy constraints', 'Human approval or rejection of an AI recommendation'],
      ['خياران للجمع: الضباب ومواد MOF', 'توصيات تأخذ السلامة والطاقة في الاعتبار', 'اعتماد أو رفض الاقتراح من قِبل المشغّل']
    ], tags: ['Python', 'Bayesian Networks', 'CSP', 'FastAPI', 'Prototype'], url: null
  },
  mealradar: {
    index: '02 / FULL STACK', type: ['Full-stack application', 'تطبيق متكامل'], status: ['Public repository', 'مستودع عام'], name: 'MealRadar',
    description: [
      'A meal discovery MVP that understands natural-language food searches and uses location-aware Google Places search to suggest nearby restaurants. It combines authentication, maps, search history and a PostgreSQL-backed data model.',
      'تطبيق للبحث عن وجبات ومطاعم قريبة باستخدام وصف الأكل باللغة الطبيعية والموقع الجغرافي وخرائط Google، مع تسجيل الدخول وحفظ سجل البحث وقاعدة بيانات PostgreSQL.'
    ],
    highlights: [
      ['Natural-language meal search with optional AI normalization', 'Browser location, map view and nearby place discovery', 'Account authentication and persisted search history'],
      ['بحث عن الوجبات بلغة طبيعية مع دعم اختياري للذكاء الاصطناعي', 'الموقع الجغرافي والخريطة واكتشاف المطاعم', 'حسابات المستخدمين وحفظ سجل البحث']
    ], tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Google Places', 'Tailwind CSS'], url: GITHUB + 'meal-finder'
  },
  store: {
    index: '03 / AI PRODUCT', type: ['AI-enabled SaaS MVP', 'نموذج SaaS بالذكاء الاصطناعي'], status: ['Public repository / MVP', 'مستودع عام / نسخة تجريبية'], name: 'AI Store Content Studio',
    description: [
      'An Arabic RTL content-generation SaaS prototype for online stores. The app generates product content using OpenAI with a local fallback, tracks credits and includes Stripe Checkout test-mode integration. Production subscription syncing remains future work.',
      'منصة عربية متوافقة مع اتجاه الكتابة من اليمين لليسار لإنشاء محتوى المتاجر بالذكاء الاصطناعي. تتضمن مولّد محتوى، نظام رصيد، وربط Stripe التجريبي. تكامل الاشتراكات النهائي للإنتاج لا يزال ضمن التطوير.'
    ],
    highlights: [
      ['Arabic-first interface with RTL design', 'AI-assisted product content generation and local fallback', 'Credit tracking and Stripe Checkout test flow'],
      ['واجهة عربية بتصميم RTL', 'إنشاء محتوى المنتجات بالذكاء الاصطناعي مع بديل محلي', 'نظام رصيد ومسار دفع تجريبي عبر Stripe']
    ], tags: ['Next.js', 'OpenAI API', 'Stripe (test mode)', 'RTL UI', 'SaaS'], url: GITHUB + 'ai-store-content-studio'
  },
  craving: {
    index: '04 / PRODUCT EXPERIENCE', type: ['Full-stack application', 'تطبيق متكامل'], status: ['Public repository', 'مستودع عام'], name: 'Craving',
    description: [
      'A map-first restaurant finder where the user types what they are craving. The app locates and scores nearby restaurants, while Supabase handles accounts, profile security and saved search history.',
      'تطبيق للعثور على المطاعم حسب الوجبة المطلوبة، مع خريطة تفاعلية ونتائج قريبة من المستخدم. يستخدم Supabase للحسابات وحماية بيانات المستخدمين وسجل البحث.'
    ],
    highlights: [
      ['Nearby restaurant discovery using OpenStreetMap and Overpass', 'Live Leaflet map and responsive experience', 'Supabase authentication, protected admin and row-level security'],
      ['البحث عن مطاعم قريبة باستخدام OpenStreetMap وOverpass', 'خريطة تفاعلية عبر Leaflet وتصميم متجاوب', 'تسجيل الدخول وواجهة الإدارة والحماية عبر Supabase']
    ], tags: ['Next.js 14', 'React', 'TypeScript', 'Supabase', 'Leaflet'], url: GITHUB + 'craving-restaurant-finder'
  },
  smartstudy: {
    index: '05 / PRODUCTIVITY', type: ['Student productivity platform', 'منصة لتنظيم الدراسة'], status: ['Public repository', 'مستودع عام'], name: 'SmartStudy',
    description: [
      'A student productivity platform for managing subjects, weekly schedules, chapters, notes, quizzes, and study progress in one place. Its public repository uses a PHP and MySQL backend with a responsive HTML/CSS/JavaScript interface.',
      'منصة لتنظيم المواد والجداول الأسبوعية والفصول والملاحظات والاختبارات وتقدم الدراسة. النسخة المنشورة على GitHub تستخدم PHP وMySQL مع واجهة HTML/CSS/JavaScript.'
    ],
    highlights: [
      ['Manage courses, schedules, notes and chapters', 'Quiz pages and study progress tracking', 'User authentication and MySQL-backed data'],
      ['إدارة المواد والجداول والملاحظات', 'صفحات الاختبارات ومتابعة التقدم', 'حسابات المستخدمين وتخزين البيانات في MySQL']
    ], tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'], url: GITHUB + 'smartstudy'
  },
  python: {
    index: '06 / ENGINEERING FOUNDATIONS', type: ['Learning & experiments', 'تعلّم وتجارب'], status: ['Public repository', 'مستودع عام'], name: 'Python Learning Journey',
    description: [
      'A structured collection of Python exercises and applications exploring language fundamentals, object-oriented programming, REST APIs, desktop GUI development and introductory computer vision.',
      'مجموعة مرتبة من مشاريع Python وتمارينها تشمل أساسيات البرمجة والبرمجة الكائنية وواجهات API وتطبيقات سطح المكتب وتجارب أولية في الرؤية الحاسوبية.'
    ],
    highlights: [
      ['Games and console programs built around fundamentals', 'PyQt5 desktop apps such as clocks and weather interfaces', 'Exploratory OpenCV and YOLO person-tracking examples'],
      ['ألعاب وتطبيقات طرفية لتقوية أساسيات البرمجة', 'تطبيقات سطح مكتب عبر PyQt5 مثل الساعة والطقس', 'تجارب تتبّع باستخدام OpenCV وYOLO']
    ], tags: ['Python', 'OOP', 'PyQt5', 'REST APIs', 'OpenCV'], url: GITHUB + 'python-learning-journey'
  }
};

const copy = {
  en: {
    skip:'Skip to content',navWork:'Selected work',navAbout:'About',navHighlights:'Recognition',navContact:'Contact',sayHello:'Say hello',portfolioTag:'PORTFOLIO / 2026',heroName:"Hi, I'm Abubaker Baobaid.",heroA:'Software,',heroB:'with a',heroC:'point.',heroSub:'I build full-stack applications, experiment with intelligent systems, and enjoy turning complicated ideas into software people can use.',exploreWork:'Explore selected work',heroNoteTitle:'Computer Science · Artificial Intelligence',heroNoteText:'Effat University / Expected graduation 2028',folioCaption:'STUDENT · DEVELOPER',imageSideNote:'A little about the work and the person behind it.',discipline1:'Software engineering',discipline2:'Artificial intelligence',discipline3:'Full-stack development',selectedLabel:'SELECTED WORK',workA:'Proof is in',workB:'the projects.',workDesc:"Not just a list of tools. A selection of problems I've explored, decisions I've made, and applications I've built.",allWork:'All projects',aiWork:'AI systems',webWork:'Web products',learningWork:'Experiments',projectsLabel:'PROJECTS',inProgress:'IN DEVELOPMENT',aquaKicker:'AI DECISION SUPPORT / WATER HARVESTING',aquaDesc:'A prototype that considers uncertainty, constraints and safety before recommending a water collection plan.',readStudy:'Read project notes',mealDesc:'A location-aware meal search app built with Next.js, Google Places, and PostgreSQL.',viewCase:'Explore project',storeDesc:'An Arabic-first SaaS prototype for generating e-commerce product content using AI.',cravingDesc:'A map-first restaurant finder with authentication, saved searches, and location-based discovery.',studyDesc:'A course, notes, schedule and quiz organizer with PHP and MySQL.',pythonDesc:'Practical exercises in Python, OOP, APIs, desktop GUI development and computer vision.',moreRepos:'There is more work in progress.',allRepos:'Browse GitHub repositories',aboutLabel:'BEHIND THE WORK',aboutA:'Learning by',aboutB:'making.',storyLead:"I'm a Computer Science student at Effat University with a focus on Artificial Intelligence. Building is how I understand things.",storyP1:'I like the full journey: understanding the problem, designing the interface, implementing the logic, and finding what breaks during testing.',storyP2:'My recent work explores AI-assisted decisions, restaurant discovery, content tools, and practical software for students. I care about the details as much as the idea.',approachLabel:'HOW I APPROACH A PROJECT',step1:'Understand the problem',step2:'Make something usable',step3:'Test. Learn. Improve.',recognitionLabel:'RECOGNITION',recA:'Moments worth',recB:'remembering.',recognitionDesc:'Milestones that reflect curiosity, discipline, teamwork and consistent effort.',programming:'COMPETITIVE PROGRAMMING',worldwide:'worldwide',saudi:'Saudi Arabia',region:'IEEE Region 8',world:'World',ieeeFoot:'24 hours of problem solving, coding and teamwork.',academic:'ACADEMIC RECOGNITION',deanDesc:"Recognized by Effat University's College of Engineering for academic achievement.",deanLink:'View on LinkedIn',skillsLabel:'TOOLBOX',skillsA:'Tools change.',skillsB:'Thinking lasts.',skillsDesc:'Technologies I have worked with across coursework, prototypes and personal projects.',skillLang:'Languages',skillWeb:'Frontend & backend',skillAI:'AI & data',skillTools:'Development',contactLabel:'GET IN TOUCH',contactA:"Let's make",contactB:'it real.',contactDesc:'Open to internship opportunities, thoughtful collaborations, and conversations about interesting software problems.',contactDirect:'DIRECT CONTACT',footerCity:'Jeddah, Saudi Arabia',backTop:'Back to top ↑',modalStatus:'STATUS',modalStack:'TECH STACK',modalHighlights:'WHAT IT DOES',sourceLink:'Open GitHub repository',unpublished:'This course prototype is not yet available in a public repository.'
  },
  ar: {
    skip:'انتقل إلى المحتوى',navWork:'المشاريع',navAbout:'عني',navHighlights:'الإنجازات',navContact:'التواصل',sayHello:'تواصل معي',portfolioTag:'معرض الأعمال / 2026',heroName:'أهلًا، أنا أبوبكر باعبيد.',heroA:'أبني برامج،',heroB:'لها',heroC:'هدف.',heroSub:'أطوّر تطبيقات ويب متكاملة، وأجرّب أنظمة الذكاء الاصطناعي، وأحب تحويل الأفكار المعقدة إلى برامج مفيدة وسهلة الاستخدام.',exploreWork:'شاهد المشاريع',heroNoteTitle:'علوم الحاسب · الذكاء الاصطناعي',heroNoteText:'جامعة عفت / التخرج المتوقع 2028',folioCaption:'طالب · مطوّر',imageSideNote:'عن المشاريع والشخص الذي يقف خلفها.',discipline1:'هندسة البرمجيات',discipline2:'الذكاء الاصطناعي',discipline3:'تطوير تطبيقات الويب',selectedLabel:'مشاريع مختارة',workA:'شغلي يتكلم',workB:'عن نفسه.',workDesc:'مو مجرد قائمة تقنيات. هنا بعض المشاكل اللي اشتغلت عليها والحلول والتطبيقات اللي بنيتها.',allWork:'كل المشاريع',aiWork:'أنظمة الذكاء الاصطناعي',webWork:'تطبيقات ويب',learningWork:'تجارب',projectsLabel:'مشاريع',inProgress:'قيد التطوير',aquaKicker:'دعم القرار بالذكاء الاصطناعي / جمع المياه',aquaDesc:'نموذج أولي يراعي عدم اليقين والقيود والسلامة قبل اقتراح خطة لجمع المياه.',readStudy:'تفاصيل المشروع',mealDesc:'تطبيق للبحث عن الوجبات القريبة باستخدام Next.js وGoogle Places وPostgreSQL.',viewCase:'تفاصيل المشروع',storeDesc:'نموذج أولي لمنصة عربية تنشئ محتوى منتجات المتاجر باستخدام الذكاء الاصطناعي.',cravingDesc:'تطبيق لاكتشاف المطاعم عبر الخريطة مع حسابات مستخدمين وسجل بحث.',studyDesc:'منصة لتنظيم المواد والملاحظات والجداول والاختبارات باستخدام PHP وMySQL.',pythonDesc:'تمارين عملية في Python والبرمجة الكائنية وAPIs وواجهات سطح المكتب والرؤية الحاسوبية.',moreRepos:'عندي مشاريع وتجارب ثانية قيد العمل.',allRepos:'استعرض مستودعات GitHub',aboutLabel:'خلف المشاريع',aboutA:'أتعلّم',aboutB:'بالتطبيق.',storyLead:'أنا طالب علوم حاسب بجامعة عفت، متخصص في الذكاء الاصطناعي. وأفضل طريقة أفهم فيها فكرة جديدة هي أني أبنيها بنفسي.',storyP1:'أحب كل مراحل المشروع: فهم المشكلة، وتصميم الواجهة، وتنفيذ المنطق البرمجي، ثم اختبار الأشياء اللي تحتاج إصلاح.',storyP2:'اشتغلت مؤخرًا على أنظمة مساعدة لاتخاذ القرار، وتطبيقات للبحث عن المطاعم، وأدوات محتوى، وبرامج تساعد الطلاب. يهمني التنفيذ بقدر ما تهمني الفكرة.',approachLabel:'طريقتي في تنفيذ أي مشروع',step1:'أفهم المشكلة',step2:'أبني حلًا قابلًا للاستخدام',step3:'أختبر وأتعلم وأحسّن',recognitionLabel:'الإنجازات',recA:'لحظات تستحق',recB:'التوثيق.',recognitionDesc:'إنجازات تعكس التعلم والمثابرة والعمل الجماعي والاستمرارية.',programming:'البرمجة التنافسية',worldwide:'عالميًا',saudi:'المملكة العربية السعودية',region:'منطقة IEEE 8',world:'العالم',ieeeFoot:'24 ساعة من حل المسائل البرمجية والعمل الجماعي.',academic:'التميز الأكاديمي',deanDesc:'تكريم من كلية الهندسة بجامعة عفت تقديرًا للتحصيل الأكاديمي.',deanLink:'شاهد على LinkedIn',skillsLabel:'التقنيات',skillsA:'التقنيات تتغير،',skillsB:'والتعلم يستمر.',skillsDesc:'مجموعة تقنيات استخدمتها في مشاريع شخصية ونماذج أولية وأعمال جامعية.',skillLang:'لغات البرمجة',skillWeb:'الواجهات والأنظمة الخلفية',skillAI:'الذكاء الاصطناعي والبيانات',skillTools:'أدوات التطوير',contactLabel:'تواصل معي',contactA:'عندك فكرة؟',contactB:'خلّنا ننفذها.',contactDesc:'مهتم بفرص التدريب والتعاون ومناقشة الأفكار التقنية والمشاكل البرمجية الممتعة.',contactDirect:'معلومات التواصل',footerCity:'جدة، المملكة العربية السعودية',backTop:'العودة إلى الأعلى ↑',modalStatus:'الحالة',modalStack:'التقنيات',modalHighlights:'أبرز الوظائف',sourceLink:'افتح المشروع في GitHub',unpublished:'النموذج الأولي الجامعي غير منشور حاليًا في مستودع عام.'
  }
};
let currentLanguage = 'en';
const $ = (id) => document.getElementById(id);
const cards = [...document.querySelectorAll('.case[data-project]')];
const filters = [...document.querySelectorAll('.filter')];
const dialog = $('project-dialog');
const langToggle = $('lang-toggle');
const nav = $('main-nav');
const menuToggle = $('menu-toggle');
function translate(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const word = copy[lang][el.dataset.i18n];
    if (word !== undefined) el.textContent = word;
  });
  langToggle.innerHTML = lang === 'en' ? 'عربي <span aria-hidden="true">↗</span>' : 'English <span aria-hidden="true">↗</span>';
  langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
  document.title = lang === 'ar' ? 'أبوبكر باعبيد — مشاريع البرمجة والذكاء الاصطناعي' : 'Abubaker Baobaid — Software & AI';
  try {localStorage.setItem('abPortfolioLangV2',lang);} catch(e) {}
}
function setFilter(kind) {
  let count=0;
  cards.forEach(card=>{
    const show=kind==='all'||card.dataset.category.split(' ').includes(kind);
    card.hidden=!show;
    if(show)count++;
  });
  filters.forEach(f=>{ const active=f.dataset.filter===kind; f.classList.toggle('active',active);f.setAttribute('aria-pressed',String(active)); });
  $('filter-count').textContent=String(count).padStart(2,'0');
}
function openProject(key) {
  const p = projects[key]; if(!p)return;
  const n=currentLanguage==='en'?0:1;
  $('dialog-ref').textContent=p.index;
  $('dialog-type').textContent=p.type[n];
  $('dialog-title').textContent=p.name;
  $('dialog-description').textContent=p.description[n];
  $('dialog-status').textContent=p.status[n];
  $('dialog-tags').textContent=p.tags.join('  ·  ');
  const ul=$('dialog-highlights');ul.replaceChildren();
  for(const h of p.highlights[n]){const li=document.createElement('li');li.textContent=h;ul.appendChild(li);}
  const github=$('dialog-github'); const noGithub=$('dialog-no-github');
  github.hidden=!p.url;noGithub.hidden=!!p.url;
  if(p.url)github.href=p.url;else github.removeAttribute('href');
  if(!dialog.open)dialog.showModal();
}
filters.forEach(button=>button.addEventListener('click',()=>setFilter(button.dataset.filter)));
document.querySelectorAll('[data-project-button]').forEach(button=>button.addEventListener('click',()=>openProject(button.dataset.projectButton)));
$('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
langToggle.addEventListener('click',()=>translate(currentLanguage==='en'?'ar':'en'));
menuToggle.addEventListener('click',()=>{
  const now=menuToggle.getAttribute('aria-expanded')!=='true';
  menuToggle.setAttribute('aria-expanded',String(now));
  menuToggle.setAttribute('aria-label',now?'Close navigation':'Open navigation');
  nav.classList.toggle('open',now);
});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
$('year').textContent=String(new Date().getFullYear());
const revealElements=[...document.querySelectorAll('.reveal')];
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06,rootMargin:'0px 0px -15px 0px'});
  revealElements.forEach(el=>observer.observe(el));
}else revealElements.forEach(el=>el.classList.add('visible'));
let scrollScheduled=false;
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight; $('page-progress').style.width=max>0?`${Math.max(0,Math.min(1,window.scrollY/max))*100}%`:'0';scrollScheduled=false;}
window.addEventListener('scroll',()=>{if(!scrollScheduled){requestAnimationFrame(updateProgress);scrollScheduled=true;}},{passive:true});
window.addEventListener('resize',updateProgress);
try {if(localStorage.getItem('abPortfolioLangV2')==='ar')translate('ar');}catch(e){}
setFilter('all');updateProgress();
