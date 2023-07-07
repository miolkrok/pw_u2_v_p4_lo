<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/juego">Juego</router-link>
    <router-link to="/premios">Premios</router-link>
    <router-link to="/pokegame">Pokemon</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>
div {
    padding: 0 30px;
}
div a {
    font-weight: bold;
    /*color: #2c3e50;*/
    color: blueviolet;
    margin: 0 10px;
}
</style>