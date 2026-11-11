export interface DestinationVisaInfo {
  id: 'uganda' | 'kenya' | 'tanzania' | 'rwanda' | 'east-africa-joint';
  name: string;
  tagline: string;
  image: string;
  portalName: string;
  portalUrl: string;
  authority: string;
  standardFee: string;
  processingTime: string;
  validityStay: string;
  yellowFeverPolicy: 'Strictly Mandatory for All Arrivals' | 'Mandatory if coming from/transiting endemic country' | 'Required from endemic zones';
  highlights: string[];
  documentsToCarry: {
    item: string;
    requirement: string;
    mandatory: boolean;
  }[];
  exemptNationalities: string[];
  visaRequiredNationalities: string[];
  specialNotes: Record<string, string>;
  officialTips: string[];
}

export interface ForeignCountryStatus {
  name: string;
  code: string;
  flag: string;
  continent: 'North America' | 'Europe' | 'Asia & Oceania' | 'Africa' | 'Middle East' | 'Latin America';
  popular: boolean;
}

export const ALL_WORLD_COUNTRIES: ForeignCountryStatus[] = [
  { name: 'Afghanistan', code: 'AF', flag: '🇦🇫', continent: 'Asia & Oceania', popular: false },
  { name: 'Albania', code: 'AL', flag: '🇦🇱', continent: 'Europe', popular: false },
  { name: 'Algeria', code: 'DZ', flag: '🇩🇿', continent: 'Africa', popular: false },
  { name: 'Andorra', code: 'AD', flag: '🇦🇩', continent: 'Europe', popular: false },
  { name: 'Angola', code: 'AO', flag: '🇦🇴', continent: 'Africa', popular: false },
  { name: 'Antigua and Barbuda', code: 'AG', flag: '🇦🇬', continent: 'North America', popular: false },
  { name: 'Argentina', code: 'AR', flag: '🇦🇷', continent: 'Latin America', popular: false },
  { name: 'Armenia', code: 'AM', flag: '🇦🇲', continent: 'Asia & Oceania', popular: false },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', continent: 'Asia & Oceania', popular: true },
  { name: 'Austria', code: 'AT', flag: '🇦🇹', continent: 'Europe', popular: true },
  { name: 'Azerbaijan', code: 'AZ', flag: '🇦🇿', continent: 'Asia & Oceania', popular: false },
  { name: 'Bahamas', code: 'BS', flag: '🇧🇸', continent: 'North America', popular: false },
  { name: 'Bahrain', code: 'BH', flag: '🇧🇭', continent: 'Middle East', popular: false },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', continent: 'Asia & Oceania', popular: false },
  { name: 'Barbados', code: 'BB', flag: '🇧🇧', continent: 'North America', popular: false },
  { name: 'Belarus', code: 'BY', flag: '🇧🇾', continent: 'Europe', popular: false },
  { name: 'Belgium', code: 'BE', flag: '🇧🇪', continent: 'Europe', popular: true },
  { name: 'Belize', code: 'BZ', flag: '🇧🇿', continent: 'Latin America', popular: false },
  { name: 'Benin', code: 'BJ', flag: '🇧🇯', continent: 'Africa', popular: false },
  { name: 'Bhutan', code: 'BT', flag: '🇧🇹', continent: 'Asia & Oceania', popular: false },
  { name: 'Bolivia', code: 'BO', flag: '🇧🇴', continent: 'Latin America', popular: false },
  { name: 'Bosnia and Herzegovina', code: 'BA', flag: '🇧🇦', continent: 'Europe', popular: false },
  { name: 'Botswana', code: 'BW', flag: '🇧🇼', continent: 'Africa', popular: false },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', continent: 'Latin America', popular: true },
  { name: 'Brunei', code: 'BN', flag: '🇧🇳', continent: 'Asia & Oceania', popular: false },
  { name: 'Bulgaria', code: 'BG', flag: '🇧🇬', continent: 'Europe', popular: false },
  { name: 'Burkina Faso', code: 'BF', flag: '🇧🇫', continent: 'Africa', popular: false },
  { name: 'Burundi', code: 'BI', flag: '🇧🇮', continent: 'Africa', popular: false },
  { name: 'Cambodia', code: 'KH', flag: '🇰🇭', continent: 'Asia & Oceania', popular: false },
  { name: 'Cameroon', code: 'CM', flag: '🇨🇲', continent: 'Africa', popular: false },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', continent: 'North America', popular: true },
  { name: 'Cape Verde', code: 'CV', flag: '🇨🇻', continent: 'Africa', popular: false },
  { name: 'Central African Republic', code: 'CF', flag: '🇨🇫', continent: 'Africa', popular: false },
  { name: 'Chad', code: 'TD', flag: '🇹🇩', continent: 'Africa', popular: false },
  { name: 'Chile', code: 'CL', flag: '🇨🇱', continent: 'Latin America', popular: false },
  { name: 'China', code: 'CN', flag: '🇨🇳', continent: 'Asia & Oceania', popular: true },
  { name: 'Colombia', code: 'CO', flag: '🇨🇴', continent: 'Latin America', popular: false },
  { name: 'Comoros', code: 'KM', flag: '🇰🇲', continent: 'Africa', popular: false },
  { name: 'Congo', code: 'CG', flag: '🇨🇬', continent: 'Africa', popular: false },
  { name: 'Costa Rica', code: 'CR', flag: '🇨🇷', continent: 'Latin America', popular: false },
  { name: 'Croatia', code: 'HR', flag: '🇭🇷', continent: 'Europe', popular: false },
  { name: 'Cuba', code: 'CU', flag: '🇨🇺', continent: 'Latin America', popular: false },
  { name: 'Cyprus', code: 'CY', flag: '🇨🇾', continent: 'Europe', popular: false },
  { name: 'Czech Republic', code: 'CZ', flag: '🇨🇿', continent: 'Europe', popular: false },
  { name: 'Denmark', code: 'DK', flag: '🇩🇰', continent: 'Europe', popular: true },
  { name: 'Djibouti', code: 'DJ', flag: '🇩🇯', continent: 'Africa', popular: false },
  { name: 'Dominica', code: 'DM', flag: '🇩🇲', continent: 'North America', popular: false },
  { name: 'Dominican Republic', code: 'DO', flag: '🇩🇴', continent: 'North America', popular: false },
  { name: 'Ecuador', code: 'EC', flag: '🇪🇨', continent: 'Latin America', popular: false },
  { name: 'Egypt', code: 'EG', flag: '🇪🇬', continent: 'Africa', popular: false },
  { name: 'El Salvador', code: 'SV', flag: '🇸🇻', continent: 'Latin America', popular: false },
  { name: 'Eritrea', code: 'ER', flag: '🇪🇷', continent: 'Africa', popular: false },
  { name: 'Estonia', code: 'EE', flag: '🇪🇪', continent: 'Europe', popular: false },
  { name: 'Eswatini', code: 'SZ', flag: '🇸🇿', continent: 'Africa', popular: false },
  { name: 'Ethiopia', code: 'ET', flag: '🇪🇹', continent: 'Africa', popular: false },
  { name: 'Fiji', code: 'FJ', flag: '🇫🇯', continent: 'Asia & Oceania', popular: false },
  { name: 'Finland', code: 'FI', flag: '🇫🇮', continent: 'Europe', popular: false },
  { name: 'France', code: 'FR', flag: '🇫🇷', continent: 'Europe', popular: true },
  { name: 'Gabon', code: 'GA', flag: '🇬🇦', continent: 'Africa', popular: false },
  { name: 'Gambia', code: 'GM', flag: '🇬🇲', continent: 'Africa', popular: false },
  { name: 'Georgia', code: 'GE', flag: '🇬🇪', continent: 'Asia & Oceania', popular: false },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', continent: 'Europe', popular: true },
  { name: 'Ghana', code: 'GH', flag: '🇬🇭', continent: 'Africa', popular: false },
  { name: 'Greece', code: 'GR', flag: '🇬🇷', continent: 'Europe', popular: false },
  { name: 'Grenada', code: 'GD', flag: '🇬🇩', continent: 'North America', popular: false },
  { name: 'Guatemala', code: 'GT', flag: '🇬🇹', continent: 'Latin America', popular: false },
  { name: 'Guinea', code: 'GN', flag: '🇬🇳', continent: 'Africa', popular: false },
  { name: 'Guyana', code: 'GY', flag: '🇬🇾', continent: 'Latin America', popular: false },
  { name: 'Haiti', code: 'HT', flag: '🇭🇹', continent: 'Latin America', popular: false },
  { name: 'Honduras', code: 'HN', flag: '🇭🇳', continent: 'Latin America', popular: false },
  { name: 'Hong Kong SAR', code: 'HK', flag: '🇭🇰', continent: 'Asia & Oceania', popular: false },
  { name: 'Hungary', code: 'HU', flag: '🇭🇺', continent: 'Europe', popular: false },
  { name: 'Iceland', code: 'IS', flag: '🇮🇸', continent: 'Europe', popular: false },
  { name: 'India', code: 'IN', flag: '🇮🇳', continent: 'Asia & Oceania', popular: true },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩', continent: 'Asia & Oceania', popular: false },
  { name: 'Iran', code: 'IR', flag: '🇮🇷', continent: 'Middle East', popular: false },
  { name: 'Iraq', code: 'IQ', flag: '🇮🇶', continent: 'Middle East', popular: false },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪', continent: 'Europe', popular: true },
  { name: 'Israel', code: 'IL', flag: '🇮🇱', continent: 'Middle East', popular: true },
  { name: 'Italy', code: 'IT', flag: '🇮🇹', continent: 'Europe', popular: true },
  { name: 'Jamaica', code: 'JM', flag: '🇯🇲', continent: 'North America', popular: false },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', continent: 'Asia & Oceania', popular: true },
  { name: 'Jordan', code: 'JO', flag: '🇯🇴', continent: 'Middle East', popular: false },
  { name: 'Kazakhstan', code: 'KZ', flag: '🇰🇿', continent: 'Asia & Oceania', popular: false },
  { name: 'Kenya', code: 'KE', flag: '🇰🇪', continent: 'Africa', popular: false },
  { name: 'Kuwait', code: 'KW', flag: '🇰🇼', continent: 'Middle East', popular: false },
  { name: 'Latvia', code: 'LV', flag: '🇱🇻', continent: 'Europe', popular: false },
  { name: 'Lebanon', code: 'LB', flag: '🇱🇧', continent: 'Middle East', popular: false },
  { name: 'Lesotho', code: 'LS', flag: '🇱🇸', continent: 'Africa', popular: false },
  { name: 'Liberia', code: 'LR', flag: '🇱🇷', continent: 'Africa', popular: false },
  { name: 'Libya', code: 'LY', flag: '🇱🇾', continent: 'Africa', popular: false },
  { name: 'Liechtenstein', code: 'LI', flag: '🇱🇮', continent: 'Europe', popular: false },
  { name: 'Lithuania', code: 'LT', flag: '🇱🇹', continent: 'Europe', popular: false },
  { name: 'Luxembourg', code: 'LU', flag: '🇱🇺', continent: 'Europe', popular: false },
  { name: 'Madagascar', code: 'MG', flag: '🇲🇬', continent: 'Africa', popular: false },
  { name: 'Malawi', code: 'MW', flag: '🇲🇼', continent: 'Africa', popular: false },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾', continent: 'Asia & Oceania', popular: false },
  { name: 'Maldives', code: 'MV', flag: '🇲🇻', continent: 'Asia & Oceania', popular: false },
  { name: 'Mali', code: 'ML', flag: '🇲🇱', continent: 'Africa', popular: false },
  { name: 'Malta', code: 'MT', flag: '🇲🇹', continent: 'Europe', popular: false },
  { name: 'Mauritania', code: 'MR', flag: '🇲🇷', continent: 'Africa', popular: false },
  { name: 'Mauritius', code: 'MU', flag: '🇲🇺', continent: 'Africa', popular: false },
  { name: 'Mexico', code: 'MX', flag: '🇲🇽', continent: 'North America', popular: false },
  { name: 'Moldova', code: 'MD', flag: '🇲🇩', continent: 'Europe', popular: false },
  { name: 'Monaco', code: 'MC', flag: '🇲🇨', continent: 'Europe', popular: false },
  { name: 'Mongolia', code: 'MN', flag: '🇲🇳', continent: 'Asia & Oceania', popular: false },
  { name: 'Montenegro', code: 'ME', flag: '🇲🇪', continent: 'Europe', popular: false },
  { name: 'Morocco', code: 'MA', flag: '🇲🇦', continent: 'Africa', popular: false },
  { name: 'Mozambique', code: 'MZ', flag: '🇲🇿', continent: 'Africa', popular: false },
  { name: 'Myanmar', code: 'MM', flag: '🇲🇲', continent: 'Asia & Oceania', popular: false },
  { name: 'Namibia', code: 'NA', flag: '🇳🇦', continent: 'Africa', popular: false },
  { name: 'Nepal', code: 'NP', flag: '🇳🇵', continent: 'Asia & Oceania', popular: false },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱', continent: 'Europe', popular: true },
  { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', continent: 'Asia & Oceania', popular: true },
  { name: 'Nicaragua', code: 'NI', flag: '🇳🇮', continent: 'Latin America', popular: false },
  { name: 'Niger', code: 'NE', flag: '🇳🇪', continent: 'Africa', popular: false },
  { name: 'Nigeria', code: 'NG', flag: '🇳🇬', continent: 'Africa', popular: false },
  { name: 'North Macedonia', code: 'MK', flag: '🇲🇰', continent: 'Europe', popular: false },
  { name: 'Norway', code: 'NO', flag: '🇳🇴', continent: 'Europe', popular: true },
  { name: 'Oman', code: 'OM', flag: '🇴🇲', continent: 'Middle East', popular: false },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰', continent: 'Asia & Oceania', popular: false },
  { name: 'Panama', code: 'PA', flag: '🇵🇦', continent: 'Latin America', popular: false },
  { name: 'Paraguay', code: 'PY', flag: '🇵🇾', continent: 'Latin America', popular: false },
  { name: 'Peru', code: 'PE', flag: '🇵🇪', continent: 'Latin America', popular: false },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭', continent: 'Asia & Oceania', popular: false },
  { name: 'Poland', code: 'PL', flag: '🇵🇱', continent: 'Europe', popular: false },
  { name: 'Portugal', code: 'PT', flag: '🇵🇹', continent: 'Europe', popular: false },
  { name: 'Qatar', code: 'QA', flag: '🇶🇦', continent: 'Middle East', popular: false },
  { name: 'Romania', code: 'RO', flag: '🇷🇴', continent: 'Europe', popular: false },
  { name: 'Rwanda', code: 'RW', flag: '🇷🇼', continent: 'Africa', popular: false },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', continent: 'Middle East', popular: true },
  { name: 'Senegal', code: 'SN', flag: '🇸🇳', continent: 'Africa', popular: false },
  { name: 'Serbia', code: 'RS', flag: '🇷🇸', continent: 'Europe', popular: false },
  { name: 'Seychelles', code: 'SC', flag: '🇸🇨', continent: 'Africa', popular: false },
  { name: 'Sierra Leone', code: 'SL', flag: '🇸🇱', continent: 'Africa', popular: false },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', continent: 'Asia & Oceania', popular: true },
  { name: 'Slovakia', code: 'SK', flag: '🇸🇰', continent: 'Europe', popular: false },
  { name: 'Slovenia', code: 'SI', flag: '🇸🇮', continent: 'Europe', popular: false },
  { name: 'Somalia', code: 'SO', flag: '🇸🇴', continent: 'Africa', popular: false },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦', continent: 'Africa', popular: true },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷', continent: 'Asia & Oceania', popular: false },
  { name: 'Spain', code: 'ES', flag: '🇪🇸', continent: 'Europe', popular: true },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰', continent: 'Asia & Oceania', popular: false },
  { name: 'Sudan', code: 'SD', flag: '🇸🇩', continent: 'Africa', popular: false },
  { name: 'Sweden', code: 'SE', flag: '🇸🇪', continent: 'Europe', popular: true },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭', continent: 'Europe', popular: true },
  { name: 'Taiwan', code: 'TW', flag: '🇹🇼', continent: 'Asia & Oceania', popular: false },
  { name: 'Tanzania', code: 'TZ', flag: '🇹🇿', continent: 'Africa', popular: false },
  { name: 'Thailand', code: 'TH', flag: '🇹🇭', continent: 'Asia & Oceania', popular: false },
  { name: 'Trinidad and Tobago', code: 'TT', flag: '🇹🇹', continent: 'North America', popular: false },
  { name: 'Tunisia', code: 'TN', flag: '🇹🇳', continent: 'Africa', popular: false },
  { name: 'Turkey', code: 'TR', flag: '🇹🇷', continent: 'Europe', popular: false },
  { name: 'Uganda', code: 'UG', flag: '🇺🇬', continent: 'Africa', popular: false },
  { name: 'Ukraine', code: 'UA', flag: '🇺🇦', continent: 'Europe', popular: false },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', continent: 'Middle East', popular: true },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', continent: 'Europe', popular: true },
  { name: 'United States', code: 'US', flag: '🇺🇸', continent: 'North America', popular: true },
  { name: 'Uruguay', code: 'UY', flag: '🇺🇾', continent: 'Latin America', popular: false },
  { name: 'Uzbekistan', code: 'UZ', flag: '🇺🇿', continent: 'Asia & Oceania', popular: false },
  { name: 'Venezuela', code: 'VE', flag: '🇻🇪', continent: 'Latin America', popular: false },
  { name: 'Vietnam', code: 'VN', flag: '🇻🇳', continent: 'Asia & Oceania', popular: false },
  { name: 'Zambia', code: 'ZM', flag: '🇿🇲', continent: 'Africa', popular: false },
  { name: 'Zimbabwe', code: 'ZW', flag: '🇿🇼', continent: 'Africa', popular: false }
];

