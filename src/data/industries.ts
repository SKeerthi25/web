import { IndustryItem } from '../types';

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'corporate-enterprise',
    name: 'Business & Corporate Enterprise',
    slug: 'corporate-enterprise',
    headline: 'High-performance computing fleets and dock infrastructure for corporate offices.',
    description: 'Corporate headquarters require scalable, uniform hardware fleets that minimize IT desk-side support tickets. We supply standardised business laptops, dual-screen display setups, and secure docking stations in bulk consignments.',
    keyChallenges: [
      'Managing hardware variety across multiple regional offices',
      'Maintaining driver consistency for automated IT image deployment',
      'Minimizing desk clutter in agile, hot-desking working models',
    ],
    technologySolutions: [
      'Standardized business ultrabooks with identical BIOS and driver branches',
      'Universal USB-C/Thunderbolt 4 docking stations with MAC address pass-through',
      'Ergonomic QHD monitors with daisy-chaining to reduce desk cable clutter',
    ],
    recommendedHardware: [
      'Enterprise UltraBook Pro 14"',
      'Universal Dual-4K Thunderbolt 4 Business Dock',
      'Commercial Ergonomic 27" QHD Business Display',
    ],
  },
  {
    id: 'education-academia',
    name: 'Education & Academic Institutions',
    slug: 'education-academia',
    headline: 'Durable, cost-effective computing suites for classrooms, colleges, and university labs.',
    description: 'Schools and universities need dependable desktop systems that withstand intensive daily student use while adhering to strict institutional procurement budgets.',
    keyChallenges: [
      'Tight public and institutional budgets requiring maximum hardware longevity',
      'High physical wear-and-tear on keyboards, mice, and display stands',
      'Rapid network imaging required between school terms',
    ],
    technologySolutions: [
      'Small Form Factor (SFF) desktop systems with robust steel chassis',
      'Spill-resistant low-profile keyboards with laser-etched wear-resistant keycaps',
      'Volume education software licensing and pre-configured deployment advice',
    ],
    recommendedHardware: [
      'Enterprise Workstation Tower & Small Form Factor',
      'Commercial Silent Low-Profile Keyboard & Mouse Combo',
      'Enterprise Operating Systems & Productivity Licensing',
    ],
  },
  {
    id: 'retail-hospitality',
    name: 'Retail, Commerce & Hospitality',
    slug: 'retail-hospitality',
    headline: 'Compact, resilient hardware supporting checkouts, POS terminals, and back-office stockrooms.',
    description: 'From busy retail store checkouts to hotel reception desks, hardware must run uninterrupted in dust-prone, compact spaces where downtime directly impacts revenue.',
    keyChallenges: [
      'Constrained physical counter space at sales and reception desks',
      'Environmental factors like dust, continuous heat, and power fluctuations',
      'Rapid turnaround needed when replacement units are required',
    ],
    technologySolutions: [
      'Ultra-compact business PCs with efficient dust-filtered cooling',
      'Durable point-of-sale peripherals, scanners, and thermal receipt hardware',
      'High-endurance SSDs to protect transactional records and local databases',
    ],
    recommendedHardware: [
      'Enterprise Workstation Tower & Small Form Factor',
      'Enterprise PCIe 4.0 NVMe Solid State Drives',
      'Commercial Silent Low-Profile Keyboard & Mouse Combo',
    ],
  },
  {
    id: 'healthcare-medical-admin',
    name: 'Healthcare & Medical Administration',
    slug: 'healthcare-medical-admin',
    headline: 'Reliable administrative workstations, high-clarity displays, and sanitized peripherals.',
    description: 'Medical practices, administrative hubs, and clinics need dependable technology to maintain patient record management and telemedicine consultations.',
    keyChallenges: [
      'Requirement for easy-to-clean and wipeable input peripherals',
      'Zero tolerance for system crashes during appointment scheduling and patient consultations',
      'Strict data privacy compliance and hardware security standards',
    ],
    technologySolutions: [
      'High-contrast flicker-free IPS displays for clear record review',
      'Wipeable commercial peripherals and silent switches suitable for clinical quiet zones',
      'Hardware TPM 2.0 encrypted laptops for secure patient data handling',
    ],
    recommendedHardware: [
      'Enterprise UltraBook Pro 14"',
      'Commercial Ergonomic 27" QHD Business Display',
      'Enterprise PCIe 4.0 NVMe Solid State Drives',
    ],
  },
  {
    id: 'construction-field-operations',
    name: 'Construction & Field Operations',
    slug: 'construction-field-operations',
    headline: 'Rugged business computing and portable connectivity for site offices and engineering trailers.',
    description: 'Construction site cabins and field offices require dependable computing hardware capable of handling high-resolution architectural drawings, CAD files, and fluctuating site power.',
    keyChallenges: [
      'Vibration, dust, and temperature variations in temporary site trailers',
      'Demanding CAD, BIM, and architectural PDF viewing requirements',
      'Need for durable chassis that can be easily transported between completed project sites',
    ],
    technologySolutions: [
      'Workstations equipped with dedicated graphics and high-speed NVMe storage',
      'Ruggedised business laptops with reinforced hinges and drop-tested frames',
      'PoE+ switches to establish local site network grids and security cameras',
    ],
    recommendedHardware: [
      'Enterprise Workstation Tower & Small Form Factor',
      'Managed 48-Port Gigabit PoE+ Enterprise Switch',
      'Enterprise UltraBook Pro 14"',
    ],
  },
  {
    id: 'professional-financial-services',
    name: 'Professional & Financial Services',
    slug: 'professional-financial-services',
    headline: 'Multi-screen trading desks, secure workstations, and high-clarity analytics monitors.',
    description: 'Accountancy firms, legal chambers, and financial analysts require rapid multi-tasking hardware and dual-monitor configurations to review complex spreadsheets, audit files, and market feeds.',
    keyChallenges: [
      'Slow spreadsheet recalculation causing billable time loss',
      'Eye strain during long data review hours',
      'Stringent financial confidentiality requiring secure storage and encryption',
    ],
    technologySolutions: [
      'High-core-count business processors and fast DDR5 memory for instant modeling',
      'Dual 27-inch QHD displays mounted on ergonomic arms for streamlined workflows',
      'Hardware-encrypted NVMe solid state drives with AES-256 security',
    ],
    recommendedHardware: [
      'Commercial Ergonomic 27" QHD Business Display',
      'Enterprise ECC & Non-ECC DDR5 Memory Modules',
      'Universal Dual-4K Thunderbolt 4 Business Dock',
    ],
  },
  {
    id: 'it-resellers-system-integrators',
    name: 'IT Resellers & System Integrators',
    slug: 'it-resellers-system-integrators',
    headline: 'Competitive wholesale supply, tray-packaged components, and prompt UK dispatch.',
    description: 'Managed Service Providers (MSPs), IT repair specialists, and regional value-added resellers require a trusted UK wholesale partner who can supply hardware batches on predictable terms.',
    keyChallenges: [
      'Volatile component pricing eroding integrator margins',
      'Inconsistent delivery timelines from overseas suppliers',
      'Need for plain-label or unbranded wholesale packaging options',
    ],
    technologySolutions: [
      'Direct wholesale batch discounts with transparent volume tiers',
      'UK stock holding in Swindon for reliable domestic courier delivery',
      'Comprehensive VAT documentation with verified UK company credentials',
    ],
    recommendedHardware: [
      'Enterprise PCIe 4.0 NVMe Solid State Drives',
      'Enterprise ECC & Non-ECC DDR5 Memory Modules',
      'Managed 48-Port Gigabit PoE+ Enterprise Switch',
    ],
  },
];
