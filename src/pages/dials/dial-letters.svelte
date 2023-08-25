<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import { dials } from "./stores/dials.store";

    let circle: any;
    let lifeArray: any[] = [];
    
    const getCoordinates = (angle: number, radius: number) => {
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return { x, y };
    }

    const createNumber = (number: number, angle: number, radius: number, rotation: number) => {
        const { x, y } = getCoordinates(angle, radius);

        return {
            className: 'letters-number-item',
            textContent: number.toString(),
            style: `position: absolute; top: calc(46% + ${Math.round(y)}px); left: calc(47.5% + ${Math.round(x)}px); transform: rotate(${rotation}deg); font-size: 1em; font-weight: bold; color: #FFF;`,
        }
    }

    const createLetters = () => {
        let rotations = 90;
        let angle = 360 / ($dials.life + 1);
        console.log(circle);        
        let radius = browser && circle ? circle.clientWidth / 2 : 0;

        lifeArray = Array.from({ length: $dials.life + 1 }).map((_,i) => i).map((number, index) => {
            const genR = createNumber(number, angle * index, radius, rotations);
            rotations += angle;

            return genR;
        });
    }

    dials.subscribe((value) => {
        createLetters();
    });

    onMount(() => {
        createLetters();
    });

    
</script>

<div bind:this={circle} class="relative bg circle" style="padding: 21px; box-sizing: content-box;">
    <div class="circunference center" />
    <div class="letters-container" id="lettersContainer">
        {#each lifeArray as letter}
            <div class="letters-number-item" style={letter.style.toString()}>{letter.textContent}</div>
        {/each}
    </div>
</div>