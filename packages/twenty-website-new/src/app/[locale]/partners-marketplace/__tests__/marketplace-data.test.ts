import { MARKETPLACE_PARTNERS } from '../marketplace.data';

const ALL_GEOS = ['EUROPE', 'US', 'LATAM', 'MENA', 'APAC', 'AFRICA'] as const;

describe('MARKETPLACE_PARTNERS seed data', () => {
  it('has at least 6 partners', () => {
    expect(MARKETPLACE_PARTNERS.length).toBeGreaterThanOrEqual(6);
  });

  it('keeps slugs unique', () => {
    const slugs = MARKETPLACE_PARTNERS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('fills every required field on every partner', () => {
    for (const partner of MARKETPLACE_PARTNERS) {
      expect(partner.name).not.toBe('');
      expect(partner.introduction).not.toBe('');
      expect(partner.calendlyLink).not.toBe('');
      expect(partner.deploymentExpertise.length).toBeGreaterThan(0);
      expect(partner.servedGeos.length).toBeGreaterThan(0);
      expect(partner.languagesSpoken.length).toBeGreaterThan(0);
    }
  });

  it('uses parseable URLs for calendly links', () => {
    for (const partner of MARKETPLACE_PARTNERS) {
      expect(() => new URL(partner.calendlyLink)).not.toThrow();
    }
  });

  it('covers every served-geo option at least once', () => {
    const covered = new Set(MARKETPLACE_PARTNERS.flatMap((p) => p.servedGeos));
    for (const geo of ALL_GEOS) {
      expect(covered.has(geo)).toBe(true);
    }
  });
});
