import { renderToStaticMarkup } from 'react-dom/server';

import { SOURCE_LOCALE } from 'twenty-shared/translations';

import { setServerI18n } from '@/lib/i18n/utils/set-server-i18n';
import { MARKETPLACE_PARTNERS } from '../marketplace.data';
import { PartnerCard } from '../components/PartnerCard';

beforeAll(() => {
  setServerI18n(SOURCE_LOCALE);
});

const renderCard = (index = 0) =>
  renderToStaticMarkup(
    <PartnerCard partner={MARKETPLACE_PARTNERS[index]} index={index} />,
  );

describe('PartnerCard', () => {
  it('renders the partner name as the article heading', () => {
    const html = renderCard(0);
    const partner = MARKETPLACE_PARTNERS[0];
    expect(html).toMatch(
      new RegExp(`<h3[^>]*>${partner.name}<\/h3>`, 'i'),
    );
  });

  it('renders the country eyebrow with primary country', () => {
    const html = renderCard(0);
    const partner = MARKETPLACE_PARTNERS[0];
    expect(html).toContain(partner.primaryCountry.toUpperCase());
  });

  it('renders the full introduction text', () => {
    const html = renderCard(0);
    expect(html).toContain(MARKETPLACE_PARTNERS[0].introduction);
  });

  it('renders one chip per value across the three chip rows', () => {
    const html = renderCard(0);
    const partner = MARKETPLACE_PARTNERS[0];
    const expectedChipCount =
      partner.servedGeos.length +
      partner.languagesSpoken.length +
      partner.deploymentExpertise.length;
    // Count <li ... > occurrences (each chip is a <li>)
    const liMatches = html.match(/<li[^>]*>/g) ?? [];
    expect(liMatches.length).toBe(expectedChipCount);
  });

  it('renders the Calendly CTA pointing at the partner link in a new tab', () => {
    const html = renderCard(0);
    const partner = MARKETPLACE_PARTNERS[0];
    expect(html).toContain(`href="${partner.calendlyLink}"`);
    expect(html).toContain('target="_blank"');
    expect(html).toContain('noopener');
  });
});
