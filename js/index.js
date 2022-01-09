var copyright = document.getElementById("copyright");
var lastUpdatedDate = new Date(document.lastModified);
copyright.innerHTML = "&copy " + lastUpdatedDate.getFullYear();
document.getElementById("lastUpdated").innerHTML =
  "Last Updated: " + document.lastModified;
