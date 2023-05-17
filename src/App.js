import './App.css';
//import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.comoponent';
import { useState, useEffect } from 'react';

const App = () => {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters,setFilteredMonsteres]=useState(monsters);
  const [title,setTitle]=useState('');
  console.log("render");

  const onSearchChange = (e) => {
    console.log(e.type);
    setSearchField( e.target.value.toLocaleLowerCase() );
  };
  const onTitleChange=(e)=>{
    setTitle(e.target.value)
  }
  
  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  setFilteredMonsteres(newFilteredMonsters);

  },[monsters,searchField]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters( users ));
      console.log(monsters)
  }, []);

  return (
    <div className="App">
      <h1 className="app-title">{title?title:'Monster Roldex'}</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={'search monsters'}
        className={'search-box'}
      />
      <br />
      <SearchBox
        onChangeHandler={onTitleChange}
        placeholder={'set title'}
        className={'search-box'}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};   /* 
class App extends Component {
  constructor() {
    console.log('constructor');
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('http://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>
    this.setState(()=>{
      return { monsters: users };
    }))
    // const fetchUser = async () => {
    //   const response = await fetch('http://jsonplaceholder.typicode.com/users');
    //   const users = await response.json();
    //   console.log(users);
    //   this.setState({
    //     monsters: users
    //   });
    // };
    // fetchUser();
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value.toLocaleLowerCase() });
  };
  render() {
    console.log('render');
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1 className="app-title">Monster Roldex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder={"search monsters"} className={"search-box"}/>
        <CardList monsters={filteredMonsters}/>
       
      </div>
    );
  }
} */

export default App;
