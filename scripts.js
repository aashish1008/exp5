// Update the base URL to point to the backend
const BASE_URL = "http://localhost:3000";

// Function to read file content by calling the /read-file endpoint
async function readFile() {
  try {
    const response = await fetch(`${BASE_URL}/read-file`);
    const data = await response.json();

    document.getElementById("fileContent").innerText =
      data.data || "No content available";
  } catch (error) {
    console.error("Error reading file:", error);
    document.getElementById("fileContent").innerText = "Error reading file";
  }
}

// Function to write content to file by calling the /write-file endpoint
async function writeFile() {
  const content = document.getElementById("fileInput").value;

  try {
    const response = await fetch(`${BASE_URL}/write-file`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: content }),
    });

    const result = await response.json();

    if (result.success) {
      alert(result.message);
    } else {
      alert("Failed to write content");
    }
  } catch (error) {
    console.error("Error writing file:", error);
    alert("Error writing to file");
  }
}
