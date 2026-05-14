export const site = {
  name: "KingNet",
  brand: "KingNet",
  tagline: "Швидкий інтернет у Дунаївцях",
  description:
    "Оптоволоконний та безпровідний інтернет 5 ГГц у Дунаївцях та Хмельницькій області. Стабільне з'єднання, чесні тарифи, миттєва підтримка.",
  url: "https://king.net.ua",
  locale: "uk_UA",
  contact: {
    phonePrimary: "+380 97 073 8857",
    phonePrimaryHref: "tel:+380970738857",
    phoneSecondary: "+380 97 075 3702",
    phoneSecondaryHref: "tel:+380970753702",
    email: "info@king.net.ua",
    emailHref: "mailto:info@king.net.ua",
    address: "вул. Шевченка, 70А, м. Дунаївці, 32400, Хмельницька обл.",
    workingHours: "Пн–Нд, 09:00–21:00",
  },
  portalUrl: "https://my.king.net.ua/",
  social: {
    facebook: "https://www.facebook.com/kingnet.internet/",
  },
};

export const nav = [
  { href: "/", label: "Головна" },
  { href: "/taryfy", label: "Тарифи" },
  { href: "/pokryttia", label: "Покриття" },
  { href: "/aktsiyi", label: "Акції" },
  { href: "/pro-nas", label: "Про нас" },
  { href: "/kontakty", label: "Контакти" },
];

export type NavItem = (typeof nav)[number];
