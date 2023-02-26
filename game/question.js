

window.onload = function()
{
  calculate_timer()
  display_question()
};

function calculate_timer()
{
  var timeLeft = 30;
  var timerId = setInterval(countdown, 1000);

  function countdown()
  {
    if (timeLeft == -1)
    {
      clearTimeout(timerId);
      return_from_qustion([0,0,0,0]);
    }
    else
    {
      displayTime(timeLeft+1)

      timeLeft--;
    }
  }
}

function displayTime(time) {
  // 0 < ranking < 100
  function calc_offset(tot_outer, rem)
  {
    let set = (31 - (tot_outer - (tot_outer * rem))) / 30;
    return set
  }

  //calc time
  let root = document.documentElement;
  let total_outer = getComputedStyle(root).getPropertyValue("--total-outer");

  root.style.setProperty("--offset-outer", calc_offset(total_outer, time));

  document.getElementById("rank").innerText = (time-1).toString();
}





function display_question()
{
  let location = JSON.parse(localStorage.getItem('location'));
  let q = document.getElementById("question");
  let but1 = document.getElementById("but1");
  let but2 = document.getElementById("but2");
  let but3 = document.getElementById("but3");
  let but4 = document.getElementById("but4");

//Hard qurstions
  if (location[0] == 300)
  {
    if (location[1] == 1)
    {
      q.innerHTML = "Example Hard Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>Correct</h4>";
      answer = [0,0,0,1];
      localStorage.setItem('answer', JSON.stringify(answer));

    }
    else if (location[1] == 2)
    {
      q.innerHTML = "Example Hard Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>Correct</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,1,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 3)
    {
      q.innerHTML = "Example Hard Question";
      but1.innerHTML = "<h4>Correct</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [1,0,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 4)
    {
      q.innerHTML = "Example Hard Question";
      but1.innerHTML = "<h4>Correct</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [1,0,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 5)
    {
      q.innerHTML = "Example Hard Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>Correct</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,0,1,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }

  }
  //Medium questions
  else if (location[0] == 200)
  {
    if (location[1] == 1)
    {
      q.innerHTML = "Example Medium Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>Correct</h4>";
      answer = [0,0,0,1];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 2)
    {
      q.innerHTML = "Example Medium Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>Correct</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,1,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 3)
    {
      q.innerHTML = "Example Medium Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>Correct</h4>";
      answer = [0,0,0,1];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 4)
    {
      q.innerHTML = "Example Medium Question";
      but1.innerHTML = "<h4>Correct</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [1,0,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 5)
    {
      q.innerHTML = "Example Medium Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>Correct</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,0,1,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
  }

  //Easy questions
  else if (location[0] == 100)
  {
    if (location[1] == 1)
    {
      q.innerHTML = "Example Easy Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>Correct</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,0,1,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 2)
    {
      q.innerHTML = "Example Easy Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>Correct</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,1,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 3)
    {
      q.innerHTML = "Example Easy Question";
      but1.innerHTML = "<h4>Correct</h4>";
      but2.innerHTML = "<h4>Correct</h4>";
      but3.innerHTML = "<h4>Correct</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [1,1,1,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 4)
    {
      q.innerHTML = "Example Easy Question";
      but1.innerHTML = "<h4>0</h4>";
      but2.innerHTML = "<h4>Correct</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [0,1,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
    else if (location[1] == 5)
    {
      q.innerHTML = "Example Easy Question";
      but1.innerHTML = "<h4>Correct</h4>";
      but2.innerHTML = "<h4>1</h4>";
      but3.innerHTML = "<h4>2</h4>";
      but4.innerHTML = "<h4>3</h4>";
      answer = [1,0,0,0];
      localStorage.setItem('answer', JSON.stringify(answer));
    }
  }
}



function return_from_qustion(id)
{
  //show the correct answer and wrong ones
  //By changing the colour of the buttons and maybe put a tick or cross

  var but1 = document.getElementById("but1");
  var but2 = document.getElementById("but2");
  var but3 = document.getElementById("but3");
  var but4 = document.getElementById("but4");
  let choices = JSON.parse(localStorage.getItem('answer'));


  but1.style.backgroundColor = "#FF0000";
  but2.style.backgroundColor = "#FF0000";
  but3.style.backgroundColor = "#FF0000";
  but4.style.backgroundColor = "#FF0000";

  if (choices[0] == 1)
  {
    //turn button 1 green and rest red
    but1.style.backgroundColor = "#7CFC00";
  }
  if (choices[1] == 1)
  {
    //turn button 2 green and rest red
    but2.style.backgroundColor = "#7CFC00";
  }
  if (choices[2] == 1)
  {

  but3.style.backgroundColor = "#7CFC00";
  }
  if (choices[3] == 1)
  {
    //turn button 4 green and rest red
    but4.style.backgroundColor = "#7CFC00";
  }
  // - the question that was picked (in local storage) --> to make it unclickable
  // - which answer was picked
  // This will determine if it was correct and if points are awarded
  // e.g. if correct ans is the 3rd button ans_arr = [0,0,1,0]

  let button_picked = id;
  let correct = choices;
  let score = 0;
  for (i=0;i<4;i++)
  {
    score += correct[i]*button_picked[i]
  }

  let location = JSON.parse(localStorage.getItem('location'));
  let points = location[0];
  score = score * points;
  console.log(score);
  localStorage.setItem('output_score', JSON.stringify(score));

  //display score
  update_area = document.getElementById("update_score");
  if (score == 0)
  {
    update_area.innerHTML = "+ 0".fontcolor("black")
  }
  else
    {
      str = "+ " + score
      update_area.innerHTML =  str.fontcolor("#00FF00")
    }



  //Return to previous page
    setTimeout(function () {
        window.location.replace("game.html");
    }, 1500);

}