export const POPULAR_FOREIGN_COUNTRIES = ALL_WORLD_COUNTRIES.filter((c) => c.popular);

export const EAST_AFRICAN_DESTINATIONS: DestinationVisaInfo[] = [
  {
    id: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa (Bwindi, Queen Elizabeth, Murchison Falls)',
    image: '/src/assets/images/hero_uganda_safari_landscape_1792866690847.jpg',
    portalName: 'Uganda Electronic Visa/Permit Application System',
    portalUrl: 'https://visas.immigration.go.ug/',
    authority: 'Directorate of Citizenship and Immigration Control (DCIC), Ministry of Internal Affairs · Kampala, Uganda',
    standardFee: '$50 USD (Single Entry Tourist e-Visa)',
    processingTime: '2 to 3 Business Days (Official Email Approval Issued)',
    validityStay: 'Up to 90 Days from entry date',
    yellowFeverPolicy: 'Strictly Mandatory for All Arrivals',
    highlights: [
      'Visas on arrival are strictly discontinued at Entebbe International Airport (EBB). You must apply and receive approval before departure.',
      'Approved visa barcode letter must be printed and presented at airline check-in and Entebbe border control.',
      'International Yellow Fever vaccination certificate (WHO Yellow Card) is strictly checked prior to passport inspection.'
    ],
    documentsToCarry: [
      {
        item: 'Original Passport',
        requirement: 'Must have at least 6 months validity remaining beyond your departure date and a minimum of 2 clean blank visa pages.',
        mandatory: true
      },
      {
        item: 'Approved Uganda e-Visa Letter',
        requirement: 'A clear printed copy of the electronic approval letter containing your official barcode issued by DCIC Kampala.',
        mandatory: true
      },
      {
        item: 'WHO Yellow Fever Vaccination Certificate',
        requirement: 'Yellow Card administered at least 10 days before departure. Valid for the lifetime of the traveler. Strictly mandatory for age 1+.',
        mandatory: true
      },
      {
        item: 'Confirmed Return / Onward Airline Ticket',
        requirement: 'Documented proof of scheduled exit flight out of Uganda within the approved visa duration.',
        mandatory: true
      },
      {
        item: 'Tour Booking Confirmation & Safari Voucher',
        requirement: 'Official confirmation letter from your licensed Ugandan tour operator (e.g. Plot 54 Kampala Road booking confirmation) detailing your lodges and transport.',
        mandatory: true
      },
      {
        item: 'Uganda Wildlife Authority (UWA) Gorilla / Chimp Permits',
        requirement: 'If tracking mountain gorillas in Bwindi Impenetrable or Mgahinga Gorilla National Parks, keep your official UWA permit receipt accessible.',
        mandatory: false
      },
      {
        item: 'Proof of Sufficient Funds & Travel Insurance',
        requirement: 'Recent bank statement, active credit card, and comprehensive travel emergency medical coverage.',
        mandatory: true
      }
    ],
    exemptNationalities: [
      'Kenya', 'Tanzania', 'Rwanda', 'Burundi', 'South Sudan', 'Angola', 'Antigua & Barbuda',
      'Bahamas', 'Barbados', 'Belize', 'Comoros', 'Cyprus', 'Eritrea', 'Fiji', 'Gambia',
      'Grenada', 'Jamaica', 'Madagascar', 'Malta', 'Mauritius', 'Seychelles', 'Sierra Leone',
      'Singapore', 'Solomon Islands', 'St. Vincent & Grenadines', 'Swaziland (Eswatini)',
      'Tonga', 'Vanuatu', 'Zambia', 'Zimbabwe'
    ],
    visaRequiredNationalities: [
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands',
      'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Italy', 'Spain',
      'Ireland', 'Poland', 'Portugal', 'Czech Republic', 'Finland', 'Greece', 'Turkey',
      'South Africa', 'India', 'China', 'Japan', 'South Korea', 'New Zealand', 'Brazil',
      'Mexico', 'Argentina', 'Chile', 'United Arab Emirates', 'Saudi Arabia', 'Qatar',
      'Israel', 'Kuwait', 'Bahrain', 'Oman', 'Egypt', 'Morocco', 'Nigeria', 'Ghana'
    ],
    specialNotes: {
      'United States': '$50 USD single-entry tourist e-Visa required. Apply on visas.immigration.go.ug 2-4 weeks prior.',
      'United Kingdom': '£38 approx ($50 USD). Apply via the official DCIC portal online before flight.',
      'Canada': '$50 USD single-entry tourist e-Visa required. Must show return ticket and Yellow Fever card.',
      'Australia': '$50 USD single-entry tourist e-Visa required. Must show onward travel and Yellow Fever certificate.',
      'South Africa': 'South African passport holders require an electronic tourist visa ($50 USD) prior to boarding.',
      'Kenya': 'EAC Partner State citizen: VISA FREE! Enter with valid Kenyan National ID or Passport.',
      'Tanzania': 'EAC Partner State citizen: VISA FREE! Enter with valid Tanzanian Passport.',
      'Rwanda': 'EAC Partner State citizen: VISA FREE! Enter with valid Rwandan National ID or Passport.'
    },
    officialTips: [
      'Beware of unofficial scam websites charging $120-$200 USD. The ONLY official government portal is visas.immigration.go.ug with a flat $50 USD government fee.',
      'Passport photo upload must be on a plain white background, size 2"x2" under 300KB.',
      'If visiting Kenya and Rwanda on the same expedition, consider the $100 USD East Africa Tourist Visa instead of individual single visas!'
    ]
  },
  {
    id: 'kenya',
    name: 'Kenya',
    tagline: 'The Safari Heart (Masai Mara, Amboseli, Samburu, Lake Nakuru)',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1400&auto=format&fit=crop',
    portalName: 'Kenya Electronic Travel Authorisation (eTA) Official Portal',
    portalUrl: 'https://www.etakenya.go.ke/',
    authority: 'Department of Immigration Services, Ministry of Interior & National Administration · Nairobi, Kenya',
    standardFee: '~$34 USD (inclusive of bank processing fees)',
    processingTime: 'Within 72 Hours (Can apply up to 3 months prior to arrival)',
    validityStay: 'Single Journey entry (Stay determined by immigration officer, up to 90 days)',
    yellowFeverPolicy: 'Mandatory if coming from/transiting endemic country',
    highlights: [
      'Kenya operates the modern Electronic Travel Authorisation (eTA) system. ALL international travelers (including infants and children) require an approved eTA.',
      'Traditional visa-on-arrival is not available at Jomo Kenyatta International Airport (NBO) or Moi Mombasa (MBA).',
      'Citizens of East African Community (EAC) partner states are exempt from obtaining an eTA.'
    ],
    documentsToCarry: [
      {
        item: 'Valid Passport',
        requirement: 'Valid for a minimum of 6 months from entry date with at least 1 blank passport page.',
        mandatory: true
      },
      {
        item: 'Approved Kenya eTA Confirmation',
        requirement: 'Digital copy on your mobile phone or printed paper copy of the approved eTA barcode authorization.',
        mandatory: true
      },
      {
        item: 'Yellow Fever Vaccination Card',
        requirement: 'Mandatory if arriving from or transiting for more than 12 hours through a Yellow Fever endemic country (such as Uganda, DRC, or Angola).',
        mandatory: true
      },
      {
        item: 'Return / Onward Flight Confirmation',
        requirement: 'Confirmed round-trip ticket matching your travel dates.',
        mandatory: true
      },
      {
        item: 'Safari Accommodation Bookings / Invitation Letter',
        requirement: 'Hotel / safari lodge confirmation vouchers with operator contacts in Nairobi or Mombasa.',
        mandatory: true
      },
      {
        item: 'Strict Ban Warning: Plastic Bags & Drones',
        requirement: 'Kenya strictly enforces a total ban on single-use carrier plastic bags. Drones cannot be imported without prior Kenya Civil Aviation Authority (KCAA) authorization.',
        mandatory: true
      }
    ],
    exemptNationalities: [
      'Uganda', 'Tanzania', 'Rwanda', 'Burundi', 'South Sudan', 'Democratic Republic of Congo', 'Somalia'
    ],
    visaRequiredNationalities: [
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands',
      'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Italy', 'Spain',
      'Ireland', 'Poland', 'Portugal', 'Czech Republic', 'Finland', 'Greece', 'Turkey',
      'South Africa', 'India', 'China', 'Japan', 'South Korea', 'New Zealand', 'Singapore',
      'Brazil', 'Mexico', 'Argentina', 'Chile', 'United Arab Emirates', 'Saudi Arabia', 'Qatar',
      'Israel', 'Kuwait', 'Bahrain', 'Oman', 'Egypt', 'Morocco', 'Nigeria', 'Ghana', 'Botswana',
      'Namibia', 'Zimbabwe', 'Zambia', 'Mauritius', 'Seychelles'
    ],
    specialNotes: {
      'United States': 'US citizens must apply for Kenya eTA via etakenya.go.ke at least 3 days prior. Fee is ~$34 USD.',
      'United Kingdom': 'UK citizens require approved eTA. Minor children and babies also require their own separate eTA submission.',
      'Uganda': 'EAC citizen: Exempt from eTA requirement! Travel with National ID or Ugandan Passport.',
      'Rwanda': 'EAC citizen: Exempt from eTA requirement! Travel with National ID or Passport.',
      'Tanzania': 'EAC citizen: Exempt from eTA requirement! Travel with Passport.'
    },
    officialTips: [
      'Official portal is ONLY www.etakenya.go.ke. Beware of imitation domains ending in .org or .com.',
      'You can apply up to 3 months before your safari departure date.',
      'Keep your eTA PDF saved offline on your phone or tablet before boarding your flight.'
    ]
  },
  {
    id: 'tanzania',
    name: 'Tanzania & Zanzibar',
    tagline: 'Serengeti, Ngorongoro Crater & Zanzibar Spice Archipelago',
    image: '/src/assets/images/zanzibar_swimming_snorkeling_1794315665581.jpg',
    portalName: 'Tanzania Immigration e-Visa Official Portal',
    portalUrl: 'https://visa.immigration.go.tz/',
    authority: 'Immigration Services Department, Ministry of Home Affairs · Dar es Salaam / Dodoma, United Republic of Tanzania',
    standardFee: '$50 USD Ordinary Tourist / $100 USD (US Citizens under Bilateral Reciprocity)',
    processingTime: '7 to 10 Business Days (Apply at least 3 to 4 weeks prior to safari)',
    validityStay: 'Ordinary: 90 Days single entry. US Citizens: 1-Year Multiple Entry (max 90 days per stay)',
    yellowFeverPolicy: 'Mandatory if coming from/transiting endemic country',
    highlights: [
      'US citizens must select the "Multiple Entry Visa ($100 USD)" option on the portal due to bilateral agreements.',
      'Mandatory Zanzibar Rule (Effective October 2024): All inbound international travelers entering Zanzibar MUST purchase mandatory Zanzibar Inbound Travel Insurance via visitzanzibar.go.tz ($44 USD).',
      'Apply online in advance to avoid long terminal immigration queues at Kilimanjaro (JRO), Dar es Salaam (DAR), and Zanzibar (ZNZ).'
    ],
    documentsToCarry: [
      {
        item: 'Valid Passport',
        requirement: 'Valid for at least 6 months with 2 clean blank visa pages.',
        mandatory: true
      },
      {
        item: 'Approved Tanzania e-Visa Document',
        requirement: 'Printed Visa Grant Notice received by email from Tanzania Immigration Services.',
        mandatory: true
      },
      {
        item: 'Mandatory Zanzibar Inbound Travel Insurance (If landing/visiting Zanzibar)',
        requirement: 'QR code certificate issued by Zanzibar Insurance Corporation (ZIC) via visitzanzibar.go.tz ($44 USD per adult, $22 under 12).',
        mandatory: true
      },
      {
        item: 'Yellow Fever Vaccination Card',
        requirement: 'Mandatory if arriving from or transiting through Yellow Fever endemic countries (e.g., coming from a Uganda gorilla safari to Tanzania).',
        mandatory: true
      },
      {
        item: 'Return / Onward International Flight Ticket',
        requirement: 'Documented flight leaving Tanzania or Zanzibar.',
        mandatory: true
      },
      {
        item: 'Safari Tour Operator Itinerary Confirmation',
        requirement: 'Official confirmation letter detailing your national park circuits, camps, and guides.',
        mandatory: true
      }
    ],
    exemptNationalities: [
      'Botswana', 'Gambia', 'Ghana', 'Hong Kong', 'Jamaica', 'Kenya', 'Lesotho', 'Malawi',
      'Malaysia', 'Mozambique', 'Namibia', 'Rwanda', 'Seychelles', 'Sierra Leone', 'Singapore',
      'South Africa', 'Swaziland (Eswatini)', 'Uganda', 'Zambia', 'Zimbabwe'
    ],
    visaRequiredNationalities: [
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands',
      'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Italy', 'Spain',
      'Ireland', 'Poland', 'Portugal', 'Czech Republic', 'Finland', 'Greece', 'Turkey',
      'India', 'China', 'Japan', 'South Korea', 'New Zealand', 'Brazil', 'Mexico', 'Argentina',
      'Chile', 'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Israel', 'Kuwait', 'Bahrain',
      'Oman', 'Egypt', 'Morocco'
    ],
    specialNotes: {
      'United States': 'US passport holders MUST obtain the $100 USD 1-year multiple entry visa under bilateral reciprocity (even for a short 5-day holiday).',
      'United Kingdom': 'UK citizens pay standard $50 USD ordinary tourist visa.',
      'South Africa': 'South African passport holders are VISA FREE for tourism stays up to 90 days!',
      'Singapore': 'Singaporean passport holders are VISA FREE for up to 90 days.',
      'Kenya / Uganda / Rwanda': 'EAC partner citizens are VISA FREE with valid passports.'
    },
    officialTips: [
      'The official portal is visa.immigration.go.tz. Beware of lookalike sites charging $150+ USD.',
      'If your safari flies into Entebbe (Uganda) first for gorillas and then connects to Kilimanjaro (Tanzania), your Yellow Fever card will be strictly checked at JRO airport!',
      'Zanzibar inbound insurance is legally independent of private medical insurance; all visitors to the island must hold the ZIC policy.'
    ]
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    tagline: 'Land of a Thousand Hills (Volcanoes National Park, Nyungwe, Lake Kivu)',
    image: '/public/assets/images/kigali_convention_centre.jpg',
    portalName: 'IremboGov / Rwanda DGIE Online Visa System',
    portalUrl: 'https://irembo.gov.rw/',
    authority: 'Directorate General of Immigration and Emigration (DGIE) · Kigali, Rwanda',
    standardFee: '$50 USD on arrival / $0 FREE Waiver for Commonwealth, AU & Francophonie Citizens!',
    processingTime: 'Instant on Arrival or 48 Hours Online via IremboGov',
    validityStay: '30 Days (Renewable at DGIE Kigali headquarters)',
    yellowFeverPolicy: 'Required from endemic zones',
    highlights: [
      'World-leading accessibility: Citizens of ALL countries receive a 30-day visa on arrival at Kigali International Airport (KGL) or land borders.',
      'Fee Waiver ($0 Free Entry): Citizens of the African Union (AU), the Commonwealth (including UK, Canada, Australia, New Zealand, India, South Africa, etc.), and La Francophonie (including France, Belgium, etc.) receive a free 30-day entry visa!',
      'Strict environmental law: Non-biodegradable polythene plastic bags are completely banned in Rwanda. Luggage is inspected at Kigali Airport.'
    ],
    documentsToCarry: [
      {
        item: 'Valid Passport',
        requirement: 'Valid for at least 6 months with at least 1 blank page.',
        mandatory: true
      },
      {
        item: 'Rwanda Development Board (RDB) Gorilla Trekking Permit',
        requirement: 'If participating in mountain gorilla trekking in Volcanoes National Park ($1,500 USD permit).',
        mandatory: false
      },
      {
        item: 'Yellow Fever Vaccination Certificate',
        requirement: 'Required if traveling from or transiting through a Yellow Fever risk country (e.g. crossing by road from Uganda).',
        mandatory: true
      },
      {
        item: 'Confirmed Lodging & Safari Itinerary',
        requirement: 'Hotel or eco-lodge reservations in Kigali, Musanze, or Nyungwe.',
        mandatory: true
      },
      {
        item: 'Return Flight Ticket Out of Kigali',
        requirement: 'Ticket proof for exit via KGL airport or border departure.',
        mandatory: true
      }
    ],
    exemptNationalities: [
      'Uganda', 'Kenya', 'Tanzania', 'Burundi', 'South Sudan', 'Democratic Republic of Congo',
      'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'India', 'South Africa',
      'Nigeria', 'Ghana', 'France', 'Belgium', 'Switzerland', 'Singapore', 'Malaysia',
      'Mauritius', 'Seychelles', 'Botswana', 'Namibia', 'Zambia', 'Zimbabwe', 'Egypt', 'Morocco'
    ],
    visaRequiredNationalities: [
      'United States', 'Germany', 'Netherlands', 'Sweden', 'Norway', 'Denmark', 'Austria',
      'Italy', 'Spain', 'Ireland', 'Poland', 'Portugal', 'Czech Republic', 'Finland',
      'Greece', 'Turkey', 'China', 'Japan', 'South Korea', 'Brazil', 'Mexico', 'Argentina',
      'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Israel'
    ],
    specialNotes: {
      'United Kingdom': 'Commonwealth Member Citizen: $0 FREE 30-Day Visa on Arrival at Kigali Airport!',
      'Canada': 'Commonwealth Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'Australia': 'Commonwealth Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'New Zealand': 'Commonwealth Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'India': 'Commonwealth Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'South Africa': 'Commonwealth & AU Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'France': 'La Francophonie Member Citizen: $0 FREE 30-Day Visa on Arrival!',
      'United States': '$50 USD 30-day visa available on arrival at Kigali Airport (cash/card) or pre-applied on irembo.gov.rw.',
      'Uganda': 'EAC Partner State citizen: VISA FREE entry with National ID or Passport!'
    },
    officialTips: [
      'Do not bring plastic bags or duty-free polythene bags into Rwanda; luggage is scanned at Kigali Airport and bags will be confiscated.',
      'No advance online visa is strictly mandatory for Rwanda as all nationalities can pay/stamp on arrival, but pre-registering on irembo.gov.rw expedites queueing.',
      'If trekking gorillas in Rwanda and then safariing in Uganda, consider the East Africa Tourist Visa ($100 USD).'
    ]
  },
  {
    id: 'east-africa-joint',
    name: 'East Africa Tourist Visa (EATV)',
    tagline: 'Uganda · Kenya · Rwanda Combined Tri-Nation Safari Visa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1400&auto=format&fit=crop',
    portalName: 'Apply via the Government Portal of Your FIRST Port of Entry',
    portalUrl: 'https://visas.immigration.go.ug/',
    authority: 'Joint Framework: DCIC Uganda · Kenya Immigration · Rwanda DGIE',
    standardFee: '$100 USD (Covers Uganda, Kenya, and Rwanda for 90 Days)',
    processingTime: '3 to 5 Business Days',
    validityStay: '90 Days Multiple Entry across Uganda, Kenya, and Rwanda',
    yellowFeverPolicy: 'Strictly Mandatory for All Arrivals',
    highlights: [
      'Huge cost savings: Instead of paying separate visa fees ($50 Uganda + $34 Kenya + $50 Rwanda = $134+ USD), the Joint EATV costs only $100 USD total.',
      'Unlimited border crossings: Travel freely back and forth between Uganda, Kenya, and Rwanda for 90 days without reapplying.',
      'CRITICAL GOLDEN RULE: You MUST apply through the official government portal of the country you will enter FIRST on your itinerary!',
      'If you enter Uganda first: Apply on visas.immigration.go.ug (select "East Africa Tourist Visa").',
      'If you enter Rwanda first: Apply on irembo.gov.rw (select "East Africa Tourist Visa").',
      'Please note: Tanzania is NOT a member of the EATV framework. A separate Tanzania visa is needed if your trip includes Tanzania/Zanzibar.'
    ],
    documentsToCarry: [
      {
        item: 'Valid Passport',
        requirement: 'Must have at least 6 months validity remaining and at least 3 blank pages for multiple stamps.',
        mandatory: true
      },
      {
        item: 'Approved East Africa Tourist Visa Approval Letter',
        requirement: 'Official confirmation letter issued by the first country of entry.',
        mandatory: true
      },
      {
        item: 'WHO Yellow Fever Vaccination Certificate (Yellow Card)',
        requirement: 'Mandatory across all three nations.',
        mandatory: true
      },
      {
        item: 'Complete Tri-Nation Safari Itinerary',
        requirement: 'Detailed schedule showing your travel between Uganda, Kenya, and/or Rwanda.',
        mandatory: true
      },
      {
        item: 'Return Flight Ticket Out of East Africa',
        requirement: 'Confirmed exit flight from the final country on your safari.',
        mandatory: true
      }
    ],
    exemptNationalities: [
      'Citizens holding passports of Uganda, Kenya, or Rwanda do not need a visa to travel across these three countries.'
    ],
    visaRequiredNationalities: [
      'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Netherlands',
      'Switzerland', 'Sweden', 'Norway', 'Denmark', 'Belgium', 'Austria', 'Italy', 'Spain',
      'Ireland', 'Poland', 'Portugal', 'Czech Republic', 'Finland', 'Greece', 'Turkey',
      'India', 'China', 'Japan', 'South Korea', 'New Zealand', 'Brazil', 'Mexico', 'Argentina',
      'United Arab Emirates', 'Saudi Arabia', 'Qatar', 'Israel', 'South Africa'
    ],
    specialNotes: {
      'United States': '$100 USD covers all 3 countries. Save $84+ compared to separate visas.',
      'United Kingdom': '$100 USD covers unlimited crossings between Uganda, Kenya, and Rwanda for 90 days.',
      'Canada': 'Ideal for travelers landing in Kigali (Rwanda), trekking in Uganda, and doing Masai Mara in Kenya.'
    },
    officialTips: [
      'Apply at least 2 to 3 weeks before departure on the portal of your FIRST landing country.',
      'Do not leave the tri-nation territory (e.g., if you visit Tanzania or South Africa in the middle), as leaving terminates the EATV validity.'
    ]
  }
];

