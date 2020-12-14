function toggleMenu() {
  var nav = document.querySelector(".nav-list");
  nav.classList.toggle("nav-active");
}

function myFunction(x) {
  x.classList.toggle("change");
}

const trainee = document.getElementById("trainee");
const trainees = document.querySelector(".trainees");
const spinner = document.querySelector(".spinner");
const modalCon = document.querySelector(".modal-con");
const modalBackground = document.querySelector(".bg-modal");

function openModal(i) {
  modalBackground.classList.toggle("open");
  getUser(i);
}

function closeModal() {
  modalBackground.classList.toggle("open");
  modalCon.innerHTML = '<div class="spinner">';
}

modalBackground.addEventListener("click", (e) => {
  if (e.path[0].classList.contains("open")) {
    closeModal();
  }
});

const getUser = (i) => {
  fetch(`https://5fbe19de5923c90016e6a815.mockapi.io/users/${i}`)
    .then((res) => res.json())
    .then((user) => {
      displayUser(user);
    });
};

const getUsers = () => {
  fetch("https://5fbe19de5923c90016e6a815.mockapi.io/users")
    .then((res) => res.json())
    .then((user) => {
      displayUsers(user);
    });
};

const displayUsers = (fellows) => {
  spinner.style.display = "none";
  fellows.forEach((fellow, i) => {
    trainees.innerHTML += `
        <div class="trainee" onclick="openModal(${i + 1})">
          <img src= ${fellow.avatar} alt="avi" class="profile">
          <p>${fellow.name}</p>
         </div>
        `;
  });
};

const displayUser = (user) => {
  modalCon.innerHTML = `
      <div class="modal-img">
          <img src=${user.avatar} alt="avi" class="profile">
      </div>

      <button class="close" onclick="closeModal()">&times;</button>
      
      <div class="modal-info pt-5">
          <h3 class="name">${user.name}</h3>
          <p class="bio">${user.bio}</p>
          <p class="stack">Stack: ${user.stack}</p>
          <p class="benefits">What you hope to gain from the bulb training: ${user.expectation}</p>
          <p class="socials">Social Links: 
             <a target="blank" href = "${user.social[0]}"><i class="fab fa-linkedin-in"></i></a>
             <a target="blank" href = "${user.social[1]}" ><i class="fab fa-github"></i></a>
             <a target="blank" href = "mailto:${user.social[2]}"><i class="fas fa-envelope"></i></a>
          </p>
      </div>`;
};
getUsers();
