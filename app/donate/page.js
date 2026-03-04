export const metadata = {
  title: 'Підтримати кампанію | FREE KUZNETSOV'
};

export default function DonatePage() {
  return (
    <main className="donate-page">
      <div className="container donate-wrap">
        <h1>Підтримати кампанію</h1>
        <p>
          Це сторінка оплати кампанії. Оберіть зручний варіант внеску для юридичного супроводу, правозахисної
          комунікації та медійної підтримки справи Сергія Кузнєцова.
        </p>

        <div className="donate-grid">
          <article className="donate-card">
            <h2>Карткою</h2>
            <p>Швидка оплата через захищену платіжну сторінку.</p>
            <a className="btn btn-primary" href="https://example-payments.org/free-kuznetsov" target="_blank" rel="noreferrer">
              Перейти до оплати
            </a>
          </article>

          <article className="donate-card">
            <h2>Банківський переказ</h2>
            <p>IBAN: UA00 0000 0000 0000 0000 0000 0000</p>
            <p>Призначення: Support Free Kuznetsov Campaign</p>
          </article>
        </div>

        <a href="/" className="btn btn-outline back-btn">
          Повернутися на головну
        </a>
      </div>
    </main>
  );
}
