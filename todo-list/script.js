let Name = document.getElementById('addForm');


Name.addEventListener('submit',storing_data);

function storing_data(e)
{
    e.preventDefault();

    let username=document.getElementById('item').value;
    let listElement=document.createElement('li');

    listElement.appendChild(document.createTextNode(username));

    listElement.className='list-group-item';

    let delButton=document.createElement('button');
    delButton.appendChild(document.createTextNode('DELETE'));
    delButton.className="btn btn-danger btn-sm float-right delete";
    listElement.appendChild(delButton);

    delButton.onclick= function()
    {
        list.removeChild(listElement);
    }


    let editButton=document.createElement('button');
    editButton.appendChild(document.createTextNode('Edit'));
    editButton.className="btn btn-info btn-sm float-right delete"; 
    listElement.appendChild(editButton);
    
    
    editButton.onclick=function()
    {
        document.getElementById('item').value=username;
        list.removeChild(listElement);
    }



    let list =document.getElementById('items');
    list.appendChild(listElement);

   
    }
     



