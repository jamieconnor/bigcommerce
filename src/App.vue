<template>
  <div id="app">
    <router-view/>
    <div class="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto:500,700);

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }

  body {
    margin: 20px;
    color: #435757;
    background: linear-gradient(-20deg, #d0b782 20%, #a0cecf 80%);
    font: 500 1.2em/1.2 'Roboto', sans-serif;
  }
   .nav {
     margin-top: 30px;
     text-align: center;
   }

  .container {
    max-width: 450px;
    margin: 0 auto;
    border-top: 5px solid #435757;
    background-color: rgba(255, 255, 255, .2);
    box-shadow: 0 0 20px rgba(0, 0, 0, .1);
    user-select: none;
  }

  h1 {
    margin: 0;
    padding: 20px 20px 0;
    background-color: rgba(255, 255, 255, .4);
    font-size: 1.8em;
    text-align: center;
  }
  .instructions {
    margin: 0;
    padding: 0 10px 20px;
    background-color: rgba(255, 255, 255, .4);
    font-size: .8rem;
    text-align: center;
  }

  .items {
    display: flex;
    flex-direction: column;
    padding: 20px;
    counter-reset: done-items undone-items;
  }

  h2 {
    position: relative;
    margin: 0;
    padding: 10px 0;
    font-size: 1.2em;
  }

  h2::before {
    content: '';
    display: block;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: -20px;
    width: 5px;
    background-color: #435757;
  }

  h2::after {
    display: block;
    float: right;
    font-weight: normal;
  }

  /* hide inputs offscreen, but at the same vertical positions as the correpsonding labels, so that tabbing scrolls the viewport as expected */
  input {
    display: block;
    height: 53px;
    margin: 0 0 -53px -9999px;
    order: 4;
    outline: none;
    counter-increment: undone-items;
  }

  ul {
    padding: 0;
  }
  li {
    display: block;
    position: relative;
    padding: 15px;
    border-top: 1px dashed #fff;
    cursor: pointer;
    animation: undone .5s;
  }
  li i {
    margin-right: 10px;
  }


  @keyframes done {
    0% {
      opacity: 0;
      background-color: rgba(255, 255, 255, .4);
      transform: translateY(20px);
    }
    50% {
      opacity: 1;
      background-color: rgba(255, 255, 255, .4);
    }
  }

  @keyframes undone {
    0% {
      opacity: 0;
      background-color: rgba(255, 255, 255, .4);
      transform: translateY(-20px);
    }
    50% {
      opacity: 1;
      background-color: rgba(255, 255, 255, .4);
    }
  }
</style>
