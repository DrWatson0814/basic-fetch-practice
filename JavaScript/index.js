// async function getUsers() {
//   try {
//     const get = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
//     const response = await get.json();
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// function displayUnder10(dataToProcess) {
//   let usersUnder10 = [];
//     if (dataToProcess < 10) {
//     usersUnder10.unshift(dataToProcess);
//     console.log(usersUnder10);
//   }
// }


function displayUnder10(employees) {

}


async function under10() {
  try {
    const response = await fetch("https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json");
    const data = await response.json();
    for (const elements of data) {
        if(elements.yearsEmployed < 10) {
            console.log(elements);
        }
    }
    } catch (error) {
    console.error(error);
    }
};

under10();
