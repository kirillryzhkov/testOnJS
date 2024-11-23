
function task1(){
    let a = 3;
    let b = 'Привет';
    let aType = "Строка"
    let bType = "Строка"


    let task1Btn = document.querySelector('.task1__btn');

    task1Btn.onclick = function(){
        console.log(a + ":" + aType + ", " + b + ":" + bType);
    }
}
task1()

function task2(){    
    let task2Btn = document.querySelector('.task2__btn');
    task2Btn.onclick = function(){
        let input = document.querySelector('.task2__input')
        let value = input.value;
        // Тут возможно ошибка
        if(value.length > 0){
            alert(value)
        }
        else{
            alert("инпут пустой")
        }
    }
}
task2()

function task3(){    
    let checkbox = document.querySelector('.task3__chbx')
    checkbox.onclick = function(){
        let button = document.querySelector('.task3__btn')
        if (checkbox.checked === true){
            button.disabled = true;
            button.innerHTML = "Нажать нельзя";
        }
        else{
            button.disabled = false;
            button.innerHTML = "Нажми на меня";
        }
    }

}
task3()

function task4(){
        let button = document.querySelector('.task4__btn')
        button.onclick = function(){
            let num1 = Math.floor(Math.random()*100)
            let num2 = Math.floor(Math.random()*100)
            let num3 = Math.floor(Math.random()*100)
            let num4 = Math.floor(Math.random()*100)

            
            let password = ""+ num1 + num2 +num3 + num4 +""

            let input = document.querySelector('.task4__input')
            input.focus();

            input.value = password
        }
    }
task4()

function task5(){
    let button = document.querySelector('.task5__btn')
    button.onclick = function(){
        let input = document.querySelector('.task5__input')
        let result = document.querySelector('.task5__result')
        let value = input.value

         // Тут возможно ошибка
        result.innerHTML = parseInt(value, 2)
    }
}
task5()

function task6(){
    let arr = [1,2,3,4,5,6,7,8,9]
    let length = arr.length;

    let reversed = document.querySelector('.task6__reverseArr')
    let arrLength = document.querySelector('.task6__length')

    for (let i = arr.length; i>0; i--){
        reversed.innerHTML = reversed.innerHTML + i
    }
    arrLength.innerHTML = length
}
task6()


function task7(){
   let arr = [1,2,3,5,7,12,101,22,38,14,20,10,3,1,6]
   let input = document.querySelector('.task7__input')
   let button = document.querySelector('.task7__btn')

   button.onclick = function(){
        let value = parseInt(input.value)
        switch(arr.indexOf(value)){
            
            case -1:
                alert('Данного числа нет в массиве')
            break;
            default:
                alert('Данное число в массиве присутствует')
            break;
        }
   }

}
task7()


function task8(){
    // Тут возможно ошибка
    let squres = document.querySelector('.task8__item')
    let button = document.querySelector('.task8__btn')
    button.onclick = function(){
         let color = prompt("Введите название цвета: красный, синий, зеленый")
      
         switch(color){
             case "красный":
                  // Тут возможно ошибка
                squres.forEachOfAll(function(e){
                    // ya
                    e.style.background = "red"
                    // e.css.background = "red"
                })
             break;
             case "синий":
                  // Тут возможно ошибка
                squres.forEachOfAll(function(e){
                    // Тут возможно ошибка
                    e.style.background = "blue"
                })
            break;
            case "зеленый":
                 // Тут возможно ошибка
                squres.forEachOfAll(function(e){
                    // Тут возможно ошибка
                    e.style.background = "green"
                })
            break;
             default:
                console.log('такого цвета нету')
             break;
         }
    }
 
 }
 task8()
 

 function task9(){
    let items = document.querySelectorAll('.task9__item')
    items.forEach(function(element){
        element.onmouseover = function(){
            element.style.border = "1px solid red"
        }
        element.onmouseout = function(){
            element.style.border = "1px solid black"
        }
    })
    items.forEach(function(element){
        element.addEventListener('click', function(event){
            console.log(event.target)

            let item = element.querySelector('.task9__text')
            if(item.classList.contains('show-text')){
                item.classList.remove('show-text')
            }else{
                item.classList.add('show-text')
            }
        })
    })
  }
task9()



function task10(){
    let input1 = document.querySelector('.task10__input1')
    let input2 = document.querySelector('.task10__input2')
    let input1label = document.querySelector('.task10__label1')
    let input2label = document.querySelector('.task10__label2')
    input1label.addEventListener('click', ()=>{
        let input1val = input1.value
        let stringLetters = input1val.substring(input1val.length-1, input1val.length)
        console.log(stringLetters)
    })

    input2label.addEventListener('click', ()=>{
        let input2val = input2.value

        console.log(input2val % 2)
    })
  }
task10()


function task11(){
    let input = document.querySelector('.task11__input')
    let button = document.querySelector('.task11__btn')
    let list = document.querySelector('.task11__list')

    button.addEventListener('click', ()=>{
        let value = input.value
        let listItem = document.createElement('li')
        listItem.innerHTML = value
        list.appendChild(listItem)
        input.value = ''
    })
  }
task11()



function task12(){
    let сlock = document.querySelector('.task12__clock')
    let timer = document.querySelector('.task12__timer-body')
    let timerStartBtn = document.querySelector('.task12__btn-start')
    let timerStopBtn = document.querySelector('.task12__btn-stop')
    let alertBtn = document.querySelector('.task12__btn-alert')

   

    alertBtn.addEventListener('click', ()=>{
        setTimeout(()=>{
            alert('прошло 5 секунд с момента нажатия на кнопку')
        }, 5000)
    })

    setInterval(()=>{
        сlock.innerHTML = new Date().toLocaleTimeString()
    }, 1000)
    
    let interval
    let counter = 0

    timerStartBtn.addEventListener('click', ()=>{
        timer.innerHTML = counter
        interval = setInterval(()=>{
            counter = counter + 1
            timer.innerHTML = counter
        }, 1000)
    })
    timerStopBtn.addEventListener('click', ()=>{
         // Тут ошибка нету удаления интервала
        timer.innerHTML = ''
        counter = 0
        clearInterval(interval)
    })
}
task12()


function task13(){
    let inputName = document.querySelector('.task13__name')
    let inputMail = document.querySelector('.task13__mail')
    let inputPassword = document.querySelector('.task13__pass')

    let createUserBtn = document.querySelector('.task13__btn')

    let User = function(name, mail, password){
         // Тут возможно 3 ошибки в каждой строке
        this.name = name
        this.mail = mail
        this.password = password
    }
    createUserBtn.addEventListener('click', ()=>{
         // ya
        let newUser = new User(inputName.value, inputMail.value, inputPassword.value)
        console.log(newUser)

        document.querySelectorAll('.task13 input').forEach((e)=>{e.value = ""})
    })
}
task13()

