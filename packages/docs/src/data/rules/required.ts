import { RuleOption } from '~/types';

export const ruleOptions: RuleOption[] = [
    {
        property: '`default`',
        description: 'Le message d’erreur qui sera affiché si la règle n’est pas respectée',
        default: '`Ce champs est requis.`'
    }
];
