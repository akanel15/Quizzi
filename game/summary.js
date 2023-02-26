

document.getElementById("msg2").style.borderRight = "solid 0px";
document.getElementById("msg3").style.borderRight = "solid 0px";

document.getElementById("msg2").style.animationPlayState = "paused";
document.getElementById("msg3").style.animationPlayState = "paused";



setTimeout(function () {
    //means game is over
    pauseTypeWriter("msg",1);
}, 5500);




function pauseTypeWriter(start, i)
{
  let id = start + i.toString();
  document.getElementById(id).style.borderRight = "solid 0px";
  document.getElementById(id).style.animationPlayState = "paused";
  i++
  startTypeWriter(start,i);
}

function startTypeWriter(start,i)
{
  let id = start + i.toString();

  document.getElementById(id).style.borderRight = "solid 3px";
  document.getElementById(id).style.animationPlayState = "running";

  if (i<3)
  {
    setTimeout(function () {
        //means game is over
        pauseTypeWriter("msg",i);
    }, 4000);
  }

}

function updateGraph()
{
  //display prizes in graph with mystery prize and button to reveal
  let score = JSON.parse(localStorage.getItem("score"));
  let prizes = JSON.parse(localStorage.getItem('prizes'));



  let str = score+ " points";
  document.getElementById("summaryHeading").innerHTML = "You scored " + str.fontcolor("blue") + " out of 3000 points<br>Which earns you the following prizes:"

  document.getElementById("prize1").innerHTML = prizes[0] + " - 400 points";
  document.getElementById("prize2").innerHTML = prizes[1] + " - 1200 points";
  document.getElementById("prize3").innerHTML = prizes[2] + " - 2000 points";
  document.getElementById("prize4").innerHTML = "Mystery prize" + " - 2600 points";



  // update prizes to appear in green once they have been reached
  if (score >=2600)
  {
    //fix button
    let final =document.getElementById("finalBut");
    final.innerHTML = "Reveal mystery prize!";
    final.classList.add('btn-dark');

    //all should be green
    document.getElementById('prize1').style.backgroundColor = "#98FB98";
    document.getElementById('prize2').style.backgroundColor = "#98FB98";
    document.getElementById('prize3').style.backgroundColor = "#98FB98";
    document.getElementById('prize4').style.backgroundColor = "#98FB98";
  }
  else if (score >= 2000)
  {
    //first 3
    document.getElementById('prize1').style.backgroundColor = "#98FB98";
    document.getElementById('prize2').style.backgroundColor = "#98FB98";
    document.getElementById('prize3').style.backgroundColor = "#98FB98";
    document.getElementById('prize4').innerHTML = "<p><s>" + "Mystery prize - 2600 points" + "</s></p>"

  }
  else if (score >= 1200)
  {
    //first 2
    document.getElementById('prize1').style.backgroundColor = "#98FB98";
    document.getElementById('prize2').style.backgroundColor = "#98FB98";
    document.getElementById('prize3').innerHTML = "<p><s>" + prizes[2] + " - 2000 points" + "</s></p>"
    document.getElementById('prize4').innerHTML = "<p><s>" + "Mystery prize - 2600 points" + "</s></p>"

  }
  else if (score >= 400)
  {
    //first only should be green
    document.getElementById('prize1').style.backgroundColor = "#98FB98";
    document.getElementById('prize2').innerHTML = "<p><s>" + prizes[1] + " - 1200 points" + "</s></p>"
    document.getElementById('prize3').innerHTML = "<p><s>" + prizes[2] + " - 2000 points" + "</s></p>"
    document.getElementById('prize4').innerHTML = "<p><s>" + "Mystery prize - 2600 points" + "</s></p>"
  }
  else
  {
    //None should be green
    document.getElementById('prize1').innerHTML = "<p><s>" + prizes[0] + " - 400 points" + "</s></p>"
    document.getElementById('prize2').innerHTML = "<p><s>" + prizes[1] + " - 1200 points" + "</s></p>"
    document.getElementById('prize3').innerHTML = "<p><s>" + prizes[2] + " - 2000 points" + "</s></p>"
    document.getElementById('prize4').innerHTML = "<p><s>" + "Mystery prize - 2600 points" + "</s></p>"
  }

}



function bonusPoints()
{
  let num = 0;
  let id = null;

  //displays modal
  //has a counter that adds up to 1000000 in 3 seconds
  //sends back to other page
  let points = JSON.parse(localStorage.getItem("score"));
  let heading = document.getElementById("staticBackdropLabel");
  let finalMsg = document.getElementById("finalMsg");
  let footer = document.getElementById("finalFooter");

  if (points>=2600)
  {
    //reveal prize
    heading.innerHTML = "You Win:";
    finalMsg.innerHTML = "Example mystery prize<br> <img src='photos/shang-chi.png' width='150'>";
    footer.innerHTML = "<button type='button'  onclick=\"location.href = '../welcome.html'\" class='btn btn-primary' data-bs-dismiss='modal' aria-label='Close'>Play again</button>";


  }
  else if(points < 2600)
  {
    heading.innerHTML = "Hold On!";
    finalMsg.innerHTML = "Bonus points are awarded for being a great contestant <br>Calculating...<br><div class='lds-dual-ring'></div>";
    footer.innerHTML = "<button type='button'  onclick='returnFinal()' class='btn btn-primary' data-bs-dismiss='modal' aria-label='Close'>Update Prizes</button>";

    setTimeout(function () {
      //Wait before addind a bunch of points
      id = setInterval(pointsGrow, 10);
    }, 4000);



    function pointsGrow()
    {
      document.getElementById("manyPoints").innerHTML = "+"+num;
      if (num < 5000)
      {
        num = num+20

      }
      else
      {
        document.getElementById("manyPoints").innerHTML = "+"+num + " &hearts;";
        clearInterval(id);
      }

    }




  }
}

function returnFinal()
{
  let score = JSON.parse(localStorage.getItem("score"));
  score = score + 5000;
  localStorage.setItem("score", JSON.stringify(score));
  //remove button and +5000
  document.getElementById("finalFooter").innerHTML = "";
        document.getElementById("manyPoints").innerHTML = ""

  updateGraph();
}

updateGraph();
