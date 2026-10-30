(()=>{if(CONFIG.sbKey.startsWith("YOUR"))return;
const sb=supabase.createClient(CONFIG.sbUrl,CONFIG.sbKey);let me=null,pf=null;
const staff=()=>pf&&["traffic","police","admin"].includes(pf.role);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const login=()=>sb.auth.signInWithOAuth({provider:"discord",options:{redirectTo:location.origin+location.pathname}});
const tbl=r=>r.length?`<table><tr><th>المخالفة</th><th>المبلغ</th><th>الحالة</th></tr>${r.map(x=>`<tr><td>${esc(x.reason)}</td><td>${x.amount}</td><td>${x.paid?"مدفوعة":"غير مدفوعة"}</td></tr>`).join("")}<tr><th>المستحق</th><th colspan="2">${r.filter(x=>!x.paid).reduce((a,x)=>a+x.amount,0)}</th></tr></table>`:"<p>لا توجد غرامات ✔</p>";
async function account(){const{data}=await sb.rpc("my_fines");
 modal("حسابي",`<p style="color:var(--mut)">الدور: ${{citizen:"مواطن",traffic:"مسؤول مرور",police:"شرطة",admin:"أدمن"}[pf?.role||"citizen"]}</p><h4>غراماتي</h4>${tbl(data||[])}${staff()?`<button class="btn" onclick="addFine()">إضافة مخالفة</button>`:""}<button class="btn o" onclick="sb.auth.signOut().then(()=>location.reload())">تسجيل الخروج</button>`)}
function addFine(){modal("إضافة مخالفة",`<form id="af"><label>اسم الشخصية</label><input name="n" required><label>رقم العربية</label><input name="p" required><label>يوزر ديسكورد المواطن</label><input name="d" required><label>المخالفة</label><input name="r" required><label>المبلغ</label><input name="a" type="number" min="1" required><button class="btn">حفظ</button></form>`);
 $("#af").onsubmit=async e=>{e.preventDefault();const f=e.target;const{error}=await sb.from("fines").insert({citizen_name:f.n.value.trim(),plate:f.p.value.trim(),discord_name:f.d.value.trim(),reason:f.r.value.trim(),amount:+f.a.value});cl();toast(error?"ليس لديك صلاحية":"تمت إضافة المخالفة ✔")}}
async function lookupFines(d){const{data,error}=await sb.rpc("lookup_fines",{p_plate:d["رقم العربية"],p_name:d["اسم الشخصية"]});modal("غرامات "+esc(d["اسم الشخصية"]),error?"تعذر الاستعلام":tbl(data||[]))}
Object.assign(window,{sb,account,addFine,lookupFines});
const h0=window.home;window.home=function(){h0();const b=$(".hero .dc");if(b){b.href="#";b.textContent=me?"حسابي":"دخول بديسكورد";b.onclick=e=>{e.preventDefault();me?account():login()}}};
(async()=>{const{data:{session}}=await sb.auth.getSession();me=session?.user||null;
 if(me){const{data}=await sb.from("profiles").select("*").eq("id",me.id).maybeSingle();pf=data}
 const b=document.createElement("button");b.className="btn dc";b.textContent=me?"حسابي":"دخول";b.onclick=me?account:login;$("header").append(b);route()})();
})();
