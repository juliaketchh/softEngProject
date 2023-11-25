
function comparePassword() {

    var pass1 = document.getElementById('userInput1');
    var pass2 = document.getElementById('userInput2')

        if(pass1.value != pass2.value) {
            alert('NOT THE SAME');
        } else {
        alert('Success');
         delay();
            
        }
     
       
}

function delay() {
    window.history.pushState("", "", "UserHome.html");
    window.location.reload();
}

function loginPassword () {

    var userPass = document.getElementById('userPass')
    var pass1 = document.getElementById('userInput1');

    if (userPass.value != pass1.value) {
        alert('Wrong Password');

    }

}
