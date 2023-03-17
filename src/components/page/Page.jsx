import React from 'react'
import { Outlet } from 'react-router-dom'

import './page.css'

/*
  <Outlet /> 
    paste whatever url is matching for child route
    context passed obj to be received and used in child route
    child route matching can receive context by using const obj = useOutletContext() imported from "react-router-dom"
  
  useParams()
    can be used to receive parameter in url like /.../:id
    eg: const { id } = useParams() imported from "react-router-dom"
  
  useSearchParams()
    imported from "react-router-dom"
    can be used to receive search param in url
    eg: given url /...?p=1
    then by using const [searchParam, setSearchParam] = useSearchParams({ p:0 })
    const pValue = searchParam.get("p")
    we can then get pValue=1 which is p=1 in url search param
  
  useLocation()
    imported from "react-router-dom" can be used to get current url
*/

const Page = ({header, text, img, imgUrl}) => {
  return (
    <div className="page">
      <div className='content'> 
        <h1>
          { header }
        </h1>
        <div className='text'>
          { text } 
        </div>
      </div>
      <div className='image_block'>
        { img !== undefined ? <img className="image" src={img} alt="" /> : undefined }
      </div>
      <Outlet context={{}} />
    </div>
  )
}

export default Page