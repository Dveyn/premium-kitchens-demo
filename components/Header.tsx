'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Галерея', href: '/gallery' },
    { name: 'Калькулятор', href: '/calculator' },
    { name: 'Контакты', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading font-semibold text-text">
            Premium Kitchens
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-text transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2.5 text-white bg-accent rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              Заказать звонок
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-text transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/#contact"
                className="px-6 py-2.5 text-white bg-accent rounded-md hover:bg-accent/90 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Заказать звонок
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
