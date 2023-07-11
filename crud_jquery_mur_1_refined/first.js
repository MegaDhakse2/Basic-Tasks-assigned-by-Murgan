// class Contact {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }

var contact_name = "User";
var contact_num = 0;
console.log(contact_num);
var contact_tempt = "";

var add_contact = function(){
     contact_num += 1;
      contact_tempt = `
            <div class="tempt_div container ${contact_name}" id=${contact_num}> 
               <h5>${contact_name} ${contact_num}</h5>
               <button class="btn btn-primary btn-sm" id="show_btn" onclick="show_contact(${contact_num})">
                show</button>
               <button class="btn btn-danger btn-sm"  id="remove_btn" onclick="del_contact(${contact_num})">del</button>
            </div>
           `
    $(".main_div").append(contact_tempt);
    console.log(contact_tempt);
    console.log(contact_num);

}
console.log(contact_num);

var show_contact = function(contact_num){
    alert("You have clicked contact "+ contact_num);
    console.log(contact_num);

}

var del_contact = function(contact_num){
    // debugger
    console.log(contact_num);
    $("#" + contact_num).remove();
}