// Function to read file content
function readFile() {
    fetch('/read-file')
        .then(response => response.json())
        .then(data => {
            document.getElementById('fileContent').textContent = data.content || 'File is empty.';
        })
        .catch(error => console.error('Error:', error));
}

// Function to write to file
function writeFile() {
    const content = document.getElementById('fileInput').value;
    fetch('/write-file', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
    })
    .then(response => response.json())
    .then(data => alert(data.message))
    .catch(error => console.error('Error:', error));
}
