import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ExtraForm = ({ setSubmitted, setData, submitted }) => {
	const [formValues, setFormValues] = useState({
		kids: '',
		pregnant: '',
		kid1day: '',
		kid1month: '',
		kid1year: '',
		kid2day: '',
		kid2month: '',
		kid2year: '',
		kid3day: '',
		kid3month: '',
		kid3year: '',
		kid4day: '',
		kid4month: '',
		kid4year: '',
		kid5day: '',
		kid5month: '',
		kid5year: '',
		kid6day: '',
		kid6month: '',
		kid6year: '',
		dueDateDay: '',
		dueDateMonth: '',
		dueDateYear: '',
	})

	const [errorMessage, setErrorMessage] = useState('')
	const [displayError, setDisplayError] = useState('none')

	const handleChange = (e) => {
		e.preventDefault()
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (typeof formValues.kids !== 'number' || !formValues.pregnant) {
			setErrorMessage('Er zijn 1 of meer verplichte velden niet ingevuld!')
			setDisplayError('block')
		} else if (
			formValues.pregnant === 'wel' &&
			(!formValues.dueDateYear ||
				!formValues.dueDateMonth ||
				!formValues.dueDateDay)
		) {
			setErrorMessage('Er is geen uitrekendatum ingevuld!')
			setDisplayError('block')
		} else if (
			(formValues.kids >= 1 &&
				(!formValues.kid1day ||
					!formValues.kid1month ||
					!formValues.kid1year)) ||
			(formValues.kids >= 2 &&
				(!formValues.kid2day ||
					!formValues.kid2month ||
					!formValues.kid2year)) ||
			(formValues.kids >= 3 &&
				(!formValues.kid3day ||
					!formValues.kid3month ||
					!formValues.kid3year)) ||
			(formValues.kids >= 4 &&
				(!formValues.kid4day ||
					!formValues.kid4month ||
					!formValues.kid4year)) ||
			(formValues.kids >= 5 &&
				(!formValues.kid5day ||
					!formValues.kid5month ||
					!formValues.kid5year)) ||
			(formValues.kids >= 6 &&
				(!formValues.kid6day || !formValues.kid6month || !formValues.kid6year))
		) {
			setErrorMessage(
				'Er zijn niet even veel geboortedata als kinderen ingevuld!'
			)
			setDisplayError('block')
		} else if (
			formValues.pregnant === 'wel' &&
			compareDate(
				{
					day: formValues.dueDateDay,
					month: formValues.dueDateMonth,
					year: formValues.dueDateYear,
				},
				today
			)
		) {
			setErrorMessage('De uitrekendatum mag niet eerder zijn dan vandaag!')
			setDisplayError('block')
		} else {
			setDisplayError('none')
			setErrorMessage('')
			setData(formValues)
			setSubmitted(true)
		}
	}

	const date = new Date()
	const currentYear = date.getFullYear()
	const nextYear = currentYear + 1
	let mm = date.getMonth() + 1
	let dd = date.getDate()

	if (dd < 10) {
		dd = '0' + dd
	}

	if (mm < 10) {
		mm = '0' + mm
	}

	const today = { day: dd, month: mm, year: currentYear }

	const compareDate = (dueDate, todayDate) => {
		const dueDateInstance = new Date(dueDate.year, dueDate.month, dueDate.day)
		const todayDateInstance = new Date(
			todayDate.year,
			todayDate.month,
			todayDate.day
		)
		if (dueDateInstance < todayDateInstance) {
			return true
		} else {
			return false
		}
	}

	return (
		<div>
			<Form className='extra-form' onSubmit={handleSubmit}>
				<FormControl variant='standard' sx={{ minWidth: 300 }}>
					<InputLabel>Uit hoeveel kinderen bestaat je gezin?</InputLabel>
					<Select
						id='numberOfKids'
						name='kids'
						value={formValues.kids}
						onChange={handleChange}>
						<MenuItem value={0}>Ik heb geen kinderen</MenuItem>
						<MenuItem value={1}>1 kind</MenuItem>
						<MenuItem value={2}>2 kinderen</MenuItem>
						<MenuItem value={3}>3 kinderen</MenuItem>
						<MenuItem value={4}>4 kinderen</MenuItem>
						<MenuItem value={5}>5 kinderen</MenuItem>
						<MenuItem value={6}>6 kinderen</MenuItem>
					</Select>
				</FormControl>
				{formValues.kids >= 1 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 1
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid1day'
									value={formValues.kid1day}
									onChange={handleChange}
									name='kid1day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid1month'
									value={formValues.kid1month}
									onChange={handleChange}
									name='kid1month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid1year'
									value={formValues.kid1year}
									onChange={handleChange}
									name='kid1year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				{formValues.kids >= 2 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 2
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid2day'
									value={formValues.kid2day}
									onChange={handleChange}
									name='kid2day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid2month'
									value={formValues.kid2month}
									onChange={handleChange}
									name='kid2month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid2year'
									value={formValues.kid2year}
									onChange={handleChange}
									name='kid2year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				{formValues.kids >= 3 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 3
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid3day'
									value={formValues.kid3day}
									onChange={handleChange}
									name='kid3day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid3month'
									value={formValues.kid3month}
									onChange={handleChange}
									name='kid3month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid3year'
									value={formValues.kid3year}
									onChange={handleChange}
									name='kid3year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				{formValues.kids >= 4 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 4
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid4day'
									value={formValues.kid4day}
									onChange={handleChange}
									name='kid4day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid4month'
									value={formValues.kid4month}
									onChange={handleChange}
									name='kid4month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid4year'
									value={formValues.kid4year}
									onChange={handleChange}
									name='kid4year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				{formValues.kids >= 5 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 5
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid5day'
									value={formValues.kid5day}
									onChange={handleChange}
									name='kid5day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid5month'
									value={formValues.kid5month}
									onChange={handleChange}
									name='kid5month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid5year'
									value={formValues.kid5year}
									onChange={handleChange}
									name='kid5year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				{formValues.kids >= 6 ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Geboortedatum kind 6
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid6day'
									value={formValues.kid6day}
									onChange={handleChange}
									name='kid6day'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid6month'
									value={formValues.kid6month}
									onChange={handleChange}
									name='kid6month'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid6year'
									value={formValues.kid6year}
									onChange={handleChange}
									name='kid6year'>
									<MenuItem value={2008}>2008</MenuItem>
									<MenuItem value={2009}>2009</MenuItem>
									<MenuItem value={2010}>2010</MenuItem>
									<MenuItem value={2011}>2011</MenuItem>
									<MenuItem value={2012}>2012</MenuItem>
									<MenuItem value={2013}>2013</MenuItem>
									<MenuItem value={2014}>2014</MenuItem>
									<MenuItem value={2015}>2015</MenuItem>
									<MenuItem value={2016}>2016</MenuItem>
									<MenuItem value={2017}>2017</MenuItem>
									<MenuItem value={2018}>2018</MenuItem>
									<MenuItem value={2019}>2019</MenuItem>
									<MenuItem value={2020}>2020</MenuItem>
									<MenuItem value={2021}>2021</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				<RadioGroup
					className='inline-container radio-extra-info'
					value={formValues.pregnant}
					onChange={handleChange}
					name='pregnant'>
					<FormControlLabel
						value='wel'
						control={<Radio color='success' />}
						label='Ik ben zwanger'
					/>

					<FormControlLabel
						value='niet'
						control={<Radio color='success' />}
						label='Ik ben niet zwanger'
					/>
				</RadioGroup>
				{formValues.pregnant === 'wel' ? (
					<Row>
						<label style={{ marginTop: '20px', color: 'gray' }}>
							Wat is je uitrekendatum?
						</label>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='dueDateDay'
									value={formValues.dueDateDay}
									onChange={handleChange}
									name='dueDateDay'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
									<MenuItem value={13}>13</MenuItem>
									<MenuItem value={14}>14</MenuItem>
									<MenuItem value={15}>15</MenuItem>
									<MenuItem value={16}>16</MenuItem>
									<MenuItem value={17}>17</MenuItem>
									<MenuItem value={18}>18</MenuItem>
									<MenuItem value={19}>19</MenuItem>
									<MenuItem value={20}>20</MenuItem>
									<MenuItem value={21}>21</MenuItem>
									<MenuItem value={22}>22</MenuItem>
									<MenuItem value={23}>23</MenuItem>
									<MenuItem value={24}>24</MenuItem>
									<MenuItem value={25}>25</MenuItem>
									<MenuItem value={26}>26</MenuItem>
									<MenuItem value={27}>27</MenuItem>
									<MenuItem value={28}>28</MenuItem>
									<MenuItem value={29}>29</MenuItem>
									<MenuItem value={30}>30</MenuItem>
									<MenuItem value={31}>31</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='dueDateMonth'
									value={formValues.dueDateMonth}
									onChange={handleChange}
									name='dueDateMonth'>
									<MenuItem value={1}>1</MenuItem>
									<MenuItem value={2}>2</MenuItem>
									<MenuItem value={3}>3</MenuItem>
									<MenuItem value={4}>4</MenuItem>
									<MenuItem value={5}>5</MenuItem>
									<MenuItem value={6}>6</MenuItem>
									<MenuItem value={7}>7</MenuItem>
									<MenuItem value={8}>8</MenuItem>
									<MenuItem value={9}>9</MenuItem>
									<MenuItem value={10}>10</MenuItem>
									<MenuItem value={11}>11</MenuItem>
									<MenuItem value={12}>12</MenuItem>
								</Select>
							</FormControl>
						</Col>
						<Col>
							<FormControl variant='standard' sx={{ minWidth: 140 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='dueDateYear'
									value={formValues.dueDateYear}
									onChange={handleChange}
									name='dueDateYear'>
									<MenuItem value={currentYear}>{currentYear}</MenuItem>
									<MenuItem value={nextYear}>{nextYear}</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				<p
					className='errorMessage-extra'
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
						value={submitted ? 'VERZENDEN...' : 'VERZENDEN'}
					/>
				</FormControl>
			</Form>
		</div>
	)
}

export default ExtraForm
