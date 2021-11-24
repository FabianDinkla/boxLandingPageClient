import './index.css'
import { useEffect, useState } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import Header from './comps/Header'
import Footer from './comps/Footer'
import Opened from './pages/Opened'
import Bedankt from './pages/Bedankt'
import NotFound from './pages/NotFound'

function App() {
	const [notfound, setNotfound] = useState(false)
	const [homeClass, setHomeClass] = useState('')
	const [ref, setRef] = useState('')

	useEffect(() => {
		if (window.location.pathname === '/404') {
			setNotfound(true)
		} else {
			setNotfound(false)
		}

		if (window.location.pathname === '/') {
			setHomeClass('home')
		} else {
			setHomeClass('')
		}
	}, [])

	return (
		<Router>
			<div className='App'>
				{notfound ? (
					<Header headerTitle='404: Deze pagina lijkt niet te bestaan' />
				) : (
					<Header homeClass={homeClass} />
				)}
				<Switch>
					<Route path='/' exact>
						<Home setRef={setRef} />
					</Route>
					<Route path='/cadeaupakket' exact>
						<Opened referer={ref} />
					</Route>
					<Route path='/bedankt' component={Bedankt} exact />
					<Route path='/404' component={NotFound} />
					<Redirect to='/404' />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
