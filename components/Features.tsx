'use client';

import { Palette, Award, Users, Shield, Ruler, Wrench } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Palette,
      title: 'Индивидуальный дизайн',
      description: 'Создаем уникальные проекты с учетом ваших пожеланий и особенностей помещения'
    },
    {
      icon: Award,
      title: 'Качественные материалы',
      description: 'Используем только проверенные материалы от надежных поставщиков'
    },
    {
      icon: Users,
      title: 'Опытные мастера',
      description: 'Команда профессионалов с опытом работы более 15 лет'
    },
    {
      icon: Shield,
      title: 'Гарантия 5 лет',
      description: 'Предоставляем расширенную гарантию на все наши изделия'
    },
    {
      icon: Ruler,
      title: 'Бесплатный замер',
      description: 'Выезд специалиста для точных замеров абсолютно бесплатно'
    },
    {
      icon: Wrench,
      title: 'Монтаж под ключ',
      description: 'Полный цикл работ от проектирования до финального монтажа'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
            Наши преимущества
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Почему более 500 клиентов выбрали нас для создания кухни своей мечты
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group"
              >
                <div className="flex flex-col items-start">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-text mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
