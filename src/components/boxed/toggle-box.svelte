<script>
    let showBox = false;
</script>

<div class="w1 box p relative {showBox ? 'show-box' : 'unshow-box'}">
    <button class="absolute btn-absolute-show-box-toggle">
        {showBox ? 'Mostrar' : 'Ocultar'}
    </button>
    
    <slot/>
</div>