<script>
    import FeedbackItem from "./FeedbackItem.svelte";

export let feedback = [];
console.log(feedback);
</script>

<ul>
    {#each feedback as { id, rating, text } (id)}
        <FeedbackItem {id} {rating} {text} on:delete />
    {/each}
</ul>
