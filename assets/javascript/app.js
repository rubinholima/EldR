$(document).ready(function () {
    const obj = {
        nightlife: {
            name: "Hard Rock Cafe",
            title: "Dance-a-thon",
            date: "Friday, Dec. 30, 2019",
            address: "123 Brattle Street",
            city: "Boston",
            state: "MA",
            zip: "02851",
            phone: "617-555-1212",
            website: "http://www.hardrock.com"
        },
        dining: {
            name: "Shake Shack",
            title: "Free Shakes",
            date: "Wednesday, Nov. 30, 2019",
            address: "666 Mockingbird Lane",
            city: "Boston",
            state: "MA",
            zip: "02851",
            phone: "617-555-1212",
            website: "http://www.shackshack.com"
        },
        fitness: {
            name: "Planet Fitness",
            title: "Sweating with the Oldies",
            date: "Tuesday, Dec. 6, 2019",
            address: "175 Northampton Street",
            city: "Boston",
            state: "MA",
            zip: "02851",
            phone: "617-555-1212",
            website: "http://www.planetfitness.com"
        },
        entertainment: {
            name: "Boston Common Theater",
            title: "Dance-a-thon",
            date: "Saturday, Jan. 15, 2020",
            address: "22 Tremont Street",
            city: "Boston",
            state: "MA",
            zip: "02851",
            phone: "617-555-1212",
            website: "http://www.loewstheaters.com"
        }
    }
    $(".user-selection").on("click", function (e) {
        e.preventDefault();
        let newEvent = $(this).val();
        console.log(obj[newEvent].name);
        // create table rows
        let newRow = $("<tr>");
        newRow.append('<td>' + obj[newEvent].date + "</td>");
        newRow.append('<td>' + obj[newEvent].name + "</td>");
        newRow.append('<td>' + obj[newEvent].title + "</td>");
        newRow.append('<td>' + obj[newEvent].city + ", " + obj[newEvent].state + " " + obj[newEvent].zip + "</td>");
        newRow.append('<td><a href="#">' + obj[newEvent].website + '</td><a href="#">');
        $("tbody").append(newRow);
    });
});


$.getJSON(

    "https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?q=Boston&appid=88f4f1113ee97cdfa2a6bab9f78f9382", function (data) {
        console.log(data);


        var icon = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

        // originalTemp is the temperature in Kelvin
        var originalTemp = data.main.temp;
        var weather = data.weather[0].main;

        // newTemp is the temperature in Fahrenheit
        var newTemp = (originalTemp * (9 / 5)) - 459.67;

        $(".icon").attr("src", icon);
        $(".weather").append(weather);
        $(".temp").append(newTemp.toFixed(0) + "&#176;F ");

    }
);

$(document).ready(function () {
    let loginbtn = document.getElementById("login");
    loginbtn.addEventListener("click", myFunction);
    function myFunction() {
        $("#logininfo").show();
        $("#main-container").hide();
    }


    $(".message a").click(function () {

        $("form").animate({ height: "toggle", opacity: "toggle" }, "slow");
    });


    //  web app's Firebase configuration

    var firebaseConfig = {
        apiKey: "AIzaSyB6nuz_M326fOPxo7-aWQfCMAqkxs3foqY",
        authDomain: "elder-ec37d.firebaseapp.com",
        databaseURL: "https://elder-ec37d.firebaseio.com",
        projectId: "elder-ec37d",
        storageBucket: "elder-ec37d.appspot.com",
        messagingSenderId: "657890035204",
        appId: "1:657890035204:web:a8eefca192ae4225e65751",
        measurementId: "G-KS02S1HB4G"
    };

    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);



    var database = firebase.database();
    const auth = firebase.auth();
    console.log(typeof (auth))
    //create a function when we click submit button/get the value of each input and trim it

    $("#add-member-btn").click(function (event) {
        event.preventDefault();
        // const current = window.location.hostname;
        // console.log(current)

        // variable for each entry
        var userName = $("#username").val().trim();
        var emailId = $("#emailid").val().trim();

        //variable for data base storage
        var newMember = {
            name: userName,
            emailAdress: emailId,
        };


        //upload or push the data to database
        database.ref().push(newMember);
        console.log(newMember);
        // window.location.href = `${current}/index.html`

        //clear all data from the input area

        $("#username").val("");
        $("#password").val("");
        $("#emailid").val("");



    });


});
$("#btn").click(function (event) {

    swal("Hello world!");


});
$("#username").val("");
$("#password").val("");

$("#emailid").val("");




