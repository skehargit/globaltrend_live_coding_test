const hamburger = document.getElementById('hamburger')
        const hiddenMneu= document.getElementById('hiddenMneu');
        const showMenu = ()=>{
            if(hiddenMneu.style.display=='none'){
                hiddenMneu.style.display='flex'
            }else{
                hiddenMneu.style.display='none'
            }

        }