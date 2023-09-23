<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

export let feedback = [];
console.log(feedback);
</script>

<ul>
    {#each feedback as { id, rating, text } (id)}
        <!-- Note: Can't add transition on custom component hence div wrapper below -->
        <div in:scale out:fade="{{ duration: 500 }}">
            <FeedbackItem {id} {rating} {text} on:delete />
        </div>
    {/each}
</ul>
