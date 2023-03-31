import { useState, useEffect } from 'react'
import './topics.css'

const Topics = ({activeTopic, setActiveTopic}) => {

    console.log("render topic")

    const [topics, setTopics] = useState(undefined)

    useEffect(() => {
        const getAllTopics = async () => {
            const controller = new AbortController()
            const res = await fetch('https://rob.serveo.net/topics?count=6', { signal: controller.signal })
            const topics = await res.json()
            // console.log("topics", topics)

            const mapTopics = topics.map((t) => {
                // t.created_at = t.created_at.replace("T", " ").split('.')[0]

                const onClick = () => {
                    setActiveTopic(t)
                }

                return (
                    <img key={t._id} className="topic_photo" src={t.photoUrl} alt="" onClick={onClick} />
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
        // return () => {
        //     controller.abort()
        // }
    }, [activeTopic, setActiveTopic])

    return (
      <div className="topic">
          {topics}
      </div>
    )
}

export default Topics
