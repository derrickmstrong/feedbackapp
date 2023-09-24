<script>
    import {v4 as uuidv4} from 'uuid';
    import {FeedbackStore} from "../store/index.js";
    import Button from "../common/Button.svelte";
    import Card from "../common/Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";
    
    let rating = 10;
    let text = '';
    let btnDisabled = true;
    let min = 10;
    let msg = '';


    const handleInput = (e) => {
        text = e.target.value;
        // check if text is at least 10 characters
        if (text.trim().length <= min) {
            btnDisabled = true;
            // set msg to error message
            msg = `Please enter at least ${min} characters`;
        } else {
            btnDisabled = false;
            // set msg to empty string
            msg = '';
        };
    }

    const handleSelected = (e) => rating = e.detail;
    
    const handleSubmit = () => {
        if (text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(),
                rating: +rating,
                text,
            };
            // send feedback to store
            FeedbackStore.update((currentFeedback) => {
                return [newFeedback, ...currentFeedback];
            });
            // reset form
            text = '';
        }
    }
</script>

<Card>
    <header>
        <h2>How would you rate Svelte?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit}>
        <RatingSelect on:rating-select={handleSelected} />
        <div class="input-group">
            <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
            <Button disabled={btnDisabled}>Send</Button>
        </div>
        {#if msg}
            <div class="message">{msg}</div>
        {:else}
            <div class="message"></div>
        {/if}
    </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 1.25rem;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }

  .message{
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
    height: 40px;
  }
</style>