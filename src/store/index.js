import { writable } from "svelte/store";

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Svelte is awesome!"
    },
    {
        id: 2,
        rating: 8,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis nisl."
    },
    {
        id: 3,
        rating: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis nisl."
    },
    {
        id: 4,
        rating: 7,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
]);