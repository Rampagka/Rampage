<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
      return {

      }
    }
}
</script>

<style>

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    color: #161616;
    text-decoration: none;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    padding: 0;
    margin: 0;
  }
	.container {
		max-width: 1420px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
	}
</style>
