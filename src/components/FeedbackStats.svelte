<script>
    import {FeedbackStore} from "../store/index.js";

    // get count of feedback
	$: count = $FeedbackStore.length;
	// get the average rating ofr feedback
	$: average = count > 0 ? Math.round($FeedbackStore.reduce((total, item) => {
		return total + item.rating;
	}, 0) / count) : 0;
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Average Rating: {average}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
    }
</style>