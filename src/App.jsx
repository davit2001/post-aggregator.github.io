import { useEffect } from 'react';

const apiKey = 'c27511b9d4234dadb63e981e88822bd5';
const url = `https://newsapi.org/v2/top-headlines?category=technology&q=apple&apiKey=${apiKey}`

function App() {
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log('data', data)
      })
  })
  return (
    <div className="App">
      sdfsd
    </div>
  )
}

export default App
