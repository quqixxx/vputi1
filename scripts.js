document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let destination = document.getElementById('destination').value;
  let priceRange = document.getElementById('priceRange').value;
  let rating = document.getElementById('rating').value;

  // Здесь будет код для поиска через API (например, через Travelpayouts или другие)
  fetchResults(destination, priceRange, rating);
});

function fetchResults(destination, priceRange, rating) {
  // Это временный пример, на практике тут будет вызов API
  let results = [
    { name: 'Отель 1', price: '$100', rating: 4, link: '#' },
    { name: 'Тур 1', price: '$250', rating: 5, link: '#' },
    { name: 'Билет 1', price: '$50', rating: 3, link: '#' }
  ];

  displayResults(results);
}

function displayResults(results) {
  let resultsList = document.querySelector('.results-list');
  resultsList.innerHTML = '';

  results.forEach(result => {
    let resultItem = document.createElement('div');
    resultItem.innerHTML = `
      <h4>${result.name}</h4>
      <p>Цена: ${result.price}</p>
      <p>Рейтинг: ${result.rating}</p>
      <a href="${result.link}" target="_blank">Подробнее</a>
    `;
    resultsList.appendChild(resultItem);
  });
}