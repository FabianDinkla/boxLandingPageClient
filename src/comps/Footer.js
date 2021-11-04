import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Footer = () => {
	return (
		<Container style={{ textAlign: 'center' }}>
			<hr />
			<Row className='align-items-center'>
				<Col>
					<img src='images/logo-kinderboekerij.svg' alt='' width='170px' />
				</Col>
				<Col>
					<img src='images/logo-mvm.svg' alt='' width='170px' />
				</Col>
				<Col>
					<img src='images/logo-chubb.png' alt='' width='170px' />
				</Col>
				<Col>
					<img src='images/logo-lucardi.svg' alt='' width='170px' />
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
