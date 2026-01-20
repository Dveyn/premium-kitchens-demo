'use client';

import Link from 'next/link';
import { ArrowRight, Layers, CornerDownRight, Box, Crown } from 'lucide-react';

export default function Products() {
  const categories = [
    {
      id: 'modular',
      name: 'Модульные кухни',
      description: 'Гибкие решения для любого пространства с возможностью индивидуальной компоновки',
      icon: Layers,
      price: 'от 150 000 ₽'
    },
    {
      id: 'corner',
      name: 'Угловые кухни',
      description: 'Эргономичные решения для максимального использования пространства',
      icon: CornerDownRight,
      price: 'от 180 000 ₽'
    },
    {
      id: 'u-shaped',
      name: 'П-образные кухни',
      description: 'Просторные кухни с большим количеством рабочих зон и мест хранения',
      icon: Box,
      price: 'от 250 000 ₽'
    },
    {
      id: 'premium',
      name: 'Премиум-класс',
      description: 'Эксклюзивные кухни из натуральных материалов с индивидуальным дизайном',
      icon: Crown,
      price: 'от 500 000 ₽'
    }
  ];

  return (
    <section id="products" className="py-24 px-4 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
            Наша продукция
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Широкий выбор решений для создания идеальной кухни вашей мечты
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-text mb-3">
                  {category.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="text-accent font-semibold text-lg mb-4">
                  {category.price}
                </div>
                <div className="flex items-center gap-2 text-text-secondary text-sm group-hover:text-accent transition-colors">
                  <span>Подробнее</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 text-white bg-text text-white px-8 py-4 rounded-lg font-medium hover:bg-text/90 transition-all hover:scale-105 text-lg shadow-lg"
          >
            Перейти в каталог
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
