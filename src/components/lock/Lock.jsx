import React from 'react'
import { Button } from '../../components'
import './lock.css'

const Lock = ({ setLock }) => {

    const passwdInputId = 'password_input_text'
    var passwd

    const unLock = async () => {
        const cleanUp = () => {
            const controller = new AbortController()
            controller.abort()
        }

        passwd = document.getElementById(passwdInputId).value
        console.log("password", passwd)
        if (passwd === undefined || passwd === '') {
            alert("wrong password")
            return cleanUp
        }

        const controller = new AbortController()
        const res = await fetch(`https://34.31.39.182/passwords/${passwd}`, { 
            method: "GET",
            mode: 'cors', 
            signal: controller.signal,
        })
        if (res.status === 200) {
            setLock(false)
        }
        // const resJson = await res.json()

        return cleanUp
    }

    return (
        <div className='lock'>
            <div className='border-slicer'>
                <input id={passwdInputId} className='unlockInput' type='text' value='Enter Password' onChange={()=>{}} />
                <Button value="unlock" onClick={unLock} className="unLockBtn" id="unLockBtn" />
            </div>
        </div>
    )
}

export default Lock
