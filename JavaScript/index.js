async function getUsers() {
  try {
    const get = await fetch(
      "https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json"
    );
    const response = await get.json();
    console.log(response); 
  } catch (error) {
    console.error(error);
  }
}


const btn = document.getElementById('get-all-btn')
btn.addEventListener('click', getUsers(btn));