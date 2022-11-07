
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
        alert('Failed to save edit.');
      }
}


const deletePost = async (event) => {
    event.preventDefault(); 
    const id = document.querySelector('#editForm').dataset.idnumber;
    const response = await fetch('../api/post/delete/', {
        method: 'DELETE',
        body: JSON.stringify({id}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
        window.location.replace("/dashboard")
      } else {
        alert('Failed to delete post.');
      }
        

}

document.querySelector('#submitEdit').addEventListener('click', editPost);
document.querySelector('#deletePost').addEventListener('click', deletePost);
  


