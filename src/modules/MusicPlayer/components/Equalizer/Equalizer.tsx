import useEqualizer from '../../hooks/useEqualizer'

const Equalizer = () => {

    const { stateHeightBar } = useEqualizer()
    
    return (
        <div className='equalizerContainer'>
            {stateHeightBar.map((el, i) => {
                return <span className='bar' key={i} style={{height: el.toString() + 'px'}}></span>
            })}                
        </div>
    )
}

export default Equalizer