    var api_key="496a84e3";
    v1=parent.document.URL.substring(parent.document.URL.indexOf('?')+1, parent.document.URL.length);
    var requestURL = v1; //store the URL of the JSON we want to retrieve in a variable.
    url = "http://www.omdbapi.com/?i=" + v1 + "&apikey=" + api_key;
    $.get(url).done(function (object){
        document.querySelector("#movieimg").setAttribute('src',object["Poster"]);
        document.querySelector("#movietitle").innerHTML= object["Title"];

        var genrebutton = object["Genre"].split(",");
        var mydiv = document.getElementById("genrespans");
        var myspans = [];
        for (i in genrebutton) {
            console.log(genrebutton[i]);
            myspans[i] = document.createElement("span");
            myspans.className = "myspan";
            myspans.id = "span" + i.toString();
            myspans[i].style.border = "groove";
            myspans[i].innerHTML = genrebutton[i];
            mydiv.appendChild(myspans[i]); 
        }
        document.querySelector("#movieyear").innerHTML= object["Year"];
        document.querySelector("#movietime").innerHTML= object["Runtime"];
        document.querySelector("#movielang").innerHTML= object["Language"];
        document.querySelector("#movierated").innerHTML= object["Rated"];
        document.querySelector("#moviecountry").innerHTML= object["Country"];

        document.querySelector("#moviedesc").innerHTML += object["Plot"];

        document.querySelector("#moviedirector").innerHTML += object["Director"];
        document.querySelector("#moviestars").innerHTML += object["Actors"];

});