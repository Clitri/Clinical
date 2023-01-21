
$(document).ready(function () {
    const id = $(".form-questions").data("id");
    $.get(`/dashboard/study/intervention/${id}`, function (interventions) {
        console.log(window.interventions);

        window.interventions =
            interventions.map((item, index) => {
                return {
                    intervention_num: ++index,
                    intervention_type: item.intervention_type,
                    intervention_desc: item.intervention_desc,
                    intervention_Classifi: item.intervention_Classifi,
                };
            });

        console.log(window.interventions);

        updateInterventions(window.interventions);
        window.intervention_item.intervention_num = ++$("#intervention_table tbody tr").length;

    });
});
function updateInterventions(interventions) {
    $("#intervention_table table tbody tr").remove();
    interventions.forEach((item, index) => {
        console.log(item);
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
                                                              class="fa-solid fa-trash"></i></a>
          </td>
      </tr>
      `);
    });
}

