'use client';

import Link from 'next/link';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const galleryPreview = [
    {
      id: 1,
      title: 'Современная кухня в стиле минимализм',
      category: 'Модульная',
      image: './images/products/interior-modern-kitchen-minimalist-style.jpg'
    },
    {
      id: 2,
      title: 'Классическая кухня из массива',
      category: 'Премиум',
      image: './images/products/room-interior-design.jpg'
    },
    {
      id: 3,
      title: 'Угловая кухня для студии',
      category: 'Угловая',
      image: './images/products/kitchen-interior-with-cookie-cutters-cooking-cookies.jpg'
    },
    {
      id: 4,
      title: 'П-образная кухня с островом',
      category: 'П-образная',
      image: './images/products/kitchen-interior-design-with-wooden-furniture.jpg'
    },
    {
      id: 5,
      title: 'Кухня в скандинавском стиле',
      category: 'Модульная',
      image: './images/products/room-interior-design.jpg'
    },
    {
      id: 6,
      title: 'Элегантная кухня с мраморной столешницей',
      category: 'Премиум',
      image: './images/products/interior-modern-kitchen-with-wooden-details.jpg'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
            Галерея наших работ
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Посмотрите примеры реализованных проектов и вдохновитесь для создания собственной кухни
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryPreview.map((item) => (
            <div
              key={item.id}
              className="group relative bg-secondary rounded-2xl overflow-hidden aspect-[4/3] hover:shadow-xl transition-all duration-300"
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent text-white text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-white font-heading font-semibold text-lg">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-white bg-text text-white px-8 py-4 rounded-lg font-medium hover:bg-text/90 transition-all hover:scale-105 text-lg shadow-lg"
          >
            Смотреть все работы
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
