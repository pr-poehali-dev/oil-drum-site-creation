import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-foreground">БарелПром</h1>
        </div>
      </header>

      <section className="relative h-[600px] bg-muted overflow-hidden">
        <img 
          src="https://cdn.poehali.dev/projects/b0186d83-be27-4841-ba19-b231048cc80e/files/1cf636f3-7976-42a0-8fef-232d9a246bec.jpg" 
          alt="Производство нефтяных бочек"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/60 flex items-center">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl font-bold text-foreground mb-4 max-w-2xl">
              Бочка полиэтиленовая<br />227л с 2-мя пробками L-Ring
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              Надёжная тара для промышленных жидкостей
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-16 text-center">О производстве</h3>
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Icon name="Factory" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Современное оборудование</h4>
              <p className="text-muted-foreground leading-relaxed">
                Передовые технологии производства обеспечивают высокую точность и качество каждой бочки
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Icon name="ShieldCheck" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Контроль качества</h4>
              <p className="text-muted-foreground leading-relaxed">
                Многоступенчатая система проверки гарантирует соответствие всем стандартам и требованиям
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Сертификация</h4>
              <p className="text-muted-foreground leading-relaxed">
                Продукция соответствует международным стандартам качества и безопасности
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/b0186d83-be27-4841-ba19-b231048cc80e/files/5c4b1257-25dd-4845-b195-a3ffaac547a8.jpg"
                alt="Процесс производства"
                className="w-full h-[400px] object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">Полиэтиленовая бочка 227л</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Прочная и надёжная тара из пищевого полиэтилена высокой плотности с системой закрытия L-Ring.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Идеально подходит для хранения и транспортировки жидких продуктов в пищевой, химической и фармацевтической промышленности.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <p className="text-foreground">Автоматизированная линия производства</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <p className="text-foreground">Высококачественные материалы</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" size={16} className="text-accent" />
                  </div>
                  <p className="text-foreground">Строгий контроль на всех этапах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-foreground mb-6">Технические характеристики</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Объём</h4>
                  <p className="text-muted-foreground">227 литров полезного объёма</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Материал</h4>
                  <p className="text-muted-foreground">Полиэтилен высокой плотности (HDPE)</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Закрытие</h4>
                  <p className="text-muted-foreground">Система L-Ring с 2-мя пробками</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Цвет</h4>
                  <p className="text-muted-foreground">Синий (стандарт), другие цвета под заказ</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/b0186d83-be27-4841-ba19-b231048cc80e/files/570c1c23-7002-4f9d-91ef-477349dd12b2.jpg"
                alt="Бочка полиэтиленовая 227л"
                className="w-full h-[400px] object-contain rounded-sm bg-muted"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-foreground mb-16 text-center">Применение</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplet" size={24} className="text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Нефтепродукты</h4>
              <p className="text-sm text-muted-foreground">Хранение и транспортировка</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="Beaker" size={24} className="text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Химикаты</h4>
              <p className="text-sm text-muted-foreground">Безопасное хранение</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={24} className="text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Промышленность</h4>
              <p className="text-sm text-muted-foreground">Универсальная тара</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Логистика</h4>
              <p className="text-sm text-muted-foreground">Транспортировка грузов</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">БарелПром</h2>
            <p className="text-muted-foreground">Производство нефтяных бочек</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;