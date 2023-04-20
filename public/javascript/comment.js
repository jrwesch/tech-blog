async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#content-comment').value.trim();
    
    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
   
   if (comment_text) {
    const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({
            post_id,
            comment_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

if (response.ok) {
    document.location.replace('/homepage');
} else {
    alert('Failed to add comment');
}
}

};

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);