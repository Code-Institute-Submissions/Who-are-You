var questions = [
// Superman
{
    "color" : "red",
    "character" : "Superman",
    "power" : "Man if Steel",
    "cape" : "yes",
    "weather" : "sunny",
    "money" : "no",
    "image" : "https://wallpaperaccess.com/full/1897373.jpg",
    "counter": 0
}, 
{// goku
    "color": "orange",
    "character": "Goku",
    "power": "strength",
    "cape": "no",
    "weather": "sunny",
    "money": "yes",
    "image": "https://i.pinimg.com/originals/ac/a4/6d/aca46d09a1badb457d44d039f2c4754d.jpg",
    "counter": 0
},
// batman
{
    "color": "black",
    "character": "Batman",
    "power": "money",
    "cape": "yes",
    "weather": "rain",
    "money": "yes",
    "image": "https://img.cinemablend.com/filter:scale/quill/6/b/0/8/9/2/6b08928dc1fb6884e189c7434125ba7f344407b7.jpg?mw=600",
    "counter": 0
},
// green lantern
{
    "color": "green",
    "character": "Grren Lantern",
    "power": "ring",
    "cape": "no",
    "weather": "wind",
    "money": "yes",
    "image": "https://www.goodcomicstoread.com/wp-content/uploads/2020/01/green-lantern-678x381.jpg",
    "counter": 0
},
// thor
{
    "color": "silver",
    "character": "Thor",
    "power": "hammer",
    "cape": "yes",
    "weather": "wind",
    "money": "yes",
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomicvine.gamespot.com%2Fthor%2F4005-2268%2Fforums%2Fwould-you-watch-a-mighty-thor-cartoon-376272%2F&psig=AOvVaw3vqGo_406mWrCRBGCYt3Hn&ust=1609282571111000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjd9vPi8e0CFQAAAAAdAAAAABAD",
    "counter": 0
},
// captain america 
{
    "color": "blue",
    "character": "Captain America",
    "power": "shield",
    "cape": "no",
    "weather": "rain",
    "money": "yes",
    "image": "https://www.small-screen.co.uk/wp-content/uploads/2019/11/captain-america-marvel-comics-1050x450.jpg",
    "counter": 0
},
// black panther
{
    "color": "grey",
    "character": "Black Panther",
    "power": "claws",
    "cape": "no",
    "weather": "sunny",
    "money": "yes",
    "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
    "counter": 0
},
// wolverine
{
    "color": "yellow",
    "character": "Wolverine",
    "power": "blades",
    "cape": "no",
    "weather": "Thunder",
    "money": "yes",
    "image": "https://fastly.syfy.com/sites/syfy/files/2020/02/stl149580.jpg",
    "counter": 0
}

]

// function to display text index page
function showDiv() {
    div = document.getElementById('none');
    div.style.display = "block";
}
// button for submitting data
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let power = document.getElementById("power").value;
    let cape = document.getElementById("cape").value;
    let weather = document.getElementById("weather").value;
    let money = document.getElementById("money").value;
    let character = document.getElementById("character");

    const resultData = showImage(power, weather, money, character);

    let output = document.getElementById("output");

    // console.log(resultData);

    // display on page
    output.innerHTML = `<h2>${name} your superhero recomendation is ${resultData.character}</h2>`;

    output.innerHTML += `<img style="width : 100%" src="${resultData.image}">`;

});

    // function to show images

    function showImage() {
        var result = [];

        for (let i = 0; i < questions.length; i++) {
            if (questions[i]["power"]) {
                questions[i]["counter"]++;
                result.push(questions[i]);
            }
            if (questions[i]["cape"]) {
                questions[i]["counter"]++;
                console.log("counter");
                result.push(questions[i]);
            }
             if (questions[i]["weather"]) {
                questions[i]["counter"]++;
                result.push(questions[i]);
            }
            if (questions[i]["money"]) {
                questions[i]["counter"]++;
                result.push(questions[i]);
            }
            return getHighestCounter(result);
            
        }

        // Gets object with highest counter
        function getHighestCounter(data) {
            return data.reduce(
                (max, data) => (data.counter > max ? data.counter : max),
                data[0]
            );
            }
};