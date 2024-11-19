import Equalizer from './components/Equalizer/Equalizer'
import AudioTitle from './components/AudioTitle/AudioTitle'
import ControlPanel from './components/ControlPanel/ControlPanel'
import AudioTag from './components/AudioTag/AudioTag'
import './musicPlayer.css'

const MusicPlayer = () => {

    return (
        <div className='musicPlayerContainer'>
            <AudioTitle/>
            <Equalizer/>
            <ControlPanel/>
            <AudioTag/>
        </div>
    )
}

export default MusicPlayer