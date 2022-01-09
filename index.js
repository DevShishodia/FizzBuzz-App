const input = document.querySelector('#input');
const btn = document.querySelector('#button');



const fizzBuzz = (event) =>{
    const number = input.value;
     let classList = event.target.classList;
     console.log(classList)
     
     if(classList > 0){
         document.querySelector('#output').classList.add('.d-none');
     }
     classList.add('.d-none');
    document.getElementById('show_output').innerText = `FizzBuzz Series upto ${number} :`;
    
    for(let i =1; i <= number; i++){
        let list = document.createElement('li');
        if(i % 3 == 0){
            if(i % 5 == 0){
                list.innerText = 'FizzBuzz';
                document.querySelector('#output').appendChild(list);
                document.body.style.color = red;
            }else{
                list.innerText = 'Fizz';
                document.querySelector('#output').appendChild(list);
            }
        }else{
            if(i % 5 == 0){
                list.innerText = 'Buzz';
                document.querySelector('#output').appendChild(list);
            }else{
                list.innerText = i;
                document.querySelector('#output').appendChild(list);
            }
        }
    }
     
     input.innerText = "";
}

btn.addEventListener('click',fizzBuzz);