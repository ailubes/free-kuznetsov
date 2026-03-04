'use client';

import { useState } from 'react';

export default function ShareButton({ className = 'btn btn-outline', label = 'Share' }) {
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('');

  const copyFallback = (value) => {
    const input = document.createElement('textarea');
    input.value = value;
    input.setAttribute('readonly', '');
    input.style.position = 'absolute';
    input.style.left = '-9999px';
    document.body.appendChild(input);
    input.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(input);
    return ok;
  };

  const onShare = async (event) => {
    event.preventDefault();
    if (busy || typeof window === 'undefined') return;
    setBusy(true);
    setStatus('');

    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'FREE KUZNETSOV',
          text: 'Свободу Сергію Кузнєцову. Поширте інформацію про кампанію.',
          url: shareUrl
        });
        setStatus('Посилання поширено.');
      } else {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(shareUrl);
          setStatus('Посилання скопійовано.');
        } else if (copyFallback(shareUrl)) {
          setStatus('Посилання скопійовано.');
        } else {
          window.prompt('Скопіюйте посилання:', shareUrl);
          setStatus('Скопіюйте посилання у вікні.');
        }
      }
    } catch {
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(shareUrl);
          setStatus('Посилання скопійовано.');
        } catch {
          if (copyFallback(shareUrl)) {
            setStatus('Посилання скопійовано.');
          } else {
            window.prompt('Скопіюйте посилання:', shareUrl);
            setStatus('Скопіюйте посилання у вікні.');
          }
        }
      } else if (copyFallback(shareUrl)) {
        setStatus('Посилання скопійовано.');
      } else {
        window.prompt('Скопіюйте посилання:', shareUrl);
        setStatus('Скопіюйте посилання у вікні.');
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <a href="#" className={className} onClick={onShare} aria-disabled={busy} role="button">
        {busy ? '...' : label}
      </a>
      {status ? <p className="share-status">{status}</p> : null}
    </>
  );
}
