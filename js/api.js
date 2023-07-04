fetch('https://shibe.online/api/shibes?count=20&urls=true&httpsUrls=true')
.then( response => response.json())
.then(data => 
    {console.log(data)

for( let i = 0; i < data.length ; i++){
    fotos.innerHTML += `
    <img src="${data[i]}" width="40%";>
    `}
})
