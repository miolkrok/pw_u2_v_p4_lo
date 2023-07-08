<template>
  <div class="container">
    <h1>Historia</h1>
    <h3>¡Embárcate en una épica aventura en Pokémon Esmeralda!</h3>
    <p>Explora la región de Hoenn, desafía a poderosos rivales y detén los malvados planes del Team Aqua y Team Magma.
      ¿Estás listo para convertirte en el Campeón de la Liga Pokémon y salvar a Hoenn? ¡Demuestra tu valía y atrévete a
      capturar a los legendarios Pokémon!</p>

    <div class="reglas">
      <h3>Reglas</h3>
      <ul>
        <li>Se mostrará una imagen de un Pokémon y una lista de nombres de Pokémon.</li>
        <li>Seleccione el nombre del Pokémon que creas que corresponde a la imagen mostrada.</li>
        <li>Si adivinas en el primer intento, obtendrás 5 puntos.</li>
        <li> Si adivinas en el segundo intento, obtendrás 2 puntos.</li>
        <li> Si adivinas en el tercer intento, obtendrás 1 punto.</li>
        <li>Podras reiniciar el juego para intentarlo nuevamente.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

h1,h2,h3,p, .reglas li{
  color: #6576b4;
}
.container p {
  text-align: center;

}
.reglas {
  display: grid;
  align-items: start;
  justify-content: center;
  width: 800px;
}

.reglas h3{
  justify-content: left;
  text-align: left;

}

.reglas li{
  text-align: left;
}

.reglas ul {
  list-style-type: none;
  padding-left: 0px;
  width: 830px;
}

</style>