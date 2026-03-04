'use client';

import Link from 'next/link';
export default function CampaignActions() {

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
    </>
  );
}
