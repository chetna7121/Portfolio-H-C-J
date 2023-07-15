window.addEventListener("DOMContentLoaded", () => {
    const spanElement = document.querySelector("span[data-text]");
    const text = spanElement.getAttribute("data-text");
  
    function simulateTyping() {
      spanElement.textContent = text;
    }
    setTimeout(simulateTyping, 1000); 
  });
  

  