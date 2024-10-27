function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://crudcrud.com/api/9282f04db3274780932b678229d2d0a7/appointmentData", userDetails)
      .then((response) =>{
        displayUserOnScreen(response.data)
      })
    .catch((error) => {
        document.body.innerHTML= document.body.innerHTML+ "<h4> something "
    })
    windows.addEevntListner("DOMContentLoaded", ()=>{
        axios.get("https://crudcrud.com/api/9282f04db3274780932b678229d2d0a7/appointmentData")
        .then((response)=>{
            console.log(response);

            for (var i=0 ; i < response.data.length; i++) {
                showNewUserOnScreen((response.data[i]));
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    })
    function showNewUserOnScreen(user){
        document.getElementById('email').value= " ";
        document.getElementById('username').value= " ";
        document.getElementById('phone').value= " ";
        if (localStorage.getItem(user.email) !== null){
            removeUserFromScreen(user.email)
        }
        const parentNode = document.getElementById("listOfUsers");
        const childHTML = `<li id=${user._id}>${user.name} - ${user.email} - ${user.phone} 
        <button onclick=deleteUser('${user._id}')>Delete </button>
        <button onclick=editUserDetails('${user._id}')>Edit </button>
        </li>`
        parentNode.innerHTML = parentNode.innerHTML +childHTML;
    }   

    function editUserDetails(emailId,name,phone){
        axios.put(`https://crudcrud.com/api/9282f04db3274780932b678229d2d0a7/appointmentData/${user_id}`)
        .then((response)=>{
            removeUserFromScreen(userId);
        })
        .catch ((err)=>{
            console.log(err)
        })
        document.getElementById('email').value= emailId;
        document.getElementById('username').value= name;
        document.getElementById('phone').value= phone;

        deleteUser(userId);
    }

    function deleteUser(userId){
        axios.delete(`https://crudcrud.com/api/9282f04db3274780932b678229d2d0a7/appointmentData/${user_id}`)
        .then((response)=>{
            removeUserFromScreen(userId);
        })
        .catch ((err)=>{
            console.log(err)
        })
        
    }
    function removeUserFromScreen(userId){
        const parentNode=document.getElementById('listOfUsers');
        const childToBeDeleted =document.getElementById(userId);
        if (childToBeDeleted ){
            parentNode.removeChild(childToBeDeleted);
        }
    }
//     const deleteBtn = document.createElement("button");
//   deleteBtn.appendChild(document.createTextNode("Delete"));
//   userItem.appendChild(deleteBtn);

//   const editBtn = document.createElement("button");
//   editBtn.appendChild(document.createTextNode("Edit"));
//   userItem.appendChild(editBtn);

//   const userList = document.querySelector("ul");
//   userList.appendChild(userItem);

//   deleteBtn.addEventListener("click", function (event) {
//     userList.removeChild(event.target.parentElement);
//     localStorage.removeItem(userDetails.email);
//   });

//   editBtn.addEventListener("click", function (event) {
//     userList.removeChild(event.target.parentElement);
//     localStorage.removeItem(userDetails.email);
//     document.getElementById("username").value = userDetails.username;
//     document.getElementById("email").value = userDetails.email;
//     document.getElementById("phone").value = userDetails.phone;
//   });
}