import './App.css';
import './index.module.css'
import {BrowserRouter} from 'react-router-dom'
import {Route} from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Landing from './components/landing/Landing'
import Countries from './components/countries/Countries'
import CountryDetail from './components/countryDetail/CountryDetail'
import createActivity from './components/createActivity/CreateActivity'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={NavBar} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/countries' component={Countries}/>
        <Route exact path='/countries/:id' component={CountryDetail}/>
        <Route exact path='/create' component={createActivity}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
