<script>
	export let dest;
	let firstName = 'Super';
	let lastName = 'Mario';
	let color = 'red';
	let showText = false;
	// create an array of 4 objects of users
	let users = [
		{ id: 1, name: 'John' },
		{ id: 2, name: 'Jane' },
		{ id: 3, name: 'Jack' },
		{ id: 4, name: 'Jill' }
	];

	$: fullName = firstName + ' ' + lastName;
	
	const toggleColor = () => {
		color = color === 'red' ? 'blue' : 'red';
	};

	const toggleText = () => {
		showText = !showText;
	};

	// add user
	const addUser = () => {
		users = [...users, { id: 5, name: 'Jay' }];
	};
</script>

<main>
	<h1 style="color:{color}">Hello {fullName} {dest}!</h1>
	<button on:click={toggleText}>
		{#if showText}
			Hide Text
		{:else}
			Show Text
		{/if}
	</button>
	<button on:click={toggleColor}>Toggle color</button>
	<button on:click={addUser}>Add user</button>
	{#if showText}
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	{/if}
	{#each users as user (user.id)}
		<p>{user.name}</p>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>