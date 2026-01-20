import { Product, Testimonial, GalleryItem, Feature, ProcessStep } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Модульная кухня",
    category: "modular",
    description: "Современная модульная кухня с возможностью индивидуальной компоновки",
    fullDescription: "Модульная кухня позволяет создать идеальное пространство, адаптированное под ваши нужды. Высококачественные материалы, продуманная эргономика и стильный дизайн.",
    price: 150000,
    image: "/images/products/interior-modern-kitchen-minimalist-style.jpg",
    images: [
      "/images/products/interior-modern-kitchen-minimalist-style.jpg",
      "/images/products/render-3d-contemporary-kitchen.jpg",
      "/images/products/room-interior-design.jpg",
    ],
    features: [
      "Индивидуальная компоновка",
      "Качественная фурнитура",
      "Современный дизайн",
      "Легкая установка"
    ],
    specifications: {
      materials: ["МДФ", "ЛДСП", "Металл"],
      dimensions: "Индивидуально",
      colors: ["Белый", "Серый", "Бежевый", "На заказ"],
      warranty: "5 лет"
    }
  },
  {
    id: "2",
    name: "Угловая кухня",
    category: "corner",
    description: "Эргономичная угловая кухня для максимального использования пространства",
    fullDescription: "Угловая кухня идеально подходит для небольших помещений, обеспечивая функциональность и комфорт. Продуманная планировка рабочего треугольника.",
    price: 180000,
    image: "/images/products/room-interior-design.jpg",
    images: [
      "/images/products/room-interior-design.jpg",
      "/images/products/interior-modern-kitchen-minimalist-style.jpg",
    ],
    features: [
      "Максимальное использование пространства",
      "Эргономичный рабочий треугольник",
      "Встроенная техника",
      "Угловые модули"
    ],
    specifications: {
      materials: ["МДФ", "Пластик", "Камень"],
      dimensions: "2.5м x 2.5м (типовой)",
      colors: ["Белый", "Графит", "Дерево"],
      warranty: "5 лет"
    }
  },
  {
    id: "3",
    name: "П-образная кухня",
    category: "u-shaped",
    description: "Просторная П-образная кухня для больших помещений",
    fullDescription: "П-образная планировка создает максимально удобное рабочее пространство с большим количеством мест хранения и рабочих поверхностей.",
    price: 250000,
    image: "/images/products/kitchen-interior-design-with-wooden-furniture.jpg",
    images: [
      "/images/products/kitchen-interior-design-with-wooden-furniture.jpg",
      "/images/products/interior-modern-kitchen-with-wooden-details.jpg",
      "/images/products/render-3d-contemporary-kitchen.jpg",
    ],
    features: [
      "Большое рабочее пространство",
      "Максимум мест хранения",
      "Интегрированная техника",
      "Островная зона (опционально)"
    ],
    specifications: {
      materials: ["Массив", "МДФ", "Кварц"],
      dimensions: "3м x 3м x 2.5м (типовой)",
      colors: ["Индивидуально"],
      warranty: "7 лет"
    }
  },
  {
    id: "4",
    name: "Кухня премиум-класса",
    category: "premium",
    description: "Эксклюзивная кухня из натуральных материалов премиум-класса",
    fullDescription: "Кухня премиум-класса сочетает в себе роскошный дизайн, лучшие материалы и передовые технологии. Каждый элемент создается вручную с учетом ваших пожеланий.",
    price: 500000,
    image: "/images/products/interior-modern-kitchen-with-wooden-details.jpg",
    images: [
      "/images/products/interior-modern-kitchen-with-wooden-details.jpg",
      "/images/products/kitchen-interior-design-with-wooden-furniture.jpg",
      "/images/products/render-3d-contemporary-kitchen.jpg",
      "/images/products/kitchen-interior-with-cookie-cutters-cooking-cookies.jpg",
    ],
    features: [
      "Натуральные материалы",
      "Эксклюзивный дизайн",
      "Премиальная фурнитура",
      "Индивидуальное исполнение",
      "Встроенная техника премиум-класса"
    ],
    specifications: {
      materials: ["Массив дерева", "Натуральный камень", "Металл"],
      dimensions: "Индивидуально",
      colors: ["Индивидуально"],
      warranty: "10 лет"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Анна Петрова",
    role: "Домохозяйка",
    content: "Заказали угловую кухню. Очень довольны результатом! Качество материалов на высоте, монтаж провели быстро и аккуратно. Кухня выглядит стильно и современно.",
    rating: 5
  },
  {
    id: "2",
    name: "Михаил Сидоров",
    role: "Предприниматель",
    content: "Сделали кухню премиум-класса для нашего загородного дома. Работой мастеров очень доволен - профессионализм на каждом этапе. Рекомендую!",
    rating: 5
  },
  {
    id: "3",
    name: "Елена Волкова",
    role: "Дизайнер интерьеров",
    content: "Сотрудничаю с этой компанией уже несколько лет. Всегда качественное исполнение, соблюдение сроков и внимание к деталям. Мои клиенты всегда довольны.",
    rating: 5
  },
  {
    id: "4",
    name: "Дмитрий Козлов",
    role: "IT-специалист",
    content: "Заказывали модульную кухню для новой квартиры. Понравилось, что можно было самому выбрать конфигурацию. Качество отличное, цена адекватная.",
    rating: 5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Современная кухня в стиле минимализм",
    category: "modern",
    image: "/images/products/interior-modern-kitchen-minimalist-style.jpg",
    description: "Белая глянцевая кухня с интегрированной техникой"
  },
  {
    id: "2",
    title: "Классическая кухня из массива",
    category: "classic",
    image: "/images/products/kitchen-interior-design-with-wooden-furniture.jpg",
    description: "Кухня премиум-класса из массива дуба"
  },
  {
    id: "3",
    title: "Угловая кухня для студии",
    category: "corner",
    image: "/images/products/room-interior-design.jpg",
    description: "Компактное решение для небольшого пространства"
  },
  {
    id: "4",
    title: "П-образная кухня с островом",
    category: "u-shaped",
    image: "/images/products/render-3d-contemporary-kitchen.jpg",
    description: "Просторная кухня для большой семьи"
  },
  {
    id: "5",
    title: "Кухня в скандинавском стиле",
    category: "modern",
    image: "/images/products/interior-modern-kitchen-with-wooden-details.jpg",
    description: "Светлая кухня с деревянными акцентами"
  },
  {
    id: "6",
    title: "Индустриальная кухня-гостиная",
    category: "modern",
    image: "/images/products/kitchen-interior-with-cookie-cutters-cooking-cookies.jpg",
    description: "Кухня в стиле лофт с открытыми полками"
  },
  {
    id: "7",
    title: "Элегантная кухня с мраморной столешницей",
    category: "premium",
    image: "/images/products/interior-modern-kitchen-with-wooden-details.jpg",
    description: "Роскошная кухня с натуральным мрамором"
  },
  {
    id: "8",
    title: "Кухня с деревянными фасадами",
    category: "classic",
    image: "/images/products/kitchen-interior-design-with-wooden-furniture.jpg",
    description: "Теплая и уютная кухня из дерева"
  }
];

