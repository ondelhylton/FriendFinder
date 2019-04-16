$.material.init();

Survey.defaultBootstrapMaterialCss.navigationButton = "btn btn-green";
Survey.defaultBootstrapMaterialCss.rating.item = "btn btn-default my-rating";
Survey.StylesManager.applyTheme("bootstrapmaterial");

var json = {
  pages: [
    {
      questions: [
        {
          type: "text",
          name: "qa",
          title: "What is your name?"
        },

        {
          type: "text",
          name: "qb",
          title: "What is your age?"
        },

        {
          type: "text",
          name: "qc",
          title: "Link to Photo Image (Required)"
        },

        {
          type: "matrix",
          name: "Quality",
          title:
            "Indicate how strongly you agree or disagree with the following statements",
          columns: [
            {
              value: 1,
              text: "Strongly Disagree"
            },
            {
              value: 2,
              text: "Disagree"
            },
            {
              value: 3,
              text: "Neutral"
            },
            {
              value: 4,
              text: "Agree"
            },
            {
              value: 5,
              text: "Strongly Agree"
            }
          ],
          rows: [
            {
              value: "q1",
              text:
                "Your mind is always buzzing with unexplored ideas and plans."
            },
            {
              value: "q2",
              text:
                "Generally speaking, you rely more on your experience than your imagination."
            },
            {
              value: "q3",
              text:
                "You find it easy to stay relaxed and focused even when there is some pressure."
            },
            {
              value: "q4",
              text: "You rarely do something just out of sheer curiosity."
            },
            {
              value: "q5",
              text:
                "It is often difficult for you to relate to other people’s feelings."
            },
            {
              value: "q6",
              text:
                "In a discussion, truth should be more important than people’s sensitivities."
            },
            {
              value: "q7",
              text: "You rarely get carried away by fantasies and ideas."
            },
            {
              value: "q8",
              text:
                "You think that everyone’s views should be respected regardless of whether they are supported by facts or not."
            },
            {
              value: "q9",
              text:
                "You feel more energetic after spending time with a group of people."
            },
            {
              value: "q10",
              text: "People can rarely upset you."
            }
          ]
        }
      ]
    }
  ]
};

window.survey = new Survey.Model(json);
survey.onComplete.add(function(result) {
  document.querySelector("#surveyResult").innerHTML =
    "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({
  model: survey
});

//                         // Capture the form inputs
// $("#submit").on("click", function(event) {
//     event.preventDefault();

//     // Form validation
//     function validateForm() {
//       var isValid = true;
//       $(".form-control").each(function() {
//         if ($(this).val() === "") {
//           isValid = false;
//         }
//       });

//       $(".chosen-select").each(function() {

//         if ($(this).val() === "") {
//           isValid = false;
//         }
//       });
//       return isValid;
//     }

//     // If all required fields are filled
//     if (validateForm()) {
//       // Create an object for the user"s data
//       var userData = {
//         name: $("#name").val(),
//         photo: $("#photo").val(),
//         scores: [
//           $("#q1").val(),
//           $("#q2").val(),
//           $("#q3").val(),
//           $("#q4").val(),
//           $("#q5").val(),
//           $("#q6").val(),
//           $("#q7").val(),
//           $("#q8").val(),
//           $("#q9").val(),
//           $("#q10").val()
//         ]
//       };

//       // AJAX post the data to the friends API.
//       $.post("/api/friends", userData, function(data) {

//         // Grab the result from the AJAX post so that the best match's name and photo are displayed.
//         $("#match-name").text(data.name);
//         $("#match-img").attr("src", data.photo);

//         // Show the modal with the best match
//         $("#results-modal").modal("toggle");

//       });
//     } else {
//       alert("Please fill out all fields before submitting!");
//     }
//   });
