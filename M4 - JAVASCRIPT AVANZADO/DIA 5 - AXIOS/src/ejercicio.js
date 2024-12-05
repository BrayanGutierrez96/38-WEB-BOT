 const URL = "https://restcountries.com/v3.1/all"
fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    const names =res.map((country)=>{
        return country.name.common
    })
    console.log(names);
  });


function mostrarDatos(todosLosDatos) {
  if (todosLosDatos.i < 10) {
    console.log(
      todosLosDatos.name.common,
      todosLosDatos.capital,
      todosLosDatos.region
    );
  } else {
    return null;
  }
}
// mostrarDatos()
