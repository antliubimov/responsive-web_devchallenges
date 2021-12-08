
fetch("./components/person/person1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("person").innerHTML = data;
  });

fetch("./components/skills/skills1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("skills").innerHTML = data;
  });

fetch("./components/blog/blog1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("blog").innerHTML = data;
  });

fetch("./components/hobbies/hobbies1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("hobbies").innerHTML = data;
  });

fetch("./components/experiences/experiences1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("experiences").innerHTML = data;
  });

fetch("./components/projects/projects1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("projects").innerHTML = data;
  });

fetch("./components/project/project1.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("project").innerHTML = data;
  });

fetch("./components/pagination/pagination.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("pagination").innerHTML = data;
  });
