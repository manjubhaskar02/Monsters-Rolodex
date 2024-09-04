import './App.css';
import { useState, useEffect } from 'react';
import CardList from './Components/card-list/card-list.component';
import SearchBox from './Components/search-box/search-box.component';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const onSearchChange = (event) => {
    const searhFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searhFieldString)
  }

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
  });
  return (
    <div className='App'>
      <h1 className='app-title'> Monsters Rolodex</h1>
      <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters...' className='search-box' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}
export default App;


// import './App.css';
// import { Component } from 'react';
// import CardList from './Components/card-list/card-list.component';
// import SearchBox from './Components/search-box/search-box.component';
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [
//       ],
//       searhField: ''
//     };
//     // console.log('constructor')
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => {
//           // console.log(this.state);
//         }
//       ))
//     // console.log('componentdidMount')
//   }
//   onSearchChange = (event) => {
//     console.log(event.target.value);
//     const searhField = event.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { searhField }
//     })
//   }
//   render() {
//     console.log('render fro App')
//     const { monsters, searhField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searhField)
//     });
//     return (
//       <>
//         <h1 className='app-title'>Monsters Rolodex</h1>

//         <SearchBox onChangeHandler={onSearchChange} placeholder='Search Monsters...' className='search-box' />

//         <CardList monsters={filteredMonsters} />
//       </>
//     );
//   }
// }
// export default App;
