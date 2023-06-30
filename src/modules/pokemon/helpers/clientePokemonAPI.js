const obtenerPokemons = async () => {
    //Retornar el array de pokemons
    //console.log('Aleatorio')
    //console.log(getNumeroAleatorio(1, 3))
    //console.log(obtenerVectorNumerico())
    //obtenerNombresPokemon(obtenerVectorNumerico())
    //await consumirAPI(202);
    console.log('Aleatorio')
    const vectorObj = await obtenerNombresPokemon(obtenerVectorNumerico())
    console.log(vectorObj)
    return vectorObj;
}
function getNumeroAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min);
}

const obtenerVectorNumerico = () => {
    const vector = [getNumeroAleatorio(1, 649), getNumeroAleatorio(1, 649), getNumeroAleatorio(1, 649), getNumeroAleatorio(1, 649)]
    return vector;
}

const obtenerNombresPokemon = async ([id1, id2, id3, id4] = []) => {
    const data1 = await consumirAPI(id1)
    const data2 = await consumirAPI(id2)
    const data3 = await consumirAPI(id3)
    const data4 = await consumirAPI(id4)
    console.log(data1.name)
    console.log(data2.name)
    console.log(data3.name)
    console.log(data4.name)
    const obj1 = {
        nombre: data1.name,
        id: data1.id
    }
    const obj2 = {
        nombre: data2.name,
        id: data2.id
    }
    const obj3 = {
        nombre: data3.name,
        id: data3.id
    }
    const obj4 = {
        nombre: data4.name,
        id: data4.id
    }
    const vectorObjetos = [obj1, obj2, obj3, obj4]
    return vectorObjetos;
}
const consumirAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    //console.log(data.name)
    //console.log(data.id)
    return data
}

const obtenerFachadaPokemons = async () => {
    return await obtenerPokemons();
}

export default obtenerFachadaPokemons