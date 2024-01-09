function onClick(InputName) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, (data, status) => {
    if (status === "success") {
      addNamesToHTML(data);
    } else {
      console.log("Status was: ", status);
    }
  });
}
function addNamesToHTML(data) {
  console.log(data);
  const pokemonNames = data.results.map((pokemon) => {
    const h2Tag = document.createElement("h2");
    console.log("Name with H2 tag: ", h2Tag);
    h2Tag.innerHTML = pokemon.name;
    return h2Tag;
  });
  $("#output").html(pokemonNames);
}
