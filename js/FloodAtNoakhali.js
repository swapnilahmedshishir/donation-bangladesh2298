// donation btn decler
const foodAtNoakhaliSubmiteBtn = document.getElementById(
  "foodAtNoakhaliSubmiteBtn"
);

foodAtNoakhaliSubmiteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // flood at at Noakhali
  const donationNoakhaliCampaniName =
    document.getElementById("donation_name").innerText;
  CommonFeatcher(
    "doanteAmountOfNoakhali",
    "floodAtNoakhaliDonateAmount",
    donationNoakhaliCampaniName
  );
});

// donation btn decler
const foodAtFeniSubmiteBtn = document.getElementById("foodAtFeniSubmiteBtn");

foodAtFeniSubmiteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // flood at at feni cmapain name
  const donationFeniCampaniName =
    document.getElementById("feni_campani_name").innerText;

  CommonFeatcher(
    "doanteAmountOfFeni",
    "floodAtFeniDonateAmount",
    donationFeniCampaniName
  );
});

// donation btn decler
const AtQotaSubmiteBtn = document.getElementById("AtQotaSubmiteBtn");

AtQotaSubmiteBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // flood at AtQuota cmapnai
  const donationQuotaCampaniName =
    document.getElementById("quota_campani_name").innerText;
  CommonFeatcher(
    "doanteAmountOfquota",
    "AtQuateDonateAmount",
    donationQuotaCampaniName
  );
});
