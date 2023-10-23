const text = "Your Guide For the Mid-sems";

const typingText = document.getElementById("typing-text");
let index = 0;

function type() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed (in milliseconds) here
    }
}

type();


      const countEl = document.getElementById("count");
      countvisits();

      function countvisits() {
        fetch('https://api.countapi.xyz/update/laptop/mouse/?amount=1')
          .then((res) => res.json())
          .then((res) => {
            countEl.innerHTML = res.value;
          });
      }

