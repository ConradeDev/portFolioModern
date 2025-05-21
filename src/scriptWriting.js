export function machineWriting(){
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursorWriting");

  const textArray = ["creatif", "tres bon"];

  const typedDelay = 200;
  const eraisingDelay = 100;
  const newTextDelay = 2000;

  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
      }
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typedDelay);
    } else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing")) {
        cursorSpan.classList.add("typing");
      }
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, eraisingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) {
        textArrayIndex = 0;
      }
      setTimeout(type, typedDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) {
      setTimeout(type(), newTextDelay + 250);
    }
  });
}