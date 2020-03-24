var keywordSearch = document.querySelector("#keywordSearch").value;
var resultsListSpan = document.querySelector("#resultsList");


$("#submitBtn").on("click", function displayInfo(event) {
    event.preventDefault();


    var keywordSearch = $("#keywordSearch").val().trim();
    console.log(keywordSearch);


    var queryURL = "https://api.edamam.com/search?q=" + keywordSearch + "&to=30&app_id=d5baaeda&app_key=b58e5e8313bfda2a320bd5a85b6d9ff5"

    $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function (response) {
            var results = response.data;
            console.log(response);
            console.log(response.hits[0].recipe.image)

            var row = $("<div>").addClass("row").appendTo($("#resultsList"));
            $("<i>").click(function(event){ 
                if (event.target.className === "fa-heart-o") {
                // console.log($(this));
                $(this).toggleClass("fa-heart fa-heart-o");
                console.log("click");
                
                }
            });

            for (var i = 0; i < 30; i++) {
                 
                
                //creating div row to contain Cards


                var card = $("<div>").addClass("card col m4 l4").appendTo(row);
                // var cardTitle = $("<span>").addClass("favorite").appendTo(card);

                var cardImage = $("<div>").addClass("card-image waves-effect waves-block waves-light").appendTo(card);

                var activator = $("<img>").addClass("activator");


                // Storing image
                var imgURL = response.hits[i].recipe.image;

                // Creating an element to have the image displayed
                // var image = $("<img>").attr("src", imgURL);

                activator.attr("src", imgURL)
                cardImage.append(activator);

                var cardContent = $("<div>").addClass("card-content").appendTo(card);
                var cardTitle = $("<span>").addClass("card-title activator grey-text text-darken-4").appendTo(cardContent);
                $(".card-title").css({
                    "font-size": "20px",
                    
                })
                var title = response.hits[i].recipe.label;
                cardTitle.html(title);
                var iElement1 = $("<i>").addClass("material-icons right more_vert");
                iElement1.html("more_vert")
                cardTitle.append(iElement1);
                var instructions = response.hits[i].recipe.url;
                var pOne = $("<p>").appendTo(cardContent);
                var link = $("<a>").appendTo(pOne);
                link.addClass("instructions");
                link.attr("href", instructions);
                link.attr("target", "_blank");
                link.html("Instructions");


                var cardReveal = $("<div>").addClass("card-reveal").appendTo(card);
                var cardTitle = $("<span>").addClass("card-title grey-text text-darken-4").appendTo(cardReveal);

                cardTitle.html("Ingredients");
                cardTitle.attr("<br>");
                var iElement = $("<i>").addClass("material-icons right");
                iElement.html("close")
                cardTitle.append(iElement);
                var ptwo = $("<p>").appendTo(cardReveal);
                var ingredients = response.hits[i].recipe.ingredientLines;


                for (var j = 0; j < ingredients.length; j++) {
                    var ingredient = ingredients[j];
                    var listItem = $("<li>").text(ingredient);

                    ptwo.append(listItem);


                }

                var favIcon = $("<i>").addClass("heart fa fa-heart-o");
                // favIcon.html("favorite_border");
                card.prepend(favIcon);
                $(".heart").css({
                    "position": "relative",
                    "left": "90%",
                    "padding": "12px",
                    "color": "red",
                    "font-size": "25px",
                })
                $("i.more_vert").css({
                    "position": "relative",

                })

              

                
                
                
                // function saveFav() {
                //     var liked = document.querySelector(".heart.fa").className;
                //     var likedRecipe = document.querySelector(".card-title").textContent;
                //     var likedLink =  document.querySelector(".instructions").outerHTML;
                    
                
                //     let function_array = []
                //     if(liked === "heart fa fa-heart"){
                //         function_array.push(likedRecipe)
                //         function_array.push(likedLink)
                //         console.log(liked);
                //     }
                // }
                //     saveFav();


            }

        });
       
});

$(document).on("click", ".heart.fa", function(event) {
    $(this).toggleClass("fa-heart fa-heart-o");
    $(this)
      .siblings(".card-content")
      .children(".instructions");
    var testValue = $(this)
      .siblings(".card-content")
      .find(".instructions");
    console.log(testValue.attr("href"));
  });

// $(".heart.fa").click(function() {
//     console.log($(this));
//     $(this).toggleClass("fa-heart fa-heart-o");
//     console.log("click");
//   });

// var whiteHeart = 'favorite_border';
// var blackHeart = 'favorite';
// var button = document.querySelector('.small');
// button.addEventListener('click', toggle);

// function toggle() {
//     var like =  button.textContent;
//     if (like == whiteHeart) {
//         button.textContent = blackHeart;
//     } else {
//         button.textContent = whiteHeart;
//     }
// }


  