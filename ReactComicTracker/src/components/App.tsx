import './App.css'
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Nav/NavBar'
import { SearchBar } from './Search/Searchbar';

function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        Comic Stuff
        <SearchBar />
      </div>
    </BrowserRouter>
  )
}

export default App
