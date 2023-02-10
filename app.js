var questionBank = [
    {
      question: "What is JavaScript?",
      a: "client side",
      b: "html",
      c: "server lang",
      d: "machine languge",
      correct: "a",
    },
    {
      question: "What is the full meaning of CSS?",
      a: "Cascading Style Server",
      b: "Cascade Styling Surface",
      c: "Cascading Surface Sheet",
      d: "Cascading Style Sheets",
      correct: "d",
    },
    {
      question: "What is the most popular programming language in 2022?",
      a: "Java",
      b: "PHP",
      c: "html",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "Which company developed JavaScript??",
      a: "Netscape .",
      b: "goolge",
      c: "mete company",
      d: "spice X",
      correct: "a",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Stylesheet",
      c: "JavaScript Object Notation",
      d: "Hyper Markup Language",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1998",
      b: "1993",
      c: "1995",
      d: "2000",
      correct: "c",
    },
    {
      question: "All these are Server Side Language except?",
      a: "HTML",
      b: "PHP",
      c: "Node.js",
      d: "Ruby on rails",
      correct: "a",
    },
    {
      question: "All these are JavaScript Framework except?",
      a: "Laravel",
      b: "React.js",
      c: "Node.js",
      d: "Vue.js",
      correct: "a",
    }
  ];

  var QuesCurrentIndex = 0;

  var score = 0;

  var selectedAns = "";

  var eleQues = document.getElementById('question');
  var eleA = document.getElementById('a_text');
  var eleB = document.getElementById('b_text');
  var eleC = document.getElementById('c_text');
  var eleD = document.getElementById('d_text');
  var AllRadio = document.getElementsByTagName('input')


  function displayQuestion()
  {
    DeSelectedRadio();

    var current = questionBank[QuesCurrentIndex];
    eleQues.innerHTML = current.question
    eleA.innerHTML = current.a
    eleB.innerHTML = current.b
    eleC.innerHTML = current.c
    eleD.innerHTML = current.d

  }

  function DeSelectedRadio()
  {
    for(var i = 0 ; i < AllRadio.length;i++)
    {
      AllRadio[i].checked = false
  }
}

  function getSelectedRadio(){
    for(var i = 0 ; i < AllRadio.length;i++)
    {
      if(AllRadio[i].checked)
      {
        selectedAns = AllRadio[i].id;
      }
    }
    return selectedAns;
  }

  function next()
  {
    var answer = getSelectedRadio();

    if(answer == questionBank[QuesCurrentIndex].correct)
    {
      score++;

    }
    QuesCurrentIndex++;
    if(QuesCurrentIndex < questionBank.length)
    {
      displayQuestion()
    }
    else{
      var div = document.getElementById("mainDiv");

      div.innerHTML = `<h2>You answered ${score} out of 8 </h2>
      <br> <button onclick="location.reload()">Retake Quiz</button>`
    }
  }

      
