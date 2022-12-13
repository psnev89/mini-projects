// cache dom elements
const domResultContainer = document.getElementById("result-container");
const domTextInput = document.getElementById("text-input");
const domSubmitButton = document.getElementById("submit-button");
const domClearButton = document.getElementById("clear-button");

const vowelsRegex = /[aeiou]/gi;

const getVowelsCount = (text = "") => {
  const normalized = `${text}`.normalize("NFD"); // to account for accented vowels (á, à, é, etc...)
  return normalized.match(vowelsRegex)?.length ?? 0;
};

const reset = () => {
  domResultContainer.innerText = "";
  domTextInput.value = "";
};

const init = () => {
  const value = domTextInput.value;
  const count = getVowelsCount(value);
  domResultContainer.innerText = `${count || "No"} vowel${
    count === 1 ? "" : "s"
  } found`;
};

domSubmitButton.onclick = init;
domClearButton.onclick = reset;
