<script>
  import { draw } from 'svelte/transition'
  import { quintOut } from 'svelte/easing'

  export let opponent
  export let turns
  const squares = new Array(9).fill(null)

  let turnX = true
  let gameOver = false
  let winner = ''

  const winCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ]

  const checkBoard = () => {
    let gameIsOver = false
    let active = turnX ? 'X' : 'O'

    winCombinations.forEach((combo) => {
      let inRow = 0
      combo.forEach((square) => {
        if (squares[square] === active) {
          inRow++
        }
      })
      if (inRow === 3) {
        winner = active
        gameIsOver = true
      }
    })

    const squaresTaken = squares.filter((square) => square).length

    if (squaresTaken === 9 && !gameIsOver) {
      winner = 'tie'
      gameIsOver = true
    }

    return gameIsOver
  }

  const computerMove = () => {
    const freeSpaces = []
    squares.forEach((square, i) => {
      if (!square) {
        freeSpaces.push(i)
      }
    })
    const randomSquare =
      freeSpaces[Math.floor(Math.random() * freeSpaces.length)]

    squares[randomSquare] = turnX ? 'X' : 'O'
    gameOver = checkBoard()
    turnX = !turnX
  }

  const setSquare = (i) => {
    if (!squares[i]) {
      squares[i] = turnX ? 'X' : 'O'
      gameOver = checkBoard()
      turnX = !turnX

      if (opponent === 'computer' && !gameOver) {
        setTimeout(() => {
          computerMove()
        }, 1000)
      }
    }
  }
</script>

<div class="board">
  {#each squares as square, i}
    <div class={`square number-${i + 1}`} on:click={() => setSquare(i)}>
      {#if square}
        {#if square === 'X'}
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="86px"
            height="86px"
            viewBox="0 0 50 50"
            enable-background="new 0 0 50 50"
            xml:space="preserve"
          >
            <g id="Layer_3">
              <line
                in:draw={{
                  duration: 750,
                  delay: 500,
                  easing: quintOut,
                }}
                fill="none"
                stroke="#06d6a0"
                stroke-width="2"
                stroke-miterlimit="10"
                x2="8.5"
                y2="41.5"
                x1="41.5"
                y1="8.5"
              />
              <line
                in:draw={{ duration: 750, easing: quintOut }}
                fill="none"
                stroke="#06d6a0"
                stroke-width="2"
                stroke-miterlimit="10"
                x2="41.5"
                y2="41.5"
                x1="8.5"
                y1="8.5"
              />
            </g>
          </svg>
        {:else}
          <svg
            width="92"
            height="92"
            viewBox="-3 -3 92 92"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              in:draw={{ duration: 1500, easing: quintOut }}
              cx="43"
              cy="43"
              r="43"
              fill="#none"
              stroke="#ef476f"
              stroke-width="3"
            />
          </svg>
        {/if}
      {/if}
    </div>
  {/each}
</div>

{#if gameOver}
  {#if winner === 'tie'}
    <p class="winner">Oavgjort!</p>
  {:else}
    <p class="winner">{winner} wins!</p>
  {/if}
{/if}

<style>
  .board {
    margin: 40px auto;
    width: 500px;
    height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }

  .winner {
    color: #118ab2;
  }

  .square {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .number-1,
  .number-2,
  .number-3,
  .number-4,
  .number-5,
  .number-6 {
    border-bottom: 2px solid #118ab2;
  }

  .number-4,
  .number-5,
  .number-6,
  .number-7,
  .number-8,
  .number-9 {
    border-top: 2px solid #118ab2;
  }

  .number-1,
  .number-4,
  .number-7,
  .number-2,
  .number-5,
  .number-8 {
    border-right: 2px solid #118ab2;
  }

  .number-2,
  .number-3,
  .number-5,
  .number-6,
  .number-8,
  .number-9 {
    border-left: 2px solid #118ab2;
  }
</style>
