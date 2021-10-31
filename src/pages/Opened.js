import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import GiftForm from '../comps/GiftForm'
import ExtraForm from '../comps/ExtraForm'
import Axios from 'axios'

const Opened = () => {
	const [submittedFirst, setSubmittedFirst] = useState(false)
	const [submittedSecond, setSubmittedSecond] = useState(false)
	const [giftData, setGiftData] = useState({})
	const [extraData, setExtraData] = useState({})
	const [ip, setIp] = useState('')
	let topData = {
		...giftData,
		...extraData,
		ip,
	}

	const getIpAddress = async () => {
		const res = await Axios.get('https://geolocation-db.com/json/')
		setIp(res.data.IPv4)
	}

	useEffect(() => {
		getIpAddress()
	}, [])

	useEffect(() => {
		const sendData = async () => {
			await Axios.post(
				'https://backend-mvmpage.herokuapp.com/api/data',
				topData
			)
				.then((res) => {
					if (res.status === 200) {
						window.location.href = '/bedankt'
					} else if (res.status === 400) {
						console.log(res.json())
					}
				})
				.catch((err) => {
					console.log(err.response)
				})
		}
		if (submittedSecond) sendData()
	}, [submittedSecond])

	return (
		<Container className='opened-container'>
			<Row className='align-items-center'>
				<Col md={6} style={{ overflow: 'hidden' }}>
					<img
						src='images/pijl-rechts.svg'
						className='pijl'
						width='400px'
						height='auto'
						alt='green arrow to the right'
					/>
					<img
						src='images/gift-opened.png'
						className='gift-opened'
						width='100%'
						height='auto'
						alt='gift opened'
					/>
				</Col>
				<Col md={6} style={{ overflow: 'hidden' }}>
					{submittedFirst ? (
						<ExtraForm
							setSubmitted={setSubmittedSecond}
							setData={(data) => {
								setExtraData(data)
							}}
						/>
					) : (
						<GiftForm
							setSubmitted={setSubmittedFirst}
							setData={(data) => {
								setGiftData(data)
							}}
						/>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default Opened
