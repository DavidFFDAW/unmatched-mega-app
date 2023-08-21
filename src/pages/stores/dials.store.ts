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
    letterColor: "#FFF",
    dialLetterDistance: 21,
    Tipograph: "Segoe UI",
    dialCenterColor: "#fff",
    dialCenterWidth: 1,
}

const dials = writable(initialDialState);

export {
    dials
}