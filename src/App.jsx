import { useState } from 'react'
import './App.css'
import articles from './data/articles'
// import ListArticle from './components/ListArticle';

function App() {
  const [nameArticle, setNameArticle] = useState(articles);
  let [newArticle, setNewArticle] = useState('');
  


  const addArticle = (e) => {
    e.preventDefault();
    return newArticle === "" ? alert('Inserisci il nome di un articolo!!') : setNameArticle([...nameArticle, newArticle]);
    // alert('Form inviato!')
    // console.log(nameArticle);
    // setNameArticle([...nameArticle, newArticle]);
    // alert('Form inviato!')
    // console.log(nameArticle);

  }

  const removeArticle = index => {
    console.log(index);
    const searchArticleToEliminate = nameArticle.filter((article, i) => {

      return i !== index;
    });
    console.log(searchArticleToEliminate);
    setNameArticle(searchArticleToEliminate);
  }

  const modifyArticleFn = (index) => {
    // console.log(index);
    // console.log(nameArticle);
    // console.log(newArticle);
    if(newArticle === ""){
      return alert('Inserisci un testo per la modifica');
    }    
    const searchArticleToModify = nameArticle.map((article, i) => {
      return index === i ? article = newArticle : article = `${article}`;
    });

    console.log(searchArticleToModify);  
    setNameArticle(searchArticleToModify);
    // setNewArticle(searchArticleToModify);
  }


  return (
    <>
      <div className='container my-5'>
        <ul className="list-group">
          {nameArticle.map((article, index) =>
            // <ListArticle key={index} title={nameArticle[index]} removeArticle = {removeArticle} setNameArticle = {setNameArticle}/>
            <li key={index} className='list-group-item d-flex justify-content-between gap-2'>
              <p>{nameArticle[index]}</p>
              <div className="buttons d-flex justify-content-between gap-2">
                <button className="btn btn-outline-success col-6" onClick={() => modifyArticleFn(index)} > 
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>

                <button className="btn btn-outline-danger" onClick={() => removeArticle(index)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
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
