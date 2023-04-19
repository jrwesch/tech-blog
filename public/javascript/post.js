async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;

    const post_url = document.querySelector('input[name="post-url]').value;

    
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);