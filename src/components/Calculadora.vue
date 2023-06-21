<template>
  <div class="container">
    <div class="calculadora">
      <input class="display" type="text" v-model="resultado" disabled>
      <button class="c" v-on:click="limpiarResultado">C</button>
      <button v-for="operador in operadores" :key="operador" v-on:click="agregarOperador(operador)">{{ operador }}</button>
      <button v-for="numero in numeros" :key="numero" v-on:click="agregarAlResultado(numero)">{{ numero }}</button>
      <button class="igual" v-on:click="calcular">=</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultado: '',
      numeros: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'],
      operadores: ['+', '-', '*', '/']
    };
  },
  computed: {
    resultadoCalculado() {
      try {
        console.log('Entro al metodo cuadrado computado')
        return eval(this.resultado);
      } catch (error) {
        return 'Error';
      }
    }
  },
  methods: {
    agregarAlResultado(valor) {
      this.resultado += valor;
    },
    agregarOperador(operador) {
      this.resultado += operador;
    },
    limpiarResultado() {
      this.resultado = '';
    },
    calcular() {
      this.resultado = this.resultadoCalculado;
    }
  }
};
</script>

<style>
h3 {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculadora {
  display: grid;
  grid-template-columns: repeat(3, 75px);
  background-color: blue;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 8px 5px grey;
}

.igual {
  grid-column: span 2;
}

.display {
  grid-column: span 3;
}

.calculadora button {
  margin-top: 5px;
  height: 35px;
  border-radius: 85px;
  background-color: blueviolet;
  color: white;
  font-family: cursive;
  font-size: 25px;
}

.c {
  grid-column: span 2;
}
</style>