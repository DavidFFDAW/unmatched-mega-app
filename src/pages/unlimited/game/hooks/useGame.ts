import { writable } from "svelte/store";
import DiscardFooter from "../components/footers/discard-footer.svelte";
import { FOOTER_TABS } from "@pages/unlimited/unlimited.constants";

interface Footer {
    tab: string;
    component: any;
    visible: boolean;
};

interface GameState {
    currentTab: string;
    groupView: boolean;
    footer: Footer;
};

const initialState: GameState = {
    currentTab: 'hand',
    groupView: false,
    footer: {
        tab: 'hand',
        component: DiscardFooter,
        visible: false
    }
};

export const gameState = writable(initialState);

export const setView = () => {
    gameState.update((state) => {
        state.groupView = !state.groupView;
        return state;
    });
};

export const changeFooter = (ev: CustomEvent) => {
    const tab = ev.detail.tab;
    const component = FOOTER_TABS[tab] || FOOTER_TABS.default;

    gameState.update((state) => {
        state.footer.tab = tab;
        state.footer.visible = true;
        state.footer.component = component;

        return state;
    });
};