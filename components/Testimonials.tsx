'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Домохозяйка',
      content: 'Заказали угловую кухню. Очень довольны результатом! Качество материалов на высоте, монтаж провели быстро и аккуратно. Кухня выглядит стильно и современно.',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      role: 'Предприниматель',
      content: 'Сделали кухню премиум-класса для нашего загородного дома. Работой мастеров очень доволен - профессионализм на каждом этапе. Рекомендую!',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      role: 'Дизайнер интерьеров',
      content: 'Сотрудничаю с этой компанией уже несколько лет. Всегда качественное исполнение, соблюдение сроков и внимание к деталям. Мои клиенты всегда довольны.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
            Отзывы клиентов
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Узнайте, что говорят о нас наши клиенты
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-accent/10">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#C9A961" stroke="#C9A961" />
                ))}
              </div>

              {/* Content */}
              <p className="text-text-secondary leading-relaxed mb-6 relative z-10">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="font-heading font-semibold text-text">
                  {testimonial.name}
                </div>
                <div className="text-sm text-text-secondary">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
