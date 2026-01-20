'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { calculateKitchenPrice, formatPrice } from '@/lib/utils';
import { Calculator as CalcIcon, Send } from 'lucide-react';

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    kitchenType: 'modular',
    length: 3,
    facadeMaterial: 'mdf',
    countertopMaterial: 'ldsp',
    additionalOptions: [] as string[]
  });

  const [contactData, setContactData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  const calculatedPrice = calculateKitchenPrice(formData);

  const handleOptionToggle = (option: string) => {
    setFormData(prev => ({
      ...prev,
      additionalOptions: prev.additionalOptions.includes(option)
        ? prev.additionalOptions.filter(o => o !== option)
        : [...prev.additionalOptions, option]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Calculator order submitted:', { 
        ...formData, 
        ...contactData, 
        calculatedPrice 
      });
      setSubmitStatus('success');
      setIsSubmitting(false);
      setContactData({ name: '', phone: '', email: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
              <CalcIcon className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-light text-text mb-4">
              Калькулятор стоимости кухни
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Рассчитайте примерную стоимость вашей будущей кухни онлайн
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calculator Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Kitchen Type */}
              <div className="bg-white p-6 rounded-2xl border border-border">
                <label className="block text-lg font-heading font-semibold text-text mb-4">
                  Тип кухни
                </label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    { value: 'modular', label: 'Модульная' },
                    { value: 'corner', label: 'Угловая' },
                    { value: 'u-shaped', label: 'П-образная' },
                    { value: 'linear', label: 'Линейная' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({...formData, kitchenType: option.value})}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${
                        formData.kitchenType === option.value
                          ? 'bg-accent text-white'
                          : 'bg-secondary text-text-secondary hover:bg-border'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Length */}
              <div className="bg-white p-6 rounded-2xl border border-border">
                <label htmlFor="length" className="block text-lg font-heading font-semibold text-text mb-4">
                  Длина кухни (в метрах): {formData.length}м
                </label>
                <input
                  type="range"
                  id="length"
                  min="2"
                  max="8"
                  step="0.5"
                  value={formData.length}
                  onChange={(e) => setFormData({...formData, length: Number(e.target.value)})}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
                />
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>2м</span>
                  <span>8м</span>
                </div>
              </div>

              {/* Facade Material */}
              <div className="bg-white p-6 rounded-2xl border border-border">
                <label className="block text-lg font-heading font-semibold text-text mb-4">
                  Материал фасадов
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'mdf', label: 'МДФ', description: 'Качественный и доступный' },
                    { value: 'solid', label: 'Массив дерева', description: 'Премиальный натуральный' },
                    { value: 'plastic', label: 'Пластик', description: 'Практичный и современный' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({...formData, facadeMaterial: option.value})}
                      className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                        formData.facadeMaterial === option.value
                          ? 'bg-accent/10 border-2 border-accent'
                          : 'bg-secondary border-2 border-transparent hover:bg-border'
                      }`}
                    >
                      <div className="font-semibold text-text">{option.label}</div>
                      <div className="text-sm text-text-secondary">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Countertop Material */}
              <div className="bg-white p-6 rounded-2xl border border-border">
                <label className="block text-lg font-heading font-semibold text-text mb-4">
                  Материал столешницы
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'ldsp', label: 'ЛДСП', description: 'Бюджетный вариант' },
                    { value: 'stone', label: 'Натуральный камень', description: 'Долговечный и стильный' },
                    { value: 'quartz', label: 'Кварцевый агломерат', description: 'Премиум качество' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setFormData({...formData, countertopMaterial: option.value})}
                      className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                        formData.countertopMaterial === option.value
                          ? 'bg-accent/10 border-2 border-accent'
                          : 'bg-secondary border-2 border-transparent hover:bg-border'
                      }`}
                    >
                      <div className="font-semibold text-text">{option.label}</div>
                      <div className="text-sm text-text-secondary">{option.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Options */}
              <div className="bg-white p-6 rounded-2xl border border-border">
                <label className="block text-lg font-heading font-semibold text-text mb-4">
                  Дополнительные опции
                </label>
                <div className="space-y-2">
                  {[
                    { value: 'lighting', label: 'Подсветка', description: '+15 000 ₽' },
                    { value: 'appliances', label: 'Встроенная техника', description: '+80 000 ₽' },
                    { value: 'hardware', label: 'Премиальная фурнитура', description: '+20 000 ₽' }
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionToggle(option.value)}
                      className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                        formData.additionalOptions.includes(option.value)
                          ? 'bg-accent/10 border-2 border-accent'
                          : 'bg-secondary border-2 border-transparent hover:bg-border'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-semibold text-text">{option.label}</div>
                          <div className="text-sm text-text-secondary">{option.description}</div>
                        </div>
                        {formData.additionalOptions.includes(option.value) && (
                          <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white">
                            ✓
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Summary & Contact Form */}
            <div className="space-y-6">
              {/* Price Card */}
              <div className="bg-accent text-white p-8 rounded-2xl sticky top-24">
                <div className="text-sm uppercase tracking-wide mb-2 opacity-90">
                  Примерная стоимость
                </div>
                <div className="text-5xl font-heading font-light mb-6">
                  {formatPrice(calculatedPrice)}
                </div>
                <div className="text-sm opacity-90 mb-6">
                  Точная стоимость будет рассчитана после замера и согласования проекта
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={contactData.name}
                    onChange={(e) => setContactData({...contactData, name: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={contactData.phone}
                    onChange={(e) => setContactData({...contactData, phone: e.target.value})}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={contactData.email}
                    onChange={(e) => setContactData({...contactData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />

                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-500/20 border border-green-300/30 rounded-lg text-sm">
                      Заявка отправлена! Мы свяжемся с вами в ближайшее время.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white text-accent px-6 py-4 rounded-lg font-medium hover:bg-white/90 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? 'Отправка...' : 'Отправить расчет'}
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
