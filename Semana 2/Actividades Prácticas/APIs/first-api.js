/* fetch('https://dragonball-api.com/api/characters')
    .then(response => response.json())
    .then(data => {
        // /* console.log(data); 
        // /* console.log(data.items[0].name); 

        // /* let idRandomExample = Math.random();
        // console.log(idRandomExample); 

        let idRandom = Math.floor(Math.random() * data.items.length);
        console.log(idRandom);
        console.log(data.items[idRandom].name);
        console.log('El personage con id ' + idRandom + ' es: ' + data.items[idRandom].name);
    })
    .catch(error => {
        console.error('Error:', error)
    });

 */


// Promesas

async function getCharacter() {
    try {
        const response = await fetch('https://dragonball-api.com/api/characters');
        const data = await response.json();
        console.log(data.items[0].name);
    } catch (error) {
        console.error('Error:', error);
    }   
}

getCharacter();