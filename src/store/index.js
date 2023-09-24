import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Svelte is awesome!"
    },
]);