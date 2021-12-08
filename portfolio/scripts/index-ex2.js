fetch("./components/person/person2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("person").innerHTML = data;
  });

fetch("./components/skills/skills2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("skills").innerHTML = data;
  });

fetch("./components/blogs/blogs2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("blogs").innerHTML = data;
  });

fetch("./components/blog/blog2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("blog").innerHTML = data;
  });

fetch("./components/hobbies/hobbies2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("hobbies").innerHTML = data;
  });

fetch("./components/experiences/experiences2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("experiences").innerHTML = data;
  });

fetch("./components/projects/projects2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("projects").innerHTML = data;
  });

fetch("./components/project/project2.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("project").innerHTML = data;
  });


