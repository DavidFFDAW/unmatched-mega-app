<script lang="ts">
    export let image: string;

    const uploadImage = (e: any) => {
		const { target } = e;
		console.log(target.files[0]);
		image = URL.createObjectURL(target.files[0]);
	};
</script>

<button class="btn button fill input file pointer">
    Subir imagen de forma manual
    <input type="file" name="file" on:change={uploadImage} />
</button>