$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $(".commit-table").empty();
        for(var i = 0; i < commits.length; i++) {
          $(".commit-table").append(buildTableRow(commits[i]));
        }
      }
    })
  });

  function buildTableRow(commitData) {
    var messageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);
    var authorTd = $("<td>").append(commitData.commit.committer.name);

    return $("<tr>").append(dateTd)
      .append(messageTd)
      .append(dateTd)
      .append(authorTd);
  }
});