<section class="global-loading">
    <div class="spinner"/>
</section>

<style>
    .global-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100;
        background: rgba(0,0,0,.8);
        z-index: 100;
    }

    .global-loading .spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        margin: -50px 0 0 -50px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #fff;
        animation: spin 1s linear infinite;
    }

</style>