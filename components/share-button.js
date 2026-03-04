'use client';

import { useState } from 'react';

export default function ShareButton({ className = 'btn btn-outline', label = 'Share' }) {
  const [busy, setBusy] = useState(false);

  const onShare = async () => {
    if (busy || typeof window === 'undefined') return;
    setBusy(true);

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
    } finally {
      setBusy(false);
    }
  };

  return (
    <button type="button" className={className} onClick={onShare} disabled={busy}>
      {busy ? '...' : label}
    </button>
  );
}
