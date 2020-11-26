let trainee = document.getElementById("trainee");
const trainees = document.querySelector(".trainees");
const spinner = document.querySelector(".spinner");
const modalCon = document.querySelector(".modal-con");
function openModal(i) {
  document.querySelector(".bg-modal").classList.toggle("open");
  getUser(i)
}
function closeModal() {
  document.querySelector(".bg-modal").classList.toggle("open");
  modalCon.innerHTML = '<div class="spinner">'
}
const getUser =(i)=>{
  fetch(`https://5fbe19de5923c90016e6a815.mockapi.io/users/${i}`)
    .then((res) => res.json())
    .then((user) => {
      displayUser(user)
    });
}
const getUsers = () => {
  fetch("https://5fbe19de5923c90016e6a815.mockapi.io/users")
    .then((res) => res.json())
    .then((user) => {
      displayUsers(user);
    });
};

const displayUsers = fellows=>{
    spinner.style.display = 'none'
      fellows.forEach((fellow,i)=>{
        trainees.innerHTML +=`
        <div class="trainee" onclick="openModal(${i+1})">
          <img src=${fellow.avatar} alt="avi" class="profile">
          <p>${fellow.name}</p>
         </div>
        `
      })
}


const displayUser =(user)=>{
  modalCon.innerHTML = `<div class="row mt-5">
  <div class="col-sm-4">
      <div class="modal-img">
          <img src=${user.avatar} alt="avi" class="profile">
      </div>
  </div>
  <div class="col-sm-8">
      <button class="close" onclick="closeModal()">&times;</button>
  
      <div class="modal-info pt-5">
          <h3 class="name">${user.name}</h3>
          <p class="bio">${user.bio}
          </p>
          <p class="stack">Stack : ${user.stack}</p>
          <p class="benefits">What you hope to gain from the bulb training :</p>
          <p class="socials">social links</p>
      </div>
  
  </div>`
}
getUsers();


