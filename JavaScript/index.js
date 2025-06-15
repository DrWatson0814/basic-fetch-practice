const getAll = document.getElementById("get-all-btn").onclick = getUsers;
const reset = document.getElementById('reset-btn').onclick = cardReset;
const below10 = document.getElementById('users-10-btn').onclick = under10;



async function getUsers() {
  try {
    const get = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
    const response = await get.json();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}


async function under10() {
  try {
    const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
    const data = await response.json();
    for (const elements of data) {
      if (elements.yearsEmployed < 10) {
        console.log(elements);
      }
    }
  }  
    catch(error) {
    console.error(error);
  }
}

function cardReset() {
  const resetCards = document.getElementsByClassName("cardElement");
  resetCards.remove();
}



async function allTogether(btn) {
    const cardData = await btn;
    createCard(cardData);
};


function createCard(obj) {
  const cardDiv = document.getElementById("cards");
  for (const element of obj) {
    const card = document.createElement("article")
    const name = document.createElement("h2")
    card.classList.add("cardElement");
    const email = document.createElement("p")
    card.classList.add("cardElement");
    const compName = document.createElement("p")
    card.classList.add("cardElement");
    const yearsEmp = document.createElement("p")
    card.classList.add("cardElement");

    name.textContent = `${element.firstName} ${element.lastName}`;
    email.textContent = `${element.email}`;
    compName.textContent = `${element.companyName}`;
    yearsEmp.textContent = `${element.yearsEmployed}`;

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(compName);
    card.appendChild(yearsEmp);

    cardDiv.appendChild(card);
  }
}



