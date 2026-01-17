/* ========================
   1. البيانات والترجمات
   ======================== */
const translations = {
    ar: {
        hero_title: "خصومات حصرية لموظفينا",
        hero_subtitle: "استمتع بعروض وخصومات حصرية من أفضل الشركات والعلامات التجارية",
        search_placeholder: "ابحث عن شركة أو تصنيف...",
        footer_text: "© 2024 بوابة مزايا الموظفين. جميع الحقوق محفوظة.",
        all_categories: "الكل",
        category_tech: "تكنولوجيا",
        category_pharma: "أدوية",
        category_food: "أغذية",
        category_clothing: "ملابس",
        category_restaurants: "مطاعم",
        category_services: "خدمات",
        no_results_title: "لا توجد نتائج",
        no_results_text: "جرب البحث بكلمات أخرى أو اختر تصنيف مختلف",
        valid_until: "صالح حتى",
        offer_details: "تفاصيل العرض",
        how_to_use: "كيفية الاستفادة",
        how_to_use_text: "امسح QR Code عند الكاشير أو أدخل كود الخصم عند الشراء أونلاين",
        close: "إغلاق",
        visit_website: "زيارة الموقع 🚀",
        discount_label: "نسبة الخصم",
        scan_barcode: "امسح الباركود للحصول على الخصم",
        or_use_code: "أو استخدم الكود",
        click_to_copy: "اضغط للنسخ",
        copied_success: "✅ تم نسخ الكود بنجاح!",
        theme_default: "أزرق بنفسجي",
        theme_sunset: "غروب",
        theme_forest: "غابة",
        theme_ocean: "محيط",
        theme_crimson: "قرمزي",
        theme_lavender: "لافندر",
        theme_mint: "نعناع",
        theme_amber: "كهرمان",
        theme_pink: "وردي",
        theme_teal: "تركواز"
    },
    en: {
        hero_title: "Exclusive Employee Discounts",
        hero_subtitle: "Enjoy exclusive offers and discounts from the best companies and brands",
        search_placeholder: "Search for a company or category...",
        footer_text: "© 2024 Employee Benefits Portal. All rights reserved.",
        all_categories: "All",
        category_tech: "Technology",
        category_pharma: "Pharmacy",
        category_food: "Food",
        category_clothing: "Clothing",
        category_restaurants: "Restaurants",
        category_services: "Services",
        no_results_title: "No Results Found",
        no_results_text: "Try searching with different keywords or select a different category",
        valid_until: "Valid Until",
        offer_details: "Offer Details",
        how_to_use: "How to Use",
        how_to_use_text: "Scan the QR Code at checkout or enter the discount code when shopping online",
        close: "Close",
        visit_website: "Visit Website 🚀",
        discount_label: "Discount",
        scan_barcode: "Scan the barcode to get the discount",
        or_use_code: "Or use the code",
        click_to_copy: "Click to copy",
        copied_success: "✅ Code copied successfully!",
        theme_default: "Blue Purple",
        theme_sunset: "Sunset",
        theme_forest: "Forest",
        theme_ocean: "Ocean",
        theme_crimson: "Crimson",
        theme_lavender: "Lavender",
        theme_mint: "Mint",
        theme_amber: "Amber",
        theme_pink: "Pink",
        theme_teal: "Teal"
    }
};

const icons = {
    moon: `<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    langEn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">EN</text></svg>`,
    langAr: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><text x="12" y="16" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor" stroke="none">ع</text></svg>`
};

