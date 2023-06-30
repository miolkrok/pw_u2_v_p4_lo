<template>
    <h1>Juego Pokemon</h1>
    <PokemonImg :pokemonId="202" :muestraPokemon="false" />
    <PokemonOps :opciones="arregloPokemons" />
</template>

<script>
import PokemonImg from '../components/PokemonImg.vue';
import PokemonOps from '../components/PokemonOps.vue';

import obtenerFachadaPokemons from "../helpers/clientePokemonAPI";
console.log(obtenerFachadaPokemons())
export default {
    data(){
        return{
            arregloPokemons:[]
        }

    },
    components: {
        PokemonImg,
        PokemonOps
    },
    methods: {
        async cargaJuegoInicial(){
            this.arregloPokemons = await obtenerFachadaPokemons()
            //console.log(this.arregloPokemons)
            return this.arregloPokemons
        }
    },
    mounted() {
        //console.log('Se monto el componente')
        this.cargaJuegoInicial()
    }

};
</script>

<style></style>