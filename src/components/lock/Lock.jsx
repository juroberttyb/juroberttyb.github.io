import React from 'react'
import { Button } from '../../components'
import './lock.css'

const Lock = ({ activeTopic, setLock }) => {

    const passwdInputId = 'password_input_text'
    const passwdStatusId = 'password_status'

    const unLock = async () => {
        const cleanUp = () => {
            const controller = new AbortController()
            controller.abort()
        }

        const passwd = document.getElementById(passwdInputId).value
        const controller = new AbortController()
        const res = await fetch(`https://34.134.142.162/topics/${activeTopic._id}/login?password=${passwd}`, { 
            method: "GET",
            mode: 'cors', 
            signal: controller.signal,
        })
        if (res.status === 200) {
            setLock(false)
        } else {
            document.getElementById(passwdStatusId).innerHTML = 'wrong password'
        }
        // const resJson = await res.json()

        return cleanUp
    }

    return (
        <>
            <div className='lock'>
                <div className='border-slicer'>
                    <input id={passwdInputId} type='text' placeholder="Enter Password" onKeyDown={(e) => { if (e.key === 'Enter') unLock() }} />
                    <Button value="unlock" onClick={unLock} className="unLockBtn" id="unLockBtn" />
                    <div id={passwdStatusId}></div>
                </div>
            </div>
        </>
    )
}

export default Lock
