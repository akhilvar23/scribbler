function showSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "flex";
}

function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}

function showSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "flex";
}

function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}

function addComment() {
    console.log("Inside add comment");
    var x = document.getElementById("txtCommentCommentPost").addEventListener("onchange", function () {
        document.getElementById("txtCommentCommentPost").innerHTML;
    });

    var x = document.getElementById("txtCommentCommentPost").value;
    console.log(x);
    var pElement = '<p >' + x + '</p>';
    var getDiv = document.getElementById('listAllComments');
    getDiv.innerHTML = pElement + getDiv.innerHTML;
}

function incrementCounter() {
    var cntr = document.getElementById('counterLikedBy');
    var val = parseInt(cntr.innerText);
    cntr.innerText = val + 1;    

    //Like to be updated to Liked
    var cntrLike = document.getElementById('lblLike');
    cntrLike.innerText = "Liked";
}

function editComment(){
    var btn = document.getElementById("btnEditComment");
    var img =document.getElementById("btnSaveComment");

    var editTitle = document.getElementById("blogTitleNew");
    var editBlog = document.getElementById("blogBody");

    //for edit content and save button.
    if(btn.innerText === "Edit ") {

        //Edit/Save visibility
        img.style.display = 'block';
        btn.style.display = 'none';
        //changing the style and edit option
        editTitle.style.border = '2px solid pink';
        editTitle.contentEditable = "true";
        editBlog.style.border = '2px solid pink';
        editBlog.contentEditable = "true";
    } else {
        //Edit/Save visibility
        img.style.display = 'none';
        btn.style.display = 'block';
        //changing the style and edit option
        editTitle.style.border = '';
        editTitle.contentEditable = "false";
        editBlog.style.border = '';
        editBlog.contentEditable = "false";

    }
}