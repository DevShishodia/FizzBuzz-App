const btn = document.querySelector('#button');

const fizzBuzz = () =>{
    document.getElementById('show_output').innerText = '';
    document.querySelector('#output').innerText = "";
    const input = document.querySelector('#input');
    let number = input.value;
      
      if(number == 0){
        document.getElementById('show_output').innerText = 'Invalid Input';
      }else{

    document.getElementById('show_output').innerText = `FizzBuzz Series upto ${number} :`;

    for(let i =1; i <= number; i++){
        let list = document.createElement('li');
        if(i % 3 == 0){
            if(i % 5 == 0){
                list.innerText = 'FizzBuzz';
                document.querySelector('#output').appendChild(list);
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
}
input.value ="";
}


btn.addEventListener('click',fizzBuzz);
