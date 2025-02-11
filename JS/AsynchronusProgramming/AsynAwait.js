

function fetchPostLikes(){

    return new Promise(
        (res)=>{

            setTimeout(()=>{
                res("1000 likes")
             } , 4000)
        }
        
      
    )

}



function fetchPostComments(){

    return new Promise(
        (res)=>{

            setTimeout(()=>{
                res("1000 commnets")
            } , 3000)
        }      
      
    )
}



async function getLikesData(){ 

    try {

        const data = await fetchPostLikes() ;
        console.log(data) ;
        
    } catch (error) {
        
    }
}



async function getCommentsData(){
 

    try {

        const data = await fetchPostComments() ;
        console.log(data) ;
        
    } catch (error) {
        
    }

}



getLikesData() ;
console.log("hello 1") ;
getCommentsData() ;
console.log("hello 2") ;







