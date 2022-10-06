const groupPokemon = [];

async function pokemon () {
    for (let i = 1; i <=151; i++) {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+i); 
        const resPokemon = await res.json (); 
        groupPokemon.push (resPokemon)
        console.log(resPokemon);
    }
   
    
}

 

 const mapPokemon = (pokes) =>{
     const mappedPokemons = pokes.map((poke) => ({
         id: poke.id,
         name: poke.name,
         type: poke.types.map(type => type.type.name),
         height: poke.height,
         weight: poke.weight,
         img: poke.sprites.other.home.front_default,
       
     })) 
     return mappedPokemons
}

const drawPokemon = (pokes) =>{
    let gallery$$ = document.querySelector(".main_gallery-container");
    gallery$$.innerHTML = '';

    for (const poke of pokes) {
        let div$$ = document.createElement("div");

        div$$.innerHTML= `<h4>${poke.name}</h4>
        <img src="${poke.sprites.other.home.front_default}" alt="">
        <p>${poke.types.map(type => type.type.name)}</p>
        <p>weight:${poke.weight}</p>
        <p>height:${poke.height} </p>`
        gallery$$.appendChild(div$$);
    }

}


async function init ()  {
    await pokemon();
    const mappedPokemons = mapPokemon (groupPokemon);
    console.log(mappedPokemons);

    drawPokemon(groupPokemon);


    
}
init();