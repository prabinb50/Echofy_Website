import React from 'react'
import CountUp from './CountUp'

export default function CountUpUsageForOceanCleaning() {
    return (
        <>
            <CountUp
                from={0}
                to={80}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
            />
        </>
    )
}
