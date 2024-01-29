import { useEffect, useState } from "react";
import { fetchComments, makeComments, commentUpdate, deleteComment } from "./fetchingcomments";
import { useParams } from "react-router-dom";


export default function Comments() {
    const {characterId} = useParams()

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const [allComments, setAllComments] = useState()

    // console.log(characterId);

    useEffect(() => {
        const fetchData = async () => {
          const data = await fetchComments(characterId);
          setAllComments(data)
        }
        fetchData()
      }, [])
     

    const submitHandler = (event) => {
        event.preventDefault();
        async function createComment() {
            const response = { name, description, characterId }
            const data = await makeComments(response)
            const results = await fetchComments(characterId)
            setAllComments(results)
            return data
        }

        async function update() {
            try {
                const response = { name, description }
                const data = await commentUpdate(response, { characterId })
                const results = await fetchComments(characterId)
                setAllComments(results)
                return data
            } catch (error) {
                console.error(error);
            }
        }
        async function commentdelete({ characterId }) {
            try {
                await deleteComment({ characterId })
            } catch (error) {
                console.error(error);
            }
        }
        createComment();
        update();
        commentdelete
        setName('');
        setDescription('');
    }
    return (
        <>
            <h2>
                Tell us what you think about this character!
            </h2>
            <form className="commentForm" onSubmit={submitHandler}>
                <label>
                    Name:
                    <input
                        placeholder="name"
                        value={name}
                        onChange={(event) => { setName(event.target.value) }}
                    />
                </label>
                <br />
                <label>
                    Comment:
                    <input
                        placeholder="type comment here"
                        value={description}
                        onChange={(event) => { setDescription(event.target.value) }}
                    />
                </label>
                <br />
                <button type="submit">Submit Comment</button>
            </form>
            <div>
                {allComments && allComments.map((comment) => {
                    return (
                        <>
                            <div>
                                <h2>{comment.name}</h2>
                                <p>{comment.description}</p>
                                <button type="submit">Update</button>
                            </div>
                        </>
                    )
                })}

            </div>
        </>
    )
}   