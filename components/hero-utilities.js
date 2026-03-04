'use client';

export default function HeroUtilities() {
  const shareCampaign = async (event) => {
    event.preventDefault();
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
    } catch {
      // no-op
    }
  };

  const printToPdf = (event) => {
    event.preventDefault();
    if (typeof window === 'undefined') return;
    window.print();
  };

  return (
    <div className="hero-utility-actions">
      <a href="#" className="btn btn-utility" onClick={shareCampaign}>
        Поширити посилання
      </a>
      <a href="#" className="btn btn-utility" onClick={printToPdf}>
        Експорт у PDF
      </a>
    </div>
  );
}
