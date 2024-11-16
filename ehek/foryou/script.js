const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");



noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

document.querySelector('.yes-btn').addEventListener('click', function() {
  window.location.href = '../index.html'; 
});

function updateGreeting() {
  const now = new Date();
  const hours = now.getHours();
  let greeting;

  if (hours < 12) {
      greeting = "Good Morning, Rinaa";
  } else if (hours < 18) {
      greeting = "Good Afternoon, Rinaa";
  } else {
      greeting = "Good Evening, Rinaa";
  }


  document.querySelector('.question').textContent = greeting;
}


updateGreeting();