const companies = [
    { name: "أمازون", nameEn: "Amazon", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="amazon-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF9900;stop-opacity:1" /><stop offset="100%" style="stop-color:#FF6600;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#amazon-grad)"/><text x="50" y="62" font-size="45" text-anchor="middle" fill="white" font-weight="bold" font-family="Arial">a</text><path d="M25 72 Q50 82 75 72" stroke="white" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="73" cy="70" r="3" fill="white"/></svg>`, discount: "15%", category: "تكنولوجيا", categoryEn: "Technology", url: "https://amazon.com", validUntil: "31 ديسمبر 2024", validUntilEn: "December 31, 2024", description: "خصم حصري على جميع المنتجات الإلكترونية والكتب", descriptionEn: "Exclusive discount on all electronics and books", discountCode: "AMAZON15" },
    { name: "أبل", nameEn: "Apple", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="apple-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1d1d1f;stop-opacity:1" /><stop offset="100%" style="stop-color:#4a4a4f;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#apple-grad)"/><path d="M50 28 C42 28 38 32 38 40 C38 48 42 52 50 56 C58 52 62 48 62 40 C62 32 58 28 50 28 Z M50 56 C46 60 42 64 42 72 C42 78 46 81 50 81 C54 81 58 78 58 72 C58 64 54 60 50 56 Z M52 24 C52 22 51 20 49 20 C48 20 47 21 47 23 C47 25 48 27 50 27 C51 27 52 26 52 24 Z" fill="white"/></svg>`, discount: "10%", category: "تكنولوجيا", categoryEn: "Technology", url: "https://apple.com", validUntil: "30 يونيو 2025", validUntilEn: "June 30, 2025", description: "خصم على أجهزة iPhone, iPad, MacBook وإكسسوارات", descriptionEn: "Discount on iPhone, iPad, MacBook devices and accessories", discountCode: "APPLE10" },
    { name: "مايكروسوفت", nameEn: "Microsoft", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><rect width="100" height="100" rx="20" fill="#00A4EF"/><rect x="25" y="25" width="20" height="20" fill="#F25022"/><rect x="55" y="25" width="20" height="20" fill="#7FBA00"/><rect x="25" y="55" width="20" height="20" fill="#00A4EF" opacity="0.8"/><rect x="55" y="55" width="20" height="20" fill="#FFB900"/></svg>`, discount: "20%", category: "تكنولوجيا", categoryEn: "Technology", url: "https://microsoft.com", validUntil: "31 مارس 2025", validUntilEn: "March 31, 2025", description: "خصم على اشتراكات Office 365 والخدمات السحابية", descriptionEn: "Discount on Office 365 subscriptions and cloud services", discountCode: "MSFT20" },
    { name: "فايزر", nameEn: "Pfizer", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="pfizer-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0057A8;stop-opacity:1" /><stop offset="100%" style="stop-color:#003F73;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#pfizer-grad)"/><circle cx="50" cy="35" r="10" fill="white"/><rect x="40" y="46" width="20" height="30" rx="4" fill="white"/><rect x="33" y="53" width="6" height="2.5" fill="#0057A8"/><rect x="61" y="53" width="6" height="2.5" fill="#0057A8"/><circle cx="50" cy="65" r="3" fill="#0057A8"/></svg>`, discount: "25%", category: "أدوية", categoryEn: "Pharmacy", url: "https://pfizer.com", validUntil: "31 يناير 2025", validUntilEn: "January 31, 2025", description: "خصم على المكملات الغذائية والأدوية المعتمدة", descriptionEn: "Discount on dietary supplements and approved medications", discountCode: "PFIZER25" },
    { name: "نوفارتس", nameEn: "Novartis", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="novartis-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#E31E24;stop-opacity:1" /><stop offset="100%" style="stop-color:#A51419;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#novartis-grad)"/><path d="M30 45 L38 37 L46 45 L38 53 Z M54 45 L62 37 L70 45 L62 53 Z M42 59 L50 51 L58 59 L50 67 Z" fill="white"/></svg>`, discount: "18%", category: "أدوية", categoryEn: "Pharmacy", url: "https://novartis.com", validUntil: "28 فبراير 2025", validUntilEn: "February 28, 2025", description: "خصم على منتجات العناية الصحية والأدوية", descriptionEn: "Discount on healthcare products and medications", discountCode: "NOVARTIS18" },
    { name: "نستله", nameEn: "Nestle", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="nestle-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" /><stop offset="100%" style="stop-color:#654321;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#nestle-grad)"/><ellipse cx="38" cy="46" rx="10" ry="12" fill="white"/><ellipse cx="62" cy="46" rx="10" ry="12" fill="white"/><path d="M28 60 Q50 72 72 60" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="38" cy="46" r="3.5" fill="#654321"/><circle cx="62" cy="46" r="3.5" fill="#654321"/><path d="M35 36 Q38 32 41 36" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M59 36 Q62 32 65 36" stroke="white" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`, discount: "12%", category: "أغذية", categoryEn: "Food", url: "https://nestle.com", validUntil: "31 ديسمبر 2024", validUntilEn: "December 31, 2024", description: "خصم على جميع منتجات نستله الغذائية والمشروبات", descriptionEn: "Discount on all Nestle food products and beverages", discountCode: "NESTLE12" },
    { name: "كوكاكولا", nameEn: "Coca-Cola", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="coca-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F40009;stop-opacity:1" /><stop offset="100%" style="stop-color:#C20007;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#coca-grad)"/><ellipse cx="50" cy="50" rx="25" ry="32" fill="white"/><path d="M32 42 Q50 46 68 42" stroke="#F40009" stroke-width="2.5" fill="none"/><path d="M32 54 Q50 58 68 54" stroke="#F40009" stroke-width="2.5" fill="none"/><circle cx="50" cy="48" r="13" fill="none" stroke="#F40009" stroke-width="2"/></svg>`, discount: "15%", category: "أغذية", categoryEn: "Food", url: "https://coca-cola.com", validUntil: "30 أبريل 2025", validUntilEn: "April 30, 2025", description: "خصم على المشروبات الغازية والعصائر الطبيعية", descriptionEn: "Discount on soft drinks and natural juices", discountCode: "COLA15" },
    { name: "زارا", nameEn: "Zara", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="zara-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#000000;stop-opacity:1" /><stop offset="100%" style="stop-color:#2C2C2C;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#zara-grad)"/><text x="50" y="58" font-size="28" text-anchor="middle" fill="white" font-weight="bold" font-family="serif" letter-spacing="1">ZARA</text><rect x="30" y="65" width="40" height="2" fill="white"/></svg>`, discount: "30%", category: "ملابس", categoryEn: "Clothing", url: "https://zara.com", validUntil: "31 يناير 2025", validUntilEn: "January 31, 2025", description: "خصم على الملابس الرجالية والنسائية - مجموعة الشتاء", descriptionEn: "Discount on men's and women's clothing - Winter collection", discountCode: "ZARA30" },
    { name: "نايكي", nameEn: "Nike", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="nike-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" /><stop offset="100%" style="stop-color:#F7931E;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#nike-grad)"/><path d="M22 55 L42 46 L48 51 L72 36 L75 41 L48 58 L42 53 L24 60 Z" fill="white"/></svg>`, discount: "25%", category: "ملابس", categoryEn: "Clothing", url: "https://nike.com", validUntil: "31 مارس 2025", validUntilEn: "March 31, 2025", description: "خصم على الأحذية والملابس الرياضية والإكسسوارات", descriptionEn: "Discount on shoes, sportswear and accessories", discountCode: "NIKE25" },
    { name: "ماكدونالدز", nameEn: "McDonald's", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="mcdonalds-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFC72C;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFAA00;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="#DA291C"/><path d="M28 68 Q28 35 36 35 Q36 58 44 58 Q44 58 50 58 Q56 58 56 58 Q64 58 64 35 Q72 35 72 68" fill="url(#mcdonalds-grad)" stroke="url(#mcdonalds-grad)" stroke-width="2"/></svg>`, discount: "20%", category: "مطاعم", categoryEn: "Restaurants", url: "https://mcdonalds.com", validUntil: "31 ديسمبر 2024", validUntilEn: "December 31, 2024", description: "خصم على جميع الوجبات - صالح في جميع الفروع", descriptionEn: "Discount on all meals - Valid at all branches", discountCode: "MCDO20" },
    { name: "ستاربكس", nameEn: "Starbucks", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="starbucks-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#00704A;stop-opacity:1" /><stop offset="100%" style="stop-color:#005A3C;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#starbucks-grad)"/><circle cx="50" cy="50" r="30" fill="white"/><circle cx="50" cy="50" r="26" fill="#00704A"/><circle cx="43" cy="46" r="2.5" fill="white"/><circle cx="57" cy="46" r="2.5" fill="white"/><path d="M38 54 Q50 62 62 54" stroke="white" stroke-width="2" fill="none"/><path d="M40 38 Q50 34 60 38" stroke="white" stroke-width="2" fill="none"/><path d="M35 48 Q32 50 32 53" stroke="white" stroke-width="1.5" fill="none"/><path d="M65 48 Q68 50 68 53" stroke="white" stroke-width="1.5" fill="none"/></svg>`, discount: "15%", category: "مطاعم", categoryEn: "Restaurants", url: "https://starbucks.com", validUntil: "30 يونيو 2025", validUntilEn: "June 30, 2025", description: "خصم على المشروبات الساخنة والباردة والحلويات", descriptionEn: "Discount on hot and cold beverages and desserts", discountCode: "SBUX15" },
    { name: "أوبر", nameEn: "Uber", logo: `<svg viewBox="0 0 100 100" class="w-full h-full"><defs><linearGradient id="uber-grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#000000;stop-opacity:1" /><stop offset="100%" style="stop-color:#2C2C2C;stop-opacity:1" /></linearGradient></defs><rect width="100" height="100" rx="20" fill="url(#uber-grad)"/><rect x="28" y="38" width="44" height="24" rx="12" fill="white"/><text x="50" y="55" font-size="16" text-anchor="middle" fill="#000000" font-weight="bold">Uber</text></svg>`, discount: "10%", category: "خدمات", categoryEn: "Services", url: "https://uber.com", validUntil: "31 مايو 2025", validUntilEn: "May 31, 2025", description: "خصم على رحلات أوبر - 10 رحلات شهرياً", descriptionEn: "Discount on Uber rides - 10 rides per month", discountCode: "UBER10" }
];

/* ========================
   2. إدارة الحالة
   ======================== */
let currentLanguage = 'ar';
let activeCategory = "الكل";
let searchQuery = "";
let currentColorTheme = 'default';

const categoryTranslations = {
    ar: ["الكل", "تكنولوجيا", "أدوية", "أغذية", "ملابس", "مطاعم", "خدمات"],
    en: ["All", "Technology", "Pharmacy", "Food", "Clothing", "Restaurants", "Services"]
};

/* ========================
   3. الدوال المساعدة
   ======================== */
function generateBarcode(text, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    const width = 300, height = 120, barWidth = 2;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width); svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bg.setAttribute("width", width); bg.setAttribute("height", height);
    bg.setAttribute("fill", "white"); svg.appendChild(bg);
    let x = 15;
    [1,1,1].forEach((w, i) => {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x); rect.setAttribute("y", 15);
        rect.setAttribute("width", barWidth * w); rect.setAttribute("height", 70);
        rect.setAttribute("fill", i % 2 === 0 ? "black" : "white");
        if (i % 2 === 0) svg.appendChild(rect); x += barWidth * w;
    });
    x += 2;
    for (let i = 0; i < 30; i++) {
        const w = Math.floor(Math.random() * 3) + 1;
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", x); rect.setAttribute("y", 15);
        rect.setAttribute("width", barWidth * w); rect.setAttribute("height", 70);
        rect.setAttribute("fill", i % 2 === 0 ? "black" : "white");
        if (i % 2 === 0) svg.appendChild(rect); x += barWidth * w;
    }
    const codeText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    codeText.setAttribute("x", width / 2); codeText.setAttribute("y", 110);
    codeText.setAttribute("text-anchor", "middle"); codeText.setAttribute("font-family", "Arial, sans-serif");
    codeText.setAttribute("font-size", "14"); codeText.setAttribute("font-weight", "bold");
    codeText.setAttribute("fill", "#333"); codeText.textContent = text;
    svg.appendChild(codeText); container.appendChild(svg);
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text; textarea.style.position = 'fixed'; textarea.style.opacity = '0';
    document.body.appendChild(textarea); textarea.select();
    try { document.execCommand('copy'); showCopyNotification(); } catch (err) { console.error(err); }
    document.body.removeChild(textarea);
}

function showCopyNotification() {
    const n = document.getElementById('copy-notification');
    n.innerHTML = `<div class="copy-notification">${translations[currentLanguage].copied_success}</div>`;
    setTimeout(() => { n.innerHTML = ''; }, 2000);
}

/* ========================
   4. إدارة الثيم واللغة
   ======================== */
function updateIcons() {
    const isLight = document.body.classList.contains('light-mode');
    document.getElementById('theme-icon').innerHTML = isLight ? icons.moon : icons.sun;
    document.getElementById('language-icon').innerHTML = currentLanguage === 'en' ? icons.langEn : icons.langAr;
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    updateIcons();
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    const html = document.documentElement, body = document.body;
    if (currentLanguage === 'en') {
        html.setAttribute('lang', 'en'); html.setAttribute('dir', 'ltr');
        body.setAttribute('lang', 'en'); body.setAttribute('dir', 'ltr');
        document.title = 'Employee Benefits Portal';
    } else {
        html.setAttribute('lang', 'ar'); html.setAttribute('dir', 'rtl');
        body.setAttribute('lang', 'ar'); body.setAttribute('dir', 'rtl');
        document.title = 'بوابة مزايا الموظفين';
    }
    localStorage.setItem('language', currentLanguage);
    updateIcons(); updateLanguageContent();
    activeCategory = categoryTranslations[currentLanguage][0];
    renderCategories(); filterCompanies();
}

function toggleColorThemes() {
    const d = document.getElementById('color-themes-dropdown');
    d.classList.toggle('show');
    const close = (e) => { if (!e.target.closest('.color-theme-selector')) { d.classList.remove('show'); document.removeEventListener('click', close); } };
    document.addEventListener('click', close);
}

function setColorTheme(theme) {
    const b = document.body;
    b.className = b.className.replace(/theme-\w+/g, '');
    if (theme !== 'default') b.classList.add(`theme-${theme}`);
    if (localStorage.getItem('theme') === 'light') b.classList.add('light-mode');
    currentColorTheme = theme; localStorage.setItem('colorTheme', theme);
    document.querySelectorAll('.color-theme-option').forEach(o => o.classList.remove('active'));
    document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');
    document.getElementById('color-themes-dropdown').classList.remove('show');
}

function updateLanguageContent() {
    const t = translations[currentLanguage];
    document.getElementById('hero-title').textContent = t.hero_title;
    document.getElementById('hero-subtitle').textContent = t.hero_subtitle;
    document.getElementById('search-input').placeholder = t.search_placeholder;
    document.getElementById('footer-text').textContent = t.footer_text;
    document.getElementById('no-results-title').textContent = t.no_results_title;
    document.getElementById('no-results-text').textContent = t.no_results_text;
    const names = document.querySelectorAll('.theme-name');
    ['default', 'sunset', 'forest', 'ocean', 'crimson', 'lavender', 'mint', 'amber', 'pink', 'teal'].forEach((th, i) => { if(names[i]) names[i].textContent = t[`theme_${th}`]; });
}

function loadPreferences() {
    const theme = localStorage.getItem('theme'), lang = localStorage.getItem('language'), col = localStorage.getItem('colorTheme');
    if (theme === 'light') document.body.classList.add('light-mode');
    if (lang === 'en') {
        currentLanguage = 'en';
        document.documentElement.setAttribute('lang', 'en'); document.documentElement.setAttribute('dir', 'ltr');
        document.body.setAttribute('lang', 'en'); document.body.setAttribute('dir', 'ltr');
        updateLanguageContent();
    }
    if (col && col !== 'default') setColorTheme(col);
    updateIcons();
}

/* ========================
   5. العرض والمنطق
   ======================== */
function showModal(company) {
    const t = translations[currentLanguage];
    const barcodeId = 'barcode-' + Date.now();
    const name = currentLanguage === 'ar' ? company.name : company.nameEn;
    const cat = currentLanguage === 'ar' ? company.category : company.categoryEn;
    const date = currentLanguage === 'ar' ? company.validUntil : company.validUntilEn;
    const desc = currentLanguage === 'ar' ? company.description : company.descriptionEn;
    
    const html = `
        <div class="modal-overlay" onclick="closeModal(event)">
            <div class="modal-content scrollbar-custom" onclick="event.stopPropagation()">
                <div class="p-8 pb-0 text-center">
                    <div class="modal-logo">${company.logo}</div>
                    <h2 class="text-3xl font-bold text-styled mb-2">${name}</h2>
                    <span class="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-500 rounded-full text-sm font-bold">${cat}</span>
                </div>
                <div class="p-6 text-center">
                    <div class="modal-discount mb-4">${company.discount}</div>
                    <p class="text-secondary-styled text-sm">${t.discount_label}</p>
                </div>
                <div class="modal-divider"></div>
                <div class="p-8 pt-0 text-center">
                    <p class="text-secondary-styled mb-4 font-bold">${t.scan_barcode}</p>
                    <div class="barcode-container"><div id="${barcodeId}" class="barcode-wrapper"></div></div>
                    <div class="mt-6">
                        <p class="text-secondary-styled text-sm mb-3">${t.or_use_code}</p>
                        <div class="discount-code-box inline-flex items-center gap-3" onclick="copyToClipboard('${company.discountCode}')" title="${t.click_to_copy}">
                            <span class="text-2xl">✂️</span><span class="text-styled font-bold text-2xl tracking-wider">${company.discountCode}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-divider"></div>
                <div class="p-8 pt-0 space-y-6 text-right" dir="${currentLanguage === 'ar' ? 'rtl' : 'ltr'}">
                    <div class="detail-row"><div class="modal-label"><span>📅</span><span>${t.valid_until}</span></div><div class="modal-value">${date}</div></div>
                    <div class="detail-row"><div class="modal-label"><span>📝</span><span>${t.offer_details}</span></div><div class="modal-value">${desc}</div></div>
                    <div class="detail-row"><div class="modal-label"><span>💡</span><span>${t.how_to_use}</span></div><div class="modal-value text-sm">${t.how_to_use_text}</div></div>
                </div>
                <div class="p-8 pt-0 flex gap-4">
                    <button onclick="closeModal()" class="close-btn flex-1 px-6 py-4 rounded-xl font-bold text-lg hover:shadow-lg transform active:scale-95 transition-all">${t.close}</button>
                    <a href="${company.url}" target="_blank" class="visit-btn flex-1 px-6 py-4 rounded-xl font-bold text-lg text-white text-center hover:shadow-lg transform active:scale-95 transition-all">${t.visit_website}</a>
                </div>
            </div>
        </div>
    `;
    document.getElementById('modal-container').innerHTML = html;
    setTimeout(() => { generateBarcode(company.discountCode, barcodeId); }, 100);
}

function closeModal(event) {
    if (!event || event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
        document.getElementById('modal-container').innerHTML = '';
    }
}

function renderCategories() {
    const c = document.getElementById('categories-container');
    c.innerHTML = categoryTranslations[currentLanguage].map(cat => `
        <button class="category-badge px-6 py-2 rounded-full text-sm font-bold transition-all ${cat === activeCategory ? 'active' : ''}" onclick="filterByCategory('${cat}')">${cat}</button>
    `).join('');
}

function renderCards(list) {
    const g = document.getElementById('cards-grid'), nr = document.getElementById('no-results');
    if (list.length === 0) { g.innerHTML = ''; nr.classList.remove('hidden'); return; }
    nr.classList.add('hidden');
    g.innerHTML = list.map((c, i) => {
        const name = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return `
            <div class="glass-card p-8 cursor-pointer card-enter" style="animation-delay: ${i * 0.1}s" onclick='showModal(${JSON.stringify(c).replace(/'/g, "&apos;")})'>
                <div class="text-center">
                    <div class="logo-container">${c.logo}</div>
                    <div class="mb-4"><span class="discount-badge">${c.discount}</span></div>
                    <h3 class="text-2xl font-bold text-styled mb-3">${name}</h3>
                    <span class="inline-block px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-500 rounded-full text-sm font-bold">${cat}</span>
                </div>
            </div>
        `;
    }).join('');
}

function filterCompanies() {
    let f = companies;
    if (activeCategory !== categoryTranslations[currentLanguage][0]) {
        f = f.filter(c => (currentLanguage === 'ar' ? c.category : c.categoryEn) === activeCategory);
    }
    if (searchQuery) {
        f = f.filter(c => {
            const n = currentLanguage === 'ar' ? c.name : c.nameEn;
            const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
            return n.toLowerCase().includes(searchQuery.toLowerCase()) || cat.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }
    renderCards(f);
}

function filterByCategory(cat) { activeCategory = cat; renderCategories(); filterCompanies(); }

function showSuggestions(q) {
    const s = document.getElementById('suggestions');
    if (!q) { s.classList.add('hidden'); return; }
    const m = companies.filter(c => {
        const n = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return n.toLowerCase().includes(q.toLowerCase()) || cat.toLowerCase().includes(q.toLowerCase());
    });
    if (m.length === 0) { s.classList.add('hidden'); return; }
    s.innerHTML = m.map(c => {
        const n = currentLanguage === 'ar' ? c.name : c.nameEn;
        const cat = currentLanguage === 'ar' ? c.category : c.categoryEn;
        return `<div class="suggestion-item p-4 cursor-pointer flex items-center gap-4" onclick="selectSuggestion('${n}')"><div class="suggestion-logo">${c.logo}</div><div class="flex-1"><div class="text-styled font-bold">${n}</div><div class="text-sm text-secondary-styled">${cat}</div></div><div class="text-blue-400 font-bold">${c.discount}</div></div>`;
    }).join('');
    s.classList.remove('hidden');
}

function selectSuggestion(n) {
    const i = document.getElementById('search-input');
    i.value = n; searchQuery = n; filterCompanies();
    document.getElementById('suggestions').classList.add('hidden');
}

/* ========================
   6. تهيئة النظام
   ======================== */
document.getElementById('search-input').addEventListener('input', (e) => { searchQuery = e.target.value; showSuggestions(searchQuery); filterCompanies(); });
document.addEventListener('click', (e) => { if (!e.target.closest('.search-container')) document.getElementById('suggestions').classList.add('hidden'); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeModal(); document.getElementById('color-themes-dropdown').classList.remove('show'); } });
loadPreferences(); activeCategory = categoryTranslations[currentLanguage][0]; renderCategories(); renderCards(companies);
