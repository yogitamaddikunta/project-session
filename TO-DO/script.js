//store the values from user
const form=document.getElementById('form')
const input=document.getElementById('input')
const error=document.getElementById('error')
const posts=document.getElementById('posts')

form.addEventListener('click',(e)=>{
    e.preventDefault()
    formValidation()
    console.log('form-submitted')
})

const formValidation=()=>{
    if(input.value===''){
        console.log('error')
        error.innerHTML='please enter some text'
    }
    else{
        console.log('success')
        error.innerHTML=''
        acceptData()
        showData()
    }
}

// to store the data from the user
// created an objects with template literals
let data={}

const acceptData=()=>{
    data['name']=input.value
    console.log(data)
} 

const showData=()=>{
    posts.innerHTML+=
    `
    <div>
    <p>${data.name}</p>
    <span class="buttons">
        <i onClick='deleteData(this)'class="fa-sharp fa-solid fa-trash"></i>
        <i onClick='deleteData(this)'class="fa-solid fa-solid fa-pen-to-square"></i>
    </span>
    </div>
    `
}
//to delete the data entered from the user
const deleteData=(e)=>{
 e.parentElement.parentElement.remove()
}
//to edit the data by user
const editData=(e)=>{
    input.value=e.parentElement.previousElementSibiling.innerHTML
    e.parentElement.parentElement.remove()

}