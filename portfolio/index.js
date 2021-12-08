
fetch("./components/person/person.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("person").innerHTML = data;
  });
