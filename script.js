const addContactToDOM = () => {
	const contactInfo = document.getElementById("contactInfo");
	const html = `
      <div class="label">Email:</div>
      <div class="data">publicemail@email.com</div>
   `;
	contactInfo.innerHTML = html;
};

window.addEventListener("load", () => {
	setTimeout(() => {
		addContactToDOM();
	}, 1000);
});
