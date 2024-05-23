import { defineComponent } from "vue";

export const themeIcon = defineComponent({
	props: {
		icon: {
			type: String,
			default: undefined,
		},
	},
	data() {
		return {
			icons: {
				digital: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" focusable="false"><path d="M69 35c0 18.8-15.4 34-34.5 34C15.5 69 0 53.8 0 35S15.4 1 34.5 1C53.5 1 69 16.2 69 35" fill="currentColor"/><path d="M23.6 19.3l6.8 3.9v-7.8l-6.8 3.9zm8.6 7v18.5l7.7-4.5v-9.6l-7.7-4.5zm-9.5 25l8.6 4.8 18-10.3V25l-17.1-9.7v8.8l9 5.2c.3.2.5.4.5.8v10.6c0 .4-.2.6-.5.8L31.7 47c-.2.2-.6.2-.8 0a.9.9 0 01-.5-.7V25.2l-7.7-4.4v30.4zm8.6 6.7l-.4-.1-9.5-5.4a.9.9 0 01-.4-.8V19.3c0-.3.2-.6.4-.8l9.5-5.4.4-.1h.3l.1.1L50.6 24c.2.1.4.4.4.7v21.7c0 .3-.2.6-.4.7L31.7 58l-.4.1z" fill="#fff"/></svg>',
				recap_check: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="81.9" height="81.9" viewBox="0 0 81.9 81.9"><defs><style>.a{fill:none;}.b{clip-path:url(#a);}.c{fill:#fff;stroke:#01b9f5;stroke-width:0.9px;}.d{fill:#01b9f5;fill-rule:evenodd;}</style><clipPath id="a"><rect class="a" width="81.9" height="81.9"/></clipPath></defs><g class="b"><circle class="c" cx="39.894" cy="39.894" r="39.894" transform="translate(1.056 1.056)"/><g transform="translate(16.016 22.664)"><path class="d" d="M44.978.452a1.586,1.586,0,0,0-2.219,0L19.538,23.566a1.479,1.479,0,0,1-2.219,0L7.152,13.248a1.49,1.49,0,0,0-2.219,0L.452,17.276a1.586,1.586,0,0,0,0,2.219L10.727,30.265l2.219,2.219,4.373,4.437a1.586,1.586,0,0,0,2.219,0L49.415,7.152a1.586,1.586,0,0,0,0-2.219L44.978.452Z" transform="translate(0 0)"/></g></g></svg>',
				user_ps: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.66 5.97C14.2 5.97 14.3 8 14.3 8v1.9s.02 1.47-.96 2a1 1 0 0 0-.01.4c.05-.02-.28 1.92 1.4 2.17 1.2.2 2.34.75 3.24 1.58.3.3.53 2.45.53 2.45h-13s-.03-1.74.53-2.45a7.05 7.05 0 0 1 3.38-1.58c1.68-.25 1.12-2.1 1.17-2.08.03-.13.01-.27-.01-.4 0 0-.91-1.17-.9-2.23V8s-.05-2.5 1.66-2.5z"/></svg>',
				user: '<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 60.9 60.9" style="enable-background:new 0 0 60.9 60.9;" xml:space="preserve"><style type="text/css">.st0{clip-path:url(#SVGID_2_);}.st1{fill:#FFFFFF;stroke:#01B9F5;stroke-width:0.9;}.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#01B9F5;}</style><g><defs><rect id="SVGID_1_" width="60.9" height="60.9"/></defs><clipPath id="SVGID_2_"><use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath><g transform="translate(0 0)" class="st0"><g transform="translate(-331.55 -1061.549)"><circle class="st1" cx="362" cy="1092" r="30"/><g transform="translate(340.75 1075.749)"><path class="st2" d="M20.9,0.3c3.1,0,5.6,2.5,5.5,5.6c0,3.1-2.5,5.6-5.6,5.5c-3.1,0-5.5-2.5-5.5-5.5C15.4,2.8,17.8,0.3,20.9,0.3C20.9,0.3,20.9,0.3,20.9,0.3L20.9,0.3z"/><path class="st2" d="M29.3,13.6L29.3,13.6c0.5,0.3,0.8,0.8,1,1.4l3.4,12.7c-1.4,1.2-3,2.1-4.6,2.9l-1.3-5v5.6c-4.2,1.5-8.7,1.5-12.9,0v-5.6l-1.3,5c-1.7-0.7-3.2-1.7-4.6-2.9L12.2,15c0.3-1.2,1.4-2,2.6-1.9h4l2.3,4.2l2.3-4.2h4.3C28.3,13.1,28.9,13.3,29.3,13.6L29.3,13.6z"/></g></g></g></g></svg>',
				arrow_down: '<svg fill="#0087cf" viewBox="0 0 24 24"><path d="M4.42 4.74L12 12.32l8.21-8.21L24 7.89l-12 12-12-12 3.79-3.78z"/></svg>',
				calendar: '<svg fill="#005da8" viewBox="0 0 24 24"><path d="M19.5 3v1.54a3 3 0 1 1-6 0V3h-3v1.54a3 3 0 1 1-6 0V3H0v21h24V3zm-12 18h-3v-3h3zm0-6h-3v-3h3zm6 6h-3v-3h3zm0-6h-3v-3h3zm3 6v-3h3zm3-6h-3v-3h3z"/><path d="M6.22 4.5v-3a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 1 1-3 0zM14.78 4.5v-3a1.5 1.5 0 1 1 3 0v3a1.5 1.5 0 0 1-3 0z"/></svg>',
				helpon: '<svg id="svg15" fill-rule="evenodd" clip-rule="evenodd" fill="#a4c242" viewBox="0 0 24 24"><circle id="circle7" cx="12" cy="12" r="11.67" fill="#fff" stroke-width="0"/><path stroke-width="0" d="M23.35 12A11.31 11.31 0 0 0 12 .66 11.3 11.3 0 0 0 .66 12a11.31 11.31 0 0 0 19.36 8.02A11.3 11.3 0 0 0 23.35 12zm-2.86-8.49a11.96 11.96 0 0 1 0 16.98A11.97 11.97 0 0 1 0 12 11.97 11.97 0 0 1 12 0c3.31 0 6.31 1.34 8.49 3.51z"/><path d="M10.74 14.18v-.49c0-.57.1-1.04.3-1.41.21-.38.57-.77 1.09-1.17.6-.48 1-.86 1.18-1.13.18-.26.27-.58.27-.95 0-.44-.15-.77-.43-1-.3-.23-.7-.35-1.24-.35-.5 0-.95.07-1.37.21-.41.14-.82.3-1.21.5l-.65-1.36a6.8 6.8 0 0 1 3.36-.86c1 0 1.8.24 2.4.73.59.5.89 1.18.89 2.05 0 .39-.06.73-.18 1.03-.11.3-.28.59-.51.86-.23.27-.62.63-1.18 1.07-.48.37-.8.68-.97.93-.16.25-.24.58-.24 1v.34zm-.32 2.47c0-.78.38-1.17 1.14-1.17.37 0 .65.1.85.3.2.2.29.5.29.87 0 .36-.1.65-.3.86-.2.22-.48.32-.84.32-.37 0-.65-.1-.85-.3-.19-.22-.29-.5-.29-.88z"/></svg>',
				helpoff: '<svg id="svg15" fill-rule="evenodd" clip-rule="evenodd" fill="#fff" viewBox="0 0 24 24"><circle id="circle" cx="12" cy="12" r="11.67" fill="#a4c242" stroke-width="0"/> path stroke-width="0" d="M23.35 12A11.31 11.31 0 0 0 12 .66 11.3 11.3 0 0 0 .66 12a11.31 11.31 0 0 0 19.36 8.02A11.3 11.3 0 0 0 23.35 12zm-2.86-8.49a11.96 11.96 0 0 1 0 16.98A11.97 11.97 0 0 1 0 12 11.97 11.97 0 0 1 12 0c3.31 0 6.31 1.34 8.49 3.51z"/><path d="M10.74 14.18v-.49c0-.57.1-1.04.3-1.41.21-.38.57-.77 1.09-1.17.6-.48 1-.86 1.18-1.13.18-.26.27-.58.27-.95 0-.44-.15-.77-.43-1-.3-.23-.7-.35-1.24-.35-.5 0-.95.07-1.37.21-.41.14-.82.3-1.21.5l-.65-1.36a6.8 6.8 0 0 1 3.36-.86c1 0 1.8.24 2.4.73.59.5.89 1.18.89 2.05 0 .39-.06.73-.18 1.03-.11.3-.28.59-.51.86-.23.27-.62.63-1.18 1.07-.48.37-.8.68-.97.93-.16.25-.24.58-.24 1v.34zm-.32 2.47c0-.78.38-1.17 1.14-1.17.37 0 .65.1.85.3.2.2.29.5.29.87 0 .36-.1.65-.3.86-.2.22-.48.32-.84.32-.37 0-.65-.1-.85-.3-.19-.22-.29-.5-.29-.88z"/></svg>',
				info: '<svg fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1cb0ba"/><path fill="#fff" d="M9.36 16.63l1.87-7.27h-2v-.64c.8 0 1.61 0 2.26-.13.8 0 1.44 0 2.12-.13l-2.64 9.1v.39c0 .13.13.26.26.39.13.16.26.16.38.16.39 0 .94-.3 1.45-.8.55-.52.93-1.32 1.45-2.39l.55.26c-.55 1.2-1.07 2.25-1.87 2.93a3.2 3.2 0 0 1-2.35 1.03c-.55 0-.93-.13-1.35-.39-.26-.26-.39-.64-.39-1.19v-.51c.13-.26.13-.55.26-.8z"/><path fill="#fff" d="M11.49 5.95c0-.42.12-.8.38-1.06a1.6 1.6 0 0 1 1.06-.39c.42 0 .8.13 1.06.39s.4.64.4 1.06c0 .39-.14.77-.4 1.06-.25.26-.64.39-1.06.39A1.6 1.6 0 0 1 11.87 7a1.6 1.6 0 0 1-.38-1.06z"/></svg>',
				warning: '<svg fill="#b35a00" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12"/><path fill="#fff" d="M13.19 14.12h-2.22l-.55-8.84h3.19zm-2.77 3.19c0-.55.13-.93.42-1.2.26-.25.65-.41 1.16-.41.55 0 .93.16 1.19.42.29.26.42.64.42 1.19 0 .38-.13.77-.42 1.03-.26.29-.64.42-1.19.42-.51 0-.9-.13-1.16-.42a1.36 1.36 0 0 1-.42-1.03z"/></svg>',
				separator: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#01b9f5"/></svg>',
				delete: '<svg xml:space="preserve" width="24px" height="24px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 2763 2763"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css"><![CDATA[.fil1 {fill:#0087CF}.fil0 {fill:#EDEDED}]]></style></defs><g id="Plan_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"/><circle class="fil0" cx="1382" cy="1382" r="1382"/><polygon class="fil1" points="1762,1923 1380,1541 1000,1922 840,1762 1220,1382 840,1002 1002,840 1382,1220 1762,840 1922,1000 1541,1380 1923,1762 "/></g></svg>',
				arrow_right: '<svg fill="#ccc" width="24" height="24" viewBox="0 0 24 24"><path d="M10 17l5-5-5-5v10z"><path fill="#ccc" d="M0 24V0h24v24H0z"></svg>',
				arrow_drop_down: '<svg fill="#01b9f5" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"><path d="M0 0h24v24H0z" fill="#ccc"></svg>',
				launch: '<svg xmlns="http://www.w3.org/2000/svg" fill="#0087cf" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',
				csv: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 34 34"><defs><style>.csv_a{fill:none;}.csv_b{clip-path:url(#a);}.csv_c{fill:#ededed;}.csv_d{fill-rule:evenodd;}.csv_e{fill:#fff;}</style><clipPath id="a"><rect class="csv_a" width="34" height="34"/></clipPath></defs><g class="csv_b"><path fill="currentColor" class="csv_d" d="M734.923,1247a1.932,1.932,0,0,0-1.923,1.923v6.764a1.924,1.924,0,0,0,1.923,1.914h16.4a1.924,1.924,0,0,0,1.923-1.914v-6.764a1.932,1.932,0,0,0-1.923-1.923Z" transform="translate(-726.123 -1235.301)"/><path class="csv_e" d="M955.847,1451.259h.9a3.287,3.287,0,0,1-.741,1.9,2.068,2.068,0,0,1-1.595.694,2.034,2.034,0,0,1-1.764-.919,5.207,5.207,0,0,1,0-5.029,2.026,2.026,0,0,1,1.764-.91,2.053,2.053,0,0,1,1.482.572,2.686,2.686,0,0,1,.751,1.557h-.891a1.994,1.994,0,0,0-.5-.995,1.13,1.13,0,0,0-.844-.366,1.215,1.215,0,0,0-1.1.713,3.88,3.88,0,0,0-.413,1.942,3.841,3.841,0,0,0,.413,1.933,1.225,1.225,0,0,0,1.1.713,1.173,1.173,0,0,0,.957-.479A2.576,2.576,0,0,0,955.847,1451.259Zm2.646.272a1.592,1.592,0,0,0,2.561,1.21,1.034,1.034,0,0,0,.394-.854q0-.718-1.379-1.1c-.178-.047-.328-.084-.422-.113a3.2,3.2,0,0,1-1.454-.685,1.452,1.452,0,0,1-.357-1.06,1.819,1.819,0,0,1,.572-1.4,2.153,2.153,0,0,1,1.5-.525,2.314,2.314,0,0,1,1.642.544,2.024,2.024,0,0,1,.572,1.539v.019h-.854a1.484,1.484,0,0,0-.394-.995,1.291,1.291,0,0,0-.948-.347,1.326,1.326,0,0,0-.882.281.953.953,0,0,0-.328.751.881.881,0,0,0,.244.685,3.542,3.542,0,0,0,1.323.469,3.646,3.646,0,0,1,1.632.685,1.616,1.616,0,0,1,.385,1.154,1.912,1.912,0,0,1-.619,1.5,2.416,2.416,0,0,1-1.689.563,2.323,2.323,0,0,1-1.7-.61,2.492,2.492,0,0,1-.657-1.717Zm8.753-4.363h.891l-2.055,6.511h-.938l-2.1-6.511h.891l1.679,5.535Z" transform="translate(-943.068 -1433.424)"/></g></svg>'
			} as { [key: string]: string }
		}
	},
	computed: {
		themeIcon(): boolean {
			return this.icon !== undefined;
		},
	},
	methods: {
		getThemeIcon(): any {
			if (this.icon !== undefined && this.icons[this.icon] !== undefined) {
				return this.icons[this.icon];
			}

			return;
		},
	},
});