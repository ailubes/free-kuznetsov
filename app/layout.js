import './globals.css';

export const metadata = {
  title: 'FREE KUZNETSOV | Свободу Сергію Кузнєцову',
  description:
    'Кампанія на підтримку Сергія Кузнєцова — військовослужбовця ССО ЗСУ, який утримується під вартою в Німеччині без вироку суду.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
