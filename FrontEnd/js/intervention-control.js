const regSpecial = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

interventions = new Array();

inter_num = 0;
intervention_item = {
  intervention_num: ++inter_num,
  intervention_type: null,
  intervention_desc: null,
  intervention_Classifi: null,
};

const intervention_type = $("#intervention_box .intervention-type");

const intervention_fields = $("#intervention_box .intervention-fields");

$(document).on("click", "#add_intervention", function (event) {
  intervention_type.css("display", "block");
  $(this).parent("div").css("display", "none");
});

$(document).on(
  "click",
  "#intervention_box .intervention-type .type-item",
  function (event) {
    $(".intervention-type .type-item input[type=radio]").prop("checked", false);
    $(this).find("input[type=radio]").prop("checked", true);

    intervention_item.intervention_type = $(this)
      .find("input[type=radio]")
      .val();

    intervention_type.css("display", "none");
    intervention_fields.css("display", "flex");
    $(".intervention-type .type-item input[type=radio]").prop("checked", false);
  }
);

$(document).on("click", "#delete_type", function (event) {
  intervention_type.css("display", "none");
  $("#add_intervention").parent("div").css("display", "block");
});

$(document).on("click", "#delete_fields", function (event) {
  intervention_fields.css("display", "none");
  intervention_fields.find("input[type=text]").val("");
  intervention_fields.find(".errors").text("");
  $("#add_intervention").parent("div").css("display", "block");
});

$(document).on("click", "#record_intervention", function (event) {
  const description = $("#intervention_desc");
  const classifi = $("#Classification");

  if (description.val() == "") {
    description
      .next(".errors")
      .css("height", "auto")
      .text("*این فیلد الزامی است !");
  } else if (regSpecial.test(description.val())) {
    description
      .next(".errors")
      .css("height", "auto")
      .text("*متن وارد شده معتبر نیست !");
  } else {
    description.next(".errors").css("height", "0").text("");

    intervention_item.intervention_desc = description.val();
    intervention_item.intervention_Classifi = classifi
      .find("option:selected")
      .text();

    const intervention = {
      intervention_num: intervention_item.intervention_num,
      intervention_type: intervention_item.intervention_type,
      intervention_desc: intervention_item.intervention_desc,
      intervention_Classifi: intervention_item.intervention_Classifi,
    };
    interventions.push(intervention);
    intervention_item.intervention_num++;
    updateInterventions(interventions);
    intervention_fields.find("input[type=text]").val("");

    intervention_fields.css("display", "none");
    $("#add_intervention").parent("div").css("display", "block");
  }
});

$(document).on(
  "click",
  "#intervention_box .delete-intervention",
  function (event) {
    const newInterventions = interventions.filter(
      (item) => item.intervention_num != $(this).data("num")
    );
    interventions = newInterventions;
    updateInterventions(interventions);
  }
);

function updateInterventions(interventions) {
  $("#intervention_table table tbody tr").remove();
  if (interventions.length > 0) {
    $("#intervention_table .errors").text("");
  }
  interventions.forEach((item, index) => {
    $("#intervention_table table tbody").append(`
    <tr>
        <td>${item.intervention_num}</td>
        <td>${
          item.intervention_type == "intervention"
            ? "گروه مداخله"
            : "گروه کنترل"
        }</td>
        <td>${
          item.intervention_desc.length > 35
            ? item.intervention_desc.substring(0, 35)
            : item.intervention_desc
        }</td>
        <td>${item.intervention_Classifi}</td>
        <td>
        <a class="delete-intervention " data-num="${item.intervention_num}"><i
                                                            class="fa fa-trash"></i></a>
        </td>
    </tr>
    `);
  });
}
