
let nilai =0;
let salah=0;
let userName = 'Tak punya nama';
const questions = [
    {
        question: "Q1/12: Siapa namaku?",
        image: "https://media.giphy.com/media/9C1nyePnovqlpEYFMD/giphy.gif",
        answers: {
            A: {
                text: "Jamal",
            },
            T: {
                text: "Lutfi",
            },
            B: {
                text: "Fay",
            },
            C: {
                text: "Febry",
            },
            D: {
                text: "Fauzan",
            },
        },
    },
    {
        question: "Q2/12: Tempat dan Tanggal Lahir ku?",
        image: "https://media.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif",
        answers: {
            T: {
                text: "Pekanbaru, 27 Agustus 1999",
            },
            F: {
                text: "Pekanbaru, 27 Agustus 1998",
            },
        },
    },
    {
        question: "Q3/12: Apa status ku saat ini?",
        image: "https://media.giphy.com/media/26xBFT1F9BgskEvTO/giphy.gif",
        answers: {
            T: {
                text: "Single",
            },
            F: {
                text: "Taken",
            },
        },
    },
    {
        question: "Q4/12: Menurutmu mood ku akhir2 ini seperti apa?",
        image: "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif",
        answers: {
            A: {
                text: "Tidak pernah sebahagia ini semenjak diputusin",
            },
            B: {
                text: "Sangat Bebas tidak dispam lagi sama 'dia'",
            },
            F: {
                text: "Kacau Parah, bgst tolol",
            },
            T: {
                text: "Menyesal gblk, pen mati",
            }
        },
    },
    {
        question: "Q5/12: Tanggal Berapa aku jadian sama mantan terakhir?",
        image: "https://media.giphy.com/media/1wmOyZYoGzz003R03Y/giphy.gif",
        answers: {
            T: {
                text: "7 Juli 2019",
            },
            A: {
                text: "6 Juli 2019",
            },
            B: {
                text: "27 Agustus 2018",
            },
            C: {
                text: "11 Agustus 2000",
            },
            D: {
                text: "emang pernah pacaran?",
            },
        },
    },
    {
        question: "Q6/12: Tempat terfavorit ?",
        image: "https://media.giphy.com/media/xd2c44rUajkHnxpywZ/giphy.gif",
        answers: {
            I: {
                text: "Mall",
            },
            F: {
                text: "Hotel",
            },
            T: {
                text: "Mie Gacoan",
            },
        },
    },
    {
        question: "Q7/12: Tempat tertolol ?",
        image: "https://media.giphy.com/media/QBXtQQF2dtjEJjNbJ7/giphy.gif",
        answers: {
            T: {
                text: "Tangga Lantai 3",
            },
            N: {
                text: "Semak-semak",
            },
            J: {
                text: "Hotel",
            },
        },
    },
    {
        question: "Q8/12: My Love Language?",
        image: "https://media.giphy.com/media/P3CZolxd8DeRy4g4fM/giphy.gif",
        answers: {
            A: {
                text: "Quality Time",
            },
            B: {
                text: "Acts of Service",
            },
            T: {
                text: "Physical Touch",
            },
            C: {
                text: "Physical Attack",
            },
            D: {
                text: "Words of Affirmation",
            },
            E: {
                text: "Giving Gifts",
            },
        },
    },
    {
        question: "Q9/12: Titik Kelemahan Aku?",
        image: "https://media.giphy.com/media/ltIFdjNAasOwVvKhvx/giphy.gif",
        answers: {
            A: {
                text: "Perut",
            },
            T: {
                text: "Leher",
            },
            B: {
                text: "Pantat",
            },
            C: {
                text: "Tytyd",
            },
        },
    },
    {
        question: "Q10/12: Warna favorit Aku?",
        image: "https://media.giphy.com/media/3o9bJX4O9ShW1L32eY/giphy.gif",
        answers: {
            I: {
                text: "Hitam",
            },
            T: {
                text: "Coklat",
            },
            F: {
                text: "Hijau",
            },
        },

    },
    {
        question: "Q11/12: Tipe Cewek Aku?",
        image: "https://media.giphy.com/media/3Owa0TWYqHi5RZYGql/giphy.gif",
        answers: {
            A: {
                text: "Cindo T0brut",
            },
            B: {
                text: "Cindo Tomed",
            },
            C: {
                text: "Cindo Tocil",
            },
            D: {
                text: "Cindo Jahat",
            },
            E: {
                text: "Cindo Lagi, Cindo Lagi",
            },
            T: {
                text: "Yang mau samaku udah syukur, jahat soalnya.",
            },
        },
    },
    {
        question: "Q12/12: Permainan favoritku?",
        image: "https://media.giphy.com/media/ZyNQFqZLFUhr2/giphy.gif",
        answers: {
            A: {
                text: "Nyoli",
            },
            T: {
                text: "Main Cewek",
            },
            B: {
                text: "Main PS",
            },
            C: {
                text: "Main Anonymous",
            },
        },
    }
];


