const BoxAnimation = ({ animationSRC }) => {
	return (
		<div className='box-animation-container'>
			<iframe
				src={animationSRC}
				className='box-frame'
				scrolling='no'
				frameBorder='0'
				loading='lazy'
				width='900px'
				title='boxAnimation'
				height='641px'></iframe>
		</div>
	)
}

export default BoxAnimation
