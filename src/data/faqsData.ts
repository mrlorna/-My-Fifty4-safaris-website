export interface FAQItem {
  question: string;
  answer: string;
  category: 'Gorilla Trekking' | 'Planning & Booking' | 'Health & Visas' | 'On Safari Experience';
}

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Gorilla Trekking',
    question: 'How difficult is gorilla trekking in Bwindi Impenetrable Forest?',
    answer:
      'Gorilla trekking involves hiking through untracked rainforest terrain with steep slopes, dense vines, and muddy ground at altitudes between 1,160m and 2,600m. Treks can range from 1.5 to 6 hours depending on where your allocated gorilla family slept the night before. A reasonable level of general fitness is recommended. We hire local community porters ($15-$20) for every guest; porters carry your daypack and lend a helpful hand across slippery sections, which also directly supports local village livelihoods.'
  },
  {
    category: 'Gorilla Trekking',
    question: 'What is the minimum age requirement for tracking mountain gorillas?',
    answer:
      'The official minimum age set by the Uganda Wildlife Authority (UWA) and Rwanda Development Board (RDB) is strictly 15 years old. This is enforced to ensure young travelers can follow ranger safety commands, navigate rough terrain, and maintain calm composure in the immediate proximity of wild primates.'
  },
  {
    category: 'Gorilla Trekking',
    question: 'How far in advance must I book gorilla trekking permits?',
    answer:
      'Because only 8 visitors are permitted to visit each habituated gorilla group per day to protect animal health and prevent disturbance, permits sell out months ahead during peak dry months (June-September & December-February). We recommend reserving your safari 4 to 8 months in advance so Fifty4 Safaris can secure your preferred trekking dates.'
  },
  {
    category: 'Planning & Booking',
    question: 'Are Fifty4 Safaris tours private or small groups?',
    answer:
      'We offer both! Our flagship itineraries feature guaranteed weekly departures with small groups capped at 6 travelers per extended 4x4 Land Cruiser (ensuring everyone has a window seat and pop-up roof access). Alternatively, over 65% of our guests choose our 100% tailor-made private safaris, where your travel dates, vehicle, lodges, and pace are fully personalized.'
  },
  {
    category: 'Planning & Booking',
    question: 'What are your payment terms and cancellation policies?',
    answer:
      'A 30% deposit is required upon itinerary confirmation to secure your accommodations, internal flights, and non-refundable official UWA/RDB gorilla permits. The remaining 70% balance is payable 45 days prior to arrival. Cancellations made more than 60 days before travel receive a full refund minus official permit fees and minor bank processing charges.'
  },
  {
    category: 'Health & Visas',
    question: 'What vaccinations and health precautions are required for East Africa?',
    answer:
      'A Yellow Fever vaccination card is mandatory for entry into Uganda and Kenya. Travelers coming from or transiting through endemic areas must show proof of vaccination at immigration. We also strongly recommend consulting your physician for malaria prophylactics (such as Malarone or Doxycycline), Hepatitis A/B, and Tetanus booster.'
  },
  {
    category: 'Health & Visas',
    question: 'How do I obtain tourist visas for Uganda, Rwanda, and Kenya?',
    answer:
      'Most international travelers obtain electronic visas before departure. Uganda requires an online e-Visa via the official portal (visas.immigration.go.ug). If visiting Uganda, Rwanda, and Kenya on the same journey, the East Africa Tourist Visa ($100) covers all three countries for 90 days with multiple entries. Fifty4 Safaris provides step-by-step visa assistance.'
  },
  {
    category: 'On Safari Experience',
    question: 'What kind of vehicles does Fifty4 Safaris operate?',
    answer:
      'We operate customized Toyota Land Cruiser 4WD safari vehicles engineered specifically for African terrain. Features include pop-up photography roofs, high-clearance suspension, refrigerator cooler boxes with chilled drinks, onboard charging inverters (220V UK 3-pin plugs & USB ports), GPS navigation, and guaranteed window seating with personal binocular storage.'
  },
  {
    category: 'On Safari Experience',
    question: 'Is tap water safe to drink on safari?',
    answer:
      'We provide complimentary sealed purified mineral water in our safari vehicles and in your luxury lodge suites daily. We advise drinking bottled water and using provided bottled water for brushing teeth.'
  }
];
