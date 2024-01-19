<script>
	import RelatedCardBack from './components/related-card-back.svelte';
</script>

<div class="w1 box p">
	<h3 class="title">Otras partes traseras de cartas</h3>

	<p>
		Estas cartas han sido sacadas de la página <a
			href="https://gridbeast.gg/unmatched-the-complete-roster/">Grid Beast</a
		>
		y son propiedad de <a href="https://restorationgames.com/">Restoration Games</a>.
	</p>

	<div class="down grid related-cards-back-grid grid-responsive">
		<RelatedCardBack title="Aquiles" name="achilles" />
		<RelatedCardBack title="Alicia" name="alice" />
		<RelatedCardBack title="Angel (Buffy)" name="angel" />
		<RelatedCardBack title="Annie Christmas" name="annie-christmas" />
		<RelatedCardBack title="Rey Arturo" name="arthur" />
		<RelatedCardBack title="Beowulf" name="beowulf" />
		<RelatedCardBack title="Bigfoot" name="bigfoot" />
		<RelatedCardBack title="Black Panther (Marvel)" name="black-panther" />
		<RelatedCardBack title="Black Widow (Marvel)" name="black-widow" />
		<RelatedCardBack title="Bloody Mary" name="bloody-mary" />
		<RelatedCardBack title="Bruce Lee" name="bruce-lee" />
		<RelatedCardBack title="Buffy" name="buffy" />
		<RelatedCardBack title="Bullseye" name="bullseye" />
		<RelatedCardBack title="Cloak And Dagger (Marvel)" name="cloak-dagger" />
		<RelatedCardBack title="Daredevil (Marvel)" name="daredevil" />
		<RelatedCardBack title="Deadpool (Marvel)" name="deadpool" />
		<RelatedCardBack title="Doctora Sattler" name="dr-sattler" />
		<RelatedCardBack title="Doctor Strange (Marvel)" name="dr-strange" />
		<RelatedCardBack title="Dracula" name="dracula" />
		<RelatedCardBack title="Elektra (Marvel)" name="elektra" />
		<RelatedCardBack title="El Genio de la lampara" name="genie" />
		<RelatedCardBack title="Ghost Rider (Marvel)" name="ghost-rider" />
		<RelatedCardBack title="Sherlock Holmes" name="holmes" />
		<RelatedCardBack title="Houdini" name="houdini" />
		<RelatedCardBack title="Ingen" name="ingen" />
		<RelatedCardBack title="Hombre Invisible" name="invisible" />
		<RelatedCardBack title="Dr. Jekyll & Mr. Hyde" name="jekyll" />
		<RelatedCardBack title="Jill Trent" name="jill-trent" />
		<RelatedCardBack title="Caperucita Roja" name="little-red" />
		<RelatedCardBack title="Luke Cage (Marvel)" name="luke-cage" />
		<RelatedCardBack title="Medusa" name="medusa" />
		<RelatedCardBack title="Caballero Luna (Marvel)" name="moon-knight" />
		<RelatedCardBack title="Ms. Marvel (Marvel)" name="ms-marvel" />
		<RelatedCardBack title="Nikola Tesla" name="nikola-tesla" />
		<RelatedCardBack title="Oda Nobunaga" name="nobunaga" />
		<RelatedCardBack title="Ogon Bat" name="ogon-bat" />
		<RelatedCardBack title="Raptores" name="raptors" />
		<RelatedCardBack title="Robin Hood" name="robin-hood" />
		<RelatedCardBack title="She Hulk (Marvel)" name="she-hulk" />
		<RelatedCardBack title="Sinbad, el marino" name="sinbad" />
		<RelatedCardBack title="Spiderman (Marvel)" name="spidey" />
		<RelatedCardBack title="Spike (Buffy)" name="spike" />
		<RelatedCardBack title="Squirrel Girl (Marvel)" name="squirrel" />
		<RelatedCardBack title="Sun Wukong" name="sun-wukong" />
		<RelatedCardBack title="T-Rex" name="t-rex" />
		<RelatedCardBack title="Tomoe Gozen" name="tomoe-gozen" />
		<RelatedCardBack title="Willow (Buffy)" name="willow" />
		<RelatedCardBack title="Winter Soldier (Marvel)" name="winter-soldier" />
		<RelatedCardBack title="Yennenga" name="yennenga" />
	</div>
</div>

<style>
	.related-cards-back-grid {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		place-items: start;
		gap: 25px 10px;
	}
</style>
