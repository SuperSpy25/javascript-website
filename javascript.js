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
    const pokemonContainer = document.createElement("div");
    pokemonContainer.setAttribute(
      "style",
      "width: 250xp; display: inline-block;"
    );
    const h2Tag = document.createElement("h2");
    pokemonContainer.append(h2Tag);
    console.log("Name with H2 tag: ", pokemonContainer);

  h2Tag.innerHTML = pokemon.name;
    return pokemonContainer;
  });
  $("#output").html(pokemonNames);
}
