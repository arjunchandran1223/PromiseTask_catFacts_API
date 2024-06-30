document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetch-cat-facts-button').addEventListener('click', fetchCatFacts);
    fetchCatFacts();
});


function fetchCatFacts() {
    const catFactId = document.getElementById('cat-fact-id-input').value;
    if (!catFactId) {
        alert('Please enter a Cat Fact ID.');
        return;
    }

    const url = `https://meowfacts.herokuapp.com/?id=${catFactId}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const catFactsList = document.getElementById('cat-facts-list');
            catFactsList.innerHTML = ''; // Clear previous facts

            data.data.forEach(fact => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = fact;
                catFactsList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching cat facts:', error));
}

document.getElementById('fetch-cat-facts-button').addEventListener('click', fetchCatFacts);


document.getElementById('fetch-cat-facts-button').addEventListener('click', fetchCatFacts);

