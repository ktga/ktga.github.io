
var guyButton = document.querySelector("#flavortown");

var contentBox1 = document.getElementById("content-box-1");
console.dir(contentBox1.children);

guyButton.addEventListener("click", addBeerItem);

async function addBeerItem(event){

    event.preventDefault();

    // Call beer API
    const urlString = "https://api.punkapi.com/v2/beers";


    const response = await fetch(urlString);
    const data = await response.json();  
    console.dir(data);

    for(i=0; i < 3; i++){
        
        // Display random beer recipe (from list of 25 returned results)
        var randNum = Math.floor(Math.random() * 24);


        // Match counter variable to content box div id #
        if(i==0){
            var contentBox = document.getElementById("content-box-1");
        }
        else if (i==1) {
            var contentBox = document.getElementById("content-box-2");
        }
        else {
            var contentBox = document.getElementById("content-box-3");
        }
        
        // All content-box divs have identical children beneath them
        const imageDiv = contentBox.children[0];
        const contentDiv = contentBox.children[1];
        
        // Content div also has identical children beneath them
        const nameP = contentDiv.children[0];
        const descriptionP = contentDiv.children[1];
        const foodPairingP = contentDiv.children[2]

        // Get background Image URL
        const backgroundImage = data[randNum].image_url;
        // Assign CSS background property string value using URL value
        const backgroundImageUrl = "url(" + backgroundImage + ")"

        // Assign API return data to content-box elements
        imageDiv.style.backgroundImage = backgroundImageUrl;
        nameP.innerText = data[randNum].name;
        descriptionP.innerText = data[randNum].description;
        foodPairingP.innerText = data[randNum].food_pairing;
    }

        


}







// async function handleWeatherRequest(event){
//     event.preventDefault();
//     const city = document.querySelector('input[name="city"]').value;
//     const apiKey = "870b1b10b58578f725b70b13aff6c357"
//     const urlString = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
//     const response = await fetch(urlString);
//     const data = await response.json();
//     const temp = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2);
//     console.log("The pretty looking temp is: " + temp);
//     document.querySelector("#weather-result").innerText = "The weather in " + city + " is currently: " + temp + "F";
// }
// document.querySelector("#weather-search").addEventListener("submit", handleWeatherRequest);