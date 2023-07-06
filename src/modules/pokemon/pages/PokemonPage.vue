<template>
    <h1 v-if="!pokemonCorrecto">Espere por favor.....</h1>
    <div v-else>
        <h1>Juego Pokemon</h1>
        <PokemonImg :pokemonId="pokemonCorrecto.id" :muestraPokemon="showPokemon" />
        <PokemonOps :opciones="pokemonArr" v-on:seleccionado="revisarSeleccion($event)" />
        <button v-on:click="cargaJuegoInicial">Siguiente</button>
    </div>
    <div v-if="logrado">
        <h3>El Pokemon es: {{ pokemonCorrecto.nombre }}</h3>
    </div>
    <div v-if="perdido">
        <h3>No es ese pokemon</h3>
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
            perdido: false

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
        },
        revisarSeleccion(idSeleccionado) {
            console.log('evento en el padre')
            console.log(idSeleccionado)
            if(this.pokemonCorrecto.id==idSeleccionado){
                this.showPokemon = true
                this.logrado = true
                this.perdido = false
            }else{
                this.showPokemon = false
                this.logrado = false
                this.perdido = true
            }
        }
    },
    mounted() {
        console.log('Se monto el componente')
        this.cargaJuegoInicial()
    }

};
</script>

<style></style>