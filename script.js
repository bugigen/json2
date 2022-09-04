let content = document.querySelector("#content");
let btn = document.querySelector("#btn");

const url = "https://run.mocky.io/v3/adf501fe-5592-4766-8a10-0bc24f328807";

let getJson = async () => {
  try {
    const response = await fetch(url);
    if (response.ok === "false") {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const answer = await response.json();
    for (let prod in answer) {
      content.innerHTML += `<b>${prod}:</b> <br>`;
      for (let item = 0; item < answer[prod].length; item++) {
        content.innerHTML += `&nbsp; <b>Name:</b> ${answer[prod][item].name},
          <b>price:</b> ${answer[prod][item].price} руб <br>`
      }
      content.innerHTML += "<br>";
    }
    btn.removeEventListener("click", getJson);
  } catch (e) {
    console.log(e);
  }
}

// getJson().catch(error => error.message);

btn.addEventListener("click", getJson);


