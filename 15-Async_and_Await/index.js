const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

function getTop100Campers() {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error) => {
        console.log('failed');
    });
}

async function getTop100Campers() {
    const response = await fetch(apiUrl);
    // the line below won't run until the line above has finished
    const json = await response.json();

    console.log(json[0]);
}

getTop100Campers();