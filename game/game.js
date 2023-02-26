if (JSON.parse(localStorage.getItem('prizes')) == null)
{
    localStorage.setItem('prizes', JSON.stringify([]));
}

$(document).ready(function() {
$("body").tooltip({ selector: '[data-bs-toggle=tooltip]' });
});



function store_prizes(group_name, button_id)
{
  let prizes = JSON.parse(localStorage.getItem('prizes'));
  document.getElementsByName(group_name).forEach(radio => {
    if (radio.checked)
    {
      prizes.push(radio.value)
    }
  });
  localStorage.setItem('prizes', JSON.stringify(prizes));



}


function display_prizes()
{
  let prizes = JSON.parse(localStorage.getItem('prizes'));
  document.getElementById("prize1").innerHTML = prizes[0];
  document.getElementById("prize2").innerHTML = prizes[1];
  document.getElementById("prize3").innerHTML = prizes[2];
  localStorage.setItem('prizes', JSON.stringify(prizes));
}


function modal_proceed(button_id)
{
  var radios = document.querySelectorAll('input[type=radio][name="group1"]');

  radios.forEach(radio => radio.addEventListener('click', function(){
    document.getElementById(button_id).disabled = false;
  }));
}


function game_start()
{
  //update prizes along progress bar
  let prizes = JSON.parse(localStorage.getItem('prizes'));
  document.getElementById("basic_prize").innerHTML = prizes[0];
  document.getElementById("great_prize").innerHTML = prizes[1];
  document.getElementById("legendary_prize").innerHTML = prizes[2];
  document.getElementById("mystery_prize").innerHTML = "Mystery Prize";
  localStorage.setItem('modelShown', 'TRUE');

}

function revert()
{
  document.getElementById("base_but").disabled = true;
  document.getElementById("great_but").disabled = true;
  document.getElementById("legendary_but").disabled = true;
  localStorage.setItem('prizes', JSON.stringify([]));
}


function pick_question(location)
{
  localStorage.setItem('location', JSON.stringify(location));

  //store all questions that have been clicked on
  let visited = JSON.parse(localStorage.getItem('visited'));
  if (visited == null)
  {
    //first link
    visited = [location]
    localStorage.setItem('visited', JSON.stringify(visited));
  }
  else
  {
      //already exists
      visited.push(location)
      localStorage.setItem('visited', JSON.stringify(visited ));
  }
}




function return_from_question()
{
  //update prizes along progress bar
  let prizes = JSON.parse(localStorage.getItem('prizes'));
  document.getElementById("basic_prize").innerHTML = prizes[0];
  document.getElementById("great_prize").innerHTML = prizes[1];
  document.getElementById("legendary_prize").innerHTML = prizes[2];
  document.getElementById("mystery_prize").innerHTML = "Mystery Prize";


  // disabling previous links from being clicked
  let visited = JSON.parse(localStorage.getItem('visited'));
  if (visited.length >= 15)
  {
    setTimeout(function () {
        //means game is over

        window.location.replace("summary.html");
    }, 1500);
  }
  for (i=0;i<visited.length;i++)
  {
    let item = visited[i]
    let lk = document.getElementById(item.toString());
    lk.classList.add('isDisabled');
  }



  //updating the score and the bar

  let question_score = JSON.parse(localStorage.getItem('output_score'));
  let old_score = JSON.parse(localStorage.getItem('score'));

  // show old progress bar
  let old_perc = (old_score/3000)*100;

  var elem = document.getElementById("myBar");
  var width = old_perc;
  if (old_score == null || old_score == 0)
  {
    old_score = 0;
    elem.innerHTML = 0;
  }
  else if (old_score < 300)
  {
      elem.innerHTML = old_score;
  }
  else
  {
      elem.innerHTML = old_score + " points";
  }
  elem.style.width = width + '%';


// old version
  //$('.innerBar').animate({ width: Number(old_perc)+'%' }, 0);
  //document.getElementById('progress_bar').innerHTML = "<p>" + Number(score) + " points</p>"

  // update score
  score = question_score + old_score;
  localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('output_score', JSON.stringify(0));



  // update progress bar to show score

  let percentage = (score/3000) * 100;

  var elem = document.getElementById("myBar");

  if (question_score != 0)
  {
    var id = setInterval(frame, 95);
    function frame() {
      if (width < percentage)
      {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = old_score + ' +' + question_score;
      }
      else
      {
        if (score < 300)
        {
            elem.innerHTML = score;
        }
        else
        {
          elem.innerHTML = score + ' points';
        }
        clearInterval(id);

      }
    //$('.innerBar').animate({ width: Number(percentage)+'%' }, 3000);
    }
  }

  // update prizes to appear in green once they have been reached
  if (score >=2600)
  {
    //all should be green
    document.getElementById('basic_prize').style.color = "#00FF00";
    document.getElementById('great_prize').style.color = "#00FF00";
    document.getElementById('legendary_prize').style.color = "#00FF00";
    document.getElementById('mystery_prize').style.color = "#00FF00";

    document.getElementById('thresh1').style.color = "#00FF00";
    document.getElementById('thresh2').style.color = "#00FF00";
    document.getElementById('thresh3').style.color = "#00FF00";
    document.getElementById('thresh4').style.color = "#00FF00";


  }
  else if (score >= 2000)
  {
    //all but last should be green
    document.getElementById('basic_prize').style.color = "#00FF00";
    document.getElementById('great_prize').style.color = "#00FF00";
    document.getElementById('legendary_prize').style.color = "#00FF00";

    document.getElementById('thresh1').style.color = "#00FF00";
    document.getElementById('thresh2').style.color = "#00FF00";
    document.getElementById('thresh3').style.color = "#00FF00";
  }
  else if (score >= 1200)
  {
    //first 2 should be green
    document.getElementById('basic_prize').style.color = "#00FF00";
    document.getElementById('great_prize').style.color = "#00FF00";

    document.getElementById('thresh1').style.color = "#00FF00";
    document.getElementById('thresh2').style.color = "#00FF00";
  }
  else if (score >= 400)
  {
    //first only should be green
    document.getElementById('basic_prize').style.color = "#00FF00";

    document.getElementById('thresh1').style.color = "#00FF00";
  }

}
