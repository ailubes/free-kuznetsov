import Link from 'next/link';
import SupportForm from '@/components/support-form';

export const metadata = {
  title: 'Підписати звернення | FREE KUZNETSOV'
};

export default function SupportPage() {
  return (
    <main className="donate-page">
      <div className="container donate-wrap">
        <h1>Підписати публічне звернення</h1>
        <p>
          Залиште імʼя та email, підтвердіть підтримку — і ваш голос буде доданий до публічного звернення кампанії.
        </p>

        <div className="donate-card">
          <SupportForm />
        </div>

        <Link href="/" className="btn btn-outline back-btn">
          Повернутися на головну
        </Link>
      </div>
    </main>
  );
}
