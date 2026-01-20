'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChefHat } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-24 px-4 bg-gradient-to-br from-white via-secondary to-white min-h-[90vh] flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <ChefHat className="w-8 h-8 text-accent" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light text-text mb-6 leading-[1.1] tracking-tight">
            Кухни вашей
            <br />
            <span className="font-semibold">мечты</span>
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            Создаем кухни премиум-класса с индивидуальным дизайном.
            <span className="block mt-2">Качество, стиль и функциональность в каждой детали.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#contact"
              className="inline-flex items-center text-white gap-2 bg-text px-8 py-4 rounded-lg font-medium hover:bg-text/90 transition-all hover:scale-105 text-lg shadow-lg"
            >
              Бесплатная консультация
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-white text-text px-8 py-4 rounded-lg font-medium border-2 border-border hover:border-accent transition-all text-lg"
            >
              Смотреть каталог
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12 border-t border-border">
            {[
              { value: '10+', label: 'лет опыта' },
              { value: '500+', label: 'проектов' },
              { value: '2500м²', label: 'производство' },
              { value: '5 лет', label: 'гарантия' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-light text-text mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
}
