const btnE1 = document.getElementById("btn");
const birthdayE1e = document.getElementById("birthday");
const resultEle = document.getElementById("result");

function calAge(){
    const birthdaValue = birthdayE1e.value;
    if(birthdaValue===""){
        alert("Please enter your birthday");
    }else{
        const age = getAge(birthdaValue);
        resultEle.innerText='Your age is '+age+' old';

    }
}

function getAge(birthdaValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdaValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    return age;
}

btnE1.addEventListener("click", calAge);