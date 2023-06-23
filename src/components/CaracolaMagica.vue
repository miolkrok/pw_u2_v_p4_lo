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
      <h3>{{ textoImportante }}</h3>
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
      contadorSi: 0,
      textoImportante: ""
    };

  }, watch: {
    pregunta(value, oldValue) {
      console.log(value);
      console.log(oldValue);
      if (value.endsWith('?')) {
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
      if (respuesta.answer === "no") {
        this.textoImportante = "Triste tu caso";
      } else if (respuesta.answer === "yes") {
        this.contadorSi++;
        if (this.contadorSi % 2 === 0) {
          this.textoImportante = "Eres el mejor";
        }else{
          this.textoImportante = "";
        }
      }
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

.contenedor {
  position: relative;
}

input {
  width: 250px;
  padding: 1px, 15px;
  border-radius: 5px;
  border: none;
  background: none;
  color: white;
}

p,
h1,
h2,
h3 {
  color: white;
}

p {
  font-size: 20px;
  margin-top: 0px;
}
</style>