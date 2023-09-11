import { writable } from "svelte/store";

type Dials = {
    life: number;
    dialSize: number;
    letterSize: number;
    letterColor: string;
    dialLetterDistance: number;
    Tipograph: string;
    dialCenterColor: string;
    dialCenterWidth: number;
};


const initialDialState: Dials = {
    life: 15,
    dialSize: 220,
    letterSize: 16,
    letterColor: "#FFFFFF",
    dialLetterDistance: 16,
    Tipograph: "Segoe UI",
    dialCenterColor: "#ffffff",
    dialCenterWidth: 1,
}

export const dials = writable(initialDialState);