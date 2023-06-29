<template>
    <div class="contenedor-imagen">
        <img class="oculta-pokemon" :src="imagenFuente" alt="No se puede mostrar la imagen">
        <img v-if="muestraPokemon" :src="imagenFuente" alt="No se puede mostrar la imagen">

    </div>
</template>

<script>

export default {

    props: {
        pokemonId: {
            type: Number,
            required: true
        },
        muestraPokemon: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        imagenFuente() {
            console.log('imagen computada')
            //return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + this.pokemonId + ".svg"
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
        }
    }


}
</script>

<style scoped>
.oculta-pokemon {
    filter: brightness(0);
}

img {
    position: absolute;
    height: 200px;
    /*right: 42%;*/
}

.contenedor-imagen {
    height: 200px;
    justify-content: center;
    display: flex;
}
</style>