<script lang="ts">
	export let image: string;
	export let name: string = 'file';
	export let label: string = 'Subir imagen de forma manual';

	const uploadImage = (e: any) => {
		const { target } = e;
		console.log(target.files[0]);
		image = URL.createObjectURL(target.files[0]);
	};
</script>

<button class="btn button fill input file pointer">
	<label for={name}> {label}</label>
	<input type="file" {name} id={name} on:change={uploadImage} />
</button>
