document.addEventListener('DOMContentLoaded', function() 
{
    document.querySelector('label[for="chk"').addEventListener('click', function() 
    {
        document.querySelector('.textlable').style.opacity = '0';
        document.querySelector('.main').classList.add('expanded'); 
        setTimeout(function() { window.location.href = 'Pages/Dashboard.html'; }, 600);  
    }); 
}); 

window.addEventListener('load', function() {
    document.querySelector('.textlabel').style.opacity = 1;
});

function openTab(evt, tabName) {
   var i, tabcontent, tablinks;
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
}