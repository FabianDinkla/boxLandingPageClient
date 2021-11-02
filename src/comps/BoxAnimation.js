const BoxAnimation = ({ animationSRC }) => {
	return (
		<div className='box-animation-container'>
			<iframe
				src={animationSRC}
				className='box-frame'
				scrolling='no'
				frameBorder='0'
				loading='eager'
				width='1000px'
				title='boxAnimation'
				overflow='visible'
				height='750px'></iframe>
		</div>
	)
}

export default BoxAnimation
