<script>
    import { createEventDispatcher } from "svelte";
    import Card from "./Card.svelte";

    export let id;
    export let rating;
    export let text;

    const dispatch = createEventDispatcher();

    const handleDelete = (id) => {
        // console.log(id);
        // create a custom event (works like an emit in Vue.js but must be passed up to the parent component)
        dispatch("delete", id);
    }
</script>

<Card>
    <div class="num-display">{rating}</div>
    <p class="text-display">{text}</p>
    <button on:click={handleDelete(id)} class="close">X</button>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .text-display {
    margin: 10px 25px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>