export const features: Feature[] = [
  {
    id: "1",
    title: "Индивидуальный дизайн",
    description: "Создаем уникальные проекты с учетом ваших пожеланий и особенностей помещения",
    icon: "Palette"
  },
  {
    id: "2",
    title: "Качественные материалы",
    description: "Используем только проверенные материалы от надежных поставщиков",
    icon: "Award"
  },
  {
    id: "3",
    title: "Опытные мастера",
    description: "Команда профессионалов с опытом работы более 15 лет",
    icon: "Users"
  },
  {
    id: "4",
    title: "Гарантия 5 лет",
    description: "Предоставляем расширенную гарантию на все наши изделия",
    icon: "Shield"
  },
  {
    id: "5",
    title: "Бесплатный замер",
    description: "Выезд специалиста для точных замеров абсолютно бесплатно",
    icon: "Ruler"
  },
  {
    id: "6",
    title: "Монтаж под ключ",
    description: "Полный цикл работ от проектирования до финального монтажа",
    icon: "Wrench"
  }
];

export const processSteps: ProcessStep[] = [
  {
    id: "1",
    step: 1,
    title: "Заявка и консультация",
    description: "Оставьте заявку на сайте или позвоните нам. Мы ответим на все ваши вопросы и проконсультируем по выбору."
  },
  {
    id: "2",
    step: 2,
    title: "Выезд замерщика",
    description: "Специалист приедет к вам для точных замеров помещения и обсуждения деталей проекта."
  },
  {
    id: "3",
    step: 3,
    title: "Разработка проекта",
    description: "Создаем 3D-визуализацию вашей будущей кухни с учетом всех пожеланий."
  },
  {
    id: "4",
    step: 4,
    title: "Согласование и договор",
    description: "Утверждаем финальный проект, подписываем договор и вносим предоплату."
  },
  {
    id: "5",
    step: 5,
    title: "Производство",
    description: "Изготавливаем вашу кухню на собственном производстве с контролем качества на каждом этапе."
  },
  {
    id: "6",
    step: 6,
    title: "Доставка и монтаж",
    description: "Доставляем и устанавливаем кухню, подключаем технику. Сдаем объект под ключ."
  }
];

export const categories = [
  { id: "all", name: "Все категории" },
  { id: "modular", name: "Модульные кухни" },
  { id: "corner", name: "Угловые кухни" },
  { id: "u-shaped", name: "П-образные кухни" },
  { id: "premium", name: "Премиум-класс" }
];
