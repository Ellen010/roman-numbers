const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

const arabicToRoman = (input) => {
  if (input === 0) {
    return String(input);
  } else if (input< 10) {
                          if (input ===1) return I
  } 
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  if (inputInt === 5) {
    showAnimation();
    return;
  }

  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});

const resetInputs = () => {
  numberInput.value = "";
  result.textContent = "";
  animationContainer.innerHTML = "";
};

resetBtn.addEventListener("click", resetInputs);
