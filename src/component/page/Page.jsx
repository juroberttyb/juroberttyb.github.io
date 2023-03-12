import React from 'react'
import { Outlet } from 'react-router-dom'

import './page.css'

const Page = ({header, content, img, pageName, imgUrl}) => {
  return (
    <div className={pageName+" page"}>
      <h1>{header}</h1>
      <p className="content">
        {content}
      </p>
      {
        img !== undefined
        ? 
        <p>
          <a href={imgUrl}><img className="image" src={img} alt="" /></a>
        </p>
        :
        undefined 
      }
      <Outlet context={{}} />
    </div>
  )

  // <Outlet /> paste whatever url is matching for child route
  // context passed obj to be received and used in child route
  // child route matching can receive context by using const obj = useOutletContext() imported from "react-router-dom"
  // 
  // useParams() can be used to receive parameter in url like /.../:id
  // eg: const { id } = useParams() imported from "react-router-dom"
  // 
  // useSearchParams() imported from "react-router-dom" can be used to receive search param in url
  // eg: given url /...?p=1
  // then by using const [searchParam, setSearchParam] = useSearchParams({ p:0 })
  // const pValue = searchParam.get("p")
  // we can then get pValue=1 which is p=1 in url search param
  //
  // useLocation() imported from "react-router-dom" can be used to get current url
}

export default Page