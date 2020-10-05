function ShowTrashModal() {
    var modal = document.getElementById("modal-trash");
    modal.style.display = "flex";
}

function closeContainer() {
    var modal = document.getElementById("modal-trash");
    modal.style.display = "None";
}

function navigateToPost() {
    location.href = "post.html";
}

function deletePost(post,deleteYesButton){
    if(deleteYesButton.onclick){
        var modal = post;
        modal.remove();
    }
}