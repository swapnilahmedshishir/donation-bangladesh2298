// donation btn decler
const donateAmountSubmiteBtn = document.getElementById(
  "donateAmountSubmiteBtn"
);
// total donated amount need (navbar amount)
const totalDonationNeed = document.getElementById("totalDonationNeed");
// donation history sava data
const donationDataHistory = document.getElementById("donationDataHistory");
// modal dialog pop up delcler
const modal = document.getElementById("modal_dialog_box");
donateAmountSubmiteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputFiled = parseFloat(document.getElementById("doanteAmount").value);
  const floodAtNoakhaliDonateAmount = parseFloat(
    document.getElementById("floodAtNoakhaliDonateAmount").innerText
  );
  let amoutnValidationMessage = document.querySelector(".warning_message");
  if (inputFiled < 0 || isNaN(inputFiled)) {
    amoutnValidationMessage.innerText = "invaid amount";
    return;
  }

  const totalFloodAtNoakhaliDonateAmount =
    inputFiled + floodAtNoakhaliDonateAmount;

  totalDonationNeed.innerText =
    parseFloat(totalDonationNeed.innerText) - inputFiled;

  document.getElementById("floodAtNoakhaliDonateAmount").innerText =
    totalFloodAtNoakhaliDonateAmount;
  document.getElementById("doanteAmount").value = "";
  amoutnValidationMessage.innerText = "";
  modal.showModal();

  const div = document.createElement("div");
  div.className =
    "bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] border-solid mb-2";
  div.innerHTML = `
              <h4 class="text-xl font-bold text-[rgb(17,17,17)]">
                ${inputFiled} Taka is ${
    document.getElementById("donation_name").innerText
  }
              </h4>
              <div class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-4">
                <span class="text-xl font-bold text-[rgb(17,17,17)]">
                  Date :</span
                >
                ${new Date("2015-03-25")}
                       </div>`;
  donationDataHistory.appendChild(div);
});
