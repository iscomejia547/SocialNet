document.addEventListener('DOMContentLoaded', ()=>{
    var btn=document.querySelector('#menu-btn');
    var dialogback=document.querySelector('#dialog-back');
    var sidebar=document.querySelector('#sidebar');
    

    btn.onclick=function(){
        alert("toggled event");
        dialogback.classList.add('active');
        sidebar.classList.add('active');
        return false;
    }
    dialogback.onclick=function(){
        dialogback.classList.remove('active');
        sidebar.classList.remove('active');
        return false;
    }
}); 