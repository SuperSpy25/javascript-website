function onClick(InputName) {
  const url = "https://pokeapi.co/api/v2/pokemon";
  $.get(url, (data, status) => {
    if (status === "success") {
      console.log(data);
      data.results.forEach((pokemon) => {
        const h2Tag = document.createElement("h2");
        console.log("Name with H2 tag: ", h2Tag);
        h2Tag.innerHTML = pokemon.name;
        document.getElementById("output").append(h2Tag);
      });
    } else {
      console.log("Status was: ", status);
    }
  });
}
