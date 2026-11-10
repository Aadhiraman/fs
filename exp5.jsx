
import React, { useState } from "react";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [post, setPost] = useState("");
    const [posts, setPosts] = useState([]);

    function addPost() {
        if (username.trim() === "" || post.trim() === "") {
            alert("Enter username and post");
            return;
        }

        setPosts([
            {
                id: Date.now(),
                username: username,
                message: post,
                likes: 0
            },
            ...posts
        ]);

        setPost("");
    }

    function likePost(id) {
        setPosts(posts.map(p =>
            p.id === id ? { ...p, likes: p.likes + 1 } : p
        ));
    }

    function deletePost(id) {
        setPosts(posts.filter(p => p.id !== id));
    }

    return (
        <div className="container">

            <h1>My Microblog</h1>

            <div className="post-box">

                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <textarea
                    placeholder="What's happening?"
                    value={post}
                    onChange={e => setPost(e.target.value)}
                />

                <button onClick={addPost}>Post</button>

            </div>

            <h2>Recent Posts</h2>

            {posts.map(p => (
                <div className="post" key={p.id}>

                    <h3>@{p.username}</h3>

                    <p>{p.message}</p>

                    <button onClick={() => likePost(p.id)}>
                        Like ({p.likes})
                    </button>

                    <button
                        className="delete"
                        onClick={() => deletePost(p.id)}>
                        Delete
                    </button>

                </div>
            ))}

        </div>
    );
}

export default App;




// body {
//     font-family: Arial;
//     background: #f0f2f5;
// }

// .container {
//     width: 400px;
//     margin: 30px auto;
// }

// h1 {
//     text-align: center;
//     color: #1d9bf0;
// }

// .post-box, .post {
//     background: white;
//     padding: 15px;
//     margin-bottom: 15px;
//     border-radius: 10px;
// }

// input, textarea {
//     width: 95%;
//     padding: 10px;
//     margin-bottom: 10px;
//     border: 1px solid #ccc;
// }

// textarea {
//     height: 80px;
//     resize: vertical;
// }

// button {
//     background: #1d9bf0;
//     color: white;
//     border: none;
//     padding: 9px 15px;
//     margin-right: 8px;
//     cursor: pointer;
//     border-radius: 5px;
// }

// .delete {
//     background: red;
// }

// .post h3 {
//     color: #1d9bf0;
// }

// .post p {
//     font-size: 16px;
// }

