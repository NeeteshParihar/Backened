
import {serve} from 'bun'   

serve({
    fetch(request){

        console.log(1 , request.url) ;
        const url = new URL(request.url) ;
        console.log('2' , url) ;


        if(url.pathname === '/'){
            return new Response("hello bun" , {status : 200}) ;
        }else {
            return new Response("404 not found" , {status : 404}) ;
        }

    },
    port : 5005 ,
    hostname : "localhost"


})


















