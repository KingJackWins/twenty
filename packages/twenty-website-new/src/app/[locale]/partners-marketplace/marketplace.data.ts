export type DeploymentExpertise = 'CLOUD' | 'SELF_HOST';

export type ServedGeo = 'EUROPE' | 'US' | 'LATAM' | 'MENA' | 'APAC' | 'AFRICA';

export type SpokenLanguage =
  | 'ENGLISH'
  | 'FRENCH'
  | 'GERMAN'
  | 'CHINESE'
  | 'SPANISH';

export type MarketplacePartner = {
  slug: string;
  name: string;
  primaryCountry: string;
  introduction: string;
  calendlyLink: string;
  deploymentExpertise: readonly DeploymentExpertise[];
  servedGeos: readonly ServedGeo[];
  languagesSpoken: readonly SpokenLanguage[];
};

// Calendly homepage as a guaranteed-not-to-404 placeholder. Per-partner
// booking URLs replace these when the /s/partners endpoint goes live.
const CALENDLY_PLACEHOLDER = 'https://calendly.com/';

export const MARKETPLACE_PARTNERS: readonly MarketplacePartner[] = [
  {
    slug: 'nine-dots-ventures',
    name: 'Nine Dots Ventures',
    primaryCountry: 'France',
    introduction:
      'Boutique CRM implementer specialising in real-estate workflows and WhatsApp inbox automation. Hands-on deployments across France and the Mediterranean.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['CLOUD', 'SELF_HOST'],
    servedGeos: ['EUROPE', 'MENA'],
    languagesSpoken: ['ENGLISH', 'FRENCH'],
  },
  {
    slug: 'elevate-consulting',
    name: 'Elevate Consulting',
    primaryCountry: 'United States',
    introduction:
      'Revenue-operations partner for B2B SaaS teams scaling from seed to Series C. Migrates legacy CRMs onto Twenty without losing pipeline history.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['CLOUD'],
    servedGeos: ['US', 'LATAM'],
    languagesSpoken: ['ENGLISH', 'SPANISH'],
  },
  {
    slug: 'w3villa-technologies',
    name: 'W3Villa Technologies',
    primaryCountry: 'India',
    introduction:
      'Engineering-heavy partner running large self-hosted Twenty deployments. Strong on custom objects, RLP, and bespoke logic functions.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['CLOUD', 'SELF_HOST'],
    servedGeos: ['APAC', 'MENA'],
    languagesSpoken: ['ENGLISH'],
  },
  {
    slug: 'act-education',
    name: 'Act Education',
    primaryCountry: 'Germany',
    introduction:
      'CRM partner for European education providers. Compliance-first self-hosted deployments with German data-residency requirements.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['SELF_HOST'],
    servedGeos: ['EUROPE'],
    languagesSpoken: ['ENGLISH', 'GERMAN'],
  },
  {
    slug: 'netzero-systems',
    name: 'NetZero Systems',
    primaryCountry: 'Brazil',
    introduction:
      'Latin America go-to-market partner for climate-tech and renewable-energy companies. Bilingual deal desks running on Twenty Cloud.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['CLOUD'],
    servedGeos: ['LATAM', 'US'],
    languagesSpoken: ['ENGLISH', 'SPANISH'],
  },
  {
    slug: 'meridian-craft',
    name: 'Meridian Craft',
    primaryCountry: 'Singapore',
    introduction:
      'APAC implementation studio for fintech and logistics. Multilingual support across English and Chinese, with on-the-ground delivery teams in Singapore and Cape Town.',
    calendlyLink: CALENDLY_PLACEHOLDER,
    deploymentExpertise: ['CLOUD', 'SELF_HOST'],
    servedGeos: ['APAC', 'AFRICA'],
    languagesSpoken: ['ENGLISH', 'CHINESE'],
  },
];
