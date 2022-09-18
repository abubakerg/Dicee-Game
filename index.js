   
    var randomGenerator1 = Math.floor(Math.random()*6+1)
    var result1 = "images/"+"dice"+randomGenerator1+".png";
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src",result1);

    var randomGenerator2 = Math.floor(Math.random()*6+1)
    var result2 = "images/"+"dice"+randomGenerator2+".png";
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src",result2);
 
    
    if(randomGenerator1>randomGenerator2){
        document.querySelector("h1").innerHTML = "Player 1 Win!🚩"
        setTimeout(
            function(){
                start()
            },2900
        )
    }
    else if(randomGenerator1<randomGenerator2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
        setTimeout(
            function(){
                start()
            },2900
        )
    }
else{
    document.querySelector("h1").innerHTML = "Draw!"
    setTimeout(
        function(){
            start()
        },2900
    )
}
function start(){
    document.querySelector("h1").innerHTML = "Click Play to Restart";
  }
