<script>
    import { fade, scale } from "svelte/transition";
    // import { onDestroy } from "svelte";
    import FeedbackItem from "./FeedbackItem.svelte";
    import { FeedbackStore } from "../store/index.js";
    
    // let feedback = [];

    // FeedbackStore.subscribe((data) => feedback = data);

    // // unsubscribe from store when component is destroyed
    // onDestroy(() => unsubscribe());

    // console.log(feedback);
</script>

<ul>
    {#each $FeedbackStore as { id, rating, text } (id)}
        <!-- Note: Can't add transition on custom component hence div wrapper below -->
        <div in:scale out:fade="{{ duration: 500 }}">
            <FeedbackItem {id} {rating} {text} />
        </div>
    {/each}
</ul>
