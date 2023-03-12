let male = document.querySelector(".radio input[name='male']");

let female = document.querySelector(".radio input[name='female']");
console.log(male);

male.addEventListener("click", () => {
  male.classList.add("radio-clicked");
  female.classList.remove("radio-clicked");
  console.log(male);
});

female.addEventListener("click", () => {
  male.classList.remove("radio-clicked");
  female.classList.add("radio-clicked");
});
