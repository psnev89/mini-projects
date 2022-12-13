const domResultContainer = document.getElementById("resultContainer");
const domTextInput = document.getElementById("textInput");
const domSubmitButton = document.getElementById("submitButton");
const vowelsRegex = /[aeiou]/gi;

const getVowelsCount = (text = "") => {
  return `${text}`.match(vowelsRegex)?.length ?? 0;
};

const init = () => {
  const value = domTextInput.value;
  const count = getVowelsCount(value);
  domResultContainer.innerText = `${count || "No"} vowel${
    count === 1 ? "" : "s"
  } found`;
};

domSubmitButton.onclick = init;
