let url;
let xx = "https://restcountries.com/v3.1/alpha/ug";

//search by name example
let serchName = "https://restcountries.com/v3.1/name/{name}";
let fliterRegion = `https://restcountries.com/v3.1/region/africa`;
function hideloader() {
  document.querySelector("#loader").style.display = "none";
}

async function getheApi(i) {
  url =
    "https://restcountries.com/v3.1/independent?status=true&fields=name,region,capital,population,flags,currencies,languages,subregion,tld,borders,fifa,cca2,cca3";
  try {
    document.getElementById(
      "datalist"
    ).innerHTML = `<div class="loader" id="loader"></div>`;
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data[i]);

    if (response) {
      hideloader();
    }
    showData(data, i);
  } catch (err) {
    console.log(err, "Error somwher");
  }
}

async function getDescription(url, i) {
  try {
    document.getElementById(
      "datalist"
    ).innerHTML = `<div class="loader" id="loader"></div>`;
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    console.log(data[i]);

    if (response) {
      hideloader();
    }
    showDesc(data, i);
  } catch (err) {
    console.log(err, "Error somwher");
  }
}

getheApi();
getheApi(xx);
function goToHome(i) {
  getheApi(url, i).then(() => {
    console.log("completed");
    document.querySelector(".blocks").style.display = "block";
    document.querySelector(".DescriptionBlock").remove();
  });
}

//fetch countries based on cca3
let countryCOde = "https://restcountries.com/v3.1/alpha/UGA";

// use APi to get the county name

function showDesc(data, i) {
  let display = "";
  console.log(data[i].code);
  display = `<div class="DescriptionBlock container">
    <a href="#" onclick="goToHome(${i})">
      <button class="shadow bg-white btn px-5 py-1 my-4">
        <img src="assets/arrow-left (1).svg" alt="" /> Back
      </button></a
    >
  
    <div class="row mt-5 align-items-center justify-content-between">
      <div class="col-sm-5 col-12">
        <img src="${data[i].flags.png}" class="img-fluid w-100" alt="" />
      </div>
      <div class="col-sm-6 col-10 mt-4">
        <h4 class="bolder">${data[i].name.common}</h4>
        <div class="row justify-content-between my-4">
          <div class="col-sm-6 col-12 ">
            <p><b> Native Name </b>: ${data[i].name.official}</p>
            <p><b> Population </b>: ${data[i].population}</p>
            <p><b> Region </b>: ${data[i].region}</p>
            <p><b> Sub-Region </b>: ${data[i].subregion}</p>
            <p><b> Capital </b>: ${data[i].capital[0]}</p>
          </div>
  
          <div class="col-sm-6 col-12 my-sm-0 my-4">
            <p><b> Top Level Domain </b>: ${data[i].tld}</p>
            <p><b> Currencies </b>: ${
              data[i].currencies[Object.keys(data[i].currencies)[0]].name
            }</p>
            <p><b> Language </b>: ${Object.values(
              data[i].languages
            ).toString()}</p>
          </div>
  
          <div class="mt-4 d-flex flex-wrap align-items-center justify-content-start">
            <span class="text-dark me-3">Border Countries : </span>
            <span
              class="text-dark fw-normal fs-6 px-3 py-2 shadow badge badge-light"
            >
              France
            </span>
            <span
              class="text-dark fw-normal fs-6 px-3 mx-2 py-2 shadow badge badge-light"
            >
              Germany
            </span>
            <span
              class="text-dark fw-normal fs-6 px-3 py-2 shadow badge badge-light"
            >
              NeitherLand
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  document.getElementById("DESC-SEC").innerHTML = display;
}

function MoreInfo(i) {
  getDescription(url, i);
  document.getElementById(
    "datalist"
  ).innerHTML = `<div class="loader" id="loader"></div>`;
  console.log("You click box", i);
  console.log(url);

  // let ddd = getDescription(url, i);

  document.querySelector(
    ".block"
  ).innerHTML = ` <div class="px-sm-5 px-2 blocks hide" style="display: none">
  <div class="row mt-5 justify-content-between">
    <div class="col-12 col-sm-5">
      <div class="search-section mx-0 mx-sm-3 px-sm-0 px-4 w-100">
        <img
          src="assets/search.svg"
          alt=""
          id="search-icon"
          onclick="javascript: displayResults()"
        />
        <input
          type="search"
          placeholder="   search for a country"
          class="shadow form-control ps-5 py-3 bg-white"
          name=""
          id="search"
        />
      </div>
    </div>

    <div class="col-sm-3 col-10 px-sm-0 mx-3 px-4 py-sm-0 py-3">
      <select
        class="form-select pe-5 py-3 shadow px-3"
        onchange="selectNum() "
        id="select"
      >
        <option selected disabled value="">Fliter By Region</option>

        <option value="Africa" class="region">Africa</option>
        <option value="America" class="region">America</option>
        <option value="Europe" class="region">Europe</option>
        <option value="Oceania" class="region">Oceania</option>
      </select>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row" id="datalist">
      <div class="loader" id="loader"></div>
    </div>
  </div>
</div>

<div id="DESC-SEC">

</div>`;
}

function showData(data) {
  console.log(data[0].flags.png);
  let display = "";

  for (let i in data) {
    if ((data.length = 40)) {
      display += `<div class="col-sm-3 col-12 my-3 my-sm-5" onclick="MoreInfo(${i})">
  <div class="container">
    <div class="cards country-cards shadow rounded">
      <img src=${data[i].flags.png} class="card-img-top img-fluid" style="height:180px" alt="..." />
      <div class="card-body">
        <div class="card-text px-4 py-4">
          <h5 class="my-1 country-name">${data[i].name.common}</h5>
          <div class="py-3">
            <span><b>Population</b> : ${data[i].population}</span>
            <span><b> Region</b> : ${data[i].region}</span>
            <span><b>Capital </b> : ${data[i].capital[0]}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
    }
    document.getElementById("datalist").innerHTML = display;
  }
}

//consume endpoints

let search = document.getElementById("search");
let search_icon = document.getElementById("search-icon");
let displayList = document.getElementById("datalist");

async function getheApiResult(url) {
  try {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    showData(data);
    console.log(data[0].flags);
  } catch (err) {
    console.log(err, "No data found");

    document.getElementById(
      "datalist"
    ).innerHTML = `<h2 class="px-5 text-center mx-auto my-5">Not Found in The Records</h2>`;
  }
}

//get value
search_icon.addEventListener("click", function () {
  let input = search.value;
  let searchApi = `https://restcountries.com/v3.1/name/${input}`;
  getheApiResult(searchApi);
});

//for the hit the icon for searching
function displayResults() {
  document.getElementById(
    "datalist"
  ).innerHTML = `<div class="loader" id="loader"></div>`;
  let input = search.value;
  let searchApi;
  if (input == "") {
    location.reload();
  } else {
    url = `https://restcountries.com/v3.1/name/${input}`;
    getheApiResult(url);
  }
}

//searcheds whne you hit eneter
search.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-icon").click();
  }
});

//selcte filter value
//pick endpoints
function selectNum() {
  document.getElementById(
    "datalist"
  ).innerHTML = `<div class="loader" id="loader"></div>`;
  var strUser = document.getElementById("select").value;
  console.log(strUser);
  url = `https://restcountries.com/v3.1/region/${strUser}`;
  getheApiResult(url);
}

//extract api
//display results
