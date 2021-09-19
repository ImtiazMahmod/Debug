function check(){
    const emailId = document.getElementById('emailId').value;
    const messege = document.getElementById('messege');
    if(emailId){
        const checker = /^\w*(\-\w)?(\.\w*)?@\w*(-\w*)?\.\w{2,3}(\.\w{2,3})?$/;
        const result = checker.test(emailId);
        if(result){
            messege.innerHTML =`
            <h3 class='mess'>Ok valid email</h3>
            `
        }
        else{messege.innerHTML =`
        <h3 class='messDanger'>hey give valid email</h3>
        `           
        }
    }

}