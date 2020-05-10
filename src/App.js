import React from 'react'
import Header from './Components/header.components'
import MemeGenerator from './Components/MainArea.component'
import './App.css'

const App = () => {
	return (
		<div className = "main-app">
			<Header />
			<MemeGenerator />
		</div>
	)
}

export default App;

