const numberInput = document.getElementById("number-input");
const convertButton = document.getElementById("convert-btn");
const result = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

const convertToRoman = (num) => {
  const ref = [
    ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
    ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
    ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
  ];
  
  let res = "";
  ref.forEach(([symbol, value]) => {
    while (num >= value) {
      res += symbol;
      num -= value;
    }
  });

  return res;
};

const isValid = (numStr, int) => {
  if (!numStr || numStr.includes("e") || numStr.includes(".")) {
    result.textContent = "Please enter a valid number.";
    return false;
  }
  if (int < 1) {
    result.textContent = "Please enter a number greater than or equal to 1.";
    return false;
  }
  if (int > 3999) {
    result.textContent = "Please enter a number less than or equal to 3999.";
    return false;
  }
  return true;
};

const updateUI = () => {
  const numStr = numberInput.value.trim();
  const int = parseInt(numStr, 10);

  resetResult();

  if (isValid(numStr, int)) {
    result.textContent = convertToRoman(int);
  }
};

const resetInputs = () => {
  numberInput.value = "";
  resetResult();
};

const resetResult = () => {
  result.textContent = "Result";
};

convertButton.addEventListener("click", updateUI);
resetBtn.addEventListener("click", resetInputs);
