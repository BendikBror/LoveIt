const API = "https://randomuser.me/api/";
const leftMainDiv = document.getElementsByClassName("left-main-div")[0];
const midMainDiv = document.getElementsByClassName("mid-main-div")[0];
const maleBtn = document.getElementById("male-btn");
const femaleBtn = document.getElementById("female-btn");

function fetchNewPerson(gender) {
  fetch(`${API}?results=1&gender=${gender}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const users = data.results;

      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        const picture = user.picture.large;
        const name = user.name.first;
        const age = user.dob.age;

        const html = `
          <div class="product-card-container">
            <img class="product-card-container-image" src="${picture}" alt="" />
            <h1 class="product-card-container-h1">${name}, ${age}</h1>
            
            <div class="btn-choice-div">
              <button class="btn-choice btn-choice-1">Nei</button>
              <button class="btn-choice btn-choice-2">Ja</button>
            </div>
          </div>
        `;

        midMainDiv.insertAdjacentHTML("beforeend", html);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

midMainDiv.addEventListener("click", function (event) {
  const clickedButton = event.target;

  if (clickedButton.classList.contains("btn-choice-1")) {
    const productCardContainer = clickedButton.closest(
      ".product-card-container"
    );
    productCardContainer.remove(); 
    fetchNewPerson(maleBtn.classList.contains("active") ? "male" : "female");
  }

  if (clickedButton.classList.contains("btn-choice-2")) {
    const productCardContainer = clickedButton.closest(
      ".product-card-container"
    );
    const imageElement = productCardContainer.getElementsByClassName(
      "product-card-container-image"
    )[0];
    const nameElement = productCardContainer.getElementsByClassName(
      "product-card-container-h1"
    )[0];

    // genererer et random nummer mellom 0-3.
    const randomNum = Math.floor(Math.random() * 4);
        //er nummeret 0, vil koden under bli pushet inn i leftMainDiven.
    if (randomNum === 0) {
      const picture = imageElement.src;
      const name = nameElement.textContent;
      const age = name.split(", ")[1];

      const html = `
        <div class="matched-profile-container">
          <div class="delete-btn-div">
            <button class="delete-match">X</button>
          </div>
          <img class="match-picture" src="${picture}" alt="" />
          <div class="match-picture-name">
            <p>${name}</p>
          </div>
        </div>
      `;

      leftMainDiv.insertAdjacentHTML("afterbegin", html);
      alert(`Du matchet med ${name}`);
    }

    productCardContainer.remove();
    fetchNewPerson(maleBtn.classList.contains("active") ? "male" : "female");
  }
});

maleBtn.addEventListener("click", function () {
  maleBtn.classList.add("active");
  femaleBtn.classList.remove("active");
});

femaleBtn.addEventListener("click", function () {
  femaleBtn.classList.add("active");
  maleBtn.classList.remove("active");
});


maleBtn.addEventListener("click", function () {
  midMainDiv.innerHTML = ""; 
  fetchNewPerson("male"); 
});

femaleBtn.addEventListener("click", function () {
  midMainDiv.innerHTML = ""; 
  fetchNewPerson("female"); 
});

leftMainDiv.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-match")) {
    const profileContainer = event.target.closest(".matched-profile-container");
    if (profileContainer) {
      const confirmUnmatch = confirm("Are you sure you want to unmatch?");
      if (confirmUnmatch) {
        profileContainer.remove();
      }
    }
  }
});
