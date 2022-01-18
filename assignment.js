function check_multiple_methods(){
    if(regx_name() && regx_email() && regx_website() && regx_image() && check()){
        addition_of_inputs();
        resetform();
        return true;
    }else{
        return false;
    }
}

function resetform(){
    document.getElementById("myform").reset();
}

function check(){
    var name = document.getElementById("check_name");
    var email = document.getElementById("check_email");
    var website = document.getElementById("check_website");
    var image = document.getElementById("check_image");
    var a = document.getElementById('check_male').checked;
    var b = document.getElementById('check_female').checked;
    var c = document.getElementById('check_box1').checked;
    var d = document.getElementById('check_box2').checked;
    var e = document.getElementById('check_box3').checked;

    if(name.value=="" || email.value=="" || website.value=="" || image.value==""){
        return false;
    }else{
        if(a || b){
            if(c || d || e){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
}

function regx_name(){
    var ans = document.getElementById("check_name").value;
    var regx = /[A-Za-z]+/;
    if(regx.test(ans)){
        document.getElementById("id_name").innerHTML = "Valid";
        document.getElementById("id_name").style.visibility = "visible";
        document.getElementById("id_name").style.color = "green";
        document.getElementById("check_name").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("id_name").innerHTML = "Invalid";
        document.getElementById("id_name").style.visibility = "visible";
        document.getElementById("id_name").style.color = "red";
        document.getElementById("check_name").style.border = "2px solid red";
        return false;
    }
}

function regx_email(){
    var ans = document.getElementById("check_email").value;
    var regx = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    if(regx.test(ans)){
        document.getElementById("id_email").innerHTML = "Valid";
        document.getElementById("id_email").style.visibility = "visible";
        document.getElementById("id_email").style.color = "green";
        document.getElementById("check_email").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("id_email").innerHTML = "Invalid";
        document.getElementById("id_email").style.visibility = "visible";
        document.getElementById("id_email").style.color = "red";
        document.getElementById("check_email").style.border = "2px solid red";
        return false;
    }
}

function regx_website(){
    var ans = document.getElementById("check_website").value;
    var regx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if(regx.test(ans)){
        document.getElementById("id_website").innerHTML = "Valid";
        document.getElementById("id_website").style.visibility = "visible";
        document.getElementById("id_website").style.color = "green";
        document.getElementById("check_website").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("id_website").innerHTML = "Invalid";
        document.getElementById("id_website").style.visibility = "visible";
        document.getElementById("id_website").style.color = "red";
        document.getElementById("check_website").style.border = "2px solid red";
        return false;
    }
}

function regx_image(){
    var ans = document.getElementById("check_image").value;
    var regx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if(regx.test(ans)){
        document.getElementById("id_image").innerHTML = "Valid";
        document.getElementById("id_image").style.visibility = "visible";
        document.getElementById("id_image").style.color = "green";
        document.getElementById("check_image").style.border = "2px solid green";
        return true;
    }else{
        document.getElementById("id_image").innerHTML = "Invalid";
        document.getElementById("id_image").style.visibility = "visible";
        document.getElementById("id_image").style.color = "red";
        document.getElementById("check_image").style.border = "2px solid red";
        return false;
    }
}

function addition_of_inputs(){

    console.log();

    var ans = "";

    var name = document.getElementById("check_name").value;
    ans += name + "<br/>";

    var gender = "";
    if(document.getElementById("check_male").checked){
        gender = document.getElementById("check_male").value;
    }
    if(document.getElementById("check_female").checked){
        gender = document.getElementById("check_female").value;
    }
    ans += gender + "<br/>";

    var email = document.getElementById("check_email").value;
    ans += email + "<br/>";

    var website = document.getElementById("check_website").value;   // .substr(0,256)
    ans += `<a href="${website}" target = "_blank">${website}</a>` + "<br/>";

    var skills = "";
    var arr = document.getElementsByName("check_check");
    for(var i=0;i<arr.length;i++){
        if(arr[i].checked){
            skills += arr[i].value + ", ";
        }
    }
    skills = skills.substr(0, skills.length-2);
    ans += skills + "<br/>";

    var image = document.getElementById("check_image").value;
    var table=`<tr class="fade-in">
                        <td>${ans}</td>
                       <td>
         <img class="fade_in"src="${image}"
         width=150" height="70">
      </td>
        </tr>`;

    document.getElementById("table_table").innerHTML += table;

}