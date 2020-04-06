import "../styles/index.scss";

const sendScriptData = () => {
  const ticketName = window.document.querySelector(
    "#ticketForm input#ticketName"
  );

  const ticketNumber = window.document.querySelector(
    "#ticketForm input#ticketNumber"
  );

  const ticketData = {
    name: ticketName.value,
    number: ticketNumber.value,
  };

  let scriptUrl = 'https://script.google.com/macros/s/AKfycbyaVNFqnYjd6it5tlO9-B-_aonhXS8adAbatBbHCw96XDZ_mp8/exec';
  window.open(scriptUrl + '?name=' + encodeURIComponent(ticketData.name) + '&ticketId=' + encodeURIComponent(ticketData.number));
  console.log(ticketData);
};

document.addEventListener("DOMContentLoaded", function () {
  const ticketName = window.document.querySelector(
    "#ticketForm button#sendScript"
  );

  ticketName.addEventListener("click", (e) => {
    sendScriptData();
  });
});
