<template>
  <div class="bienvenida">
    <h1>Bienvenido al Pokemon Esmeralda</h1>
    <img :src="rutaImagen" alt="No se encuentra la imagen">
  </div>
</template>

<script>
export default {

  data() {
    return {
      rutaImagen: "https://w0.peakpx.com/wallpaper/225/990/HD-wallpaper-pokemon-emerald-rayquazor-pokemon-anime-emerald-cartoon-kyogre-groudon.jpg"

    }
  }

}
</script>

<style>
.bienvenida img {
  width: 800px;
  height: 595px;
}
</style>