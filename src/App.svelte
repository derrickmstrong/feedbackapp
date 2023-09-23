<script>
    import FeedbackList from "./components/FeedbackList.svelte";

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl quis aliquam ultricies, nunc nisl ultricies nunc, quis aliquam nisl nisl quis nisl."
		},
		{
			id: 2,
			rating: 7,
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
	]
	
</script>

<main class="container">
	<FeedbackList feedback={feedback} />
</main>

<style>
</style>