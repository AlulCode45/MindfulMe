document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500)
    }
});

var comments = document.getElementsByClassName('comment');
var commentActions = document.getElementsByClassName('comment-action');

for (var i = 0; i < comments.length; i++) {
    (function (index) {
        if (comments[index] && commentActions[index]) {
            comments[index].addEventListener("mouseover", function () {
                commentActions[index].style.display = "block";
            });
            comments[index].addEventListener("mouseout", function () {
                commentActions[index].style.display = "none";
            });
        }
    })(i);
}


var screenWidth = window.innerWidth;

if (screenWidth < 1024) {
    var linkedCard = document.getElementsByClassName('active-psikolog');
    for (let i = 0; i < linkedCard.length; i++) {
        const element = linkedCard[i];
        element.href = './chat-consultation.html';
    }
}

var modal = document.getElementById('myModal');

var openModalButton = document.querySelector('.open-modal-button');

if (openModalButton) {
    openModalButton.addEventListener('click', function () {
        modal.style.display = 'block';
        modal.style.zIndex = "99999";
    });
}

var closeBtn = document.querySelector('.close');

if (closeBtn) {
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        modal.style.zIndex = "99999";
    });
}

function bayarPsikolog() {
    modal.style.display = 'none';
    modal.style.zIndex = "99999";
    showAlert();

    var screenWidth = window.innerWidth;
    if (screenWidth < 1024) {
        setTimeout(() => {
            window.location.href = './chat-consultation.html';
        }, 2000);
    }
}

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modal.style.zIndex = "-99999";
    }
});

var selectElement = document.getElementById('mySelect');

if (selectElement) {
    selectElement.addEventListener('change', function () {
        var selectedOption = this.options[this.selectedIndex];
        selectElement.style.backgroundColor = selectedOption.style.backgroundColor;
        selectElement.style.color = selectedOption.style.color;
    });

    selectElement.addEventListener('focus', function () {
        this.classList.add('focus');
    });

    selectElement.addEventListener('blur', function () {
        this.classList.remove('focus');
    });
}

const editPhoto = document.getElementById('edit-photo');
const profileImg = document.getElementById('profile-img');

if (editPhoto && profileImg) {
    editPhoto.style.zIndex = "-99";
    profileImg.style.zIndex = "1";

    profileImg.addEventListener("mouseenter", function () {
        editPhoto.style.zIndex = "99";
    });

    profileImg.addEventListener("mouseleave", function () {
        editPhoto.style.zIndex = "-99";
    });
}

function pilihJawaban(card) {
    const cards = document.querySelectorAll('.jawaban button');
    cards.forEach((c) => {
        c.classList.remove('selected');
    });

    card.classList.add('selected');
}

function pilihNominal(card) {
    const cards = document.querySelectorAll('.nominal');
    cards.forEach((c) => {
        c.classList.remove('topup-selected-option');
    });

    card.classList.add('topup-selected-option');
}
function pilihPembayaran(card) {

    const cards = document.querySelectorAll('.pembayaran');
    cards.forEach((c) => {
        c.classList.remove('topup-selected-option');
    });

    card.classList.add('topup-selected-option');
}