const iconSet = {
  cup: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 7h14l-2 16a7 7 0 0 1-10 0L17 7Z"/><path d="M18 15h12"/><path d="M24 28v10"/><path d="M17 41h14"/></svg>`,
  sword: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M35 5 17 28"/><path d="m32 8 8-3-3 8"/><path d="M14 31 9 36"/><path d="m11 25 12 12"/><path d="m8 38 3 3 7-7"/></svg>`,
  dervish: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 9a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"/><path d="M15 27c5-6 13-6 18 0"/><path d="M24 18v13"/><path d="M12 35c6 5 18 5 24 0"/><path d="M18 31 9 26"/><path d="m30 31 9-5"/></svg>`,
  rose: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 16c5-6 14-1 10 7-3 7-10 9-10 9s-7-2-10-9c-4-8 5-13 10-7Z"/><path d="M24 32v10"/><path d="M24 38c-6-5-10-1-12 2"/><path d="M24 37c5-5 9-2 12 1"/></svg>`,
  astrolabe: `<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="26" r="14"/><circle cx="24" cy="26" r="7"/><path d="M24 12V6"/><path d="M20 6h8"/><path d="M14 26h20"/><path d="M24 12c5 4 8 9 8 14s-3 10-8 14"/><path d="M24 12c-5 4-8 9-8 14s3 10 8 14"/></svg>`,
  brushLeaf: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 38 31 17"/><path d="m28 14 6 6"/><path d="M8 40c4 1 7 0 9-3"/><path d="M30 11c6-5 12-3 13-3-1 1 1 8-5 13-4 3-8 2-10-1 0-3 0-6 2-9Z"/></svg>`,
  camera: `<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="8" y="16" width="25" height="18" rx="3"/><path d="m33 22 8-5v16l-8-5"/><path d="M15 16l3-5h8l3 5"/><circle cx="21" cy="25" r="4"/></svg>`,
  mountainTree: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 37 18 16l8 13 5-8 12 16H5Z"/><path d="M34 37V23"/><path d="m34 23-5 7h10l-5-7Z"/><path d="m34 28-7 8h14l-7-8Z"/></svg>`,
  music: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 33V10l18-4v23"/><path d="M18 16l18-4"/><ellipse cx="13" cy="35" rx="5" ry="4"/><ellipse cx="31" cy="31" rx="5" ry="4"/></svg>`,
  scales: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 8v31"/><path d="M14 40h20"/><path d="M10 15h28"/><path d="M14 15 8 28h12l-6-13Z"/><path d="M34 15 28 28h12l-6-13Z"/></svg>`,
  geometry: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6 40 24 24 42 8 24 24 6Z"/><path d="M24 14 32 24 24 34 16 24 24 14Z"/><circle cx="24" cy="24" r="14"/><path d="M8 24h32M24 6v36"/></svg>`,
  diamond: `<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 29 18l14 1-11 9 4 14-12-8-12 8 4-14-11-9 14-1 5-13Z"/><path d="M24 5v29"/><path d="M12 42 29 18"/><path d="M36 42 19 18"/></svg>`
};

