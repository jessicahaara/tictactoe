<script>
  export let title
</script>

<main>
  <h1>{title}</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #fdd692;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  h1:focus-visible {
    outline: none;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
