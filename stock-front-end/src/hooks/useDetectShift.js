import { useState, useEffect } from 'react'

const useDetectShift = () => {
    const [shiftHeld, setShiftHeld] = useState(false)
    const downHandler = ({ key }) => {
        if (key === 'Shift') {
            setShiftHeld(true)
        }
    }

    const upHandler = ({ key }) => {
        if (key === 'Shift') {
            setShiftHeld(false)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', downHandler)
        window.addEventListener('keyup', upHandler)
        return () => {
            window.removeEventListener('keydown', downHandler)
            window.removeEventListener('keyup', upHandler)
        }
    }, [])

    return { shiftHeld }
}

export default useDetectShift
