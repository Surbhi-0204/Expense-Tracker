const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios.get("https://crudcrud.com/api/ea94aaaa6b2145a9bc566b9702692700/todo/6717bf3da0a8cd03e818b2f9")
  .then ((res) => console.log(res.data))
  .catch((err)=> console.log(err));
}

function postTodo() {
  axios
    .post("https://crudcrud.com/api/ea94aaaa6b2145a9bc566b9702692700/todo", {
    title:"Learn Axios",
    completed: false,
  })
    .then ((res) => console.log(res.data))
    .catch((err)=> console.log(err));
}

function putTodo() {
  axios
    .put("https://crudcrud.com/api/ea94aaaa6b2145a9bc566b9702692700/todo/6717bf3fa0a8cd03e818b2fb", {
    title:"Learn Axios",
    completed: true,
  })
    .then ((res) => console.log(res.data))
    .catch((err)=> console.log(err));
}

function deleteTodo() {
  axios.delete("https://crudcrud.com/api/ea94aaaa6b2145a9bc566b9702692700/todo/6717bf3da0a8cd03e818b2f9")
  .then ((res) => console.log(res))
  .catch((err)=> console.log(err));
}
