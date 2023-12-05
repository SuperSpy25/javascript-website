function onClick(InputName) {

        const user = {name: 'Bob'};
        console.log('Hello, ' + user.name);

        const names = ['Sally', 'Jerome'];
        const users =[{name: 'Sally'},{name: 'Jerome'}];
        console.log(' First name in list -----', names[0]);

        console.log('Second name in list of objects -----',users[1].name);
        const url = 'https://pokeapi.co/api/v2/pokemon';
        $.get(url,(data,status)=>{
                if (status ==='success') {
                        console.log(data);
                        const pokemonList = data.results
                        document.getElementById("output").innerHTML = pokemonList;
                }
        });
  
}

