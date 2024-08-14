function validateForm(){
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value;
    const phone= document.getElementById('phone').value;
    const address= document.getElementById('address').value;
    const errorMessage = document.getElementById('error-message');
    if(!name || !email || !phone || !address){
        alert('All field are required');
        return false;
    }
    errorMessage.textContent = '';
    return true;

}