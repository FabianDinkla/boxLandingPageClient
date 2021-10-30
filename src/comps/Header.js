import PropTypes from 'prop-types'

const Header = ({ headerTitle, homeClass }) => {
	return (
		<>
			<header className={'App-header' + ' ' + homeClass}>
				<h1 className='App-title'>{headerTitle}</h1>
				<hr />
			</header>
		</>
	)
}

Header.propTypes = {
	headerTitle: PropTypes.string,
}

Header.defaultProps = {
	headerTitle: 'Gefeliciteerd met je cadeaupakket!',
}

export default Header
