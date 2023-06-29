<template>
  <div class="contenedor-opciones">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 20px;
}

li {
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  width: 200px;
  cursor: pointer;

}

li:hover {
  background-color: cadetblue;
}
.contenedor-opciones{
  display: flex;
  justify-content: center;
}
</style>