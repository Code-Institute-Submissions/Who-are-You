var questions = [{
    // goku
    "color": "orange",
    "power": "strength",
    "cape": "no",
    "weather": "sunny",
    "money": "yes",
    "image": "https://i.pinimg.com/originals/ac/a4/6d/aca46d09a1badb457d44d039f2c4754d.jpg",
    "counter": 0
},
// Superman
{
    "color": "red",
    "power": "steel",
    "cape": "yes",
    "weather": "sunny",
    "money": "yes",
    "image": "https://static.wikia.nocookie.net/marvel_dc/images/a/a5/Superman_Vol_5_1_Textless.jpg/revision/latest?cb=20180711061148",
    "counter": 0
},
// batman
{
    "color": "black",
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
    "power": "hammer",
    "cape": "yes",
    "weather": "wind",
    "money": "yes",
    "image": "https://static.wikia.nocookie.net/marveldatabase/images/5/55/Thor_Odinson_%28Earth-616%29_from_Empyre_Vol_1_1_001.jpg/revision/latest?cb=20200829210404",
    "counter": 0
},
// captain america 
{
    "color": "blue",
    "power": "shield",
    "cape": "no",
    "weather": "rain",
    "money": "yes",
    "image": "https://www.small-screen.co.uk/wp-content/uploads/2019/11/captain-america-marvel-comics-1050x450.jpg",
    "counter": 0
},
// black panther
{
    "color": "black",
    "power": "claws",
    "cape": "no",
    "weather": "sun",
    "money": "yes",
    "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
    "counter": 0
},
// wolverine
{
    "color": "yellow",
    "power": "claws",
    "cape": "no",
    "weather": "sun",
    "money": "yes",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXfPTaPq2n5nzQC-3UpQFBY8tYYywAAuZykg&usqp=CAU",
    "counter": 0
}
]
// button for submitting data
let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let power = document.getElementById("power").value;
    let cape = document.getElementById("cape").value;
    let weather = document.getElementById("weather").value;
    let money = document.getElementById("money").value;

    const resultData = showImage(power, cape, weather, money);

    let output = document.getElementById("output");

    console.log(result);

    // display on page
    output.innerHTML=`<h2>${name} your superhero reccomedation is ${resultData}</h2>`;

    output.innerHTML += `<img style="width : 400px" src="${resultData.image}">`;

    // function to show images

    function showImage(p, c, w, m) {
         result = [];
         counterPower = 0;
         counterCape = 0;
         counterWeather = 0;
         counterMoney = 0;

        for (let i = 0; questions.length; i++) {
            if (questions[i]["power"] === p) {
                questions[i]["power"]++;
                result.push(questions[i]);
            }
            for (let i = 0; questions.length; i++) {
                if (questions[i]["cape"] === c) {
                    questions[i]["cape"]++;
                    result.push(questions[i]);
                }
                for (let i = 0; questions.length; i++) {
                    if (questions[i]["weather"] === w) {
                        questions[i]["weather"]++;
                        result.push(questions[i]);
                    }
                    for (let i = 0; questions.length; i++) {
                        if (questions[i]["money"] === m) {
                            questions[i]["money"]++;
                            result.push(questions[i]);
                        }
                        return getHighestCounter(result);

                    }


                    // Gets object with highest counter
                    function getHighestCounter(data) {
                        return data.reduce(
                            (max, data) => (data.counter > max ? data.counter : max),
                            data[0]
                        )
                    }
                }
            }
        }
    }
});