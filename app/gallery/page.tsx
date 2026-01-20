'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { galleryItems } from '@/lib/data';
import { X, Image as ImageIcon } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Все работы' },
    { id: 'modern', name: 'Современные' },
    { id: 'classic', name: 'Классические' },
    { id: 'corner', name: 'Угловые' },
    { id: 'u-shaped', name: 'П-образные' },
    { id: 'premium', name: 'Премиум' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-light text-text mb-4">
              Галерея наших работ
            </h1>
            <p className="text-lg text-text-secondary">
              Более 500 реализованных проектов за 10 лет работы
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
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

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage(index)}
                className="group relative bg-secondary rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-heading font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                В этой категории пока нет работ
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox */}
      {lightboxImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="max-w-5xl w-full">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img 
                src={filteredItems[lightboxImage]?.image} 
                alt={filteredItems[lightboxImage]?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-white text-2xl font-heading font-semibold mb-2">
                {filteredItems[lightboxImage]?.title}
              </h3>
              <p className="text-white/70">
                {filteredItems[lightboxImage]?.description}
              </p>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(Math.max(0, lightboxImage - 1));
                }}
                disabled={lightboxImage === 0}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Предыдущая
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxImage(Math.min(filteredItems.length - 1, lightboxImage + 1));
                }}
                disabled={lightboxImage === filteredItems.length - 1}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                Следующая
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
