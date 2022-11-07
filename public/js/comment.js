//add comment fields
const addComment = async (event) => {
    event.preventDefault();
    document.querySelector('#submitComment').classList.add('hidden');
    const commentParent = document.querySelector('.card');
    const commentCard = document.createElement('div');
    commentCard.classList.add('card', 'mb-5', 'fader');
    commentCard.innerHTML = `
    <h5 class="card-header commentCompose col-6">New comment</h5>
    <div class="card-body border border-2">
    <textarea class="card-text ms-5 col-11"  rows="5" id="newComment" name="comment" placeholder="Type your comment here..."></textarea>
    </div>
    <div class="card-footer text-muted text-end col-6 ms-auto">
    <button type="submit" class="p-2 rounded" id="postComment">Save your comment</button>
    </div>
  </div>`
    commentParent.insertAdjacentElement('afterend', commentCard);
    commentCard.classList.add('fadeIn');
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



