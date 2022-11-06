
const editPost = async (event) => {
    event.preventDefault();
    
    const title = document.getElementById('editTitle').value.trim();
    const post = document.querySelector('#editPost').value.trim();
    const id = document.querySelector('#editForm').dataset.idnumber;
    console.log(title)
    console.log(post)
    console.log(id)

    const response = await fetch('../api/post/compose/', {
        method: 'PUT',
        body: JSON.stringify({id,title, post,}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.querySelector('.card-footer').insertAdjacentText('afterbegin','Edits saved');
      } else {
        alert('Failed to sign up.');
      }
        

}

document.querySelector('#submitEdit').addEventListener('click', editPost);
  


