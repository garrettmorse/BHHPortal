var uploadFile = function() {
  var params = new URLSearchParams(window.location.search);

  var body = new FormData();
  var subject = document.getElementById("file-form-subject").value
  var details = {
    name: "Dr. Stevens",
    phone: "513 760 2878",
    email: "stevens.994@osu.edu",
    subject: subject,
    notes: ""
  };

  for (const detail in details) {
    body.append(detail, details[detail]);
  }

  var files = document.getElementById("input-file").files;

  for (let i = 0; i < files.length; i += 1) {
    body.append(`file-${i}`, files[i]);
  }

  fetch("http://localhost:5000/add/" + params.get("name"), {
    mode: "cors",
    method: "POST",
    body: body
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
    });


  return false;
};
