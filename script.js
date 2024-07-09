document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const yourName = document.getElementById('yourName').value.trim();
    const partnerName = document.getElementById('partnerName').value.trim();
    
    if (yourName && partnerName) {
        const compatibility = calculateCompatibility(yourName, partnerName);
        document.getElementById('result').textContent = `Your compatibility is ${compatibility}%!`;
    } else {
        document.getElementById('result').textContent = 'Please enter both names.';
    }
});

function calculateCompatibility(name1, name2) {
    const combinedNames = name1 + name2;
    let sum = 0;
    for (let i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i);
    }
    return sum % 100;
}
