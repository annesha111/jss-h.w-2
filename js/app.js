 const icons = document.querySelector('.eye-icon')
 const input = document.querySelector('.from-input input')

 icons.addEventListener('click', function(){

  input.type == 'password' ? input.type = 'text': input.type ='password'

  icons.type == 'password' ?
   icons.innerHTML =`<i class="bi bi-eye-slash"></i>`:
   icons.innerHTML =`<i class="bi bi-eye"></i>`
   
 })

 input.addEventListener('keyup',function(){
    console.log(icons.classList);
    

    input.value.length > 5 ? 
    icons.classList.add('show') : 
    icons.classList.remove('show')

 })


 
const cursor = document.querySelector('cursor')
 const customMouseCursor = (event) =>{


    const{pageX: left, pageY:top}= event;


    console.log(top);

    
    cursor.style.top = top +'px'
    cursor.style.left = top +'px'
 }

window.addEventListener('mousemove',customMouseCursor)