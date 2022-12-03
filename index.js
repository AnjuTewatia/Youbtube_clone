

let menuIcon=document.querySelector(".menu-icon")
let sidebar=document.querySelector(".sidebar")


menuIcon.onclick=()=>{
    sidebar.classList.toggle("small-sidebar");
}

// ****************************************vide0*********************************
const api_key=`AIzaSyDEoIWJYu3fYNIAmQoKMGj0ILjarqRK5-Y`

const container_div=document.getElementById('container')

const searchVideos = async () => {
    try{
       const query=document.getElementById("query").value;
       const res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=${api_key}`);
       const data= await res.json()

       const actual_data=data.items

       appendVideos(actual_data)

    }
    catch(error){
        console.log("error:",error);
    }


};

    const appendVideos=(data) =>{
        container_div.innerHTML=null;
        document.getElementById("main").innerHTML=null;
        data.forEach( ({snippet,id}) => {
            const title=snippet.title;
            const videoId=id.videoId;
            const thumbnail=snippet.thumbnails.high.url;
            const channel_name=snippet.channelTitle;
            const div=document.createElement('div')
            const img=document.createElement('img')
            img.src=thumbnail
            const title_html=document.createElement("h4")
            title_html.innerText=title
            const channel_html=document.createElement('h5');
            channel_html.innerText=channel_name;


// ****************************

            let data={
                videoId,
                snippet,

            };
            console.log(data)

            div.onclick =()=>{
                storeClickedvideo(data);
            };
            div.append(img,title_html,channel_html)

            container_div.append(div);

        })

    }
// *************************************************

     function storeClickedvideo(data){

        localStorage.setItem("clicked_item",JSON.stringify(data))
        window.location.href="video.html"
    }

    let main=document.getElementById("main")
    const popularVideos=async()=>{

        try{
            const res=await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=US&key=${api_key}`);

            const {items} =await res .json()
            let data=items;
            console.log(data)
            popularVideo(data)
        }
        catch(error)
        {
            console.log("error",error)
        }

            
        }

        window.addEventListener('load',()=>{
            let query=document.getElementById("query").value

            if(query!=""){
                searchVideos()
            }else{
                popularVideos()
            }
        })
        let popularVideo=(data) =>{
            document.getElementById("main").innerHTML=null;
            data.forEach(( {snippet,id} ) => {
        
                const title = snippet.title;
                const videoId= id;
                const thumbnail = snippet.thumbnails.high.url;
                const channel_name = snippet.channelTitle;
                const div = document.createElement("div")
                const img = document.createElement("img")
                img.src = thumbnail
                const title_html= document.createElement("h4")
                title_html.innerText= title
                title_html.style.marginTop="10px"
        
        
                const channel_html = document.createElement("h5")
                channel_html.innerText= channel_name
                channel_html.style.marginTop="10px"
                
        
                let data = {
                videoId,
                snippet,
                };
                console.log(data)
                div.onclick=()=>{
                
                    storeClickedvideo(data)
                };
                
                div.append(img,title_html,channel_html)
                
                document.getElementById("main").append(div)
                    });
                };
                function storeClickedvideo(data){
                localStorage.setItem("clicked_item",JSON.stringify(data))
                
                window.location.href="video.html"
                
                }