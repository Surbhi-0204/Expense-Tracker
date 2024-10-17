function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const amount =event.target.amount.value;
    const description =event.target.description.value;
    const category = event.target.category.value;
    const obj={
        amount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showUserOnScreen(obj);
  }
  function showUserOnScreen(obj){
    const parentele = document.querySelector('ul');
    const childele= document.createElement('li');
    childele.textContent = obj.amount+' - '+obj.description+' - '+ obj.category ;
    
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick=() =>{
      localStorage.removeItem(obj.description);
      parentele.removeChild(childele);
      }
      const editBtn=document.createElement('button');
      editBtn.textContent = 'Edit';
      editBtn.onclick=() =>{
        const inputamount = document.getElementById('amount');
        inputamount.value = obj.amount ;
        const inputdescription = document.getElementById('description');
        inputdescription.value = obj.description ;
        const inputcategory = document.getElementById('category');
        inputcategory.value = obj.category ;
        localStorage.removeItem(obj.description);
        parentele.removeChild(childele);
    }
    childele.appendChild(editBtn);
    childele.appendChild(deleteBtn);
    parentele.appendChild(childele);
  }