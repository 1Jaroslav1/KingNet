export type Tariff = {
  id: string;
  name: string;
  type: "fiber" | "wifi";
  speed: number; // Mbps
  upload?: number;
  price: number; // UAH/month
  features: string[];
  popular?: boolean;
  badge?: string;
};

export const tariffs: Tariff[] = [
  {
    id: "fiber-100",
    name: "Старт",
    type: "fiber",
    speed: 100,
    upload: 100,
    price: 180,
    features: [
      "Симетрична швидкість 100/100 Мбіт/с",
      "Безлімітний трафік",
      "Статична IP-адреса за запитом",
      "Цілодобова підтримка",
    ],
  },
  {
    id: "fiber-300",
    name: "Дім",
    type: "fiber",
    speed: 300,
    upload: 300,
    price: 240,
    popular: true,
    badge: "Найпопулярніший",
    features: [
      "Симетрична швидкість 300/300 Мбіт/с",
      "Безлімітний трафік",
      "Wi-Fi роутер у подарунок при річній оплаті",
      "Пріоритетна підтримка",
    ],
  },
  {
    id: "fiber-1000",
    name: "Гігабіт",
    type: "fiber",
    speed: 1000,
    upload: 1000,
    price: 360,
    features: [
      "До 1 Гбіт/с по оптоволокну",
      "Готовий для 4K/8K, хмарного гейміну та стрімів",
      "Безкоштовне підключення при річній оплаті",
      "Виділена технічна лінія",
    ],
  },
  {
    id: "wifi-30",
    name: "WiFi 30",
    type: "wifi",
    speed: 30,
    price: 200,
    features: [
      "Безпровідне з'єднання 5 ГГц",
      "Покриття там, де немає оптоволокна",
      "Безлімітний трафік",
      "Швидке підключення — від 1 дня",
    ],
  },
  {
    id: "wifi-50",
    name: "WiFi 50",
    type: "wifi",
    speed: 50,
    price: 260,
    features: [
      "Стабільні 50 Мбіт/с по радіоканалу",
      "Підходить для онлайн-уроків і відеодзвінків",
      "Безлімітний трафік",
      "Безкоштовна діагностика обладнання",
    ],
  },
  {
    id: "wifi-100",
    name: "WiFi 100",
    type: "wifi",
    speed: 100,
    price: 340,
    features: [
      "До 100 Мбіт/с — максимум для радіо",
      "Ідеально для приватного сектору і дач",
      "Безлімітний трафік",
      "Можливість оренди обладнання",
    ],
  },
];
