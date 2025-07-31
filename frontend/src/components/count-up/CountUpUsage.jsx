import React from 'react'
import CountUp from './CountUp'

export default function CountUpUsage() {
    return (
        <>
            <CountUp
                from={0}
                to={90}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
            />
        </>
    )
}
