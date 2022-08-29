<script>
  export let handleChoosenOpponent
</script>

<div class="container">
  <h2>Välj motspelare</h2>
  <div class="buttons">
    <button on:click={() => handleChoosenOpponent('computer')}>
      Möt Datorn
    </button>
    <button on:click={() => handleChoosenOpponent('friend')}>
      Möt en kompis
    </button>
  </div>
</div>

<style>
  .container {
    background-color: #118ab2;
    outline: 3px solid white;
    outline-offset: -6px;
    width: 60vw;
    min-width: 400px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    color: white;
    font-size: 2em;
    font-weight: 100;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
  }

  button {
    width: 250px;
    height: 100px;
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 100;
    background-color: #06d6a0;
    outline: 3px solid white;
    outline-offset: -6px;
    color: white;
    border: none;
    transition: 0.4s;
  }

  button:hover {
    background-color: white;
    color: #118ab2;
  }
</style>
