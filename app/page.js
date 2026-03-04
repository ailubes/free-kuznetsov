import Link from 'next/link';
import CampaignActions from '@/components/campaign-actions';
import HeroUtilities from '@/components/hero-utilities';
import ShareButton from '@/components/share-button';
import { DetentionCounter, TemplateControls } from '@/components/template-controls';
import { getSupportersCount } from '@/lib/support-db';
import { news, timeline } from '@/lib/content';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  const supportersCount = getSupportersCount();

  return (
    <main>
      <TemplateControls />

      <section className="hero tactical-intel-bg">
        <div className="hero-bg" />
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-label tech-mono">
                <span className="lang-ua">Сектор: Захист Прав Людини</span>
                <span className="lang-en">Sector: Human Rights Defense</span>
              </span>

              <h1 className="rugged-header">
                <span className="lang-ua">
                  Свободу Сергію <span>Кузнєцову</span>
                </span>
                <span className="lang-en">
                  Free Serhii <span>Kuznetsov</span>
                </span>
              </h1>

              <p className="hero-sub">
                <span className="lang-ua">
                  Військовослужбовець ССО ЗСУ. Доброволець. Наразі утримується під вартою в Німеччині без вироку
                  суду. Наш обов&apos;язок — боротися за тих, хто боровся за нас.
                </span>
                <span className="lang-en">
                  Ukrainian SOF Operative. Volunteer. Currently held in custody in Germany without a verdict. It is
                  our duty to fight for those who fought for us.
                </span>
              </p>

              <CampaignActions />
              <div className="counter-row">
                <DetentionCounter />
              </div>

              <HeroUtilities />
            </div>

            <div className="hero-image-wrap">
              <div className="bracket tl" />
              <div className="bracket tr" />
              <div className="bracket bl" />
              <div className="bracket br" />
              <img src="/img/free-serhii-kuznetsov.jpeg" alt="Serhii Kuznetsov" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num tech-mono">File_01</span>
            <h2 className="section-title rugged-header">
              <span className="lang-ua">Досьє Оперативника</span>
              <span className="lang-en">Operative Dossier</span>
            </h2>
          </div>

          <div className="info-grid">
            <div className="reveal">
              <div className="fact-card">
                <div className="fact-card-head">
                  <div className="tech-mono head-amber">/// ОСНОВНІ_ДАНІ</div>
                </div>

                <div className="fact-item">
                  <div className="fact-icon">[+]</div>
                  <div className="fact-text">
                    <span className="lang-ua">Сили Спеціальних Операцій ЗСУ</span>
                    <span className="lang-en">Special Operations Forces of Ukraine</span>
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-icon">[+]</div>
                  <div className="fact-text">
                    <span className="lang-ua">Доброволець з перших днів вторгнення</span>
                    <span className="lang-en">Volunteer since Day 1 of invasion</span>
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-icon">[+]</div>
                  <div className="fact-text">
                    <span className="lang-ua">Статус: Утримується в Гамбурзі, Німеччина</span>
                    <span className="lang-en">Status: Detained in Hamburg, Germany</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal case-column">
              <div className="fact-card fact-card-red">
                <div className="fact-card-head">
                  <div className="tech-mono head-red">/// СПРАВА_ДЕТАЛІ</div>
                </div>

                <p className="case-intro">
                  Українця Сергія Кузнєцова, підозрюваного в диверсії на газопроводах «Північний потік», утримують під
                  вартою в Німеччині (Федеральна в&apos;язниця Гамбургу) після екстрадиції з Італії наприкінці 2025 року.
                  Суд неодноразово відхиляв апеляції, підтверджуючи законність арешту через підозру у виконанні
                  завдання іноземної держави.
                </p>

                <div className="fact-item">
                  <div className="fact-icon icon-red">[!]</div>
                  <div className="fact-text">
                    <strong>Арешт та екстрадиція:</strong> Затриманий 21 серпня 2025 року в Італії (Ріміні), 27
                    листопада екстрадований до Німеччини.
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-icon icon-red">[!]</div>
                  <div className="fact-text">
                    <strong>Умови утримання:</strong> Перебував під вартою в Італії, оголошував голодування через
                    неналежні умови (відсутність дієтичного харчування, утримання з курцями, ізоляція).
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-icon icon-red">[!]</div>
                  <div className="fact-text">
                    <strong>Скарги та голодування:</strong> У листопаді 2025 року омбудсман Дмитро Лубінець повідомляв
                    про погіршення здоров&apos;я Кузнєцова, який втратив 9 кг.
                  </div>
                </div>
                <div className="fact-item">
                  <div className="fact-icon">[?]</div>
                  <div className="fact-text">
                    <strong>Позиція захисту:</strong> Кузнєцов відкидає звинувачення, стверджуючи, що не брав участі у
                    підриві. Захист заявляє про недостатність доказів (ДНК-тести) та вказує на статус
                    військовослужбовця ССО.
                  </div>
                </div>
              </div>

              <div className="warning-box">
                <div className="warning-copy">
                  <div className="warning-title tech-mono">[!] Critical_Alert: Політичний Резонанс</div>
                  <p>
                    <span className="lang-ua">
                      Справа щодо "Північного потоку" має винятково стратегічний та політичний характер. Сергій не
                      має вироку суду. Ми вимагаємо дотримання базових прав людини та прозорого процесу.
                    </span>
                    <span className="lang-en">
                      The Nord Stream case is strategic and political. Serhii has no court conviction. We demand basic
                      human rights compliance and a transparent process.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num tech-mono">File_01A</span>
            <h2 className="section-title rugged-header">Галерея матеріалів</h2>
          </div>

          <div className="gallery-grid reveal">
            <img src="/img/full-face-kuznetsov.jpeg" alt="Сергій Кузнєцов — портрет" className="gallery-image" />
            <img src="/img/germany-detention.jpeg" alt="Матеріали справи в Німеччині" className="gallery-image" />
            <img src="/img/italy-arrest.jpeg" alt="Матеріали про затримання в Італії" className="gallery-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num tech-mono">File_02</span>
            <h2 className="section-title rugged-header">
              <span className="lang-ua">Хронологія</span>
              <span className="lang-en">Timeline</span>
            </h2>
          </div>

          <div className="timeline-scroll reveal">
            {timeline.map((block) => (
              <article className="timeline-card" key={block.year}>
                <div className="timeline-date">{block.year}</div>
                {block.entries.slice(0, 3).map((entry) => (
                  <p className="timeline-text" key={entry.date}>
                    <strong>{entry.date}</strong> {entry.text}
                  </p>
                ))}
              </article>
            ))}
          </div>

          <p className="key-phrase reveal">Злочином було будівництво Північних потоків, а не їх підрив.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num tech-mono">File_03</span>
            <h2 className="section-title rugged-header">Ініціатива родини Сергія Кузнецова</h2>
          </div>

          <div className="fact-card reveal">
            <p>
              Дружина Сергія Кузнецова офіційно звернулася до Уповноваженого Верховної Ради України з прав людини з
              проханням створити робочу групу для моніторингу дотримання прав людини у цій справі.
            </p>
            <div className="fact-item">
              <div className="fact-icon">[+]</div>
              <div className="fact-text">моніторинг дотримання прав людини;</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon">[+]</div>
              <div className="fact-text">аналіз умов тримання під вартою;</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon">[+]</div>
              <div className="fact-text">забезпечення належної правової процедури;</div>
            </div>
            <div className="fact-item">
              <div className="fact-icon">[+]</div>
              <div className="fact-text">взаємодія з міжнародними правозахисними інституціями.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-num tech-mono">File_04</span>
            <h2 className="section-title rugged-header">Новини кампанії</h2>
          </div>

          <div className="help-grid">
            {news.map((item) => (
              <article className="help-card reveal" key={item.date + item.title}>
                <div>
                  <h3 className="help-title tech-mono">{item.date}</h3>
                  <p>{item.title}</p>
                  <p>{item.summary}</p>
                </div>
                <Link href="#" className="btn btn-outline">
                  Читати
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="section">
        <div className="container">
          <div className="supporters-top-card reveal">
            <div className="days-counter supporters-counter">
              <div className="hazard-stripe" />
              <div className="days-data">
                <div className="days-number">{String(supportersCount).padStart(3, '0')}</div>
                <div className="days-label">
                  <span className="lang-ua">Підтримали звернення</span>
                  <span className="lang-en">Supporters Signed</span>
                </div>
              </div>
              <div className="hazard-stripe" />
            </div>
          </div>

          <div className="section-header reveal">
            <span className="section-num tech-mono">File_05</span>
            <h2 className="section-title rugged-header">Як ви можете допомогти</h2>
          </div>

          <div className="help-grid">
            <div className="help-card reveal">
              <div>
                <h3 className="help-title tech-mono">01_Petition</h3>
                <p>Ваш підпис — це голос проти політичного тиску.</p>
              </div>
              <Link href="/support" className="btn btn-outline">
                Підписати
              </Link>
            </div>
            <div className="help-card reveal">
              <div>
                <h3 className="help-title tech-mono">02_Support</h3>
                <p>Фінансова допомога на юридичний захист оперативника.</p>
              </div>
              <Link href="/donate" className="btn btn-primary">
                ПІДТРИМАТИ
              </Link>
            </div>
            <div className="help-card reveal">
              <div>
                <h3 className="help-title tech-mono">03_Share</h3>
                <p>Розповсюдження інформації — це захист від невідомості.</p>
              </div>
              <ShareButton label="ПОШИРИТИ" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal media-block">
          <h2 className="section-title rugged-header">Контакти для медіа</h2>
          <p>📞 +380 ХХХ ХХХ ХХ ХХ</p>
          <p>📧 freekuznetsov@gmail.com</p>
          <p>🔗 Facebook | Telegram | X</p>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2 className="footer-quote rugged-header reveal">Ми не залишаємо своїх.</h2>
          <p className="tech-mono footer-id">FREEKUZNETSOV.ORG // 2025-2026</p>
          <Link href="/donate" className="btn btn-red rugged-header">
            Долучитися до боротьби
          </Link>
        </div>
      </footer>
    </main>
  );
}
