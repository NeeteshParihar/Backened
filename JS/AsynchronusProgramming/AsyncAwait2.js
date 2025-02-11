
function fetchPostComments() {
    return new Promise(
        (res) => {
            setTimeout(
                () => {
                    res("1000 likes")
                }
                , 2000
            )
        }
    )
}

function fetchPostLikes() {
    return new Promise(
        (res) => {
            setTimeout(
                () => {
                    res("1000 comments")
                }
                , 3000
            )
        }
    )
}


async function getBlogs() { 

    try {

        const [likes, comments] = await Promise.all(
            [fetchPostComments(), fetchPostLikes()]
        )

        console.log(likes);
        console.log(comments);

    } catch (error) {
        console.log("buddy there is some error")

    }
} 


getBlogs() ;
