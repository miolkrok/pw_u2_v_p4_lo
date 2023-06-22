<template>
  <h1>Caracola Magica</h1>
  <img src="https://pbs.twimg.com/profile_images/2388108473/180px-DaConch_400x400.jpg" alt="No se puede presentar la imagen">
  <br>
  <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
  <p>Recuerda terminar con un enter la pregunta</p>
  <div>
    <h2>Voy a pasar de año?</h2>
    <h1>SI, NO</h1>
  </div>
</template>

<script>
export default {
data(){
  return{
    pregunta: 'Hola Mundo'
  }
}
}
</script>

<style>

</style>