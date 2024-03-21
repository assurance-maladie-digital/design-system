// eslint-disable-next-line ts/no-explicit-any
export function renameRules(rules: Record<string, any>, from: string, to: string) {
	return Object.fromEntries(Object.entries(rules)
		.map(([key, value]) => {
			if (key.startsWith(from)) {
				return [to + key.slice(from.length), value];
			}

			return [key, value];
		}));
}
