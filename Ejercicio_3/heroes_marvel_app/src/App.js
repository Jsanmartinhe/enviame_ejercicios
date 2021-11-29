import './App.css';
import Header from './components/Header'
import CharacterTable from './components/CharacterTable'
import axios from 'axios'
import React , {useEffect,useState} from 'react'
import Search from './components/Search'
import md5 from 'md5';

const publicKey = '6d3ae74ff6c4a3bd7f09d94420154c03';
const privateKey = '04ae85ac9a5343b88bf5137b90c6f708ff14c444';
const ts = 1;

const hash = md5(ts + privateKey + publicKey);
localStorage.clear();

function App() {
  const[items,setItems] = useState([])
  const[isLoading,setLoading] = useState(true)
  const [query,setQuery] = useState('')

  useEffect(()=>{
      const fetch = async()=>{
        if(query===''){
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
          
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)              
        }else{
          const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
        }
      
    }

    fetch()
  },[query])

  return (
    <div className="container">  
      <Header />
      <Search search={(q)=>setQuery(q)}></Search>
      <CharacterTable items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
