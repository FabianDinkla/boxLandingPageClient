import { useState } from 'react'
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

const ExtraForm = ({ setSubmitted, setData }) => {
	const [formValues, setFormValues] = useState({
		kids: null,
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

	return (
		<div>
			<Form className='extra-form' onSubmit={handleSubmit}>
				<FormControl variant='standard' sx={{ minWidth: 300 }}>
					<InputLabel>Uit hoeveel kinderen bestaat je gezin?</InputLabel>
					<Select
						required
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid1day'
									required={formValues.kids >= 1}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid1month'
									required={formValues.kids >= 1}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid1year'
									required={formValues.kids >= 1}
									value={formValues.kid1year}
									onChange={handleChange}
									name='kid1year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid2day'
									required={formValues.kids >= 2}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid2month'
									required={formValues.kids >= 2}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid2year'
									required={formValues.kids >= 2}
									value={formValues.kid2year}
									onChange={handleChange}
									name='kid2year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid3day'
									required={formValues.kids >= 3}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid3month'
									required={formValues.kids >= 3}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid3year'
									required={formValues.kids >= 3}
									value={formValues.kid3year}
									onChange={handleChange}
									name='kid3year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid4day'
									required={formValues.kids >= 4}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid4month'
									required={formValues.kids >= 4}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid4year'
									required={formValues.kids >= 4}
									value={formValues.kid4year}
									onChange={handleChange}
									name='kid4year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid5day'
									required={formValues.kids >= 5}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid5month'
									required={formValues.kids >= 5}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid5year'
									required={formValues.kids >= 5}
									value={formValues.kid5year}
									onChange={handleChange}
									name='kid5year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='kid6day'
									required={formValues.kids >= 6}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='kid6month'
									required={formValues.kids >= 6}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='kid6year'
									required={formValues.kids >= 6}
									value={formValues.kid6year}
									onChange={handleChange}
									name='kid6year'>
									<MenuItem value={2000}>2000</MenuItem>
									<MenuItem value={2001}>2001</MenuItem>
									<MenuItem value={2002}>2002</MenuItem>
									<MenuItem value={2003}>2003</MenuItem>
									<MenuItem value={2004}>2004</MenuItem>
									<MenuItem value={2005}>2005</MenuItem>
									<MenuItem value={2006}>2006</MenuItem>
									<MenuItem value={2007}>2007</MenuItem>
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
					required
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Dag</InputLabel>
								<Select
									id='dueDateDay'
									required={formValues.pregnant === 'wel'}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Maand</InputLabel>
								<Select
									id='dueDateMonth'
									required={formValues.pregnant === 'wel'}
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
							<FormControl variant='standard' sx={{ minWidth: 150 }}>
								<InputLabel>Jaar</InputLabel>
								<Select
									id='dueDateYear'
									required={formValues.pregnant === 'wel'}
									value={formValues.dueDateYear}
									onChange={handleChange}
									name='dueDateYear'>
									<MenuItem value={2021}>2021</MenuItem>
									<MenuItem value={2022}>2022</MenuItem>
								</Select>
							</FormControl>
						</Col>
					</Row>
				) : (
					''
				)}
				<FormControl fullwidth className='form-control'>
					<input
						id='submit'
						fullwidth
						className='submit-button'
						type='submit'
						value='VERZENDEN'
					/>
				</FormControl>
			</Form>
		</div>
	)
}

export default ExtraForm
