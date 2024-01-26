const apiUrl = "http://localhost:8080/api"

export const fetchComments = async (characterId) => {
    try {
        const response = await fetch(`${apiUrl}/comments/${characterId}`)
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

export const makeComments = async (comment) => {
    try {
        const response = await fetch(`${apiUrl}/comments`, {
            method: 'POST',
            body: JSON.stringify({
                name: comment.name,
                characterId: comment.characterId,
                description: comment.description
            })
        })
        const data = await response.json()
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}

export const commentUpdate = async (commentId, comment) => {
    try {
        const res = await fetch(`${apiUrl}/comments/${commentId}`, {
            method: 'PUT',
            body: JSON.stringify(comment)
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}

export const deleteComment =async (commentId) => {
    try {
        const res = await fetch(`${apiUrl}/comments/${commentId}`, {
            method: "DELETE",
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error(error);
    }
}
