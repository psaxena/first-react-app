import { Component } from 'react';
import './App.css';
import 'whatwg-fetch';
import Main from '../Main';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1 className="App-title"> TV Series List</h1>
//       </header>
//       <Intro message="Here you will find all of your most loved series"/>
//     </div>
//   );
// }

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> TV Series List</h1>
        </header>
        
        <Main />
      </div>
    );
  }
}

export default App;
