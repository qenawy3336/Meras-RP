/* إعداداتك الخاصة — لا تتغير مع التحديثات */
CONFIG.logo="logo.png";            // مثال: "logo.png"
CONFIG.discord="https://discord.gg/F79qbw8PSc";
CONFIG.sbUrl="https://zdtilvwdtkokdwxhqqfw.supabase.co";
CONFIG.sbKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdGlsdndkdGtva2R3eGhxcWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMzNzg1OTcsImV4cCI6MjEwODk1NDU5N30.HyoYu7D7ug7BvvspbdIe8STdJYWDjjhlPRCtJQwaKfQ";
const _demo=CONFIG.sbKey.startsWith("YOUR");
CONFIG.api=_demo?"":CONFIG.sbUrl+"/functions/v1/send-form";
CONFIG.h=_demo?{}:{apikey:CONFIG.sbKey,Authorization:"Bearer "+CONFIG.sbKey};
/* الأخبار والقوانين (عدّلهم براحتك) */
Object.assign(CONFIG,{news:[
 {t:"افتتاح السيرفر رسميًا",d:"2026/10/30",x:"انطلاق الموسم الأول بقطاعات جديدة وخريطة محدثة.",img:""},
 {t:"فتح باب التقديم على الشرطة",d:"2026/10/28",x:"التقديم متاح لجميع المواطنين المستوفين للشروط.",img:""},
 {t:"تحديث قوانين المرور",d:"2026/10/25",x:"غرامات جديدة وتراخيص رقمية.",img:""}],
rules:[
 {t:"القوانين العامة",l:["احترام جميع اللاعبين والإدارة.","ممنوع الشتائم والإساءة.","ممنوع استخدام الهاكات والثغرات.","اللعب بالدور الواقعي إلزامي (RP)."]},
 {t:"قوانين الشرطة",l:["الالتزام بالرتب والتسلسل القيادي.","ممنوع إساءة استخدام الصلاحيات.","توثيق كل بلاغ وقضية."]},
 {t:"قوانين العصابات",l:["ممنوع القتل العشوائي (RDM).","يلزم سبب واقعي لأي مواجهة.","ممنوع الاشتباك داخل المناطق الآمنة."]},
 {t:"قوانين المرور",l:["الالتزام بالسرعات المحددة.","الترخيص إلزامي لكل مركبة.","ممنوع القيادة بتهور (VDM)."]}]});
