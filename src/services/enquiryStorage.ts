import { SafariEnquiry } from '../types';

const STORAGE_KEY = 'fifty4_safaris_enquiries_v1';

const SEED_ENQUIRIES: SafariEnquiry[] = [
  {
    id: 'seed-1',
    referenceCode: '54S-UG-9281',
    createdAt: '2026-10-23T14:32:00Z',
    status: 'New',
    destinations: ['Uganda', 'Rwanda'],
    departureDate: '2027-01-15',
    returnDate: '2027-01-24',
    dateFlexibility: '+/- 3 Days',
    adults: 2,
    children: 0,
    accommodationStyle: 'Luxury Eco-Lodges',
    budgetPerPerson: '$5,000 - $7,500',
    currency: 'USD',
    wildlifeInterests: ['Mountain Gorillas', 'Chimpanzees', 'Tree-Climbing Lions'],
    fullName: 'Dr. Marcus Vance & Eleanor Vance',
    email: 'm.vance@vanceresearch.org',
    phone: '+1 (415) 890-4421',
    country: 'United States',
    tourId: 'gorillas-savannah-uganda',
    tourTitle: 'Gorillas & Savannah — Uganda',
    additionalRequests: 'Interested in securing 2 gorilla permits for Bwindi and celebrating our 25th wedding anniversary with a private bush dinner.',
    internalNotes: 'Client contacted via website. Requested quote for private Land Cruiser upgrade.'
  },
  {
    id: 'seed-2',
    referenceCode: '54S-EA-8840',
    createdAt: '2026-10-21T09:15:00Z',
    status: 'Proposal Sent',
    destinations: ['Kenya', 'Tanzania'],
    departureDate: '2027-08-10',
    returnDate: '2027-08-22',
    dateFlexibility: 'Exact Dates',
    adults: 4,
    children: 2,
    accommodationStyle: 'Ultra-Luxury Private Villas',
    budgetPerPerson: '$7,500 - $10,000+',
    currency: 'USD',
    wildlifeInterests: ['Great Migration', 'Hot Air Ballooning', 'Big Cats Photography'],
    fullName: 'Claire Thornton',
    email: 'cthornton@thorntonpartners.co.uk',
    phone: '+44 7911 123456',
    country: 'United Kingdom',
    tourId: 'great-migration-serengeti-mara',
    tourTitle: 'The Great Migration & Serengeti Wonders',
    additionalRequests: 'Family of 6 traveling together. Children are aged 11 and 14. Looking for interconnecting luxury tents in northern Serengeti.',
    internalNotes: 'Drafted 12-day fly-in proposal. Awaiting confirmation on flight availability at Kogatende airstrip.'
  }
];

export function getStoredEnquiries(): SafariEnquiry[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ENQUIRIES));
      return SEED_ENQUIRIES;
    }
    return JSON.parse(raw);
  } catch {
    return SEED_ENQUIRIES;
  }
}

export function saveEnquiry(enquiry: Omit<SafariEnquiry, 'id' | 'referenceCode' | 'createdAt' | 'status'>): SafariEnquiry {
  const all = getStoredEnquiries();
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const countryCode = enquiry.destinations[0] ? enquiry.destinations[0].slice(0, 2).toUpperCase() : 'AF';
  const newEnquiry: SafariEnquiry = {
    ...enquiry,
    id: 'enq-' + Date.now(),
    referenceCode: `54S-${countryCode}-${randomSuffix}`,
    createdAt: new Date().toISOString(),
    status: 'New'
  };

  const updated = [newEnquiry, ...all];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save enquiry to local storage', err);
  }
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: SafariEnquiry['status'], notes?: string): SafariEnquiry[] {
  const all = getStoredEnquiries();
  const updated = all.map(item => {
    if (item.id === id) {
      return {
        ...item,
        status,
        internalNotes: notes !== undefined ? notes : item.internalNotes
      };
    }
    return item;
  });
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update enquiry status in local storage', err);
  }
  return updated;
}

export function exportEnquiriesToCSV(): void {
  const enquiries = getStoredEnquiries();
  if (!enquiries.length) return;

  const headers = [
    'Reference Code',
    'Date Submitted',
    'Status',
    'Guest Name',
    'Email',
    'Phone',
    'Country',
    'Destinations',
    'Departure Date',
    'Travelers (Adults/Kids)',
    'Accommodation',
    'Budget',
    'Selected Tour',
    'Wildlife Interests',
    'Special Requests'
  ];

  const rows = enquiries.map(e => [
    `"${e.referenceCode}"`,
    `"${new Date(e.createdAt).toLocaleDateString()}"`,
    `"${e.status}"`,
    `"${e.fullName}"`,
    `"${e.email}"`,
    `"${e.phone}"`,
    `"${e.country}"`,
    `"${e.destinations.join(', ')}"`,
    `"${e.departureDate} (${e.dateFlexibility})"`,
    `"${e.adults} Adults, ${e.children} Children"`,
    `"${e.accommodationStyle}"`,
    `"${e.budgetPerPerson} ${e.currency}"`,
    `"${e.tourTitle || 'Custom Itinerary'}"`,
    `"${e.wildlifeInterests.join(', ')}"`,
    `"${(e.additionalRequests || '').replace(/"/g, '""')}"`
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `Fifty4_Safaris_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
