document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(this.action, {
    method: "POST",
    body: new FormData(this),
  });

  this.reset();
});

function redirect() {
  window.location.href = "Bedankt.html";
}

document.getElementById("textarea").value = "Type een bericht...";