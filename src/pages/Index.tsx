import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Construction" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-secondary">ИП Ширинян</h1>
                <p className="text-xs text-muted-foreground">Современные технологии строительства</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О компании</a>
              <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">Связаться</Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Дорожное строительство и благоустройство
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Воплощаем инфраструктурные проекты любой сложности с применением современных технологий и материалов
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Получить расчёт
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к реализации проектов благоустройства и дорожного строительства
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/img/c54dfb0f-7e7f-4015-8dfb-dadbb43160d5.jpg" 
                  alt="Дорожное строительство"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Construction" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Дорожное строительство</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Строительство и ремонт автомобильных дорог</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Устройство асфальтобетонных покрытий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Укладка тротуарной плитки и бордюров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Дорожная разметка и установка знаков</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/img/ad699cfb-6381-4606-bcd4-dcb8eb79dbd5.jpg" 
                  alt="Благоустройство"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Trees" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">Благоустройство</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Озеленение территорий и ландшафтный дизайн</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Устройство пешеходных зон и парковок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Установка малых архитектурных форм</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Организация освещения и ливневой канализации</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-6">
                ИП Ширинян — надёжный партнёр в сфере дорожного строительства и благоустройства территорий. 
                Мы работаем с современным оборудованием и используем проверенные технологии для достижения 
                максимального качества результата.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Опыт и профессионализм</h4>
                    <p className="text-muted-foreground">Команда квалифицированных специалистов с многолетним опытом</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Гарантия качества</h4>
                    <p className="text-muted-foreground">Все работы выполняются с соблюдением ГОСТов и СНиПов</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Соблюдение сроков</h4>
                    <p className="text-muted-foreground">Четкое планирование и выполнение работ точно в срок</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center animate-slide-up">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Завершённых проектов</p>
              </Card>
              <Card className="p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Лет на рынке</p>
              </Card>
              <Card className="p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Гарантия качества</p>
              </Card>
              <Card className="p-6 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Поддержка клиентов</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Портфолио</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших успешно реализованных проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icon name="Eye" className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-1">Проект {item}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item % 2 === 0 ? "Благоустройство территории" : "Дорожное строительство"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку и мы свяжемся с вами в ближайшее время
              </p>
            </div>

            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" className="text-primary" size={20} />
                </div>
                <p className="font-medium">+7 (999) 123-45-67</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="Mail" className="text-primary" size={20} />
                </div>
                <p className="font-medium">info@shirinyan.ru</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="MapPin" className="text-primary" size={20} />
                </div>
                <p className="font-medium">г. Москва</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Construction" className="text-white" size={20} />
                </div>
                <h3 className="font-bold text-lg">ИП Ширинян</h3>
              </div>
              <p className="text-white/70 text-sm">
                Современные технологии дорожного строительства и благоустройства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Дорожное строительство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Благоустройство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Асфальтирование</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>+7 (999) 123-45-67</li>
                <li>info@shirinyan.ru</li>
                <li>г. Москва</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2024 ИП Ширинян. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
