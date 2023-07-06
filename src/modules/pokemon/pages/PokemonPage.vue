<template>
    <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
    <div v-else>
        <h1>Juego Pokemon</h1>
        <h3>Puntaje: {{ puntaje }}</h3>
        <h3>Intentos: {{ intentos }}</h3>
        <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
        <div v-if="mostrarLabel">
            <PokemonOps :opciones="pokemonArr" v-on:seleccionado="revisarSeleccion($event)" />
        </div>
        <button v-on:click="reiniciarJuego">REINICIAR JUEGO</button>
    </div>
    <div class="ganador" v-if="logrado">
        <h3>El Pokemon es: {{ pokemonCorrecto.nombre }}</h3>
        <h3>Felicidades has ganado el juego con {{ puntaje }} puntos!</h3>
    </div>
    <div class="perdido" v-if="perdido">
        <h3>No es ese pokemon vuelve a intentarlo</h3>
        <h3>Numero de Intentos {{ intentos }} / 3</h3>
        <h3>¡Has perdido el juego! Intentos agotados.</h3>
    </div>
    <div class="perdidoTotal" v-if="perdidoTotal">
        <h1>¡HAS PERDIDO EL JUEGO! AGOTASTE TUS INTENTOS {{ intentos }} / 3</h1>
    </div>

</template>

<script>
import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";
console.log(obtenerFachadaPokemons())
export default {
    data() {
        return {
            pokemonArr: [],
            pokemonCorrecto: null,
            showPokemon: false,
            logrado: false,
            perdido: false,
            mostrarLabel: true,
            perdidoTotal: false,
            puntaje: 0,
            intentos: 0

        };

    },
    components: {
        PokemonImg,
        PokemonOps
    },
    methods: {
        async cargaJuegoInicial() {
            const arregloPokemons = await obtenerFachadaPokemons()
            console.log(arregloPokemons)
            this.pokemonArr = arregloPokemons
            const indicePokemon = Math.floor(Math.random() * 4)
            this.pokemonCorrecto = this.pokemonArr[indicePokemon]
            this.showPokemon = false
            this.logrado = false
            this.perdido = false
            this.mostrarLabel = true
        },
        revisarSeleccion(idSeleccionado) {
            console.log('evento en el padre')
            console.log(idSeleccionado)
            if (this.pokemonCorrecto.id == idSeleccionado) {
                this.showPokemon = true
                this.logrado = true
                this.perdido = false
                this.mostrarLabel = false
                this.perdidoTotal = false
                if (this.intentos == 0) {
                    this.puntaje += 5;
                } else if (this.intentos == 1) {
                    this.puntaje += 2;
                } else if (this.intentos == 2) {
                    this.puntaje += 1;
                }
            } else {
                this.showPokemon = false
                this.logrado = false
                this.perdido = true
                this.perdidoTotal = false
                this.mostrarLabel = true
                if (this.intentos>=2) {
                    this.perdidoTotal = true
                    this.mostrarLabel = false
                    this.perdido = false
                }
            }
            this.intentos++;


        },
        reiniciarJuego() {
            this.puntaje = 0;
            this.intentos = 0;
            this.cargaJuegoInicial();
        }
    },
    mounted() {
        console.log('Se monto el componente')
        this.cargaJuegoInicial()
    }

};
</script>

<style>
.perdidoTotal h1, .perdido h3{
    color: red;
}
.ganador h3 {
    color: blue;
}
button{
    background-color: aqua;
    border-radius: 5px;
}
button:hover{
    background-color: lightgrey;
}
</style>