function onClick(InputName) {

        const url = 'https://pokeapi.co/api/v2/pokemon';
        $.get(url,(data,status)=>{
                if (status ==='success') {
                        console.log(data);
                        const pokemonList = data.results.map(pokemon => {
                                return '<h2>' + pokemon.name + '</h2>'
                        })
                        document.getElementById("output").innerHTML = pokemonList;
                       
                }
        });
  
}

