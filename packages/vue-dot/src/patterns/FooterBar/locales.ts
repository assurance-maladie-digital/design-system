import { A11yComplianceEnum } from './A11yComplianceEnum';

export const locales = {
	goTopBtnLabel: 'Retour en haut de la page',
	sitemapLabel: 'Plan du site',
	cguLabel: 'Conditions générales d’utilisation',
	cookiesLabel: 'Gestion des cookies',
	legalNoticeLabel: 'Mentions légales',
	versionLabel: 'Version',
	followUs: 'Suivez-nous',
	[A11yComplianceEnum.NON_COMPLIANT]: 'non conforme',
	[A11yComplianceEnum.PARTIALLY_COMPLIANT]: 'partiellement conforme',
	[A11yComplianceEnum.FULLY_COMPLIANT]: 'totalement conforme',
	a11yLabel: (complianceLabel: string): string => `Accessibilité\xa0: ${complianceLabel}`
};
