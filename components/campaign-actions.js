'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CampaignActions({ supportersCount = 0 }) {
  const [count, setCount] = useState(supportersCount);
  const [status, setStatus] = useState('');

  useEffect(() => {
    setCount(supportersCount);
  }, [supportersCount]);

  const shareCampaign = async () => {
    if (typeof window === 'undefined') return;
    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'FREE KUZNETSOV',
          text: 'Свободу Сергію Кузнєцову. Поширте інформацію про кампанію.',
          url: shareUrl
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
      }
      setStatus('Посилання на кампанію готове до поширення.');
    } catch {
      setStatus('Не вдалося поширити посилання. Спробуйте ще раз.');
    }
  };

  const printToPdf = () => {
    if (typeof window === 'undefined') return;
    window.print();
  };

  return (
    <>
      <div className="actions-row">
        <Link href="/support" className="btn btn-outline petition-sign-btn">
          Долучитися до звернення
        </Link>
        <Link href="/donate" className="btn btn-primary">
          Підтримати кампанію
        </Link>
      </div>

      <div className="actions-meta">
        <p className="petition-counter">Підтримали звернення: {count}</p>
        <div className="meta-buttons">
          <button type="button" className="btn btn-outline" onClick={shareCampaign}>
            Поширити посилання
          </button>
          <button type="button" className="btn btn-outline" onClick={printToPdf}>
            Експорт у PDF
          </button>
        </div>
      </div>

      {status ? <p className="action-status">{status}</p> : null}
    </>
  );
}
