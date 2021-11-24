import React from 'react'
import BoxAnimation from '../comps/BoxAnimation'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'

const Home = ({ setRef }) => {
	const { search } = useLocation()
	const { ref } = queryString.parse(search)
	setRef(ref)

	return (
		<div className='container'>
			<BoxAnimation animationSRC='../BoxAnimationStyled.html' />
		</div>
	)
}

export default Home
