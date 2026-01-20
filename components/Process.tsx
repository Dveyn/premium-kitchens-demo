'use client';

import { Phone, Ruler, Lightbulb, FileCheck, Factory, Truck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: 1,
      title: 'Заявка и консультация',
      description: 'Оставьте заявку на сайте или позвоните нам. Мы ответим на все ваши вопросы и проконсультируем по выбору.',
      icon: Phone
    },
    {
      step: 2,
      title: 'Выезд замерщика',
      description: 'Специалист приедет к вам для точных замеров помещения и обсуждения деталей проекта.',
      icon: Ruler
    },
    {
      step: 3,
      title: 'Разработка проекта',
      description: 'Создаем 3D-визуализацию вашей будущей кухни с учетом всех пожеланий.',
      icon: Lightbulb
    },
    {
      step: 4,
      title: 'Согласование и договор',
      description: 'Утверждаем финальный проект, подписываем договор и вносим предоплату.',
      icon: FileCheck
    },
    {
      step: 5,
      title: 'Производство',
      description: 'Изготавливаем вашу кухню на собственном производстве с контролем качества на каждом этапе.',
      icon: Factory
    },
    {
      step: 6,
      title: 'Доставка и монтаж',
      description: 'Доставляем и устанавливаем кухню, подключаем технику. Сдаем объект под ключ.',
      icon: Truck
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
            Процесс работы
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Простой и прозрачный процесс от заявки до установки готовой кухни
          </p>
        </div>

        {/* Process Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-heading font-bold shadow-lg">
                  {item.step}
                </div>

                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6 mt-4">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                <h3 className="text-xl font-heading font-semibold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary mb-6">
            Готовы начать работу над вашей кухней?
          </p>
          <a
            className="inline-flex items-center gap-2 text-white bg-text px-8 py-4 rounded-lg font-medium hover:bg-text/90 transition-all hover:scale-105 text-lg shadow-lg"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}
