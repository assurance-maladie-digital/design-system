import { A11yComplianceEnum } from './A11yComplianceEnum';

export const locales = {
	sitemapLabel: 'Plan du site',
	cguLabel: 'Conditions générales d’utilisation',
	legalNoticeLabel: 'Mentions légales',
	versionLabel: 'Version',
	[A11yComplianceEnum.NON_COMPLIANT]: 'non conforme',
	[A11yComplianceEnum.PARTIALLY_COMPLIANT]: 'partiellement conforme',
	[A11yComplianceEnum.FULLY_COMPLIANT]: 'totalement conforme',
	a11yLabel: (complianceLabel: string): string => `Accessibilité\xa0: ${complianceLabel}`
};
