// pages/api/data.js

export default async function handler(req, res) {
  try {
    const data = await fetchData(); // Simulates fetching data
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    //Improved error handling:
    const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
    res.status(500).json({ error: errorMessage });
  }
}

async function fetchData() {
  //Simulate network error
  if(Math.random() < 0.5) throw new Error('Network error');
  return { message: 'Data fetched successfully' };
}

// app/page.js
// ... (rest of the code remains the same)
