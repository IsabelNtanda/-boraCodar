// Loading

function loading() {
  const loading = document.querySelector(".loading");
  setTimeout(() => {
    loading.remove();
    // }, 1000);
  }, window.onload);
}
loading();
