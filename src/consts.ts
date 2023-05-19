export const SITE = {
	title: 'NYGH IDS7',
	description: 'Custom NYGH documentation for the Sectra IDS7 Software.',
	defaultLanguage: 'en-us',
} as const;

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;

export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	(typeof KNOWN_LANGUAGE_CODES)[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Overview': [
			{ text: 'Introduction', link: 'en/introduction' },
		],
		'IDS7 GUI': [
			{ text: 'Information Window', link: 'en/info-window' },
			{ text: 'Quick Window🚧', link: 'en/quick-window' },
			{ text: 'Matrix Window', link: 'en/matrix-window' },
			{ text: 'Image Window🚧', link: 'en/image-window' },
		],
		'Workflows': [
			{ text: 'Ultrasound', link: 'en/ultrasound-workflow' },
		],
		'Tools Quick Reference': [
			{text: 'Annotation & Measurement🚧', link: 'en/text-and-distance' },
			{text: 'Deleting Images', link: 'en/delete-images' },
			{text: 'Exam Comments', link: 'en/exam-comments' },
			{text: 'Image Viewing Keystrokes', link: 'en/keystrokes' },
			{text: 'Instant Messenger🚧', link: 'en/instant-message' },
		],
		'Advanced': [
			{text: 'Personalized Hotkeys🚧', link: 'en/personal-hotkeys'},
		],
	},
};
