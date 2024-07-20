// please do not use my source code without my permission, I put a lot of effort into it and please do let me know if you want to clone it, use it for your project, I begggg
let nilai =0;
let salah=0;
const questions = [
    {
        question: "Q1/12: Siapa namaku?",
        image: "https://media.giphy.com/media/9C1nyePnovqlpEYFMD/giphy.gif",
        answers: {
            F: {
                text: "Lutfi Agustamel",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Upi",
                scores: { T: +1, F: 0 },
            },
        },
    },
    {
        question: "Q2/12: Tempat dan Tanggal Lahir ku?",
        image: "https://media.giphy.com/media/EZICHGrSD5QEFCxMiC/giphy.gif",
        answers: {
            T: {
                text: "Pekanbaru, 27 Agustus 1999",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Tidak tahu, aku gak peduli",
                scores: { T: 0, F: 0 },
            },
        },
    },
    {
        question: "Q3/12: Apa status ku saat ini?",
        image: "https://media.giphy.com/media/26xBFT1F9BgskEvTO/giphy.gif",
        answers: {
            T: {
                text: "Single",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Taken",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q4/12: Menurutmu mood ku akhir2 ini seperti apa?",
        image: "https://media.giphy.com/media/xT5LMHxhOfscxPfIfm/giphy.gif",
        answers: {
            I: {
                text: "Tidak pernah sebahagia ini semenjak diputusin",
                scores: { T: 0, F: +1 },
            },
            J: {
                text: "Sangat Bebas tidak dispam lagi sama 'dia'",
                scores: { T: +1, F: 0 },
            },
            F: {
                text: "Kacau Parah, bgst tolol",
                scores: { T: 0, F: +1 },
            },
            T: {
                text: "Menyesal gblk, pen mati",
                scores: { T: 0, F: +1 },
            }
        },
    },
    {
        question: "Q5/12: Kapan kita jadian?",
        image: "https://media.giphy.com/media/1wmOyZYoGzz003R03Y/giphy.gif",
        answers: {
            T: {
                text: "7 Juli 2019",
                scores: { P: +1, J: 0 },
            },
            J: {
                text: "6 Juli 2019",
                scores: { P: 0, J: +1 },
            },
            I: {
                text: "27 Agustus 2018",
                scores: { P: 0, J: +1 },
            },
            F: {
                text: "11 Agustus 2000",
                scores: { P: 0, J: +1 },
            },
            S: {
                text: "emang pernah jadian?",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q6/12: Dimana Kita Jadian ?",
        image: "https://media.giphy.com/media/xd2c44rUajkHnxpywZ/giphy.gif",
        answers: {
            I: {
                text: "Kampus",
                scores: { I: 0, E: +1 },
            },
            F: {
                text: "Loteng gedkul",
                scores: { I: +1, E: 0 },
            },
            T: {
                text: "Snow Highlands",
                scores: { P: 0, J: +1 },
            },
        },
    },
    {
        question: "Q7/12: Dimana tempat yang tidak akan kulupakan...",
        image: "https://media.giphy.com/media/QBXtQQF2dtjEJjNbJ7/giphy.gif",
        answers: {
            T: {
                text: "Tangga Lantai 3 Gedkul",
                scores: { S: +1, N: 0 }
            },
            N: {
                text: "Kamar",
                scores: { S: 0, N: +1 },
            },
            J: {
                text: "Hotel",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q8/12: Kiss or Hug?",
        image: "https://media.giphy.com/media/P3CZolxd8DeRy4g4fM/giphy.gif",
        answers: {
            E: {
                text: "Kiss",
                scores: { E: +1, I: 0 },
            },
            I: {
                text: "Hug",
                scores: { E: 0, I: +1 },
            },
            T: {
                text: "Both",
                scores: { E: 0, I: +1 },
            },
        },
    },
    {
        question: "Q9/12: Aku orangnya tidak penggeli, tapi ada 1 kelemahan yg bisa bkin kegelian. dimanakah ituu?",
        image: "https://media.giphy.com/media/ltIFdjNAasOwVvKhvx/giphy.gif",
        answers: {
            J: {
                text: "Perut",
                scores: { J: +1, P: 0 },
            },
            T: {
                text: "Leher",
                scores: { J: 0, P: +1 },
            },
        },
    },
    {
        question: "Q10/12: Aku Pernah kesal bgt sama kamu saat jalan kerumah hantu. Apakah itu?",
        image: "https://media.giphy.com/media/3o9bJX4O9ShW1L32eY/giphy.gif",
        answers: {
            I: {
                text: "KITA TELAT DATANG, wawa dkk udah pada nungguin",
                scores: { E: 0, I: +1 },
            },
            T: {
                text: "KAMU INJAK SENDAL AKU SAMPE PUTUS!!!",
                scores: { E: +1, I: 0 },
            },
        },

    },
    {
        question: "Q11/12: Aku Suka bgt liat kamu saat...?",
        image: "https://media.giphy.com/media/3Owa0TWYqHi5RZYGql/giphy.gif",
        answers: {
            T: {
                text: "kamu salting, senyum2 liat aku, glendotaann hahaha.",
                scores: { S: +1, N: 0 },
            },
            N: {
                text: "kamu cemburu, nanyain itu lagi sama siapa, detil bgt kaya intel.",
                scores: { S: 0, N: +1 },
            },
        },
    },
    {
        question: "Q12/12: Berapa % Aku ingin balikan?",
        image: "https://media.giphy.com/media/ZyNQFqZLFUhr2/giphy.gif",
        answers: {
            F: {
                text: "40%",
                scores: { F: +1, T: 0 },
            },
            T: {
                text: "80%",
                scores: { F: 0, T: +1 },
            },
        },
    }
];

const resultOptions = {
    "ISTJ": {
        image: "1DE.png",
    },
    "ISFJ": {
        image: "2light.png"
    },
    "INFJ": {
        image: "3UFO.png"
    },
    "INTJ": {
        image: "4nebula.png"
    },
    "ISTP": {
        image: "5comet.png"
    },
    "ISFP": {
        image: "6ST.png"
    },
    "INFP": {
        image: "7DM.png"
    },
    "INTP": {
        image: "8met.png"
    },
    "ESTP": {
        image: "9BH.png"
    },
    "ESFP": {
        image: "10Sn.png"
    },
    "ENFP": {
        image: "11Grav.png"
    },
    "ENTP": {
        image: "12hand.png"
    },
    "ESTJ": {
        image: "13sat.png"
    },
    "ESFJ": {
        image: "14sun.png"
    },
    "ENFJ": {
        image: "15gal.png"
    },
    "ENTJ": {
        image: "16rocket.png"
    },

};

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
    const personalityType = calculatePersonalityType(totalScore);
    // const resultImage = getResultImage(personalityType);
    const calc = nilai/12*100;
    const floaters = parseInt(calc)
  
    //   <div class="card" style="background-color: #FFFFFF; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
    const resultHTML = `
      <h2>Persentase Kamu Mengenal Aku Sebanyak: ${floaters}%</h2>
        <canvas id="chart" width="800" height="800"></canvas>
            <button onClick='window.location.reload()' class="start-button">Play Again?</button>
    
    `;
    resultElement.innerHTML = resultHTML;
  
    const chartCanvas = document.getElementById('chart');
    const chartContext = chartCanvas.getContext('2d');
  
    const chartData = calculateChartData(totalScore);
    drawChart(chartContext, chartData);
  }
  
  function calculatePersonalityType(totalScore) {
    // TO DO: implement the logic to determine the personality type based on the total score
    // For now, just return a random personality type
    const personalityTypes = Object.keys(resultOptions);
    return personalityTypes[Math.floor(Math.random() * personalityTypes.length)];
  }
  
  function getResultImage(personalityType) {
    return `images/${resultOptions[personalityType].image}`;
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


