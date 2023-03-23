import { useState, useEffect } from 'react'
import './topics.css'

const Topics = ({activeTopic, setActiveTopic}) => {

  const [topics, setTopics] = useState(undefined)
  
  useEffect(() => {
    const getAllTopics = async () => {
        const res = await fetch('http://localhost:3001/topics?count=6')
        const topics = await res.json()
        // console.log("topics", topics)

        const mapTopics = topics.map((t) => {
            // t.created_at = t.created_at.replace("T", " ").split('.')[0]

            return (
                // <li 
                //     key={`${t._id}`} 
                //     className="topic_item"
                // >
                <img key={t._id} className="topic_photo" src={t.photoUrl} alt="" />
                /* </li> */
            )
        })
        setTopics(mapTopics)

        if (activeTopic === undefined && topics.length > 0) {
            setActiveTopic(topics[0])
        }
        
        // const chatroom = document.getElementById("chatroom");
        // chatroom.scrollTop = chatroom.scrollHeight;
    }

    getAllTopics()
  })

  return (
    <div className="topic">
        {topics}
    </div>
  )
}

export default Topics
