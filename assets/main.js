const btnTheme = document.querySelector(".btnThemeBackground");

function handleActiveThemeBody(event) {
  event.preventDefault();

  const body = document.querySelector("body");
  body.classList.toggle("activeThemeDark");
}

btnTheme.addEventListener("click", handleActiveThemeBody);

// Loading

function loading() {
  const loading = document.querySelector(".loading");
  setTimeout(() => {
    loading.remove();
  }, 3000);
  // }, window.onload);
}
loading();
