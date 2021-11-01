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
	const [formValues, setFormValues] = useState({
		gender: '',
		firstName: '',
		infix: '',
		lastName: '',
		zipCode: '',
		houseNumber: null,
		addOn: '',
		street: '',
		city: '',
		birthdate: '',
		phoneNumber: '',
		email: '',
	})

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSubmitted(true)
		setData(formValues)
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

	today = yyyy + '-' + mm + '-' + dd
	useEffect(() => {
		document.getElementById('birthdate').setAttribute('max', today)
		document.getElementById('birthdate').setAttribute('min', '1899-01-01')
	}, [])

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
					/>

					<FormControlLabel
						value='male'
						control={<Radio color='success' />}
						label='Dhr.'
					/>
				</RadioGroup>
				<br />
				<div className='inline-container'>
					<FormControl className='form-control name'>
						<InputLabel htmlFor='firstname'>Voornaam</InputLabel>
						<Input
							required
							id='firstname'
							className='firstname-input'
							value={formValues.firstName}
							onChange={handleChange}
							name='firstName'
						/>
					</FormControl>
					<FormControl className='form-control name'>
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
				<FormControl fullwidth className='form-control'>
					<InputLabel htmlFor='lastname'>Achternaam</InputLabel>
					<Input
						required
						id='lastname'
						fullwidth
						className='form-input'
						value={formValues.lastName}
						onChange={handleChange}
						name='lastName'
					/>
				</FormControl>
				<div className='inline-container'>
					<FormControl className='form-control address'>
						<InputLabel htmlFor='zipCode'>Postcode</InputLabel>
						<Input
							required
							id='zipCode'
							className='zipCode-input'
							value={formValues.zipCode}
							onChange={handleChange}
							name='zipCode'
						/>
					</FormControl>
					<FormControl className='form-control address'>
						<InputLabel htmlFor='house-number'>Huisnummer</InputLabel>
						<Input
							required
							id='house-number'
							className='house-number-input'
							type='number'
							value={formValues.houseNumber}
							onChange={handleChange}
							name='houseNumber'
						/>
					</FormControl>
					<FormControl className='form-control address'>
						<InputLabel htmlFor='add-on'>toevoeging</InputLabel>
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
					<FormControl className='form-control street'>
						<InputLabel htmlFor='street'>Straat</InputLabel>
						<Input
							required
							id='street'
							className='street-input'
							value={formValues.street}
							onChange={handleChange}
							name='street'
						/>
					</FormControl>
					<FormControl className='form-control city'>
						<InputLabel htmlFor='city'>Plaats</InputLabel>
						<Input
							required
							id='city'
							className='city-input'
							value={formValues.city}
							onChange={handleChange}
							name='city'
						/>
					</FormControl>
				</div>
				<div className='inline-container'>
					<FormControl className='form-control birthdate'>
						<InputLabel htmlFor='birthdate' shrink={true}>
							Geboortedatum
						</InputLabel>
						<Input
							required
							id='birthdate'
							className='birthdate-input'
							type='date'
							min='1899-01-01'
							max='2021-10-25'
							placeholder='dd-mm-yyyy'
							value={formValues.birthdate}
							onChange={handleChange}
							name='birthdate'
						/>
					</FormControl>
					<FormControl className='form-control phone'>
						<InputLabel htmlFor='phone'>Telefoonnummer</InputLabel>
						<Input
							required
							id='phone'
							className='phone-input'
							type='tel'
							value={formValues.phoneNumber}
							onChange={handleChange}
							name='phoneNumber'
						/>
					</FormControl>
				</div>
				<FormControl fullwidth className='form-control'>
					<InputLabel htmlFor='email'>E-mailadres</InputLabel>
					<Input
						required
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
					control={<Checkbox color='success' required={true} />}
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
								en wil de e-mailnieuwsbrief ontvangen van{' '}
								<a
									href='https://meervoormamas.nl'
									rel='noreferrer'
									target='_blank'>
									meervoormamas.nl
								</a>
								, Chubb, Kinderboekerij en Lucardi. Kinderboekerij en Chubb
								mogen mij tevens telefonisch benaderen met een interessante
								aanbieding.
							</span>
						</div>
					}
					labelsize='14px'
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
