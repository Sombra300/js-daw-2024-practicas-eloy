const div=document.getElementById('imagen')
const body=document.body
body.addEventListener('keydown', function(event){
    if(event.key =='F12'&& event.altKey){
        div.style.backgroundImage="url('https://picsum.photos/200/300')"
    }
})