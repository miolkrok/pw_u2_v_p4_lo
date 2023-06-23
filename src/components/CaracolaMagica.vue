<template>
  <h1>Caracola Magica</h1>
  <div class="bg-dark">
    <img v-if="rutaImagen" v-bind:src="rutaImagen" alt="No se puede presentar la imagen">
  </div>
  <div class="contenedor">
    <input v-model="pregunta" type="text" placeholder="Hazme una pregunta">
    <p>Recuerda terminar con un ? la pregunta</p>
    <div>
      <h2>{{ pregunta }}</h2>
      <h1>{{ respuesta }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pregunta: "",
      respuesta: "",
      rutaImagen: null,
    };

  }, watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.includes('?')) {
        console.log('consumir el api');
        this.consumirAPI()

      }
    }
  }, methods: {
    async consumirAPI() {
      const respuesta = await fetch('https://yesno.wtf/api').then(r =>
        r.json());
      console.log(respuesta);
      const { answer, image } = respuesta;
      console.log(answer);
      console.log(image);
      this.respuesta = answer
      this.rutaImagen = image
    }
  }
};
</script>

<style>
img,
.bg-dark {
  height: 100vh;
  width: 100vw;
  left: 0px;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0px;
}

.bg-dark {
  background-color: rgba(0, 0, 0, 0.4);
}
.contenedor{
  position: relative;
}
input{
  width: 250px;
  padding: 1px, 15px;
  border-radius: 5px;
  border: none;
  background:none ;
  color: white;
}
p,h1,h2{
  color: white;
}

p{
  font-size: 20px;
  margin-top: 0px ;
}
</style>