// menu toggle

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
    if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
    } else {
        collapseMenu.style.display = 'block';
    }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);


// Modal 

let modal = document.getElementById('modal');
let openModalBtn = document.getElementById('openModal');
let closeModalBtn = document.getElementById('closeIcon');


openModalBtn.addEventListener('click', showModal);

closeModalBtn.addEventListener('click', hideModal);

 function showModal() {
        modal.classList.remove('hidden');
    }

    function hideModal() {
        modal.classList.add('hidden');
    }

// document.addEventListener('click', () => {
//     let modal = document.getElementById('modal');
//     let openModalBtn = document.getElementById('openModal');
//     let closeModalBtn = document.getElementById('closeIcon');

//     function showModal() {
//         modal.classList.remove('hidden');
//     }

//     function hideModal() {
//         modal.classList.add('hidden');
//     }

//     openModalBtn.addEventListener('click', showModal);

//     closeModalBtn.addEventListener('click', hideModal);

//     // Close modal when clicking outside the modal content
//     modal.addEventListener('click', (event) => {
//         if (event.target === modal.firstElementChild) {
//             hideModal();
//         }
//     });
// });


    // modal.addEventListener('click', (event) => {
    //     if (event.target === modal.firstElementChild) {
    //         hideModal();
    //     }
    // });