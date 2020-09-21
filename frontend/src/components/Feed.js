import React, { useEffect, useState } from 'react'
import '../css/Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import db from '../Firebase/Firebase'

function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const unsubscribe = db.collection('posts').orderBy('timestamp', 'desc').onSnapshot((snapshot) =>

            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )

        )
        return () => {
            unsubscribe();
        }
    }, [])



    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />


            {posts.map((post) => (
                <Post
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))}

            {/* // <Post
            //     profilePic=""
            //     message="wow this works"
            //     timestamp="21/09/2020"
            //     username="Hiroshi"
            //     image="https://wallpaperaccess.com/full/87215.jpg"
            // /> */}



        </div>
    )
}

export default Feed
