import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  throw new Error('Missing Supabase environment variables in .env.local');
}

const client = createClient(url, key);

async function seed() {
  const charities = [
    {
      name: 'Beacon Impact Fund',
      description: 'Fueling accessible green experiences and community wellness.',
      image_url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
      category: 'Community',
      website: 'https://beaconimpact.org',
      featured: true
    },
    {
      name: 'Stroke Recovery Trust',
      description: 'Supporting golfers and families recovering from injury.',
      image_url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
      category: 'Health',
      website: 'https://stroketust.org',
      featured: true
    },
    {
      name: 'Future Greens Initiative',
      description: 'Championing youth programs, scholarships, and climate-smart greens.',
      image_url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      category: 'Education',
      website: 'https://futuregreens.io',
      featured: false
    }
  ];

  const users = [
    {
      full_name: 'Charity Admin',
      email: 'admin@golfimpact.com',
      role: 'admin'
    },
    {
      full_name: 'Golf Player',
      email: 'player@golfimpact.com',
      role: 'subscriber'
    }
  ];

  await client.from('charities').delete().neq('id', '');
  await client.from('users').delete().neq('id', '');

  for (const charity of charities) {
    await client.from('charities').insert(charity);
  }

  for (const user of users) {
    await client.from('users').insert(user);
  }

  console.log('Seed data created successfully.');
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
