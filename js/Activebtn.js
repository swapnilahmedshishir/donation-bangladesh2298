const donationbtn = document.getElementById("donationbtn");
const historybtn = document.getElementById("historybtn");
const donationSection = document.getElementById("donationSection");
const historySection = document.getElementById("historySection");

donationbtn.addEventListener("click", () => {
  donationbtn.classList.add("btn-success");
  historybtn.classList.remove("btn-success");

  donationSection.classList.remove("hidden");
  historySection.classList.add("hidden");
});

historybtn.addEventListener("click", () => {
  donationbtn.classList.remove("btn-success");
  historybtn.classList.add("btn-success");

  historySection.classList.remove("hidden");
  donationSection.classList.add("hidden");
});
