var users_arr = []
//localStorage.setItem("users_info",[])
console.log(users_arr);



function setarr() {

}

function save() {
    var UserName = document.getElementById("name").value;
    var UserAge = document.getElementById("age").value;
    var UserDate = document.getElementById("date").value;
    var UserColor = document.getElementById("color").value;
    var obj = JSON.stringify({name:`${UserName}`,age:`${UserAge}`,date:`${UserDate}`,color:`${UserColor}`});
    users_arr.push(obj);
    localStorage.setItem("users_info", users_arr);
}

function printUsersInfo() {
    let value = localStorage.getItem("users_info")
    //alert(`${value}`)
    let users = value.split("},{");
    //alert(users.length)
    let last_place_in_arr = users.length - 1
    let person = users[last_place_in_arr];
    var UserColor = document.getElementById("color").value;
    let person_arr = person.split(`","`)
    let person_name = person_arr[0];
    person_name = person_name.replace("{", "")
    person_name = person_name.replace(`"`, "")
    person_name = person_name.replace(`":"`," - ")
    let person_age = person_arr[1];
    person_age = person_age.replace(`":"`, " - ")
    let person_date = person_arr[2];
    person_date = person_date.replace(`":"`, " - ")
    let person_color = person_arr[3];
    person_color = person_color.split(":")
    person_color = person_color[1]
    person_color = person_color.replace("}", "")
    person_color = person_color.replace(`"`, "")
    person_color = person_color.replace(`"`, "")


    document.getElementById("list").innerHTML += `<li style="color:${person_color}"> ${person_name } <br />${person_age } <br />${person_date } <br /></li >`
    
}


