<script>
    import Card from "./Card.svelte";

    export let id;
    export let rating;
    export let text;

    const handleDelete = (id) => {
        console.log(id);
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

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>