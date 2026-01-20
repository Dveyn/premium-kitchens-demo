'use client';

import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const advantages = [
    'Индивидуальный подход к каждому проекту',
    'Собственное производство полного цикла',
    'Использование только качественных материалов',
    'Команда опытных дизайнеров и мастеров',
    'Соблюдение сроков изготовления',
    'Гарантия на все изделия 5 лет'
  ];

  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
              О компании
            </h2>
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Мы специализируемся на производстве кухонь премиум-класса уже более 10 лет. 
              Наша миссия — создавать пространства, где функциональность сочетается с эстетикой, 
              а качество подтверждается временем.
            </p>
            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              Каждая кухня — это результат слаженной работы дизайнеров, технологов и мастеров, 
              которые вкладывают душу в каждый проект.
            </p>

            <div className="space-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { 
                number: '10+', 
                label: 'лет', 
                description: 'успешной работы на рынке' 
              },
              { 
                number: '500+', 
                label: 'проектов', 
                description: 'реализовано за время работы' 
              },
              { 
                number: '2500м²', 
                label: 'площадь', 
                description: 'собственного производства' 
              },
              { 
                number: '100%', 
                label: 'качество', 
                description: 'гарантируем на все изделия' 
              }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-secondary p-8 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl font-heading font-light text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-text uppercase tracking-wide mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-text-secondary leading-relaxed">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
