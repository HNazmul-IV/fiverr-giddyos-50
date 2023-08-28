interface User {
	name: string;
	game: string;
	time: string;
	image: string;
}

interface DataItem {
	user: User;
	image: string;
	post: string;
	downloads: string;
	views: string;
}

interface AccordionItem {
	title: string;
	content: string;
}

interface AccordionState {
	activeIndex: number | null;
	items: AccordionItem[];
}
interface FAQItem {
	title: string;
	content: string;
}