let currentQuestion = 0;
// let userAnswers = {};


function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt="Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answers) {
            html += `<button class="large-rectangular" value="${option}" id="${option}">${question.answers[option].text}</button>`;
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    } else {
    
    }
}


document.getElementById('start-button').addEventListener('click', function() {
    userName = document.getElementById('user-name').value;
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    displayQuestion(); 
    // userAnswers.userName = userName;
});


//click
function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}



//answers
function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answers[answerKey];
    if(selectedOption.value=='T'){
     nilai +=1   
    }else{
        salah +=1
    }
    console.log(nilai);
    for (const dimension in answer.scores) {
        userAnswers[dimension] = (userAnswers[dimension] || 0) + answer.scores[dimension];
    }

    // remove this when done debugging
    // Display the scores for each letter
    
    //const scoresContainer = document.querySelector('.scores-container');
    //scoresContainer.innerHTML = `
    //    <p>E Score: ${userAnswers['E'] || 0}, S Score: ${userAnswers['S'] || 0}, T Score: ${userAnswers['T'] || 0}, P Score: ${userAnswers['P'] || 0}</p>
    //    <p>I Score: ${userAnswers['I'] || 0}, N Score: ${userAnswers['N'] || 0}, F Score: ${userAnswers['F'] || 0}, J Score: ${userAnswers['J'] || 0}</p>
    //
    //`;
    // to here

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

// ...
function showResult() {
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    document.getElementById('quiz').style.display = 'none';
  
    const totalScore = nilai;
    const calc = nilai/12*100;
    const floaters = parseInt(calc)
  
    //   <div class="card" style="background-color: #FFFFFF; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    const resultHTML = `
      <h2>Persentase ${userName} Mengenal Aku Sebanyak: ${floaters}%</h2>
        <canvas id="chart" width="800" height="800"></canvas>
            <button onClick='window.location.reload()' class="start-button">Play Again?</button>
    
    `;
    resultElement.innerHTML = resultHTML;
  
    const chartCanvas = document.getElementById('chart');
    const chartContext = chartCanvas.getContext('2d');
  
    const chartData = calculateChartData(totalScore);
    drawChart(chartContext, chartData);
  }
  
  
  function calculateChartData(totalScore) {
    const chartData = {
      labels: ['Benar','Salah'],
      datasets: [{
        label: 'Jumlah',
        data: [nilai,salah], // only show T score
        backgroundColor: ['rgb(54, 162, 235)','rgb(255, 99, 132)',],
        hoverOffset: 4,
        // borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1
      }]
    };
    return chartData;
  }
  
  function drawChart(chartContext, chartData) {
    const chart = new Chart(chartContext, {
      type: 'pie',
      data: chartData,
      options: {
        title: {
          display: true,
          text: 'Personality Score'
        },
        legend: {
          display: false
        },
        scale: {
          ticks: {
            beginAtZero: true
          }
        }
      }
    });
  }



//Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = {};
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion(); // Start the quiz from the beginning
}

document.getElementById('restart-button').addEventListener('click', restartQuiz);

displayQuestion();


