import { useState } from 'react'
import './App.css'
import articles from './data/articles'
// import ListArticle from './components/ListArticle';

function App() {
  const [nameArticle, setNameArticle] = useState(articles);
  const [newArticle, setNewArticle] = useState('');

  
  const addArticle = e => {
    e.preventDefault();
    setNameArticle([...nameArticle, newArticle]);
    alert('Form inviato!')
    console.log(nameArticle);
  }

  const removeArticle = index => {
    const searchArticleToEliminate = nameArticle.filter((article, i) => {
      return i !== index;
    });
    setNameArticle(searchArticleToEliminate);
  }


  return (
    <>
    <div className='container my-5'>
      <ul className="list-group">
        {nameArticle.map((article, index) => 
        // <ListArticle key={index} title={nameArticle[index]} removeArticle = {removeArticle} setNameArticle = {setNameArticle}/>
          <li key={index} className='list-group-item d-flex justify-content-between'>
            <p>{nameArticle[index]}</p> 
            <div className="buttons">
                <button className="btn btn-outline-success">Modifica</button>  
                <button className="btn btn-outline-danger" onClick={() => removeArticle(index)}>x</button>
            </div>
         </li>
        )}
      </ul>
    </div>

    <form className='container d-flex row mx-auto gap-2' onSubmit={addArticle}>
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
