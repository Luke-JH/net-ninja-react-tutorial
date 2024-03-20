import './App.css';

function App() {
  
  const title = 'welcome to the new blog'
  const likes = 50
  const person = {  name: 'yoshi', age: 30}
  const link = 'https://www.google.com'

  return (
    <div className="App">
      <div className='content'>
        <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{person.name}</p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App
