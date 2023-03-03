import React ,{useState, useEffect}from 'react'

const SpeechRecognision = window.speechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognision()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'


const SpeechText2 = () => {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)

    useEffect(() => {
      handleListening()
    }, [isListening])
    

    const handleListening = () => {
        if(isListening){
            mic.start()
            mic.onend = () => {
                console.log('continue ...')
                mic.start()
            }
        }
        else{
            mic.stop()
            mic.onend = () => {
                console.log('stoped')
            }
        }
        mic.onstart = () => {
            console.log('Mics is on')
        }

        mic.onresult = event => {
            const transcript = Array.from(event.results).map(result => result[0]).map(result=> result.transcript).join('')
            console.log(transcript)
            setNote(transcript)
            mic.onerror = event => {
                console.log(event.error)
            }
        }
    }

  return (
    <>
    <div>
        Message :{isListening ? "on" : "off" }<br/>
        <button onClick={() => setIsListening(prevState => !prevState)}>start/stop</button>
        <p>{note}</p>
    </div>
    </> 
  )
}

export default SpeechText2