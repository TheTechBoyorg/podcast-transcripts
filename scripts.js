const searchInput = document.getElementById('search');
const transcriptList = document.getElementById('transcript-list');
const items = transcriptList.getElementsByTagName('li');

searchInput.addEventListener('input', function () {
  const filter = searchInput.value.toLowerCase();
  for (let i = 0; i < items.length; i++) {
    const text = items[i].innerText.toLowerCase();
    items[i].style.display = text.includes(filter) ? '' : 'none';
  }
});
