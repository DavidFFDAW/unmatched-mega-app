export interface Sidekick {
	hp: number;
	name: string;
	attack: string;
	quantity: number;
}
export interface Hero {
	name: string;
	attack: string;
	ability: string;
	hp: number;
	move: number;
	quote?: string | null;
}
export interface HeroCardInterface {
	hero: Hero;
	sidekick: Sidekick;
	hasSidekick?: boolean;
}
