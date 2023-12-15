
import './App.css'

import  { Component } from 'react'
import Home from './components/Home'
import QuizComponent from './components/QuizComponent'
import ResultComponent from './components/ResultComponent'

export default class App extends Component {
  render() {
    return (
      <><Home /><QuizComponent />
      <ResultComponent/>
      </>
    )
  }
}


