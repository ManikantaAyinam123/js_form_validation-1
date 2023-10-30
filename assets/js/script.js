function validate(){
  let k=validateform();
  if(k==9){
      const modal = document.getElementById("successModal");
      modal.style.display = "block";
  }
}
function validateform(){
 
  
var name=document.getElementById("tname").value;
var email=document.getElementById("exampleInputEmail1").value;
var password=document.getElementById("exampleInputPassword1").value;
var cpassword=document.getElementById("confirmPassword").value;
var PhoneNumber=document.getElementById("phonenumber").value;
var date=document.getElementById("dateValue").value;
var select1 = document.getElementById("country").value;
var male=document.getElementById("male");
var female=document.getElementById("female");
var other=document.getElementById("other");
var checkbox = document.getElementById("check1");
let c=0;





if (name ==="") {
document.getElementById('nameHelp').style.display = 'block';  
document.getElementById('tname').style.border= '1px solid red';
document.getElementById('nameHelp2').style.display = 'none';
c=c-1;

}
else if( !isNaN(name)){

document.getElementById('nameHelp2').style.display = 'block'; 
document.getElementById('nameHelp').style.display = 'none';  
document.getElementById('tname').style.border= '1px solid red';
c=c-1;

} 

else {
document.getElementById('nameHelp').style.display = 'none'; 
document.getElementById('nameHelp2').style.display = 'none'; 
document.getElementById('tname').style.border= '1px solid green';
c++;
console.log(c);

}



if(email==="")
{
document.getElementById('emailHelp').style.display = 'block'; 
document.getElementById('emailHelp2').style.display = 'none';
document.getElementById('exampleInputEmail1').style.border= '1px solid red'; 
c=c-1;

}
else if(!emailCheck(email)){
document.getElementById('emailHelp').style.display = 'none'; 
document.getElementById('emailHelp2').style.display = 'block';
document.getElementById('exampleInputEmail1').style.border= '1px solid red';
c=c-1;

}
else{
document.getElementById('emailHelp').style.display = 'none';
document.getElementById('emailHelp2').style.display = 'none'; 
document.getElementById('exampleInputEmail1').style.border= '1px solid green'; 
c++;
console.log(c);

}



if(password==="")
{
document.getElementById('PasswordHelp').style.display = 'block'; 
document.getElementById('PasswordHelp2').style.display = 'none';
document.getElementById('exampleInputPassword1').style.border= '1px solid red';
c=c-1; 

}
else if(!passwordCheck(password))
{
document.getElementById('PasswordHelp').style.display = 'none'; 
document.getElementById('PasswordHelp2').style.display = 'block';
document.getElementById('exampleInputPassword1').style.border= '1px solid red';
c=c-1; 


}
else{
document.getElementById('PasswordHelp').style.display = 'none';
document.getElementById('PasswordHelp2').style.display = 'none'; 
document.getElementById('exampleInputPassword1').style.border= '1px solid green';
var confirmpassword=document.getElementById("exampleInputPassword1").value;
c++;
console.log(c);

}




if (cpassword ==="") {
document.getElementById('cPasswordHelp').style.display = 'block';  
document.getElementById('confirmPassword').style.border= '1px solid red';
document.getElementById('cPasswordHelp2').style.display = 'none';
c=c-1;


}
else if( cpassword!=password){

document.getElementById('cPasswordHelp2').style.display = 'block'; 
document.getElementById('cPasswordHelp').style.display = 'none';  
document.getElementById('confirmPassword').style.border= '1px solid red';
c=c-1;

} 
else{
document.getElementById('cPasswordHelp2').style.display = 'none'; 
document.getElementById('cPasswordHelp').style.display = 'none'; 
document.getElementById('confirmPassword').style.border= '1px solid green';
c++;
console.log(c);
}





if(PhoneNumber==="")
{
document.getElementById('phoneNumberHelp').style.display = 'block'; 
document.getElementById('phoneNumberHelp2').style.display = 'none'; 
document.getElementById('phonenumber').style.border= '1px solid red';
c=c-1; 

}
else if(!phoneNumberCheck(PhoneNumber))
{
document.getElementById('phoneNumberHelp').style.display = 'none'; 
document.getElementById('phoneNumberHelp2').style.display = 'block'; 
document.getElementById('phonenumber').style.border= '1px solid red';
c=c-1; 

}
else{
document.getElementById('phoneNumberHelp').style.display = 'none'; 
document.getElementById('phoneNumberHelp2').style.display = 'none'; 
document.getElementById('phonenumber').style.border= '1px solid green';
c++; 
console.log(c);

}

if (date == null || date == '') {
document.getElementById('DateHelp').style.display = 'block'; 
document.getElementById('dateValue').style.border= '1px solid red'; 
c=c-1;

} 

else {
document.getElementById('DateHelp').style.display = 'none'; 
document.getElementById('dateValue').style.border= '1px solid green'; 
c++;
console.log(c);


}
if (select1 === "") 
{
  document.getElementById('countryHelp').style.display = 'block'; 
  country.style.border = "1px solid red";
  c=c-1;

} 
else 
{
 document.getElementById('countryHelp').style.display = 'none'; 
  country.style.border = "1px solid green"; 
  c++;
  console.log(c);

}
if (!male.checked && !female.checked && !other.checked) 
{
document.getElementById('GenderHelp').style.display = 'block';
c=c-1;
} else if ((male.checked && !female.checked && !other.checked) || 
   (!male.checked && female.checked && !other.checked) || 
   (!male.checked && !female.checked && other.checked)) {
document.getElementById('GenderHelp').style.display = 'none';
c++;
console.log(c);

} else {
document.getElementById('GenderHelp').style.display = 'none';
c=c-1;
console.log(c);


}
if (!checkbox.checked) {
document.getElementById('CheckboxHelp').style.display = 'block';
checkbox.style.border = '1px solid red';
c=c-1;
console.log(c);


} else {
document.getElementById('CheckboxHelp').style.display = 'none';
checkbox.style.border = '2px solid green';
c++;
console.log(c);

}
return c;

} 

function emailCheck(input) {
let emailReg = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
let valid = emailReg.test(input);
return valid;
}
function passwordCheck(input) {
let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
let valid = regex.test(input);
return valid;
}
function phoneNumberCheck(input){
let reg=/^[0-9]{10}$/;
let valid=reg.test(input);
return valid;
}

