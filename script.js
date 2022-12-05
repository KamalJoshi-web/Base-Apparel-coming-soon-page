const mail = document.getElementById('mail');
const submit = document.getElementById('sub');
const error = document.getElementById('error');
const errorMassage =document.querySelector('.valid-email');
mail.addEventListener('keyup',(e)=>{
    values = e.target.value;
    return values;
})
submit.addEventListener('click',()=>{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values)){  
        error.style.display='none';
        mail.style.outline='1px solid hsla(0, 6%, 24%, 0.336)';
        errorMassage.style.display='none';
       mail.value=" "
        
    }
   else{
        error.style.display='initial';
        mail.style.outline='2px solid hsl(0, 93%, 68%)';
        errorMassage.style.display='block'
        
   } 
})
// alert("You have entered an invalid email address!")
//     return (false)