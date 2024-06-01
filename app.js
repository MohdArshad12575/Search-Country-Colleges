let inp = document.querySelector("input");
let btn = document.querySelector(".s-btn");

let url = "http://universities.hipolabs.com/search?country=";
let country = "";

async function getColleges(country) {
  try {
    let result = await axios.get(url + country);
    return result.data;
  } catch (error) {
    return [];
  }
}
function show(colArray) {
  let list = document.querySelector("#lists");
  list.innerText = "";
  for (col of colArray) {
    let name = col.name;
    let li = document.createElement("li");
    li.innerText = name;
    list.appendChild(li);
  }
}

btn.addEventListener("click", async () => {
  country = inp.value;
  let colArray = await getColleges(country);
  show(colArray);
});
