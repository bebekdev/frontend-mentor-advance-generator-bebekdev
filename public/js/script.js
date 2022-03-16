btnToggle = document.getElementById("button-toggle");
quote = document.getElementById("quote");

let loading = false;

const adviceData = async () => {
  btnToggle.classList.add("animate-spin", "pointer-events-none");

  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    const id = data.slip.id;
    const advice = data.slip.advice;
    document.getElementById("idQuote").innerHTML = id;
    document.getElementById("quote").innerHTML = advice;
  } catch (err) {
    console.log(err);
  } finally {
    btnToggle.classList.remove("animate-spin", "pointer-events-none");
  }
};

btnToggle.addEventListener("click", adviceData);
