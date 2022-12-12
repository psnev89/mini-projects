const formatTimePartial = (partial) => {
  return `${partial}`.padStart(2, 0); // we will always want 2 digits for each "partial". i.e., 01 / 06 / 20
};

const getCurrentTime = () => {
  const time = new Date();
  return {
    hours: time.getHours(),
    minutes: time.getMinutes(),
    seconds: time.getSeconds(),
  };
};

const getClockContainerElement = () => {
  return document.getElementById("dc-clock-container");
};

const buildDigitHtmlElement = (char) => {
  const el = document.createElement("div");

  if (char === ":") {
    el.classList.add("dc-separator");
  } else {
    el.classList.add("dc-digit", `digit-${char}`);
    for (let i = 1; i < 8; i++) {
      const digitPartial = document.createElement("div");
      digitPartial.classList.add("dc-digit-fragment", `dc-digit-fragment-${i}`);
      el.appendChild(digitPartial);
    }
  }

  return el;
};

const buildClockHtmlDisplay = (timeDisplay) => {
  const clockHtml = document.createElement("div");
  clockHtml.classList.add("dc-clock");
  [...timeDisplay].forEach((char) => {
    clockHtml.appendChild(buildDigitHtmlElement(char));
  });
  return clockHtml;
};

const displayTime = () => {
  const clockContainerElement = getClockContainerElement();
  const { hours, minutes, seconds } = getCurrentTime();
  const clockHtml = buildClockHtmlDisplay(
    `${formatTimePartial(hours)}:${formatTimePartial(
      minutes
    )}:${formatTimePartial(seconds)}`
  );
  clockContainerElement.innerHTML = "";
  clockContainerElement.append(clockHtml);
};

const init = () => {
  setInterval(displayTime, 1000);
};

window.onload = init;
