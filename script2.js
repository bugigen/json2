let content = document.querySelector("#content");
let btn = document.querySelector("#btn");

const urls = [
  "https://run.mocky.io/v3/adf501fe-5592-4766-8a10-0bc24f328807",
  "https://random-data-api.com/api/v2/banks"
]

let getJsons = async() => {
  try {
    const response = await Promise.all(urls.map(url => fetch(url)));
    // if (response.ok === "false") {
    //   const message = `An error has occured: ${response.status}`;
    //   throw new Error(message);
    // }
    // const answer = await Promise.all(response.map(res => res.text()));
    const answer2 = await Promise.all(response.map(res => res.text()));
    for(let prod in answer2) {
      console.log(answer2[prod]);
      content.innerHTML += `${answer2[prod]} <br><br>`;
    }
    // for (let prod in answer2) {
      // content.innerHTML += `<b>${answer2[prod]}:</b> <br>`;
      // for (let item = 0; item < answer2[prod].length; item++) {
      //   content.innerHTML += `&nbsp; <b>Name:</b> ${answer2[prod][item].name},
      //     <b>price:</b> ${answer2[prod][item].price} руб <br>`
      // }
    //   content.innerHTML += "<br>";
    // }
    // btn.removeEventListener("click", getJsons);
  } catch (e) {
    console.log(e);
  }
}

// getJson().catch(error => error.message);

btn.addEventListener("click", getJsons);


