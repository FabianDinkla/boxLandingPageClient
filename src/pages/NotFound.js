import Container from 'react-bootstrap/Container'

const NotFound = () => {
	const baseUrl = window.location.origin

	return (
		<>
			<Container className='opened-container not-found'>
				<h2
					className='bedankt-title'
					style={{ color: '#5d0f32', marginBottom: '20px' }}>
					Ga terug naar de startpagina door op de onderstaande knop te klikken!
				</h2>
				<img
					src='images/gift-closed.png'
					className='gift-closed'
					width='100%'
					height='auto'
					alt='gift opened'
				/>
				<a href={baseUrl}>
					<button
						className='submit-button'
						style={{ fontSize: '20px', marginTop: '30px' }}>
						Ga terug naar de startpagina
					</button>
				</a>
			</Container>
		</>
	)
}

export default NotFound
