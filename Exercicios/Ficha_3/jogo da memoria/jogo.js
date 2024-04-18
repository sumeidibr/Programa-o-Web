const game = document.getElementById('jogo');

let a = null;
let b = null;

//let card = document.createElement('div');
//card.setAttribute('class', 'card');
//game.appendChild(card);

const array = ["red", "green", "yellow", "blue",     
 "yellow", "blue", "white", "pink", 
  "red", "green", "purple", "orange", 
   "purple", "orange", "pink", "white"]

   for(let i = 0;  i < array.length; i++) {
    const cor = array[i];
    let card = document.createElement('div');
    card.setAttribute('class', 'card close');
    card.style.backgroundColor = cor
    card.setAttribute('id', i )

//
    card.addEventListener('click',  function(){
       
        if (a==null){
            card.setAttribute('class', 'card');
            a = card
        } else {
                if(b == null && a.id != card.id ){
                        card.setAttribute('class', 'card');
                    b = card
                    if(a.style.backgroundColor == b.style.backgroundColor){
                        a=b=null;
                    }else{
        
                        setTimeout(()=> {
                            a.setAttribute('class', 'card close');
                        b.setAttribute('class', 'card close');
        
                        a=b=null;
                        },1000)
                        
                    }
                }



           

        }

       
    })          
    console.log(a);
    console.log(b);
    game.appendChild(card);
   }