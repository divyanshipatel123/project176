let words=[
    {
        "inputs":7,
        "word":"cricket",
        "category":"Sports"
    },
    {
        "inputs":6,
        "word":"france",
        "category":"European-country"
    },
    {
        "inputs":5,
        "word":"snake",
        "category":"Reptile"
    },
    {
        "inputs":8,
        "word":"marathon",
        "category":"Sports"
    },
    {
        "inputs":5,
        "word":"mango",
        "category":"fruit"
    },
    {
        "inputs":5,
        "word":"India",
        "category":"country"
    },
    {
        "inputs":6,
        "word":"Brazil",
        "category":"South American Country"
    },
    {
        "inputs":5,
        "word":"chess",
        "category":"Sport"
    },
    {
        "inputs":6,
        "word":"tennis",
        "category":"Sport"
    },
    {
        "inputs":4,
        "word":"Puma",
        "category":"A shoe company"
    },
    {
        "inputs":7,
        "word":"diamond",
        "category":"A rare form of carbon"
    },
    {
        "inputs":5,
        "word":"tesla",
        "category":"A car company"
    }
]

$(document).ready(function(){   
    displayWord()
})



function displayWord(){
var number = Math.floor(Math.random()*words.length)
const word = words[number]

$("#hint").html(word.category)

for (var i=0; i<word.inputs; i++){
    var span_html = `<span class="fill_blanks">_</span>`
    $("#blanks").append(span_html)
}
    
    console.log(word , number , span_html)


    var gameOver = false
    $(".clickable").click(function(){
        var correctGuess = false;

        var id = $(this).attr("id")

        var life = parseInt($("#life").text())

        //console.log($(".fill_blanks").html())

        for(var i=0; i< word.word.length ;i++ ){

            if(word.word.charAt(i).toLowerCase() == id){
                if(life>0 && ($(".fill_blanks").eq(i).html()=="_" || $(".fill_blanks").eq(i).html()== id)  ){
                    $(".fill_blanks").eq(i).html(id)
                    correctGuess = true

                    if($("#blanks").text()===word.word.toLowerCase()){
                        $("#result").text("You Win!!"); 
                        correctGuess=true;
                        gameOver=true;
                    }

                }
            }

        }
    })
}