export interface Sidekick {
	hp: number | undefined;
	name: string | undefined;
	attack: string | undefined;
	quantity: number | undefined;
}
export interface Hero {
	name: string | undefined;
	attack: string | undefined;
	ability: string | undefined;
	hp: number | undefined;
	move: number | undefined;
	quote?: string | undefined;
}
export interface HeroCard {
	hero: Hero;
	sidekick: Sidekick;
	hasSidekick?: boolean;
}
