<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import HttpService from '../../../services/http.service';
    import type { DeckCards, SearchUserDeck } from '../models';
    import type { ApiResponse } from '../../../models/models';

    const { id } = $page.params;
    let state: {
        hand: DeckCards[];
        discard: DeckCards[];
        deck: DeckCards[];
        response: SearchUserDeck | { name: string };
    } = {
        hand: [],
        discard: [],
        deck: [],
        response: {
            name: 'Deck',
        },
    };

    onMount(() => {
        HttpService.get(`/api/deck/${id}`).then((resp: ApiResponse) => {
            console.log({
                content: resp.content,
            });

            const { cards } = resp.content.deck_data;
            const totalDeck = cards.reduce((acc: DeckCards[], curr: DeckCards) => {
                return [...acc, ...Array.from({ length: curr.quantity }).fill(curr)];
            }, []);

            const shuffled = totalDeck.sort(() => 0.5 - Math.random());
            state.hand = shuffled.slice(0, 5);
            state.deck = shuffled.slice(5, shuffled.length);
            state.response = resp.content;
        });
    });
</script>

{#if state}
    <h1 class="fff league">Mazo {state.response?.name}</h1>

    <div class="flex center acenter mega-container">
        <div class="cards-container">
            {#each state.hand as card}
                <div class="zoom-box" style="width: 63mm; height: 88mm;">
                    <div class="unmatched-card {card.type} type-card">
                        <div class="main-wrapper">
                            <div class="inner-top" style="background-image: url('{card.imageUrl}');" />
                            <div class="upper-left">
                                <svg width="100%" height="100%" viewBox="0 0 10.8 47"
                                    ><polygon
                                        points="0,0 10.8,0 10.8,30.39595947265625 5,33.69595947265625 0,30.89595947265625"
                                        class="border"
                                    /><polygon
                                        points="0,14.2 10,14.2 10,29.995959472656246 5,32.89595947265625 0,29.995959472656246"
                                        class="name-panel"
                                    /><polygon points="0,0 10,0 10,14.2 5,17.1 0,14.2" class="canton" /></svg
                                >
                            </div>
                            <div data-v-d8d5fac2="" class="upper-left icon">
                                <div data-v-d8d5fac2="" class="icon-wrapper editor">
                                    <div data-v-12719f0f="" data-v-d8d5fac2="" class="unmatched-icon">
                                        <svg
                                            data-v-12719f0f=""
                                            version="1.0"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="26"
                                            height="22"
                                            viewBox="0 0 8680 8520"
                                            preserveAspectRatio="xMidYMid meet"
                                            ><g data-v-12719f0f=""
                                                ><path
                                                    data-v-12719f0f=""
                                                    d="M5991 8453 c-12 -21 -25 -45 -31 -53 -5 -8 -241 -448 -525 -977 -285 -530 -520 -963 -525 -963 -7 0 -1014 1904 -1034 1956 -11 28 -26 32 -26 7 -1 -10 -47 -465 -103 -1012 -66 -637 -107 -996 -114 -998 -12 -4 -379 265 -376 276 1 4 -4 8 -10 8 -20 0 -806 587 -799 597 3 5 1 6 -5 3 -5 -3 -103 64 -217 149 -114 84 -213 154 -219 154 -8 0 -9 -3 -1 -8 5 -4 40 -79 76 -167 37 -88 231 -558 433 -1045 202 -487 370 -895 373 -907 2 -13 2 -23 -2 -23 -15 0 -2213 1125 -2223 1139 -7 8 -13 12 -13 8 0 -7 -341 160 -350 172 -3 3 -9 7 -15 8 -5 1 -19 5 -30 9 -14 6 -8 -7 22 -42 51 -61 129 -137 135 -133 10 8 1849 -1794 1840 -1803 -19 -19 -1165 -547 -1175 -541 -5 3 -8 2 -4 -3 3 -5 -82 -49 -188 -99 -107 -49 -193 -90 -192 -92 2 -1 365 -58 807 -128 890 -138 860 -133 860 -145 0 -13 -1490 -1365 -1501 -1362 -6 1 -8 -1 -5 -6 6 -10 -211 -208 -225 -204 -5 1 -8 -2 -7 -7 2 -5 -62 -69 -142 -142 -487 -445 -479 -437 -451 -434 14 1 33 5 41 9 37 14 235 56 247 52 7 -3 13 -2 13 3 0 12 197 54 211 45 7 -4 10 -3 6 2 -3 6 100 34 236 65 133 31 673 156 1200 279 527 122 960 220 963 217 3 -3 -134 -519 -306 -1148 -240 -882 -308 -1144 -299 -1153 9 -8 10 -8 6 0 -8 14 36 57 47 47 4 -5 6 -3 4 3 -4 14 953 1004 964 998 5 -3 7 -1 6 4 -4 12 573 612 587 612 10 -1 909 -1146 904 -1152 -2 -2 8 -14 21 -28 21 -21 27 -23 36 -10 7 8 10 20 7 27 -3 7 -1 13 4 13 5 0 9 8 9 18 1 19 441 1443 449 1451 3 2 22 -11 43 -30 20 -19 102 -95 182 -169 80 -73 172 -158 205 -190 170 -160 1715 -1590 1719 -1590 3 0 -18 51 -46 113 -28 61 -51 120 -52 130 0 9 -3 17 -6 17 -11 0 -40 71 -34 82 4 6 3 9 -2 6 -10 -6 -430 926 -428 948 1 8 -1 12 -5 10 -4 -3 -29 46 -56 107 -27 62 -63 144 -81 182 -89 193 -423 943 -426 956 -2 8 2 13 7 13 47 -5 1812 -511 1808 -518 -4 -5 -1 -6 6 -2 6 4 51 -4 101 -18 49 -14 94 -26 100 -26 6 0 -142 129 -328 288 -187 158 -337 290 -335 295 2 4 0 6 -5 5 -12 -4 -338 272 -335 284 2 4 -1 7 -6 5 -11 -2 -951 792 -951 804 0 11 -85 -9 800 185 415 90 763 163 773 160 9 -2 15 -1 13 3 -3 4 137 38 310 76 181 40 314 73 314 80 0 6 -8 11 -17 11 -10 0 -270 90 -578 199 -308 109 -722 256 -920 325 -267 95 -360 132 -360 144 0 19 1437 1935 1448 1929 4 -3 7 -1 6 4 -4 15 13 43 22 37 5 -3 8 -1 7 4 -4 14 211 302 225 302 6 0 8 3 4 6 -3 4 6 23 21 42 15 20 23 33 17 30 -54 -32 -550 -246 -558 -241 -7 3 -9 2 -4 -2 9 -11 -581 -278 -595 -269 -6 4 -9 3 -5 -2 6 -10 -977 -458 -1005 -458 -9 0 -15 -3 -13 -6 4 -6 -495 -233 -501 -227 -4 3 32 586 96 1582 12 176 29 444 39 595 10 151 17 277 15 278 -1 2 -12 -13 -23 -35z m-5605 -1805 l29 -33 -32 29 c-31 28 -38 36 -30 36 2 0 16 -15 33 -32z"
                                                /></g
                                            ></svg
                                        ><!----><!----><!---->
                                    </div>
                                </div>
                                <div data-v-d8d5fac2="" class="value">4</div>
                            </div>

                            <div class="upper-left character">
                                <div
                                    contenteditable="true"
                                    class="character-name"
                                    style="transform: rotate(-90deg) scaleX(1);"
                                >
                                    {card.characterName}
                                </div>
                            </div>

                            <div data-v-d8d5fac2="" class="inner-bottom">
                                <div data-v-d8d5fac2="" class="boost-circle inner-border">
                                    <div data-v-d8d5fac2="" class="boost-value">
                                        1 <div data-v-972d88fa="" data-v-d8d5fac2="" class="up-down-buttons editor">
                                            <div data-v-972d88fa="" class="valid">
                                                <span data-v-972d88fa="" class="fa-layers fa-fw">
                                                    <svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="circle"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                                            class=""
                                                        /></svg
                                                    ><svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="far"
                                                        data-icon="caret-circle-up"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-caret-circle-up fa-w-16"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"
                                                            class=""
                                                        /></svg
                                                    ></span
                                                >
                                            </div>
                                            <div data-v-972d88fa="" class="valid">
                                                <span data-v-972d88fa="" class="fa-layers fa-fw"
                                                    ><svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="circle"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                                            class=""
                                                        /></svg
                                                    ><svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="far"
                                                        data-icon="caret-circle-down"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-caret-circle-down fa-w-16"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M157.1 216h197.8c10.7 0 16.1 13 8.5 20.5l-98.9 98.3c-4.7 4.7-12.2 4.7-16.9 0l-98.9-98.3c-7.7-7.5-2.3-20.5 8.4-20.5zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-48 0c0-110.5-89.5-200-200-200S56 145.5 56 256s89.5 200 200 200 200-89.5 200-200z"
                                                            class=""
                                                        /></svg
                                                    ></span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-v-d8d5fac2=""
                                    contenteditable="true"
                                    class="card-title"
                                    style="min-height: 1.17em;"
                                >
                                    POLLO FRITO
                                </div>
                                <div data-v-d8d5fac2="" class="card-text">
                                    <div data-v-d8d5fac2="">
                                        <div
                                            data-v-d8d5fac2=""
                                            contenteditable="true"
                                            class="empty"
                                            style="min-height: 100%; white-space: pre-wrap;"
                                        />
                                        <div data-v-d8d5fac2="" class="">
                                            <strong data-v-d8d5fac2="">Immediately:</strong><span
                                                data-v-d8d5fac2=""
                                                contenteditable="true"
                                                style="white-space: pre-wrap;">Roba 1 carta.</span
                                            >
                                        </div>
                                        <div data-v-d8d5fac2="" class="empty">
                                            <strong data-v-d8d5fac2="">During combat:</strong><span
                                                data-v-d8d5fac2=""
                                                contenteditable="true"
                                                style="white-space: pre-wrap;"
                                            />
                                        </div>
                                        <div data-v-d8d5fac2="" class="">
                                            <strong data-v-d8d5fac2="">After combat:</strong><span
                                                data-v-d8d5fac2=""
                                                contenteditable="true"
                                                style="white-space: pre-wrap;"
                                                >Roba 1 carta o mueve una mina 1 casilla.</span
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div data-v-d8d5fac2="" class="bottom-right">
                                    <span data-v-d8d5fac2="" class="deck-name">Duck</span><span
                                        data-v-d8d5fac2=""
                                        class="card-quantity"
                                    >
                                        x2
                                    </span><span data-v-d8d5fac2="" class="card-quantity-editing um-invisible">
                                        x2 <div data-v-972d88fa="" data-v-d8d5fac2="" class="up-down-buttons editor">
                                            <div data-v-972d88fa="" class="valid">
                                                <span data-v-972d88fa="" class="fa-layers fa-fw"
                                                    ><svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="fas"
                                                        data-icon="circle"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-circle fa-w-16 fa-inverse"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                                                            class=""
                                                        /></svg
                                                    ><svg
                                                        data-v-972d88fa=""
                                                        aria-hidden="true"
                                                        focusable="false"
                                                        data-prefix="far"
                                                        data-icon="caret-circle-up"
                                                        role="img"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        class="svg-inline--fa fa-caret-circle-up fa-w-16"
                                                        ><path
                                                            data-v-972d88fa=""
                                                            fill="currentColor"
                                                            d="M354.9 296H157.1c-10.7 0-16.1-13-8.5-20.5l98.9-98.3c4.7-4.7 12.2-4.7 16.9 0l98.9 98.3c7.7 7.5 2.3 20.5-8.4 20.5zM8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm48 0c0 110.5 89.5 200 200 200s200-89.5 200-200S366.5 56 256 56 56 145.5 56 256z"
                                                            class=""
                                                        /></svg
                                                    ></span
                                                >
                                            </div>
                                            <div data-v-972d88fa="" class="valid">
                                                <span data-v-972d88fa="" class="fa-layers fa-fw" />
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}

<style>
    .cards-container {
        /* width: 100%; */
        display: grid;
        grid-template-columns: repeat(4, 0fr);
        gap: 25px 15px;
    }

    .mega-container {
        padding: 10px 0 80px 0;
    }

    @media only screen and (max-width: 768px) {
        .cards-container {
            grid-template-columns: repeat(1, 0fr);
        }
    }
    .unmatched-card {
        width: 63mm;
        height: 88mm;
        line-height: normal;
        background: #f7eadb;
        padding: 3mm;
        border-radius: 2.5mm;
    }
    .main-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 1.5mm;
    }

    .inner-top {
        position: relative;
        flex: 1;
        background: #fff;
        border-top-left-radius: 1.5mm;
        border-top-right-radius: 1.5mm;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
    }

    .upper-left {
        position: absolute;
        width: 10.8mm;
        height: 47mm;
        border-top-left-radius: 1.5mm;
        overflow: hidden;
    }
    .upper-left .border {
        fill: #f7eadb;
    }
    .attack .upper-left .canton {
        fill: #dc3034;
    }
    .scheme .upper-left .canton {
        fill: #fcbd71;
    }
    .defence .upper-left .canton {
        fill: #2c76ac;
    }
    .versatile .upper-left .canton {
        fill: #6c4e8d;
    }
    .upper-left .name-panel {
        fill: #000;
    }

    .upper-left.icon {
        width: 10mm;
        height: 17.1mm;
        text-align: center;
        overflow: visible;
    }
    .editable .unmatched-icon {
        cursor: pointer;
    }

    svg[data-v-12719f0f] {
        margin-top: 1.5mm;
        fill: #fff;
        stroke: none;
    }
    .editable .value {
        position: relative;
    }

    .editable[data-v-d8d5fac2] .value .editor {
        left: 6mm;
        top: -4.5mm;
        width: 10mm;
        height: 18mm;
        visibility: hidden;
    }
    .upper-left.icon .value[data-v-d8d5fac2] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        margin: 7.5mm 0 0;
        color: #fff;
        font-size: 7.8mm;
    }
    .editable .editor {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .icon-wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    .inner-bottom[data-v-d8d5fac2] {
        display: flex;
        flex-direction: column;
        position: relative;
        min-height: 28.8mm;
        border-top: 0.8mm solid var(--inner-border-colour);
        border-bottom-left-radius: 1.5mm;
        border-bottom-right-radius: 1.5mm;
        padding: 2mm 3mm 1mm;
        background: #000;
        background-image: var(--background-pattern);
        color: #fff;
    }
    .unmatched-card,
    .unmatched-card * {
        font-weight: 400;
        font-family: 'bebas', sans-serif;
        print-color-adjust: exact;
        /* -webkit-print-color-adjust: exact; */
        /* color-adjust: exact; */
    }
    .editable .upper-left.character {
        cursor: vertical-text;
    }

    .upper-left.character {
        top: 17.1mm;
        width: 10mm;
        height: 29.1mm;
    }
    .upper-left.character .character-name {
        white-space: nowrap;
        color: #fff;
        padding: 0;
        margin: 0;
        transform: rotate(-90deg);
        position: absolute;
        transform-origin: right bottom;
        text-align: right;
        text-transform: uppercase;
        font-size: 6mm;
        bottom: 26.5mm;
        right: 1.1mm;
    }
</style>
