
import './App.css'
import articles from './data/articles'


function App() {



  return (
    <>
    <div className='container my-5'>
      <ul className="list-group">
        {articles.map(article => <li className='list-group-item'>{article.title}</li>)}
      </ul>
    </div>
    </>
  )
}

export default App
