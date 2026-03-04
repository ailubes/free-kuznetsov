'use client';

import { useState } from 'react';

const initial = {
  name: '',
  email: '',
  support: false
};

export default function SupportForm() {
  const [form, setForm] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const onChange = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setMessage(data.message || 'Не вдалося відправити форму.');
        return;
      }

      setForm(initial);
      setMessage('Дякуємо. Вашу підтримку зафіксовано.');
    } catch {
      setMessage('Не вдалося відправити форму.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="support-form" onSubmit={onSubmit}>
      <label htmlFor="name">Імʼя</label>
      <input id="name" name="name" value={form.name} onChange={onChange} required />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" value={form.email} onChange={onChange} required />

      <label className="support-check" htmlFor="support">
        <input id="support" name="support" type="checkbox" checked={form.support} onChange={onChange} required />
        <span>Підтримую публічне звернення</span>
      </label>

      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? 'Надсилаємо...' : 'Підтвердити підтримку'}
      </button>

      {message ? <p className="form-message">{message}</p> : null}
    </form>
  );
}
