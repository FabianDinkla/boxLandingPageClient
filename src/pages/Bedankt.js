import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Bedankt = () => {
	return (
		<Container className='opened-container'>
			<Row className='align-items-center'>
				<Col md={6} style={{ overflow: 'hidden' }}>
					<img
						src='images/gift-opened.png'
						className='gift-opened'
						width='100%'
						height='auto'
						alt='gift opened'
					/>
				</Col>
				<Col md={6} style={{ overflow: 'hidden' }}>
					<div>
						<h1 className='bedankt-title'>Bedankt</h1>
						<p>
							Jouw Meer Voor Mama’s cadeaupakket met speciale kortingsacties en
							gratis producten wordt nu naar je verzonden! Je vindt het digitale
							cadeaupakket in je e-mail inbox.
						</p>
						<a href='https://meervoormamas.nl'>
							<button className='submit-button'>NAAR MEER VOOR MAMA'S</button>
						</a>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Bedankt
