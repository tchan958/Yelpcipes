var keywordSearch = document.querySelector("#keywordSearch").value;
var resultsListSpan = document.querySelector("#resultsList");


$("#submitBtn").on("click", function displayInfo(event) {
    event.preventDefault();


    var keywordSearch = $("#keywordSearch").val().trim();
    console.log(keywordSearch);


var queryURL = "https://api.edamam.com/search?q=" + keywordSearch + "&app_id=d5baaeda&app_key=b58e5e8313bfda2a320bd5a85b6d9ff5"

$.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        var results = response.data;
        console.log(response);
        console.log(response.hits[0].recipe.image)


        for (var i = 0; i < 10; i++){

      
        // Storing image
        var imgURL = response.hits[i].recipe.image;
        // Creating an element to have the image displayed
        var image = $("<img>").attr("src", imgURL);


        // Storing the title data
        var title = response.hits[i].recipe.label;
        console.log(title);

        // Creating an element to have the title displayed
        var pOne = $("<p>").text("Recipe: " + title);
        
        // Storing ingredients
        var ingredients = response.hits[i].recipe.ingredientLines;
        // Creating an element to have the ingredients displayed
        var ptwo = $("<p>").text("Ingredients: " + ingredients);

        // Instructions button
        var instructions = response.hits[i].recipe.url;
        // Creating an element to have the ingredients displayed
        var pthree = $("<a>");
        pthree.attr("href", instructions);
        pthree.html("Instructions");
        
        // Displaying the title
        $("#resultsList").append(image);
        $("#resultsList").append(pOne);
        $("#resultsList").append(ptwo);
        $("#resultsList").append(pthree);
        $("#resultsList").append("<br>");

    }
        
    });

});







