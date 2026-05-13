import { Metadata } from 'next';
import { VansClient } from './vans-client';

export const metadata: Metadata = {
  title: 'Our Vans | Campway Customs',
  description: 'Browse our available Toyota HiAce campervans, completed builds, and vans currently in production. Custom campervan fit-outs in Melbourne, Australia.',
};

export default function VansPage() {
  return <VansClient />;
}
