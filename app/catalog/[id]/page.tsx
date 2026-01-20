'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { products } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { ArrowLeft, Check, Send } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const productId = params.id as string;
  const product = products.find(p => p.id === productId);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-7xl text-center">
            <h1 className="text-4xl font-heading font-light text-text mb-4">
              Продукт не найден
            </h1>
            <Link href="/catalog" className="text-accent hover:underline">
              Вернуться в каталог
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Order form submitted:', { product: product.name, ...formData });
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Link 
              href="/catalog"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Вернуться в каталог
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div>
              <div className="aspect-square rounded-2xl mb-4 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Thumbnail gallery could go here */}
            </div>

            {/* Product Details */}
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-light text-text mb-6">
                {product.name}
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {product.fullDescription}
              </p>

              <div className="mb-8">
                <div className="text-4xl font-heading font-light text-accent mb-2">
                  {formatPrice(product.price)}
                </div>
                <p className="text-sm text-text-secondary">Цена может варьироваться в зависимости от конфигурации</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-heading font-semibold text-text mb-4">
                  Особенности
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Order Form */}
              <div className="bg-secondary p-6 rounded-2xl">
                <h3 className="text-xl font-heading font-semibold text-text mb-4">
                  Заказать консультацию
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
                  />
                  
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm">
                      Заявка отправлена! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 text-white bg-text text-white px-6 py-3 rounded-lg font-medium hover:bg-text/90 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-light text-text mb-8">
              Технические характеристики
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.specifications.materials && (
                <div className="bg-secondary p-6 rounded-xl">
                  <h3 className="font-semibold text-text mb-3">Материалы</h3>
                  <p className="text-text-secondary">{product.specifications.materials.join(', ')}</p>
                </div>
              )}
              {product.specifications.dimensions && (
                <div className="bg-secondary p-6 rounded-xl">
                  <h3 className="font-semibold text-text mb-3">Размеры</h3>
                  <p className="text-text-secondary">{product.specifications.dimensions}</p>
                </div>
              )}
              {product.specifications.colors && (
                <div className="bg-secondary p-6 rounded-xl">
                  <h3 className="font-semibold text-text mb-3">Доступные цвета</h3>
                  <p className="text-text-secondary">{product.specifications.colors.join(', ')}</p>
                </div>
              )}
              {product.specifications.warranty && (
                <div className="bg-secondary p-6 rounded-xl">
                  <h3 className="font-semibold text-text mb-3">Гарантия</h3>
                  <p className="text-text-secondary">{product.specifications.warranty}</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="text-3xl font-heading font-light text-text mb-8">
                Похожие продукты
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link 
                    key={relatedProduct.id}
                    href={`/catalog/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                      <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-accent/5"></div>
                      <div className="p-6">
                        <h3 className="text-lg font-heading font-semibold text-text mb-2 group-hover:text-accent transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <div className="text-accent font-semibold">
                          {formatPrice(relatedProduct.price)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
