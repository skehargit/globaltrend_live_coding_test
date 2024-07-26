
const popup= document.getElementById('popup')
const hidepopup=()=>{
    if(popup.style.display=='flex'){
        popup.style.display='none'
    }
}
const openPopup = (_src)=>{
    if(popup.style.display=='none'){
        popup.style.display='flex'
        // console.log(popup.childNodes)
        popup.childNodes[3].src=_src
        console.log(popup)
    }else{
        popup.style.display='none'
    }

}