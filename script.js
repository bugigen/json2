let content = document.querySelector("#content");
let btn = document.querySelector("#btn");

const urls = [
  "https://run.mocky.io/v3/adf501fe-5592-4766-8a10-0bc24f328807",
  "https://random-data-api.com/api/v2/banks"
]

let getJsons = async () => {
  try {
    const response = await Promise.all(urls.map(url => fetch(url)));
    if (response.ok === "false") {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const answer = await Promise.all(response.map(res => res.json()));

    content.innerHTML += '<h3><u>First response</u></h3><br>';

    for (let prod in answer[0]) {
      for (let item = 0; item < answer[0][prod].length; item++) {
        content.innerHTML += `<b>Name:</b> ${answer[0][prod][item].name},
        <b>price:</b> ${answer[0][prod][item].price} руб <br>`
      }
      content.innerHTML += "<br>";
    }

    content.innerHTML += '<br><h3><u>Second response</u></h3><br>';
    content.innerHTML += `<b>Account number:</b> ${answer[1].account_number} <br>`
    content.innerHTML += `<b>Bank name:</b> ${answer[1].bank_name} <br>`

    btn.removeEventListener("click", getJsons);
  } catch (e) {
    console.log(e);
  }
}

// getJsons().catch(error => error.message);

btn.addEventListener("click", getJsons);


