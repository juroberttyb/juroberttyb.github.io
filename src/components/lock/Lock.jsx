import React from 'react'
import { Button } from '../../components'
import './lock.css'

const Lock = ({ setLock }) => {

    const unLock = () => {
        setLock()
    }

    return (
        <div className='lock'>
            <input className='unlockInput' type='text' value='Enter Password' onChange={()=>{}} />
            <Button value="unlock" onClick={unLock} className="unLockBtn" id="unLockBtn" />
        </div>
    )
}

export default Lock
