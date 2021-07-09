// Arrow functions
const sumar = (param1, param2) => {
  return(param1 + param2)
}
console.log(sumar(4,5))

// Template string
const publicar = (param1=0, param2=1) => (`el numero es: ${param1+param2}`)
console.log(publicar(10,0))

// Destructuring objects
const persona = {
  nombre: 'name',
  edad: 20,
  link:{
    nombre:'google',
    url:'www.google.com',
    uri:'resources/nasdaq'
  },
  value:'True'
}

persona.edad = 32
persona.genero = 'asdf'

//const {nombre} = persona
const {nombre,uri, url} = persona.link
console.log(uri,url,nombre)

// fetch - testing fetch with pokemon
fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response) => response.json())
//.then((data) => {console.log(data)})
.then((data) => data.results.forEach(element => console.log(element.name)))
.catch((error) => console.log(error))
;
