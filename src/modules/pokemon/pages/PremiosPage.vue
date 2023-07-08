<template>
  <div class="premios">
    <h1>PREMIOS!</h1>
    <h2>Te lo has ganado!</h2>
    <h2>Medallas por puntaje</h2>
    <div class="medallas-container">
      <div class="medalla">
        <h3>Medalla Reliquia</h3>
        <img :src="rutaImagen1" alt="No se puede mostrar la imagen">
        <p>Medalla por 5 puntos</p>
      </div>
      <div class="medalla">
        <h3>Medalla Bosque</h3>
        <img :src="rutaImagen2" alt="No se puede mostrar la imagen">
        <p>Medalla por 2 puntos</p>
      </div>
      <div class="medalla">
        <h3>Medalla Lignito</h3>
        <img :src="rutaImagen3" alt="No se puede mostrar la imagen">
        <p>Medalla por 1 punto</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {

    return {
      rutaImagen1: "https://images.wikidexcdn.net/mwuploads/wikidex/e/e2/latest/20090913184435/Medalla_Reliquia.png",
      rutaImagen2: "https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20090913184353/Medalla_Bosque.png",
      rutaImagen3: "https://images.wikidexcdn.net/mwuploads/wikidex/0/0b/latest/20140218004352/Medalla_Lignito.png"

    }

  }
}
</script>


<style>
.medallas-container {
  display: flex;
}

.medalla {
  flex: 1;
  margin: 10px;
}

.premios img {
  height: 250px;
  width: 250px;
}
</style>