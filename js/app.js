let trainee = document.getElementById("trainee");
const trainees = document.querySelector(".trainees");
const spinner = document.querySelector(".spinner");
function openModal() {
  document.querySelector(".bg-modal").classList.toggle("open");
}
function closeModal() {
  document.querySelector(".bg-modal").classList.toggle("open");
}
const getUsers = () => {
  fetch("https://5fbe19de5923c90016e6a815.mockapi.io/users")
    .then((res) => res.json())
    .then((user) => {
      displayUsers(user);
    });
};
getUsers();
const displayUsers = fellows=>{
    trainees.removeChild(spinner)
      fellows.forEach(fellow=>{
        trainees.innerHTML +=`
        <div class="trainee" onclick="openModal()">
          <img src=${fellow.avatar} alt="avi" class="profile">
          <p>${fellow.name}</p>
         </div>
        `
      })
}

{/* <div class="trainee" onclick="openModal()">
  <img src="./images/default-placeholder-image.png" alt="avi" class="profile">
  <p>Bakare Oluwatosin</p>
</div> */}