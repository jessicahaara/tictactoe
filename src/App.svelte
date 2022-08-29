<script>
  let title = 'Gamesica'
  import { Router, Route, Link } from 'svelte-navigator'
  import TicTacToe from './routes/TicTacToe.svelte'
  import Home from './routes/Home.svelte'
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Router>
  <nav>
    <Link to="/">{title}</Link>
    <Link to="tictactoe">Tic Tac Toe</Link>
  </nav>
  <div>
    <Route path="/">
      <Home {title} />
    </Route>
    <Route path="tictactoe">
      <TicTacToe />
    </Route>
  </div>
</Router>

<style>
  nav {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: center;
    border-bottom: 1px solid #118ab2;
    padding-bottom: 10px;
  }

  nav :global(a) {
    color: #118ab2;
    text-transform: uppercase;
  }
</style>
