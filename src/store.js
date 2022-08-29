import { writable } from 'svelte/store'

export const ticTacToeStore = writable({
  chosenComponent: false,
  oponent: '',
  chosenTurns: false,
  turns: 0,
})
