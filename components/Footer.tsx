import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

// Российские соцсети - кастомные SVG иконки
const VKIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.785 16.241s.287-.029.436-.18c.136-.137.132-.393.132-.393s-.02-1.123.515-1.288c.526-.164 1.203.109 1.901.791.428.415.75.774 1.08.774.27 0 .388-.203.388-.203s.07-.45-.12-.95c-.083-.25-.59-1.26-1.01-1.7-.27-.33-.234-.464.09-.77.2-.24.59-.63.59-1.18 0-.31-.16-.46-.16-.46s-.13-.31.35-.33c.18 0 .39-.01.66-.01.35 0 .46.05.6.24.12.16.39.59.39.59s.22.37.51.56c.48.31.81.24.81.24l1.9-.03s.99-.06.52-.84c-.04-.07-.29-.61-1.5-1.73-1.27-1.19-1.1-.99.43-.51.61.19 1.07.32 1.2.37.56.2.38.6.38.6l-.39 1.5s-.03.28-.08.41c-.05.13-.18.22-.18.22s-.15.09-.34-.05c-.24-.18-1.62-1.09-1.79-1.2-.19-.12-.13-.19.1-.3.11-.05.48-.12.48-.12s.31-.19.21-.44c-.05-.15-.23-.23-.23-.23l-1.9.01s-.14-.02-.24.05c-.1.07-.16.23-.16.23s-.29.87-.67 1.61c-.4.78-.56.82-.63.78-.15-.09-.11-.36-.11-.55 0-.6.01-1.54-.01-1.96 0-.31-.09-.43-.09-.43s-.07-.15.2-.15l2.45.02s.41.02.46.16c.04.14.01.45.01.45l-.01 1.89s-.01.28.06.38c.07.11.25.15.25.15s.15.03.25-.05c.1-.08.78-.89.78-.89s.62-.75 1.38-1.58c.13-.14.26-.2.35-.2.09 0 .18.01.18.01l2.4-.02s.64-.04.74.19c.09.22.01.67-.01.9l-.01.69s-.02.31.14.46c.14.13.33.12.33.12h.58s.29-.02.44-.15c.13-.12.13-.28.13-.28s.01-1.95.01-2.74c0-.84.18-1.2.18-1.2s.09-.28.26-.38c.16-.1.39-.08.39-.08l2.4.02s.64.02.52.33c-.05.15-.19.48-.4.92-.28.58-.59 1.09-.59 1.09s-.05.1-.03.19c.02.09.07.15.07.15s.05.03.1.02.2-.05.39-.2c.27-.21.6-.5 1.07-.9.85-.8 1.49-1.28 1.68-1.54.19-.26.14-.2.14-.2l-2.36.01s-.17.01-.3.08c-.12.07-.2.23-.2.23s-.01.02-.01.05l.01.05s-.38 1.8-.82 3.26c-.49 1.64-.69 1.93-.77 2.01-.18.19-.13.2-.13.3 0 .09.05.15.05.15s.09.05.25.05h1.9s.2.01.3.09c.09.07.07.22.07.22l-.01.69s-.02.45.33.52c.26.05.59-.19 1.33-1.18.92-1.23 1.61-2.78 1.61-2.78s.09-.18.15-.24c.06-.07.14-.05.14-.05l2.36-.01s.63-.03.52.33c-.05.18-.23.55-.45 1.01-.33.68-2.2 3.77-2.2 3.77s-.16.28-.12.44c.03.12.12.2.12.2s.12.07.27.05h1.83s.96.05.5.85c-.04.07-.32.61-1.5 1.73-1.27 1.19-1.1.99.43.51.61-.19 1.07-.32 1.2-.37.56-.2.38-.6.38-.6l-.39-1.5s-.03-.28-.08-.41c-.05-.13-.18-.22-.18-.22s-.15-.09-.34.05c-.24.18-1.62 1.09-1.79 1.2-.19.12-.13.19.1.3.11.05.48.12.48.12s.31.19.21.44c-.05.15-.23.23-.23.23l-1.9-.01s-.14.02-.24-.05c-.1-.07-.16-.23-.16-.23z"/>
  </svg>
);

const TelegramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161l-1.97 9.276c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
  </svg>
);

const OKIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10"/>
    <path d="M9 8h1.5c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9v-8zm1.5 6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5H10v5h.5zM14 8h2.5c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H14v-8zm2.5 6c.3 0 .5-.2.5-.5v-4c0-.3-.2-.5-.5-.5H16v5h.5z" fill="white"/>
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold text-text mb-4">
              Premium Kitchens
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Производство кухонь премиум-класса с индивидуальным дизайном и качественными материалами.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text mb-4">
              Навигация
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-text transition-colors text-sm">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-text-secondary hover:text-text transition-colors text-sm">
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-text-secondary hover:text-text transition-colors text-sm">
                  Галерея
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="text-text-secondary hover:text-text transition-colors text-sm">
                  Калькулятор
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+79001234567" className="text-text-secondary hover:text-text transition-colors text-sm">
                  +7 (900) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@premiumkitchens.ru" className="text-text-secondary hover:text-text transition-colors text-sm">
                  info@example.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  г. Москва, ул. Примерная, д. 1
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-text mb-4">
              Мы в соцсетях
            </h3>
            <div className="flex gap-4">
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="ВКонтакте"
              >
                <VKIcon size={20} />
              </button>
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Telegram"
              >
                <TelegramIcon size={20} />
              </button>
              <button 
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-colors"
                aria-label="Одноклассники"
              >
                <OKIcon size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} Premium Kitchens. Все права защищены. Демо-проект.
          </p>
        </div>
      </div>
    </footer>
  );
}
