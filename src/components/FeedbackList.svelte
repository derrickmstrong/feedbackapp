<script>
    import { fade, scale } from "svelte/transition";
    import { FeedbackStore } from "../store/index.js";
    import FeedbackItem from "./FeedbackItem.svelte";
</script>

<ul>
    {#each $FeedbackStore as { id, rating, text } (id)}
        <!-- Note: Can't add transition on custom component hence div wrapper below -->
        <div in:scale out:fade="{{ duration: 500 }}">
            <FeedbackItem {id} {rating} {text} />
        </div>
    {/each}
</ul>
