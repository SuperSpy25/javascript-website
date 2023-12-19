function onClick(InputName) {

        const url = 'https://pokeapi.co/api/v2/pokemon';
        $.get(url,(data,status)=>{
                if (status ==='success') {
                        console.log(data);
                        const pokemonList = data.results.map(pokemon => {
                             const h2Tag = document.createElement('h2');
                             console.log('Name with H2 tag: ', h2Tag)
                             document.getElementById("output").innerHTML = pokemonList.append(h2Tag)
                                return h2Tag
                        });
                        document.getElementById("output").innerHTML = pokemonList;
                       
                } else {
                        console.log('Status was: ', status);
                }
                        
        });
  
}

