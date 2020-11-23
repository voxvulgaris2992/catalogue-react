import { Component } from 'react'; // Necessary to introduce class App below
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'; // Card-list component that separates elements into 'card spaces'
import { SearchBox } from './components/search-box/search-box.component.jsx' // Search-box takes users' typed inputs and filters cards that don't possess string

class App extends Component { // Classes have more functionality than functions and allow for States to be worked into code, 
  // which allows for more dynamic events, giving control over what Components display
  // Curly brackets in JSX refer to JS expressions: JSX used since React relies on HTML forms in syntax
  // Why App.js /w components in JSX? Create-React-App includes Babel, which transforms modern JS into older browser-friendly JS in public folder when build script is run

  constructor() {
    super(); // Super method calls Constructor method onto Component class, allowing this.state

    this.state = {
      monsters: [],
      searchField: '' // from onChange method search-box component
    };
  }

  // App component possesses state passed down into subsidiary components, which take it as props

  componentDidMount() { // Life-Cycle method fetches data, converts to JSON so JS can understand, then set monsters to array of users
    // Promises used here
    // Monsters could be hard-coded, but this allows for larger data to be used in array
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = (e) => { // Create custom method to alter state object based on synthetic events (search queries)
    this.setState({ searchField: e.target.value })
  };

  // this.? this is a JS keyword representing context in which something is invoked - this.state means we reference the state object onto a class component
  // In componentDidMount() and render() methods, both are subsumed by super(), which exists within Component, which exists within 'react', which automatically binds this.state within those methods
  // handleChange (e) {...} would result in an error since context of this.setState is undefined
  // this.handleChange = this.handleChange.bind(this); would have to be written within constructor(){...} to of this.setState within handleChange method
  // But, binding within constructor method for each custom method is verbose, so instead ES6 arrow (=>) functions can be used since they have 'lexical scoping' meaning this.setState is bound to where it 
  // was defined in the first place

  // Render class method returns HTML that was used for function before
  // monsters array passed into CardList below, which is then called upon in multiple components, like card-list.component.jsx and card-component.jsx
  // HTML element for search functionality is input tag
  // onChange method: whenever user makes any change to search input, searchField state is changed
  // e represents 'synthetic event' w/ user interaction in app
  // actual HTML events directly change DOM, React's synthetic events work through JSX to change state leading to change in VirtualDOM
  // setState is asynchronous, ie. what we expect it to do doesn't happen 'immediately'
  // React solution to ^: () => console.log(this.state) fed as second argument into onChange method

  render() {
    const { monsters, searchField } = this.state; // Equivalent to const monsters = this.state.monsters and const searchField = this.state.searchField
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) // .toLowerCase so search isn't case-sensitive
    );

    // ^ Create new array using .filter method for search queries without changing original state
    // filteredMonsters used for CardList so that re-rendering based on synthetic events dynamically changes application

    return (
      <div className="App">
        <h1> Catalogue </h1>
        <SearchBox
          placeholder='search monsters' // 'search monsters' in case of this app, but could be substituted if search-box component used elsewhere
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div >
    );
  }
}

export default App;


