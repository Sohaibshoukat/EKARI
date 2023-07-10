import React, { useState, useEffect } from "react"
import style from "./style.module.scss"

const Timer2 = () => {
    const [timeRemaining, setTimeRemaining] = useState({
        days: 30,
        hours: 10,
        minutes: 6,
        seconds: 60,
    })

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                const { days, hours, minutes, seconds } = prevTime

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval)
                    return prevTime
                }

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            return {
                                days: days - 1,
                                hours: 23,
                                minutes: 59,
                                seconds: 59,
                            }
                        }
                        return {
                            days,
                            hours: hours - 1,
                            minutes: 59,
                            seconds: 59,
                        }
                    }
                    return {
                        days,
                        hours,
                        minutes: minutes - 1,
                        seconds: 59,
                    }
                }

                return {
                    days,
                    hours,
                    minutes,
                    seconds: seconds - 1,
                }
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const { days, hours, minutes, seconds } = timeRemaining

    return (
        <div className={style.Time}>
            <h2>{days}</h2> 
            <p>days</p> 
            <h2>{hours}</h2> 
            <p>hours</p>
            <h2>{minutes}</h2> 
            <p>minutes</p> 
            <h2>{seconds}</h2>
            <p>seconds</p>
        </div>
    )
}

export default Timer2
