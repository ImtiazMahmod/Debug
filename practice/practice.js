const timeOut=() =>{
    console.log('setTimeOut');
setTimeout(()=>{
    console.log('hey this is setTimeOut');
},3500);

}

const addNum=()=>{
    const getNum = prompt('Enter a number');
    const result =parseFloat(getNum) + 200;
    alert(result);
}

const confirmLocation = ()=>{
    const confirM = confirm('Are you agree to see your location?')
    if(confirM){
      console.log(location.href);  
    }
    else{
        console.log(location.href);
    }
}