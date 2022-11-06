//add comment fields
const addComment = async (event) => {
    event.preventDefault();
    document.querySelector('#submitComment').classList.add('hidden');
    const commentParent = document.querySelector('.card');
    const commentCard = document.createElement('div');
    commentCard.classList.add('card', 'mb-5');
    commentCard.innerHTML = `
    <h5 class="card-header commentCompose">New comment</h5>
    <div class="card-body">
    <textarea class="card-text ms-5 col-11"  rows="5" id="newComment" name="comment"></textarea>
    </div>
    <div class="card-footer text-muted text-end">
    <button type="submit" id="postComment">Save your comment</button>
    </div>
  </div>`
    commentParent.insertAdjacentElement('afterend', commentCard)
    document.querySelector('#postComment').addEventListener('click', postComment);
}
// post comment to database
const postComment = async (event) => {
    event.preventDefault();
    const comment = document.querySelector('#newComment').value.trim();
    const id = document.querySelector('#submitComment').dataset.userid;
    const blog_id = document.querySelector('.card').dataset.postid;
    console.log(comment)
    console.log(id)
    console.log(blog_id)

    const response = await fetch('../api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ comment, id, blog_id }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response)
    if (response.status === 200) {
        console.log('okay')
        location.reload();
    } else {
        alert('Failed to post comment.');
    }


}

document.querySelector('#submitComment').addEventListener('click', addComment);