const poets = {
  molana: { name: "مولانا", icon: iconSet.dervish, title: "اگر مولانا امروز بود...", job: "لایف‌کوچ، مدرس خودشناسی و پادکستر", bio: "«هر روز نسخه‌ی بهتری از خودت شو؛ باقی راه خودش پیدا می‌شود.»", description: "احتمالاً یکی از معروف‌ترین سخنران‌های انگیزشی دنیا بود. پادکست داشت، دوره‌های خودشناسی برگزار می‌کرد و میلیون‌ها نفر از حرف‌هایش الهام می‌گرفتند." },
  hafez: { name: "حافظ", icon: iconSet.cup, title: "اگر حافظ امروز بود...", job: "شاعر، نویسنده و اینفلوئنسر ادبی", bio: "«گاهی یک بیت، تمام حرف دل آدم را می‌زند...»", description: "احتمالاً هر شب لایو شعرخوانی برگزار می‌کرد، فال حافظ آنلاین داشت و جمله‌هایش مدام در شبکه‌های اجتماعی وایرال می‌شد." },
  ferdowsi: { name: "فردوسی", icon: iconSet.sword, title: "اگر فردوسی امروز بود...", job: "نویسنده رمان‌های تاریخی و مشاور فیلم‌های حماسی", bio: "«ایران را باید با فرهنگش زنده نگه داشت.»", description: "شاید نویسنده پرفروش‌ترین رمان‌های تاریخی می‌شد و در ساخت فیلم‌ها و بازی‌های حماسی همکاری می‌کرد." },
  saadi: { name: "سعدی", icon: iconSet.rose, title: "اگر سعدی امروز بود...", job: "فعال اجتماعی، استاد دانشگاه و نویسنده", bio: "«هنوز هم بنی‌آدم اعضای یک پیکرند...»", description: "احتمالاً درباره روابط انسانی، اخلاق و مهارت‌های زندگی کتاب می‌نوشت و سخنرانی‌های اجتماعی برگزار می‌کرد." },
  khayyam: { name: "خیام", icon: iconSet.astrolabe, title: "اگر خیام امروز بود...", job: "دانشمند، برنامه‌نویس و پژوهشگر نجوم", bio: "«سؤال خوب، از هزار پاسخ ارزشمندتر است.»", description: "بین هوش مصنوعی، ریاضیات و نجوم زندگی می‌کرد و احتمالاً همیشه در حال ساختن پروژه‌های علمی جدید بود." },
  sohrab: { name: "سهراب سپهری", icon: iconSet.brushLeaf, title: "اگر سهراب سپهری امروز بود...", job: "عکاس طبیعت، نقاش و جهانگرد", bio: "«چشم‌ها را باید شست، جور دیگر باید دید.»", description: "صفحه‌اش پر از عکس‌های طبیعت، نقاشی و سفر بود و مردم را به آرامش و دیدن زیبایی‌های ساده دعوت می‌کرد." },
  forough: { name: "فروغ فرخزاد", icon: iconSet.camera, title: "اگر فروغ امروز بود...", job: "کارگردان، نویسنده و عکاس", bio: "«دنیا را باید از زاویه‌ای تازه دید.»", description: "فیلم‌های مستقل می‌ساخت، کتاب منتشر می‌کرد و با نگاه متفاوتش الهام‌بخش نسل جوان بود." },
  nima: { name: "نیما یوشیج", icon: iconSet.mountainTree, title: "اگر نیما یوشیج امروز بود...", job: "نویسنده و بنیان‌گذار مجله ادبی آنلاین", bio: "«اگر قرار است چیزی تغییر کند، از فکر شروع می‌شود.»", description: "همیشه در حال شکستن کلیشه‌ها بود و از استعدادهای جوان حمایت می‌کرد." },
  shahriar: { name: "شهریار", icon: iconSet.music, title: "اگر شهریار امروز بود...", job: "ترانه‌سرا و خواننده", bio: "«گاهی یک ترانه، از هزار سخن ماندگارتر است.»", description: "احتمالاً شعرهایش به مشهورترین آهنگ‌های روز تبدیل می‌شد و کنسرت‌های پرطرفداری برگزار می‌کرد." },
  parvin: { name: "پروین اعتصامی", icon: iconSet.scales, title: "اگر پروین اعتصامی امروز بود...", job: "استاد دانشگاه و فعال فرهنگی", bio: "«دانایی زمانی ارزش دارد که به انسانیت خدمت کند.»", description: "در حوزه آموزش، عدالت اجتماعی و توانمندسازی نوجوانان فعالیت می‌کرد." },
  bidel: { name: "بیدل دهلوی", icon: iconSet.geometry, title: "اگر بیدل امروز بود...", job: "فیلسوف و نویسنده", bio: "«پشت هر سؤال، جهانی از معنا پنهان است.»", description: "کتاب‌های فلسفی می‌نوشت و احتمالاً کانال یا پادکستی درباره تفکر عمیق داشت." },
  saeb: { name: "صائب تبریزی", icon: iconSet.diamond, title: "اگر صائب تبریزی امروز بود...", job: "نویسنده و بلاگر ادبی", bio: "«نگاه تازه، آغاز هر تغییر است.»", description: "هر روز یک جمله ناب منتشر می‌کرد که به سرعت بین کاربران دست‌به‌دست می‌شد." }
};

function renderPoetButtons() {
  const buttons = document.getElementById("poetButtons");
  buttons.innerHTML = Object.entries(poets).map(([id, poet]) => `
    <button class="today-poet-button" type="button" onclick="showPoet('${id}')" aria-label="نمایش ${poet.name}">
      <span class="today-poet-logo">${poet.icon}</span>
      <span>${poet.name}</span>
    </button>
  `).join("");
}

function showPoet(id) {
  const poet = poets[id];
  document.getElementById("title").innerHTML = poet.title;
  document.getElementById("description").innerHTML = `
    <span class="today-poet-logo">${poet.icon}</span>
    <span class="today-result-row"><span class="today-result-label">شغل احتمالی:</span>${poet.job}</span>
    <span class="today-result-row"><span class="today-result-label">بیو:</span>${poet.bio}</span>
    <span class="today-result-row"><span class="today-result-label">توضیح:</span>${poet.description}</span>
  `;
  document.getElementById("description").classList.add("today-result-card");
  document.querySelectorAll(".today-poet-button").forEach((button) => {
    button.classList.toggle("is-active", button.getAttribute("onclick") === `showPoet('${id}')`);
  });
}

renderPoetButtons();