export function getVisaRequirement(
  countryName: string,
  destinationId: 'uganda' | 'kenya' | 'tanzania' | 'rwanda' | 'east-africa-joint'
): {
  status: 'Visa-Free / Exempt' | 'Official e-Visa Required' | 'eTA Required' | 'Fee-Waived ($0) on Arrival' | 'Visa on Arrival / Online';
  isExempt: boolean;
  cost: string;
  portalUrl: string;
  portalName: string;
  authority: string;
  processingTime: string;
  stayAllowed: string;
  note: string;
} {
  const dest = EAST_AFRICAN_DESTINATIONS.find((d) => d.id === destinationId) || EAST_AFRICAN_DESTINATIONS[0];
  const isExempt = dest.exemptNationalities.some(
    (c) => c.toLowerCase() === countryName.toLowerCase()
  );

  // Special checks
  if (destinationId === 'rwanda') {
    const isEAC = ['Uganda', 'Kenya', 'Tanzania', 'Burundi', 'South Sudan', 'Democratic Republic of Congo'].includes(countryName);
    const isCommonwealthOrAU = [
      'United Kingdom', 'Canada', 'Australia', 'New Zealand', 'India', 'South Africa',
      'Nigeria', 'Ghana', 'France', 'Belgium', 'Switzerland', 'Singapore', 'Malaysia',
      'Mauritius', 'Seychelles', 'Botswana', 'Namibia', 'Zambia', 'Zimbabwe', 'Egypt', 'Morocco'
    ].includes(countryName);

    if (isEAC) {
      return {
        status: 'Visa-Free / Exempt',
        isExempt: true,
        cost: '$0 FREE',
        portalUrl: dest.portalUrl,
        portalName: dest.portalName,
        authority: dest.authority,
        processingTime: 'Instant on Arrival',
        stayAllowed: 'Up to 6 Months',
        note: `${countryName} citizens can enter Rwanda with their National ID card or Passport without paying visa fees.`
      };
    }

    if (isCommonwealthOrAU) {
      return {
        status: 'Fee-Waived ($0) on Arrival',
        isExempt: true,
        cost: '$0 FREE (Waiver)',
        portalUrl: dest.portalUrl,
        portalName: dest.portalName,
        authority: dest.authority,
        processingTime: 'Instant on Arrival',
        stayAllowed: '30 Days',
        note: `Under Rwandan government bilateral agreements, citizens of Commonwealth, African Union, and Francophonie member nations receive a 30-day visa on arrival free of charge.`
      };
    }

    return {
      status: 'Visa on Arrival / Online',
      isExempt: false,
      cost: '$50 USD',
      portalUrl: dest.portalUrl,
      portalName: dest.portalName,
      authority: dest.authority,
      processingTime: 'Instant on Arrival or 48 Hours Online',
      stayAllowed: '30 Days',
      note: `${countryName} passport holders can obtain a 30-day tourist visa upon arrival at Kigali Airport ($50 USD) or pre-apply online via IremboGov.`
    };
  }

  if (destinationId === 'kenya') {
    if (isExempt) {
      return {
        status: 'Visa-Free / Exempt',
        isExempt: true,
        cost: '$0 FREE',
        portalUrl: dest.portalUrl,
        portalName: dest.portalName,
        authority: dest.authority,
        processingTime: 'Exempt',
        stayAllowed: 'Per EAC Agreement',
        note: `Citizens of EAC Partner States are completely exempt from the Kenya eTA requirement.`
      };
    }
    return {
      status: 'eTA Required',
      isExempt: false,
      cost: '~$34 USD',
      portalUrl: dest.portalUrl,
      portalName: dest.portalName,
      authority: dest.authority,
      processingTime: 'Within 72 Hours',
      stayAllowed: 'Up to 90 Days',
      note: `${countryName} citizens must obtain an approved Electronic Travel Authorisation (eTA) via etakenya.go.ke before boarding their flight.`
    };
  }

  if (destinationId === 'tanzania') {
    if (isExempt) {
      return {
        status: 'Visa-Free / Exempt',
        isExempt: true,
        cost: '$0 FREE',
        portalUrl: dest.portalUrl,
        portalName: dest.portalName,
        authority: dest.authority,
        processingTime: 'Exempt on Arrival',
        stayAllowed: 'Up to 90 Days',
        note: `${countryName} passport holders do not require a tourist visa for Tanzania for stays up to 90 days. Mandatory Zanzibar insurance still applies if entering Zanzibar.`
      };
    }

    const isUS = countryName === 'United States';
    return {
      status: 'Official e-Visa Required',
      isExempt: false,
      cost: isUS ? '$100 USD (Bilateral Multiple Entry)' : '$50 USD (Single Entry)',
      portalUrl: dest.portalUrl,
      portalName: dest.portalName,
      authority: dest.authority,
      processingTime: '7 to 10 Working Days',
      stayAllowed: isUS ? '1-Year Multiple Entry (90 days per visit)' : 'Up to 90 Days',
      note: isUS
        ? `US citizens must obtain the $100 USD 1-year multiple entry visa through the official portal visa.immigration.go.tz.`
        : `${countryName} citizens must apply for an ordinary tourist e-Visa ($50 USD) online via visa.immigration.go.tz.`
    };
  }

  if (destinationId === 'uganda') {
    if (isExempt) {
      return {
        status: 'Visa-Free / Exempt',
        isExempt: true,
        cost: '$0 FREE',
        portalUrl: dest.portalUrl,
        portalName: dest.portalName,
        authority: dest.authority,
        processingTime: 'Exempt on Arrival',
        stayAllowed: 'Up to 90 Days',
        note: `${countryName} passport holders are visa-exempt under bilateral COMESA/EAC agreements. Present your passport and mandatory Yellow Fever card upon arrival at Entebbe.`
      };
    }

    return {
      status: 'Official e-Visa Required',
      isExempt: false,
      cost: '$50 USD',
      portalUrl: dest.portalUrl,
      portalName: dest.portalName,
      authority: dest.authority,
      processingTime: '2 to 3 Business Days',
      stayAllowed: 'Up to 90 Days',
      note: `${countryName} citizens must apply and obtain an approved e-Visa barcode letter from visas.immigration.go.ug before boarding flights to Entebbe. Visas on arrival are strictly discontinued.`
    };
  }

  // east-africa-joint
  return {
    status: 'Official e-Visa Required',
    isExempt: false,
    cost: '$100 USD (Covers 3 Countries)',
    portalUrl: dest.portalUrl,
    portalName: dest.portalName,
    authority: dest.authority,
    processingTime: '3 to 5 Business Days',
    stayAllowed: '90 Days Multiple Entry',
    note: `The East Africa Tourist Visa grants 90 days of multiple entry across Uganda, Kenya, and Rwanda. Apply on the official immigration portal of the first country you touch down in.`
  };
}
