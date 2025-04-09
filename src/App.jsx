import { useState } from 'react'
import './App.css'
import articles from './data/articles'
import ListArticle from './components/ListArticle';

function App() {
  const [nameArticle, setNameArticle] = useState(articles);
  const [newArticle, setNewArticle] = useState('');

  const addArticle = e => {
    e.preventDefault();
    setNameArticle([...nameArticle, newArticle]);
    alert('Form inviato!')
    console.log(nameArticle);
  }

  return (
    <>
    <div className='container my-5'>
      <ul className="list-group">
        {nameArticle.map((article, index) => <ListArticle key={index} title = {nameArticle[index]}/>)}
      </ul>
    </div>

    <form className='container d-flex row mx-auto gap-2' onSubmit={addArticle}>
      {newArticle}
      <input type='text' 
        placeholder='nome articolo'
        className='form-control'
        value={newArticle}
        onChange={e => {
          setNewArticle(e.target.value)
        }}
      />
      <button className='btn btn-outline-primary'>Inserisci articolo</button>
    </form>
    </>
  )
}

export default App
