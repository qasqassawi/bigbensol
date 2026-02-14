// Translation data for bigbensul
export const translations = {
    en: {
        nav: {
            explore: "Explore",
            categories: "Categories",
            deals: "Deals",
            reviews: "Reviews",
            about: "About",
            submit: "Submit a Tool",
            toggleTheme: "Toggle dark mode"
        },
        hero: {
            title: "Find the right tool.",
            subtitle: "Skip the guesswork.",
            description: "Discover the best digital tools and deals with ease.",
            exploreBtn: "Explore Tools",
            picksBtn: "See Top Picks"
        },
        howItWorks: {
            label: "How It Works",
            title: "Find your perfect tool in 3 steps",
            subtitle: "Stop wasting hours researching. We've done the hard work for you.",
            step1Title: "Describe your goal",
            step1Desc: "Tell us what you want to accomplish — no need to know specific tools.",
            step2Title: "We match the best options",
            step2Desc: "Our curated recommendations find the right fit for your needs and budget.",
            step3Title: "You choose confidently",
            step3Desc: "Get honest reviews, pricing info, and deals to make the best decision."
        },
        footer: {
            description: "Your smart decision engine for digital tools. We help you find the right service, platform, or tool quickly and confidently.",
            explore: "Explore",
            allTools: "All Tools",
            categories: "Categories",
            deals: "Deals & Discounts",
            picks: "Editor's Picks",
            company: "Company",
            about: "About bigbensul",
            submit: "Submit a Tool",
            contact: "Contact",
            privacy: "Privacy Policy",
            rights: "All rights reserved."
        },
        common: {
            searchPlaceholder: "What do you want to accomplish?",
            loading: "Loading...",
            noResults: "No tools found matching your criteria.",
            learnMore: "Learn More",
            free: "Free",
            planAvailable: "plan available",
            from: "From"
        }
    },
    ar: {
        nav: {
            explore: "استكشف",
            categories: "التصنيفات",
            deals: "العروض",
            reviews: "المراجعات",
            about: "عن الموقع",
            submit: "أضف أداة",
            toggleTheme: "تبديل الوضع الليلي"
        },
        hero: {
            title: "ابحث عن الأداة المناسبة.",
            subtitle: "تجنب التخمين.",
            description: "اكتشف أفضل الأدوات الرقمية والعروض بكل سهولة.",
            exploreBtn: "استكشف الأدوات",
            picksBtn: "اطلع على أفضل الاختيارات"
        },
        howItWorks: {
            label: "كيف يعمل الموقع",
            title: "ابحث عن أداتك المثالية في 3 خطوات",
            subtitle: "توقف عن إضاعة الساعات في البحث. لقد قمنا بالعمل الشاق بالنيابة عنك.",
            step1Title: "حدد هدفك",
            step1Desc: "أخبرنا بما تريد تحقيقه — لا حاجة لمعرفة أدوات معينة.",
            step2Title: "نطابق لك أفضل الخيارات",
            step2Desc: "تجد توصياتنا المختارة الخيار الأنسب لاحتياجاتك وميزانيتك.",
            step3Title: "اختر بثقة",
            step3Desc: "احصل على مراجعات صادقة ومعلومات التسعير والعروض لاتخاذ القرار الأفضل."
        },
        footer: {
            description: "محرك القرار الذكي للأدوات الرقمية. نساعدك في العثور على الخدمة أو المنصة أو الأداة المناسبة بسرعة وثقة.",
            explore: "استكشف",
            allTools: "جميع الأدوات",
            categories: "التصنيفات",
            deals: "العروض والخصومات",
            picks: "اختيارات المحرر",
            company: "الشركة",
            about: "عن bigbensul",
            submit: "أضف أداة",
            contact: "اتصل بنا",
            privacy: "سياسة الخصوصية",
            rights: "جميع الحقوق محفوظة."
        },
        common: {
            searchPlaceholder: "ماذا تريد أن تنجز؟",
            loading: "جاري التحميل...",
            noResults: "لم يتم العثور على أدوات تطابق بحثك.",
            learnMore: "تعلم المزيد",
            free: "مجاني",
            planAvailable: "خطة متاحة",
            from: "من"
        }
    }
};

export function getTranslation(key, lang = 'en') {
    const keys = key.split('.');
    let result = translations[lang];
    for (const k of keys) {
        if (result && result[k]) {
            result = result[k];
        } else {
            return key; // Fallback to key if not found
        }
    }
    return result;
}
