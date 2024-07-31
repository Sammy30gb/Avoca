document.addEventListener("DOMContentLoaded", function () {
  const redBtn = document.getElementById("red-btn");
  const blueBtn = document.getElementById("red-btn");
  const yellowBtn = document.getElementById("yellow-btn");
  // const container = document.getElementsByClassName(".btn-contain");
  
  const minusButton = document.getElementById("minus");
  const plusButton = document.getElementById("plus");

  const solution = document.getElementById("result");
  // const totalProduct = document.getElementById("total");
  //  function applyRed() {
  //     const container = event.target.parentElement

  //     container.style.backgroundColor ='red'
  //     console.log("clicked on red button")
  //   }
  //  function applyYellow() {
  //     const container = event.target.parentElement

  //     container.style.backgroundColor ='yellow'
  //     console.log("clicked on red butt")
  //   }
  //  function applyGreen() {
  //     const container = event.target.parentElement

  //     container.style.backgroundColor ='green'
  //     console.log("clicked on red button")
  //   }
  //   redBtn.addEventListener("click", applyRed)
  //   yellowBtn.addEventListener("click", applyYellow)
  //   redBtn.addEventListener("click", applyGreen)



  function addNum() {
    const currentNum = parseInt(solution.textContent);
    solution.textContent = currentNum + 1;
    console.log("the current number is", currentNum);
  }

  // textContent.textContent = solution.textContent
  // ÷
  function subtractNum() {
    const currentNum = parseInt(solution.textContent);
    if (currentNum > 0) {
      solution.textContent = currentNum - 1;
    }
    console.log("the current number is", currentNum);
  }

  minusButton.addEventListener("click", subtractNum);
  plusButton.addEventListener("click", addNum);
});

// make 3 butttons and chnage the background of a continer on each click to differnet color background
// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
