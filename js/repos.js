$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/rolandocosme/repos",
    success: function(repos) {
      for(var i = 0; i < repos.length; i++) {
        var newListItem = buildListGroup(repos[i]);
        $(".list-group").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert("Something went wrong. We are looking into it!");
    }
  });

  function buildListGroup(commitData) {
    var commitsApiUrl = "https://api.github.com/repos/rolandocosme/";
     commitsApiUrl += commitData.name + "/";
     commitsApiUrl += "commits";
    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(commitData.full_name);
    return newLink;
  }
});




