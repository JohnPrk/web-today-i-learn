const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

tilForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const date = document.querySelector("#til-date").value;
  const title = document.querySelector("#til-title").value;
  const content = document.querySelector("#til-content").value;

  const article = document.createElement("article");
  article.classList.add("til-item");

  const time = document.createElement("time");
  time.textContent = date;

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = content;

  article.appendChild(time);
  article.appendChild(h3);
  article.appendChild(p);

  // 최신 항목이 맨 위에 오도록 prepend
  tilList.prepend(article);

  tilForm.reset();
});
