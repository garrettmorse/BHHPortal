var uploadFile = function() {
  var params = new URLSearchParams(window.location.search);

  var loader = document.getElementById("loading");
  loader.setAttribute("class", "loader");

  var body = new FormData();
  var subject = document.getElementById("file-form-subject").value;
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

  fetch("http://18.216.125.191:5000/add/" + params.get("name"), {
    mode: "cors",
    method: "POST",
    body: body
  }).then(function(response) {
    var success = document.getElementById("success");
    var onSuccess = document.createTextNode("Upload Complete!");
    success.innerHTML = "Upload Complete!";
    loader.setAttribute("class", "");
  });

  return false;
};
