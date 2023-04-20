async function postFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();

    const post_content = document.querySelector('input[name="post-url]').value.trim();

    // If then POST
    if (post_title && post_content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ post_title, post_content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert('Failed to add post.');
        }
    }
};

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
};
    

document
.querySelector('.form-post')
.addEventListener('submit', addPostHandler);

document
.querySelector('.post-list')
.addEventListener('click', delButtonHandler);