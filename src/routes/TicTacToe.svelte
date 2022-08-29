<script>
  import Board from './../components/Board.svelte'
  import ChooseOpponent from '../components/ChooseOpponent.svelte'
  import ChooseTurns from '../components/ChooseTurns.svelte'

  let chosenOpponent = false
  let opponent = ''
  let turns = 0

  const handleChoosenOpponent = (op) => {
    chosenOpponent = true
    opponent = op
  }

  const handleChooseTurns = (num) => {
    turns = num
  }
</script>

<div>
  <h1>Tic Tac Toe</h1>
  {#if !chosenOpponent}
    <ChooseOpponent {handleChoosenOpponent} />
  {:else if chosenOpponent && turns === 0}
    <ChooseTurns {handleChooseTurns} />
  {:else}
    <Board {opponent} {turns} />
  {/if}
</div>

<style>
  div {
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    text-align: center;
    color: #fdd692;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
