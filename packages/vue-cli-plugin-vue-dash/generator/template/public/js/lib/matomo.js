/* eslint-disable no-undef */

if (MATOMO_ENABLED === 'true') {
	var _paq = window._paq || [];
	// Tracker methods like 'setCustomDimension' should be called before 'trackPageView'
	_paq.push(['trackPageView']);
	_paq.push(['enableLinkTracking']);

	document.addEventListener('DOMContentLoaded', function() {
		var u = MATOMO_REDIRECT_URL;

		_paq.push(['setTrackerUrl', u + 'piwik.php']);
		_paq.push(['setSiteId', MATOMO_SITE_ID]);

		var d = document;
		var g = d.createElement('script');
		var s = d.getElementsByTagName('script')[0];

		g.type = 'text/javascript';
		g.async = true;
		g.defer = true;
		g.src = u + 'piwik.js';
		s.parentNode.insertBefore(g, s);
	});
}
