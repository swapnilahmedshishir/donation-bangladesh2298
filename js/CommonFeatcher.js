// total donated amount need (navbar amount)
const totalDonationNeed = document.getElementById("totalDonationNeed");
// donation history sava data
const donationDataHistory = document.getElementById("donationDataHistory");
// modal dialog pop up delcler
const modal = document.getElementById("modal_dialog_box");

const CommonFeatcher = (doanteAmount, id, title) => {
  // Get the input field element
  const inputElement = document.getElementById(doanteAmount);

  // Get the value from the input field
  const inputFiled = parseFloat(inputElement.value);

  // card amount taka
  const floodDonateAmount = parseFloat(document.getElementById(id).innerText);

  // validation data
  let amoutnValidationMessage = document.querySelector(".warning_message");
  if (inputFiled < 0 || isNaN(inputFiled)) {
    amoutnValidationMessage.innerText = "invaid amount";
    return;
  }
  // card taka + input filed data increment
  const totalDonateAmount = inputFiled + floodDonateAmount;

  // total donation amount need decrement
  const updatedDonationAmount =
    parseFloat(totalDonationNeed.innerText) - inputFiled;
  if (parseFloat(totalDonationNeed.innerText) < inputFiled) {
    return;
  } else {
    document.getElementById(id).innerText = totalDonateAmount;
    totalDonationNeed.innerText = updatedDonationAmount;
  }

  // donattion amount add success blanK the input filed
  document.getElementById(doanteAmount).value = "";
  amoutnValidationMessage.innerText = "";
  // show modal
  modal.showModal();

  const div = document.createElement("div");
  div.className =
    "bg-white p-[25px] rounded-2xl border border-[rgba(17,17,17,0.1)] border-solid mb-2";
  div.innerHTML = `
              <h4 class="text-xl font-bold text-[rgb(17,17,17)]">
                ${inputFiled} Taka is ${title}
              </h4>
              <div class="text-[16px] font-light text-[rgba(17,17,17,0.7)] mt-4">
                <span class="text-xl font-bold text-[rgb(17,17,17)]">
                  Date :</span
                >
                ${new Date("2015-03-25")}
                       </div>`;
  donationDataHistory.appendChild(div);
};
