let trainee = document.getElementById("trainee");

function openModal() {
  document.querySelector(".bg-modal").classList.toggle("open");
}
function closeModal() {
  document.querySelector(".bg-modal").classList.toggle("open");
}
const fellows = [];

const getUsers = () => {
  fetch("https://5fbe19de5923c90016e6a815.mockapi.io/users")
    .then((res) => res.json())
    .then((user) => {
      fellows.push(user)
      fellows.forEach((fellow) =>fellows.push(fellow))
      console.log(fellows)
    });
};
getUsers();
