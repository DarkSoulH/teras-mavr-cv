document.getElementById("switchlang").addEventListener("click", function() {
  const localization = document.getElementById("switchlang");
  localization?.checked ? window.location.href = 'index_en.html': window.location.href = 'index.html'
})