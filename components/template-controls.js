'use client';

import { useEffect, useState } from 'react';

const START_DATE = new Date('2025-11-27T00:00:00');

export function TemplateControls() {
  const [lang, setLang] = useState('ua');

  useEffect(() => {
    const saved = window.localStorage.getItem('preferred-lang') || 'ua';
    setLang(saved);
    document.documentElement.setAttribute('data-lang', saved);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const switchLang = (next) => {
    setLang(next);
    document.documentElement.setAttribute('data-lang', next);
    window.localStorage.setItem('preferred-lang', next);
  };

  return (
    <div className="lang-toggle">
      <button className={`lang-btn ${lang === 'ua' ? 'active' : ''}`} onClick={() => switchLang('ua')} type="button">
        UA
      </button>
      <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => switchLang('en')} type="button">
        EN
      </button>
    </div>
  );
}

export function DetentionCounter() {
  const [value, setValue] = useState('000');

  useEffect(() => {
    const now = new Date();
    const diff = Math.max(0, Math.ceil((now.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)));
    let current = 0;

    const timer = window.setInterval(() => {
      current += Math.max(1, Math.ceil(diff / 50));
      if (current >= diff) {
        current = diff;
        window.clearInterval(timer);
      }
      setValue(String(current).padStart(3, '0'));
    }, 20);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="days-counter">
      <div className="hazard-stripe" />
      <div className="days-data">
        <div className="days-number">{value}</div>
        <div className="days-label">
          <span className="lang-ua">Днів у полоні</span>
          <span className="lang-en">Days Detained</span>
        </div>
      </div>
      <div className="hazard-stripe" />
    </div>
  );
}
