export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSubCategory {
  title: string;
  count: number;
  questions: FAQItem[];
}

export interface FAQMainSection {
  sectionTitle: 'Before you book' | 'Before your trip' | 'During your trip';
  subCategories: FAQSubCategory[];
}

export interface FlatFAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const STRUCTURED_FAQS_DATA: FAQMainSection[] = [
  {
    sectionTitle: 'Before you book',
    subCategories: [
      {
        title: 'General - booking',
        count: 8,
        questions: [
          {
            id: 'gen-1',
            question: 'What is included in the tour package?',
            answer:
              'Our safari packages include all 4x4 Land Cruiser transport with fuel and unlimited mileage, English-speaking professional driver-guide, national park entrance fees, all luxury/mid-range safari lodge accommodation, full board meals while on safari, complimentary bottled drinking water in vehicles, airport meet-and-greet transfers, and official Uganda Wildlife Authority (UWA) / Rwanda Development Board (RDB) permits when specified in your itinerary.'
          },
          {
            id: 'gen-2',
            question: 'How do I make a reservation?',
            answer:
              'You can reserve directly through our website by submitting a tailored inquiry or contacting our 24/7 team (+256764544719). Our team will draft a clear day-by-day proposal. A 30% deposit secures your lodge reservations and official gorilla/chimpanzee permits.'
          },
          {
            id: 'gen-3',
            question: 'How far in advance should I book my gorilla safari?',
            answer:
              'Gorilla permits are strictly capped at 8 visitors per gorilla family per day. For peak dry season months (June to September and December to February), we strongly recommend reserving 4 to 8 months in advance.'
          },
          {
            id: 'gen-4',
            question: 'Can I book a private safari rather than joining a group?',
            answer:
              'Yes! Over 65% of our guests book private customized safaris where you have exclusive use of an extended 4x4 Land Cruiser, private driver-guide, and completely custom departure dates.'
          },
          {
            id: 'gen-5',
            question: 'Are Fifty4 Safaris departures guaranteed once booked?',
            answer:
              'Yes. Once you pay your deposit and your booking confirmation code is issued, your safari departure and permits are 100% guaranteed.'
          },
          {
            id: 'gen-6',
            question: 'Can I reserve extra activities like white water rafting in Jinja?',
            answer:
              'Absolutely. We can incorporate Jinja Nile rafting, Mabira ziplining, chimpanzee habituation, or Mount Sabinyo volcano climbs into any custom tour.'
          },
          {
            id: 'gen-7',
            question: 'Do you work with travel agents and international wholesalers?',
            answer:
              'Yes, we provide licensed B2B ground-handling services for travel agencies across North America, Europe, Asia, and Australia.'
          },
          {
            id: 'gen-8',
            question: 'What language do your safari guides speak?',
            answer:
              'All Fifty4 Safaris guides are fluent in English. German, French, Spanish, and Italian-speaking naturalist guides are available upon advance request.'
          }
        ]
      },
      {
        title: 'Itinerary & Deviations',
        count: 3,
        questions: [
          {
            id: 'itin-1',
            question: 'Can I add additional nights to the beginning or end of my tour?',
            answer:
              'Yes. You can add extra nights in Entebbe (such as Lake Victoria Hotel or Protea), Kigali, or add beach extensions to Zanzibar or Diani Beach Kenya.'
          },
          {
            id: 'itin-2',
            question: 'Can I extend my stay in a different city or national park?',
            answer:
              'Yes. Many guests extend their Uganda gorilla safari into the Serengeti in Tanzania or Masai Mara in Kenya. Our team coordinates cross-border flight connections seamlessly.'
          },
          {
            id: 'itin-3',
            question: 'Can we change lodging mid-safari if we want an upgrade?',
            answer:
              'Lodging can be upgraded in advance based on availability. Mid-safari upgrades are subject to lodge vacancy and difference in room tariffs.'
          }
        ]
      },
      {
        title: 'Solo Travelers/Room Types',
        count: 5,
        questions: [
          {
            id: 'solo-1',
            question: 'What is a single supplement fee?',
            answer:
              'A single supplement fee covers the cost of private lodge room occupancy when traveling solo. Safari lodges charge per room rather than per person, but we strive to keep single supplements as low as possible.'
          },
          {
            id: 'solo-2',
            question: 'My friend and I want to share a room but pay separately, how do we book?',
            answer:
              'You can book twin-bed sharing accommodation and submit individual payments under the same group reference code. Both travelers receive individual invoices.'
          },
          {
            id: 'solo-3',
            question: 'Is East Africa safe for solo female travelers?',
            answer:
              'Uganda and Rwanda are widely recognized as among the safest, friendliest destinations in Africa. On our safaris, solo travelers are escorted by our professional driver-guides from airport arrival to departure.'
          },
          {
            id: 'solo-4',
            question: 'Can solo travelers join existing small group safaris?',
            answer:
              'Yes. We have scheduled small-group departures (capped at 6 guests per vehicle) where solo travelers can join like-minded wildlife enthusiasts.'
          },
          {
            id: 'solo-5',
            question: 'Are triple rooms or family interconnecting suites available?',
            answer:
              'Most luxury lodges offer family cottages with twin bedrooms and living areas, or can place an additional rollout bed for families traveling with children.'
          }
        ]
      },
      {
        title: 'Payment',
        count: 7,
        questions: [
          {
            id: 'pay-1',
            question: 'Do you offer a payment plan?',
            answer:
              'Yes. We require a 30% initial deposit upon booking to secure non-refundable gorilla permits and lodge holds. The remaining 70% balance is payable 45 days prior to arrival.'
          },
          {
            id: 'pay-2',
            question: 'Can I pay using more than one card?',
            answer:
              'Yes. Our online secure payment gateway allows you to split invoices across multiple credit or debit cards, or divide payments between travel companions.'
          },
          {
            id: 'pay-3',
            question: 'What credit cards do you accept?',
            answer:
              'We accept Visa, MasterCard, and American Express with 3D-Secure encryption. Bank wire transfers (SWIFT) in USD, EUR, or GBP are also accepted.'
          },
          {
            id: 'pay-4',
            question: 'Are there hidden credit card surcharges?',
            answer:
              'No. We maintain transparent pricing with no unexpected hidden merchant fees on our published safari quotes.'
          },
          {
            id: 'pay-5',
            question: 'In what currency are quotes and invoices priced?',
            answer:
              'All official safari quotes are priced in United States Dollars (USD) as required by the Uganda Wildlife Authority and Rwanda Development Board.'
          },
          {
            id: 'pay-6',
            question: 'Can I pay the final balance upon arrival in Kampala?',
            answer:
              'To guarantee lodge bookings and internal bush flights, balances must be cleared 45 days prior. However, minor incidentals can be paid in cash in Kampala.'
          },
          {
            id: 'pay-7',
            question: 'Is my deposit held securely?',
            answer:
              'Yes. Fifty4 Safaris is fully licensed by the Association of Uganda Tour Operators (AUTO) and Uganda Tourism Board (UTB).'
          }
        ]
      },
      {
        title: 'Cancellations/Departure Date Change',
        count: 1,
        questions: [
          {
            id: 'canc-1',
            question: 'What is the cancellation and rescheduling policy for gorilla permits and tours?',
            answer:
              'Cancellations made 60+ days prior to travel receive a full refund of safari fees, minus official non-refundable statutory gorilla permits ($800 Uganda / $1,500 Rwanda). However, UWA and RDB permit one official date reschedule free of charge if requested at least 30 days prior.'
          }
        ]
      },
      {
        title: 'Flights/Name Errors',
        count: 4,
        questions: [
          {
            id: 'flt-1',
            question: 'One of the traveler names is incorrect; what should I do?',
            answer:
              'Contact us immediately. We can update names on safari vouchers for free. However, gorilla permits and domestic flights are tied to exact passport details and must match your passport exactly.'
          },
          {
            id: 'flt-2',
            question: 'I want to know what flight I will be on before I book - can you tell me the flight times?',
            answer:
              'For internal bush flights (Aerolink Uganda / Bar Aviation connecting Entebbe to Kihihi/Bwindi or Pakuba/Murchison), scheduled departures are typically 07:00 AM or 12:00 PM.'
          },
          {
            id: 'flt-3',
            question: 'Do you book international long-haul flights from USA or Europe?',
            answer:
              'We specialize as the ground operator in East Africa. We advise you on the best international flights (e.g. Qatar Airways, Emirates, KLM, Brussels Airlines, Ethiopian) into Entebbe EBB or Kigali KGL.'
          },
          {
            id: 'flt-4',
            question: 'What is the luggage weight limit on domestic bush flights?',
            answer:
              'Domestic flights have a strict luggage allowance of 15 kg (33 lbs) per person in soft duffel bags. Excess luggage can be stored securely in our Kampala office.'
          }
        ]
      },
      {
        title: 'Food/Dietary Requirements',
        count: 1,
        questions: [
          {
            id: 'food-1',
            question: 'Can you accommodate special dietary requirements?',
            answer:
              'Yes! All partner luxury safari lodges cater expertly to vegetarian, vegan, gluten-free, lactose-free, and halal diets. Please notify us during booking so our team briefs the executive chefs before your arrival.'
          }
        ]
      },
      {
        title: 'Travel Insurance',
        count: 5,
        questions: [
          {
            id: 'ins-1',
            question: 'How do I add travel insurance?',
            answer:
              'We recommend purchasing comprehensive travel insurance from Allianz, World Nomads, or Travel Guard covering trip cancellation, baggage delay, and emergency medical repatriation.'
          },
          {
            id: 'ins-2',
            question: 'How much is travel insurance?',
            answer:
              'Travel insurance typically costs between 4% and 8% of your total trip cost depending on age, residency, and coverage limits.'
          },
          {
            id: 'ins-3',
            question: 'Is emergency medical evacuation included in Fifty4 Safaris tours?',
            answer:
              'Yes! All Fifty4 Safaris guests are automatically enrolled in AMREF Flying Doctors emergency aeromedical evacuation coverage throughout Uganda and Kenya.'
          },
          {
            id: 'ins-4',
            question: 'Does travel insurance cover gorilla permit cancellations?',
            answer:
              'Most comprehensive policies include "Cancel For Any Reason" (CFAR) or medical cancellation riders that reimburse non-refundable permits if you fall ill.'
          },
          {
            id: 'ins-5',
            question: 'Is the mandatory Zanzibar Inbound Insurance required if visiting Zanzibar?',
            answer:
              'Yes. Since October 2024, all foreign visitors entering Zanzibar must purchase the official Inbound Travel Insurance via visitzanzibar.go.tz ($44 USD).'
          }
        ]
      },
      {
        title: 'Child Fares/Discounts',
        count: 1,
        questions: [
          {
            id: 'child-1',
            question: 'Do you offer a child fare discount and what is the minimum age for gorillas?',
            answer:
              'Children aged 3-11 sharing a room with adults receive a 30% discount on lodging and transport. However, the legal minimum age for mountain gorilla and chimpanzee trekking is strictly 15 years old by national park wildlife law.'
          }
        ]
      },
      {
        title: 'Health & Physical Requirements',
        count: 2,
        questions: [
          {
            id: 'hlth-1',
            question: 'What are the physical requirements of your tours?',
            answer:
              'Savannah game drives require no strenuous physical exertion. Mountain gorilla and chimpanzee trekking involve 2 to 6 hours of walking through steep, damp rainforest trails. A moderate fitness level is advised.'
          },
          {
            id: 'hlth-2',
            question: 'Do you accommodate wheelchairs, walkers and/or special mobility needs?',
            answer:
              'Yes! For travelers with mobility challenges, we arrange traditional "Sedan Chairs" (the African helicopter) where 8 local community porters carry the guest comfortably to and from the gorilla family.'
          }
        ]
      }
    ]
  },
  {
    sectionTitle: 'Before your trip',
    subCategories: [
      {
        title: 'Flights/Travel Itinerary',
        count: 5,
        questions: [
          {
            id: 'bt-flt-1',
            question: 'Can you send me my flight itinerary and final lodge vouchers?',
            answer:
              'Your finalized travel pack containing detailed daily timing, driver-guide contact details, lodge emergency numbers, and bush flight e-tickets is delivered via email 3 weeks prior to departure.'
          },
          {
            id: 'bt-flt-2',
            question: 'When will my tickets be issued?',
            answer:
              'Domestic flights and gorilla permits are confirmed upon receipt of deposit, with formal boarding vouchers dispatched alongside your final travel documents.'
          },
          {
            id: 'bt-flt-3',
            question: 'Which airport should I fly into for my Uganda safari?',
            answer:
              'Fly directly into Entebbe International Airport (EBB). For Rwanda tours, fly into Kigali International Airport (KGL).'
          },
          {
            id: 'bt-flt-4',
            question: 'Can we cross land borders between Uganda, Rwanda, and Kenya?',
            answer:
              'Yes. We operate seamless cross-border transfers via Katuna/Cyanika border (Uganda-Rwanda) and Busia/Malaba border or scheduled flights.'
          },
          {
            id: 'bt-flt-5',
            question: 'What happens if my international flight arrives very late at night?',
            answer:
              'Our driver-guide meets you inside Entebbe Airport arrivals hall regardless of what time your flight lands (even at 2:00 AM) and transfers you to your hotel.'
          }
        ]
      },
      {
        title: 'Visa Information',
        count: 1,
        questions: [
          {
            id: 'bt-visa-1',
            question: 'Will I need a visa for my trip?',
            answer:
              'Yes, most international travelers require an approved e-Visa or eTA prior to boarding. Uganda requires an online e-Visa via visas.immigration.go.ug ($50 USD). Kenya operates the eTA system via etakenya.go.ke (~$34 USD). For multi-country trips, the East Africa Tourist Visa covers Uganda, Kenya, and Rwanda for $100 USD.'
          }
        ]
      },
      {
        title: 'Safety/Medical information',
        count: 3,
        questions: [
          {
            id: 'bt-med-1',
            question: 'I am concerned about the political stability and safety of the country I am visiting.',
            answer:
              'Uganda and Rwanda are exceptionally stable, peaceful nations with well-trained tourism police and national park ranger corps protecting visitor corridors 24/7.'
          },
          {
            id: 'bt-med-2',
            question: 'Will refrigerators be available for my medication (ex: Insulin)?',
            answer:
              'Yes. All 4x4 safari vehicles feature onboard 12V refrigerator cooler boxes, and all partner safari lodges provide medical refrigeration facilities in their main offices.'
          },
          {
            id: 'bt-med-3',
            question: 'Is Yellow Fever vaccination mandatory upon arrival?',
            answer:
              'Yes. Uganda immigration strictly inspects your WHO International Yellow Fever Vaccination Certificate (Yellow Card). The vaccine must be taken at least 10 days before travel.'
          }
        ]
      },
      {
        title: 'Currency Information',
        count: 1,
        questions: [
          {
            id: 'bt-curr-1',
            question: 'How much money should I take in credit cards/cash?',
            answer:
              'We recommend bringing $300 to $500 in US Dollar cash per person for guide tips, community craft shopping, and personal drinks. IMPORTANT: Local banks and exchange bureaus in East Africa only accept US Dollar bills printed in 2013 or newer, free of tears or markings.'
          }
        ]
      },
      {
        title: 'Optional Tours and Bus seating',
        count: 4,
        questions: [
          {
            id: 'bt-opt-1',
            question: 'How do I add optional tours to my reservation?',
            answer:
              'You can add excursions like Lion Tracking in Queen Elizabeth, Batwa Cultural Trail in Bwindi, or Nile Boat Cruises by contacting your safari coordinator before or during your trip.'
          },
          {
            id: 'bt-opt-2',
            question: 'How do I cancel optional tours from my reservation?',
            answer:
              'Most optional boat cruises and nature walks can be canceled 48 hours in advance without penalty. However, gorilla and chimpanzee permits are non-refundable once booked.'
          },
          {
            id: 'bt-opt-3',
            question: 'Are window seats guaranteed in the safari vehicles?',
            answer:
              'Yes, 100%! We strictly cap vehicle capacity at 6 passengers in an extended 8-seater 4x4 Land Cruiser, guaranteeing every guest their own window seat and pop-up roof viewing position.'
          },
          {
            id: 'bt-opt-4',
            question: 'Can I rent camera zoom lenses or binoculars in Kampala?',
            answer:
              'Yes, our safari team on Kampala Road can assist you with renting zoom lenses and quality binoculars with advance reservation.'
          }
        ]
      }
    ]
  },
  {
    sectionTitle: 'During your trip',
    subCategories: [
      {
        title: 'Flights & Arrival',
        count: 5,
        questions: [
          {
            id: 'dt-arr-1',
            question: 'What should I do if I miss the beginning of my trip due to flight delays/cancellations?',
            answer:
              'Call our 24/7 Emergency Safari hotline or WhatsApp immediately (+256764544719). We will rearrange airport pickups, adjust your lodge check-in, and if necessary arrange an internal flight or express transfer to rejoin your itinerary.'
          },
          {
            id: 'dt-arr-2',
            question: 'My outbound flight has been cancelled by the airline; what do I do now?',
            answer:
              'Our operations desk assists you with airline rebooking, provides letters for your insurance claim, and arranges extended hotel accommodation in Entebbe or Kampala.'
          },
          {
            id: 'dt-arr-3',
            question: 'How will I recognize my driver-guide at Entebbe Airport?',
            answer:
              'Your guide will be waiting right outside the customs exit doors holding a high-visibility Fifty4 Safaris placard with your party’s name.'
          },
          {
            id: 'dt-arr-4',
            question: 'Can I buy a local tourist SIM card at the airport?',
            answer:
              'Yes. Both MTN and Airtel operate official registration kiosks in Entebbe Airport arrivals hall. Your guide will assist you with passport registration and purchasing data bundles.'
          },
          {
            id: 'dt-arr-5',
            question: 'What if my checked luggage is delayed by the international airline?',
            answer:
              'We file the property irregularity report with Entebbe baggage services and have our Kampala logistics team courier your bags directly to your safari lodge as soon as they land.'
          }
        ]
      },
      {
        title: 'Wi-Fi/Electrical Equipment',
        count: 3,
        questions: [
          {
            id: 'dt-elec-1',
            question: 'Do I need an adapter/converter?',
            answer:
              'Uganda and Kenya use Type G electrical plugs (British standard 3 rectangular pins, 220-240V). We recommend bringing a universal adapter. All Fifty4 Safaris 4x4 vehicles also feature onboard USB charging points and 220V inverters.'
          },
          {
            id: 'dt-elec-2',
            question: 'Will the hotels provide free Wi-Fi?',
            answer:
              'Yes. Virtually all safari lodges provide complimentary Wi-Fi in central lounge and dining areas. Speeds are suitable for messaging, email, and photo sharing.'
          },
          {
            id: 'dt-elec-3',
            question: 'Can I fly a camera drone over national parks in Uganda?',
            answer:
              'No. The Uganda Wildlife Authority (UWA) strictly prohibits recreational drone flights in all national parks to protect wildlife from stress and poaching surveillance.'
          }
        ]
      },
      {
        title: 'Safari Etiquette & Tipping Guidelines',
        count: 3,
        questions: [
          {
            id: 'dt-tip-1',
            question: 'What are the customary tipping guidelines on safari?',
            answer:
              'Tipping is voluntary but warmly appreciated. General guideline: $10 to $15 USD per day for your lead driver-guide from the group, $15 to $20 USD for UWA gorilla trackers/rangers, and $5 per day for general lodge staff tip boxes.'
          },
          {
            id: 'dt-tip-2',
            question: 'What should I wear during gorilla trekking in Bwindi?',
            answer:
              'Wear sturdy hiking boots with ankle support, long lightweight safari trousers, long-sleeved shirts, gardening gloves (to grasp stinging nettles), and high-cuffed gaiters or socks tucked over trousers.'
          },
          {
            id: 'dt-tip-3',
            question: 'What rules apply when with the gorillas?',
            answer:
              'Maintain a 7 to 10-meter distance, never touch the primates, speak in low whispers, turn off all camera flash, and do not trek if you have an active cold or cough (as gorillas are susceptible to human respiratory illness).'
          }
        ]
      }
    ]
  }
];

export const FAQS_DATA: FlatFAQItem[] = STRUCTURED_FAQS_DATA.flatMap((sec) =>
  sec.subCategories.flatMap((sub) =>
    sub.questions.map((q) => {
      let category = 'Planning & Booking';
      if (q.question.toLowerCase().includes('gorilla')) {
        category = 'Gorilla Trekking';
      } else if (sec.sectionTitle === 'Before your trip' || q.question.toLowerCase().includes('visa') || q.question.toLowerCase().includes('yellow fever')) {
        category = 'Health & Visas';
      } else if (sec.sectionTitle === 'During your trip') {
        category = 'On Safari Experience';
      }
      return {
        ...q,
        category
      };
    })
  )
);

