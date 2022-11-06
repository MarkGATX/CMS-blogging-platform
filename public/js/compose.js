// const auth = require('../../utils/auth')

function composePost (event) {
    event.preventDefault();
    document.querySelector('#compose').classList.add('hidden');
    const postParent = document.querySelector('.dashHead');
    const postCard = document.createElement('div');
    postCard.classList.add('card', 'mb-5');
    postCard.innerHTML = `
    <div class="card-header commentCompose"><input type="text" id="newTitle" name="title" placeholder="Your new title here"></input></div>
    <div class="card-body">
    <textarea class="card-text ms-5 col-11"  rows="5" id="newPost" name="post"></textarea>
    </div>
    <div class="card-footer text-muted text-end">
    <button type="submit" id="savePost">Save your new post</button>
    </div>
  </div>`
    postParent.insertAdjacentElement('afterend', postCard)
    document.querySelector('#savePost').addEventListener('click', savePost);
}

const savePost = async(event) => {
    event.preventDefault();
    const title = document.querySelector('#newTitle').value.trim();
    const post = document.querySelector('#newPost').value.trim();
    const id = document.querySelector('#compose').dataset.userid;
    console.log(post)
    console.log(id)
    console.log(title)

    const response = await fetch('../api/post/new', {
        method: 'POST',
        body: JSON.stringify({ title, post, id }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.status === 200) {
        console.log('okay')
        location.reload();
    } else {
        alert('Failed to save new post.');
    }

}




  document.querySelector('#compose').addEventListener('click', composePost);

