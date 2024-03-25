<script lang="ts">
	export let image: string;
	export let name: string = 'file';
	export let label: string = 'Subir imagen de forma manual';
	export let className: string = 'default-button';

	const uploadImage = (e: any) => {
		const { target } = e;
		console.log(target.files[0]);
		image = URL.createObjectURL(target.files[0]);
	};

	const classCss = `btn button fill input file pointer ${className}`;
</script>

<button class="{classCss}" type="button" aria-label={label}>
	<label for={name}> {label}</label>
	<input type="file" {name} id={name} on:change={uploadImage} />
</button>
