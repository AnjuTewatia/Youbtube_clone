
const video_details_div = document.getElementById("video_details")
const playVideo=()=>{

    let data = JSON.parse(localStorage.getItem("clicked_item"))||[];

const iframe = document.createElement("iframe");

iframe.src=`https://www.youtube.com/embed/${data.videoId}?autoplay=1&mute=1`;

iframe.width="100%"
iframe.height="100%"
iframe.setAttribute("allowfullscreen",true)
iframe.setAttribute("autoplay",true)

video_details_div.append(iframe);
 
 const title = data.title;

const channel_name = data.channelTitle;

const video_content_div=document.getElementById("video_content")

const showdetails=()=>{

    const detail= document.createElement("div")
const title_html= document.createElement("h4")
title_html.innerText= data.snippet.title
title_html.style.marginTop="10px"
title_html.style.marginLeft="30px"

const channel_html = document.createElement("h5")
channel_html.innerText= data.snippet.channelTitle
channel_html.style.marginTop="10px"
channel_html.style.marginLeft="30px"

detail.append(title_html,channel_html)

video_content_div.append(detail)


}
showdetails()
}

gotohome=()=>{
    window.location.href="index.html"
}