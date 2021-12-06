export const locales = {
    version: 'Version',
    accesValues: [
        'totalement conforme', // 0 index map to code
        'partiellement conforme', // 1 index map to code
        'non conforme' // 2 index map to code
    ],
    accessLevelFunc: function(code: number): string{
        return `Accessibilité: ${this.accesValues[code]}`;
    }
};
