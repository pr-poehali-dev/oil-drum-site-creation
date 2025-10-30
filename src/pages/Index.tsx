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
              Производство<br />нефтяных бочек
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl">
              Высокое качество и надёжность в каждом изделии
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
              <h3 className="text-3xl font-bold text-foreground mb-6">Технология производства</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Наше производство использует передовые методы обработки металла и контроля качества на каждом этапе.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                От подготовки сырья до финальной проверки — каждый процесс тщательно отлажен для достижения максимальной надёжности продукции.
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
                  <p className="text-muted-foreground">200 литров стандартный объём нефтяной бочки</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Материал</h4>
                  <p className="text-muted-foreground">Высококачественная углеродистая сталь</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Покрытие</h4>
                  <p className="text-muted-foreground">Антикоррозийное защитное покрытие</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <h4 className="text-lg font-semibold text-foreground mb-2">Толщина стенки</h4>
                  <p className="text-muted-foreground">1.2 мм для максимальной прочности</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src="https://cdn.poehali.dev/projects/b0186d83-be27-4841-ba19-b231048cc80e/files/72ef6597-27bb-493f-835a-59ef6c7292a4.jpg"
                alt="Контроль качества"
                className="w-full h-[400px] object-cover rounded-sm"
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
