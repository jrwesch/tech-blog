async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();

    const description = document.querySelector('input[name="description"]').value.trim();

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            description
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('failed to add post');
    }
}

document
.querySelector('.new-post-form')
.addEventListener('submit', postFormHandler);

/*

    // Delete post
        const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to delete Post.');
        }
    }

    



document
.querySelector('.post-list')
.addEventListener('click', delButtonHandler);
*/