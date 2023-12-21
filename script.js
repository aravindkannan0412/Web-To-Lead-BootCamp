let capthachecked=false;

function beforesubmit(event){
    if(capthachecked){
        let output =document.querySelector('.outputdate');
        let input =document.querySelector('.inputdate');
        console.log(input.value);//string-->date(in locale en_IN)
    //put the value in output in output
    //pushing this again
        let formattedDate=new Date(input.value).toLocaleDateString("en-IN");
        output.value=formattedDate;
    }
    else{
        alert("Please check the reCAPTCHA box to submit the lead");
        event.preventDefault();

    }
//this is prevent submit behaviour
}

function timestamp()
 { 
    var response = document.getElementById("g-recaptcha-response"); 

    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);

        elems["ts"] = JSON.stringify(new Date().getTime());

        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
    }
} 

setInterval(timestamp, 500); 


function capthchasuccess(){
    capthachecked=true;
}