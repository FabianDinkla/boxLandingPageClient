import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from '@mui/material/FormControl'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Axios from 'axios'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'
import nlLocale from 'date-fns/locale/nl'
import * as moment from 'moment'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}))

const BootstrapDialogTitle = (props) => {
	const { children, onClose, ...other } = props

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	)
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
}

const GiftForm = ({ setSubmitted, setData }) => {
	const [date, setDate] = useState('')
	const [formValues, setFormValues] = useState({
		gender: '',
		firstName: '',
		infix: '',
		lastName: '',
		zipCode: '',
		houseNumber: '',
		addOn: '',
		street: '',
		city: '',
		birthdate: moment(date).format('YYYY-MM-DD'),
		phoneNumber: '',
		email: '',
	})

	const [fieldValues, setFieldValues] = useState({
		zip: '',
		number: '',
	})

	const handleBlurZip = (e) => {
		setFieldValues({ ...fieldValues, zip: e.target.value })
	}

	const handleBlurNumber = (e) => {
		setFieldValues({ ...fieldValues, number: e.target.value })
	}

	const [errorMessage, setErrorMessage] = useState('')
	const [displayError, setDisplayError] = useState('none')
	const [zipNotFound, setZipNotFound] = useState(false)

	useEffect(() => {
		const fetchZipData = async () => {
			if (formValues.zipCode != '' && formValues.houseNumber != '') {
				const res = await Axios.get(
					`https://postcode.tech/api/v1/postcode?postcode=${formValues.zipCode}&number=${formValues.houseNumber}`,
					{
						headers: {
							Authorization: 'Bearer 3e2f03dc-8cac-4ffc-bfeb-a94b0b74d6f8',
						},
					}
				)
					.then((res) => {
						if (res.status === 200) {
							const resStreet = res.data.street
							const resCity = res.data.city
							setFormValues({ ...formValues, street: resStreet, city: resCity })
							setDisplayError('none')
							setErrorMessage('')
							setZipNotFound(false)
						}
					})
					.catch((err) => {
						if (err.response.status === 404) {
							setZipNotFound(true)
						}
					})
			}
		}
		fetchZipData()
	}, [fieldValues.zip, fieldValues.number])

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = (e) => {
		const zipCodeRegex = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
		const emailRegex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
		e.preventDefault()
		if (
			!formValues.gender ||
			!formValues.firstName ||
			!formValues.lastName ||
			!formValues.zipCode ||
			!formValues.houseNumber ||
			!formValues.birthdate ||
			!formValues.phoneNumber ||
			!formValues.email
		) {
			setErrorMessage('Er zijn 1 of meer verplichte velden niet ingevuld!')
			setDisplayError('block')
		} else if (!zipCodeRegex.test(formValues.zipCode)) {
			setErrorMessage('De ingevulde postcode is niet geldig!')
			setDisplayError('block')
		} else if (formValues.phoneNumber.length != 10) {
			setErrorMessage('Het telefoonnummer moet exact 10 cijfers lang zijn!')
			setDisplayError('block')
		} else if (!emailRegex.test(formValues.email)) {
			setErrorMessage('Het e-mailadres is ongeldig!')
			setDisplayError('block')
		} else if (zipNotFound) {
			setErrorMessage(
				'Er is geen adres gevonden bij deze postcode en huisnummer combinatie!'
			)
			setDisplayError('block')
		} else if (!formValues.street || !formValues.city) {
			setErrorMessage(
				'Er is iets misgegaan met het adres. Probeer het adres eens handmatig in te typen!'
			)
			setDisplayError('block')
		} else {
			setDisplayError('none')
			setErrorMessage('')
			setData(formValues)
			setSubmitted(true)
		}
	}

	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	let today = new Date()
	let dd = today.getDate()
	let mm = today.getMonth() + 1
	let yyyy = today.getFullYear()

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	today = dd + '-' + mm + '-' + yyyy
	let todayFormatted = today.split('-').reverse().join('-')

	let minAge = new Date(todayFormatted)
	minAge.setFullYear(minAge.getFullYear() - 18)

	return (
		<div>
			<Form className='gift-form' onSubmit={handleSubmit}>
				<RadioGroup
					className='inline-container'
					defaultValue='female'
					value={formValues.gender}
					onChange={handleChange}
					name='gender'>
					<FormControlLabel
						value='female'
						control={<Radio color='success' />}
						label='Mevr.'
						variant='standard'
					/>

					<FormControlLabel
						value='male'
						control={<Radio color='success' />}
						label='Dhr.'
						variant='standard'
					/>
				</RadioGroup>
				<br />
				<div className='inline-container'>
					<FormControl className='form-control name' variant='standard'>
						<InputLabel htmlFor='firstname'>Voornaam</InputLabel>
						<Input
							id='firstname'
							className='firstname-input'
							value={formValues.firstName}
							onChange={handleChange}
							name='firstName'
						/>
					</FormControl>
					<FormControl className='form-control name' variant='standard'>
						<InputLabel htmlFor='infix'>Tussenvoegsel</InputLabel>
						<Input
							id='infix'
							className='infix-input'
							value={formValues.infix}
							onChange={handleChange}
							name='infix'
						/>
					</FormControl>
				</div>
				<FormControl fullwidth className='form-control' variant='standard'>
					<InputLabel htmlFor='lastname'>Achternaam</InputLabel>
					<Input
						id='lastname'
						fullwidth
						className='form-input'
						value={formValues.lastName}
						onChange={handleChange}
						name='lastName'
					/>
				</FormControl>
				<div className='inline-container'>
					<FormControl className='form-control address' variant='standard'>
						<InputLabel htmlFor='zipCode'>Postcode</InputLabel>
						<Input
							id='zipCode'
							onBlur={handleBlurZip}
							className='zipCode-input'
							value={formValues.zipCode}
							onChange={handleChange}
							name='zipCode'
						/>
					</FormControl>
					<FormControl className='form-control address' variant='standard'>
						<InputLabel htmlFor='house-number'>Huisnummer</InputLabel>
						<Input
							id='house-number'
							className='house-number-input'
							type='number'
							onBlur={handleBlurNumber}
							value={formValues.houseNumber}
							onChange={handleChange}
							name='houseNumber'
						/>
					</FormControl>
					<FormControl className='form-control address' variant='standard'>
						<InputLabel htmlFor='add-on'>Toevoeging</InputLabel>
						<Input
							id='add-on'
							className='add-on-input'
							value={formValues.addOn}
							onChange={handleChange}
							name='addOn'
						/>
					</FormControl>
				</div>
				<div className='inline-container'>
					<FormControl className='form-control street' variant='standard'>
						<InputLabel htmlFor='street'>Straat</InputLabel>
						<Input
							disabled
							id='street'
							className='street-input'
							value={formValues.street}
							name='street'
						/>
					</FormControl>
					<FormControl className='form-control city' variant='standard'>
						<InputLabel htmlFor='city'>Plaats</InputLabel>
						<Input
							disabled
							id='city'
							className='city-input'
							value={formValues.city}
							name='city'
						/>
					</FormControl>
				</div>
				<div className='inline-container'>
					<FormControl className='form-control birthdate' variant='standard'>
						<InputLabel htmlFor='birthdate' shrink={true}>
							Geboortedatum
						</InputLabel>
						<LocalizationProvider
							dateAdapter={AdapterDateFns}
							locale={nlLocale}>
							<DatePicker
								id='birthdate'
								name='birthdate'
								disableFuture
								mask='__-__-____'
								openTo='year'
								minDate={new Date('1920-01-01')}
								maxDate={minAge}
								views={['year', 'month', 'day']}
								value={date}
								onChange={(newValue) => {
									setDate(newValue)
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										helperText={null}
										variant='standard'
										sx={{
											maxWidth: '95% !important',
											marginTop: '16px !important',
										}}
									/>
								)}
							/>
						</LocalizationProvider>
					</FormControl>
					<FormControl className='form-control phone' variant='standard'>
						<InputLabel htmlFor='phone'>Telefoonnummer</InputLabel>
						<Input
							id='phone'
							className='phone-input'
							type='tel'
							value={formValues.phoneNumber}
							onChange={handleChange}
							name='phoneNumber'
						/>
					</FormControl>
				</div>
				<FormControl fullwidth className='form-control' variant='standard'>
					<InputLabel htmlFor='email'>E-mailadres</InputLabel>
					<Input
						id='email'
						fullwidth
						type='email'
						className='form-input'
						value={formValues.email}
						onChange={handleChange}
						name='email'
					/>
				</FormControl>
				<FormControlLabel
					control={
						<Checkbox
							color='success'
							sx={{
								marginTop: '-40px',
							}}
						/>
					}
					label={
						<div>
							<span>
								Ja, ik ga akkoord met de{' '}
								<a
									variant='contained'
									onClick={handleClickOpen}
									className='non-active-link'>
									voorwaarden
								</a>{' '}
								en wil de e-mailnieuwsbrief ontvangen van meervoormamas.nl,
								Chubb, Kinderboekerij en Lucardi. Kinderboekerij en Chubb mogen
								mij tevens telefonisch benaderen met een interessante
								aanbieding.
							</span>
						</div>
					}
					sx={{ marginTop: '15px', marginBottom: '15px' }}
				/>
				<BootstrapDialog
					onClose={handleClose}
					aria-labelledby='customized-dialog-title'
					open={open}>
					<BootstrapDialogTitle
						id='customized-dialog-title'
						onClose={handleClose}>
						Algemene Voorwaarden
					</BootstrapDialogTitle>
					<DialogContent dividers>
						<Typography gutterBottom>
							<p>
								In samenwerking met verschillende partners van Meer voor Mama’s
								hebben we een mooi digitaal cadeaupakket samengesteld dat je
								helemaal GRATIS kunt ontvangen. Vul je volledige gegevens in en
								ontvang het digitale Meer voor Mama’s cadeaupakket met leuke
								cadeautjes voor jou en je kind. Het pakket is geschikt voor
								zwangere vrouwen en jonge moeders met een kind in de leeftijd 0
								t/m 10 jaar. Alleen volledig ingevulde aanvragen zullen het
								pakket gratis ontvangen (zolang de voorraad strekt, op = op).
								Deelname is alleen mogelijk als deelnemer zijn/haar feitelijke
								woon- en verblijfplaats in Nederland heeft, alle gegevens naar
								waarheid invult en 18 jaar of ouder is. Het Meer voor Mama’s
								Cadeaupakket is een speciaal samengesteld pakket van
								geselecteerde cadeau-acties en exclusieve kortingen mede
								mogelijk gemaakt door de sponsoren van deze actie, te weten:
							</p>
						</Typography>
						<Typography gutterBottom></Typography>
						<p className='dialog-text-block'>
							Kinderboekerij
							<br />
							Postbus 8 <br />
							4860 AA Chaam
							<br />
							<a
								href='https://www.kinderboekerij.nl'
								rel='noreferrer'
								target='_blank'>
								{' '}
								www.kinderboekerij.nl
							</a>
						</p>
						<Typography gutterBottom>
							<p className='dialog-text-block'>
								Lucardi Juwelier
								<br />
								Verheeskade 197 <br />
								2521 DD Den Haag
								<br />
								<a
									href='https://www.lucardi.nl'
									rel='noreferrer'
									target='_blank'>
									{' '}
									www.lucardi.nl
								</a>
							</p>
						</Typography>
						<Typography gutterBottom>
							<p className='dialog-text-block'>
								Chubb European Group SE
								<br />
								Marten Meesweg 8 <br />
								3068 AV Rotterdam
								<br />
								<a
									href='https://www.chubb.com/benelux-nl'
									rel='noreferrer'
									target='_blank'>
									{' '}
									www.chubb.com
								</a>
							</p>
						</Typography>
						<Typography gutterBottom>
							<p className='dialog-text-block'>
								Iedere aanvrager van het Meer voor Mama's Cadeaupakket geeft
								expliciete toestemming voor het ontvangen van de nieuwsbrief van{' '}
								<a
									href='https://www.meervoormamas.nl'
									rel='noreferrer'
									target='_blank'>
									Meervoormamas.nl
								</a>
								, Kinderboekerij, Chubb en Lucardi. De deelnemer geeft ook
								toestemming voor het ontvangen van een telefonische aanbieding
								van Kinderboekerij en Chubb. Iedere aanvrager van het Meer voor
								Mama’s Cadeaupakket kan zich op ieder gewenst moment
								uitschrijven voor de nieuwsbrieven van genoemde sponsoren, door
								op de uitschrijflink in de desbetreffende nieuwsbrief te klikken
								of door een bericht te sturen naar de klantenservice/het
								contactformulier in te vullen op de website van genoemde
								sponsoren.
							</p>
						</Typography>
						<Typography gutterBottom>
							<p className='dialog-text-block'>
								De voorwaarden worden aan deelnemers ter beschikking gesteld
								door publicatie op deze pagina. Deelname aan deze actie houdt
								acceptatie van de deelname voorwaarden in. Betwisting van deze
								actievoorwaarden zal niet in overweging worden genomen. In alle
								gevallen waarin deze actievoorwaarden niet voorzien, beslist de
								directie van Offspring Media BV, eigenaar van Meervoormamas.nl.
								Het besluit van de directie is niet voor bezwaar of beroep
								vatbaar. Offspring Media BV gaat, als eigenaar van de acties,
								zorgvuldig om met uw gegevens. Alle gegevens uit de actie worden
								door Offspring Media BV vastgelegd in het Meer voor Mama’s
								bestand. Het doel van deze gegevensverwerking is om u per post
								of telefoon op de hoogte te houden van producten en diensten van
								Meervoormamas.nl en zorgvuldig geselecteerde adverteerders
								(waaronder, en niet uitsluitend beperkt tot, uitgeverijen,
								energiemaatschappijen, telecombedrijven, webshops,
								reisorganisaties). Door deelname aan deze actie geeft u, als
								deelnemer, uw toestemming aan Offspring Media BV, om per post of
								telefoon nieuwe aanbiedingen en andere speciale acties van Meer
								voor Mama’s en zorgvuldig geselecteerde adverteerders te
								ontvangen. Mocht u uw adres willen blokkeren voor toekomstige
								acties en geen speciale aanbiedingen van Meer voor Mama’s of
								onze partners willen ontvangen kunt u dit ten alle tijde kenbaar
								maken. Offspring Media BV behoudt zich het recht voor om
								wijzigingen aan te brengen in het privacystatement. Het actuele
								privacybeleid kunt u op elk moment online raadplegen.
							</p>
						</Typography>
						<Typography gutterBottom>
							<h3>Voorwaarden Lucardi Juwelier</h3>
							<ul>
								<li>
									De korting is in te leveren bij een besteding van €25,- en is
									één maand geldig.
								</li>
								<li>De korting is geldig in alle winkels en in de webshop.</li>
								<li>
									De korting is geldig op alle lopende aanbiedingen, de korting
									geldt niet op 'uitzonderingen van acties en kortingscodes’.
								</li>
								<li>
									Zie meer info:{' '}
									<a
										href='https://www.lucardi.nl/nl-nl/veel-gestelde-vragen'
										target='_blank'
										rel='noreferrer'>
										Lucardi.nl/nl-nl/veel-gestelde-vragen
									</a>
								</li>
							</ul>
						</Typography>
					</DialogContent>
					<DialogActions>
						<Button autoFocus onClick={handleClose}>
							Sluiten
						</Button>
					</DialogActions>
				</BootstrapDialog>
				<p
					className='errorMessage'
					style={{
						display: displayError,
					}}>
					{errorMessage}
				</p>
				<FormControl fullwidth className='form-control'>
					<input
						id='submit'
						fullwidth
						className='submit-button'
						type='submit'
						value='DOE MEE'
					/>
				</FormControl>
			</Form>
		</div>
	)
}

export default GiftForm
