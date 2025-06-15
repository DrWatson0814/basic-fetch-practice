const getAll = document.getElementById("get-all-btn").addEventListener('click', getUsers);
const reset = document.getElementById('reset-btn').addEventListener('click', cardReset);
const below10 = document.getElementById('users-10-btn').addEventListener('click', under10);





// Get All Employees Function
async function getUsers() {
  try {
    const get = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
    const response = await get.json();
    createCard(response);
    } catch (error) {
    console.error(error);
  }
}




// Get Users Under 10 Years 
async function under10() {
  try {
    const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
    const data = await response.json();
    const empUnder10 = data.filter(user => user.yearsEmployed < 10);
    createCard(empUnder10);
  }  
    catch(error) {
    console.error(error);
  }
}



// Reset Function
function cardReset() {
  const resetCards = document.getElementById("cards");
  resetCards.innerHTML = '';
}




// Card Creatsion Function
function createCard(obj) {
  const cardDiv = document.getElementById("cards");
  cardDiv.innerHTML = '';
  for (const element of obj) {
    const card = document.createElement("article")
    card.classList.add("cardElement");
    const name = document.createElement("h2")
    const email = document.createElement("p")
    const compName = document.createElement("p")
    const yearsEmp = document.createElement("p")

    name.textContent = `Name: ${element.firstName} ${element.lastName}`;
    email.textContent = `Email: ${element.email}`;
    compName.textContent = `Company Name: ${element.companyName}`;
    yearsEmp.textContent = `Years of Service: ${element.yearsEmployed}`;

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(compName);
    card.appendChild(yearsEmp);

    cardDiv.appendChild(card);
  }
}



