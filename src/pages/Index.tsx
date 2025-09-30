import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedView, setSelectedView] = useState<'templates' | 'admin'>('templates');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-scale-in">
                <span className="text-2xl">🎈</span>
              </div>
              <div>
                <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Balloon Shop Builder
                </h1>
                <p className="text-sm text-muted-foreground">Конструктор сайтов для аэродизайнеров</p>
              </div>
            </div>
            <nav className="flex items-center gap-4">
              <Button
                variant={selectedView === 'templates' ? 'default' : 'ghost'}
                onClick={() => setSelectedView('templates')}
                className={selectedView === 'templates' ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' : ''}
              >
                <Icon name="LayoutTemplate" className="mr-2" size={18} />
                Шаблоны
              </Button>
              <Button
                variant={selectedView === 'admin' ? 'default' : 'ghost'}
                onClick={() => setSelectedView('admin')}
                className={selectedView === 'admin' ? 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600' : ''}
              >
                <Icon name="Settings" className="mr-2" size={18} />
                Управление
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {selectedView === 'templates' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Выберите шаблон вашего магазина
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые современные решения для продажи воздушных шаров
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <Card 
                key={template.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-300 cursor-pointer animate-slide-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                  <img 
                    src={template.image} 
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-purple-600">
                      {template.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-purple-600 transition-colors">
                    {template.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {template.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 group-hover:shadow-lg transition-all">
                    <Icon name="Sparkles" className="mr-2" size={18} />
                    Использовать шаблон
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      )}

      {selectedView === 'admin' && (
        <main className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl font-heading font-bold mb-2 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Панель управления сайтом
              </h2>
              <p className="text-muted-foreground">Редактируйте контент, добавляйте товары и управляйте заказами</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {adminFeatures.map((feature, index) => (
                <Card 
                  key={feature.id}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon name={feature.icon} size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>
                    <Button variant="outline" className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-blue-500 group-hover:text-white group-hover:border-transparent transition-all">
                      {feature.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-3xl shadow-lg border-2 border-purple-100">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <Icon name="Rocket" size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold mb-2">Быстрый старт</h3>
                  <p className="text-muted-foreground mb-4">
                    Выберите шаблон, загрузите товары и начните принимать заказы уже сегодня
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                      <Icon name="Upload" className="mr-2" size={18} />
                      Загрузить товары
                    </Button>
                    <Button variant="outline">
                      <Icon name="BookOpen" className="mr-2" size={18} />
                      Инструкция
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      <footer className="border-t mt-20 py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Balloon Shop Builder</h4>
              <p className="text-sm text-muted-foreground">
                Создавайте красивые сайты для продажи воздушных шаров без программирования
              </p>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Возможности</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>10 готовых шаблонов</li>
                <li>Простой редактор</li>
                <li>Интеграции доставки</li>
                <li>Приём платежей</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Документация</li>
                <li>Видео-уроки</li>
                <li>Техподдержка</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="MessageCircle" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Phone" size={18} />
                </Button>
                <Button size="icon" variant="outline" className="rounded-full">
                  <Icon name="Mail" size={18} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Balloon Shop Builder. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

const templates = [
  {
    id: 1,
    name: "Праздник",
    category: "Универсальный",
    description: "Яркий шаблон для любого события с акцентом на категории",
    image: "/placeholder.svg",
    features: ["Каталог", "Корзина", "Отзывы"]
  },
  {
    id: 2,
    name: "Детская радость",
    category: "Детские праздники",
    description: "Игривый дизайн с фокусом на детские товары",
    image: "/placeholder.svg",
    features: ["Фотозоны", "Поиск", "Соцсети"]
  },
  {
    id: 3,
    name: "Элегант",
    category: "Премиум",
    description: "Утончённый стиль для взрослых мероприятий",
    image: "/placeholder.svg",
    features: ["Премиум", "Персонализация", "VIP"]
  }
];

const adminFeatures = [
  {
    id: 1,
    icon: "PenTool",
    title: "Редактор контента",
    description: "Изменяйте тексты, цвета и изображения в пару кликов",
    action: "Открыть редактор",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    id: 2,
    icon: "ShoppingBag",
    title: "Управление товарами",
    description: "Добавляйте товары вручную, через Excel или YML",
    action: "Добавить товары",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    id: 3,
    icon: "Image",
    title: "Логотип на фото",
    description: "Автоматическое добавление водяного знака на все фото",
    action: "Загрузить логотип",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 4,
    icon: "Truck",
    title: "Интеграции доставки",
    description: "Почта России, СДЭК и другие службы",
    action: "Настроить доставку",
    gradient: "from-cyan-500 to-teal-500"
  },
  {
    id: 5,
    icon: "CreditCard",
    title: "Платёжные системы",
    description: "Подключите приём онлайн-платежей",
    action: "Подключить оплату",
    gradient: "from-teal-500 to-green-500"
  },
  {
    id: 6,
    icon: "ClipboardList",
    title: "Учёт заказов",
    description: "Отслеживайте заказы и отправляйте в Telegram",
    action: "Открыть заказы",
    gradient: "from-green-500 to-yellow-500"
  }
];

export default Index;