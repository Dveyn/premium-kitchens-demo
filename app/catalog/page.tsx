'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products, categories } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { ArrowRight, Filter } from 'lucide-react';

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-light text-text mb-4">
              Каталог продукции
            </h1>
            <p className="text-lg text-text-secondary">
              Выберите идеальное решение для вашей кухни
            </p>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-text-secondary" />
              <span className="text-sm font-medium text-text-secondary uppercase tracking-wide">
                Фильтры
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-text text-white'
                      : 'bg-secondary text-text-secondary hover:bg-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link 
                key={product.id} 
                href={`/catalog/${product.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-text/0 group-hover:bg-text/10 transition-all duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full mb-3">
                      {categories.find(c => c.id === product.category)?.name}
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-text mb-3 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-accent font-semibold text-xl">
                        {formatPrice(product.price)}
                      </div>
                      <div className="flex items-center gap-2 text-text-secondary text-sm group-hover:text-accent transition-colors">
                        <span>Подробнее</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                В этой категории пока нет продуктов
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-secondary rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-heading font-semibold text-text mb-4">
              Не нашли подходящий вариант?
            </h2>
            <p className="text-text-secondary text-lg mb-8 max-w-2xl mx-auto">
              Мы создаем кухни по индивидуальным проектам. Свяжитесь с нами, 
              и мы разработаем уникальное решение специально для вас.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 text-white bg-text text-white px-8 py-4 rounded-lg font-medium hover:bg-text/90 transition-all hover:scale-105 text-lg shadow-lg"
            >
              Заказать консультацию
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
