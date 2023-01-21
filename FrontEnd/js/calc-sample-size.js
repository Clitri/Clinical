$(document).ready(function () {
  const type1 = `<div class="calc-type" id="type1">
    <div>
        <div class="form-group">
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>سطح اطمینان (α)</strong></label>
                <input type="number" id="number1" class="form-control"
                    placeholder="مقدار پیش فرض : 0.05"   step="0.01" />
            </div>
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>توان آزمون (ϭ - 1)</strong></label>
                <input type="number" id="number2"  class="form-control"
                    placeholder="مقدار پیش فرض : 0.9" step="0.01" />
            </div>
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>انحراف معیار جامعه اول (σ1)</strong></label>
                <input type="number" id="number3"  class="form-control"
                    placeholder="مقدار پیش فرض : 1" step="0.01" />
            </div>
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>انحراف معیار جامعه دوم (σ2)</strong></label>
                <input type="number" id="number4"  class="form-control"
                    placeholder="مقدار پیش فرض : 1" step="0.01" />
            </div>
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>میانگین جامعه اول (µ1)</strong></label>
                <input type="number" id="number5" class="form-control"
                    placeholder="مقدار پیش فرض : 0" step="0.01" />
            </div>
            <div class="col-12 col-md-6 px-2 py-3">
                <label><strong>میانگین جامعه دوم (µ2)</strong></label>
                <input type="number" id="number6" class="form-control"
                    placeholder="مقدار پیش فرض : 1" step="0.01" />
            </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary calc-sample-btn" type="button" id="avg1">محاسبه نمونه</button>
          <div class="text-center text-success" id="sample_size_success"></div>
           <div class="text-center text-danger" id="sample_size_error"></div>
        </div>
    </div>
  </div>`;
  const type2 = `<div class="calc-type" id="type2">
  <div>
    <div class="form-group">
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>سطح اطمینان (α)</strong></label>
            <input type="number" id="number1" class="form-control"
                placeholder="مقدار پیش فرض : 0.05" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>توان آزمون (ϭ - 1)</strong></label>
            <input type="number" id="number2"  class="form-control"
                placeholder="مقدار پیش فرض : 0.9" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong> شیوع جامعه اول (p1)</strong></label>
            <input type="number"  id="number7" class="form-control"
                placeholder="مقدار پیش فرض : 0.5" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong> شیوع جامعه دوم (p2)</strong></label>
            <input type="number" id="number8" class="form-control"
                placeholder="مقدار پیش فرض : 1" step="0.01" />
        </div>
    </div>
    <div class="text-center">
    <button class="btn btn-primary calc-sample-btn" type="button" id="Prevalence">محاسبه نمونه</button>
    <div class="text-center text-success" id="sample_size_success"></div>
     <div class="text-center text-danger" id="sample_size_error"></div>
  </div>
  </div>
  </div>`;
  const type3 = `<div class="calc-type" id="type3">
  <div>
    <div class="form-group">
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>سطح اطمینان (α)</strong></label>
            <input type="number" id="number1" class="form-control"
                placeholder="مقدار پیش فرض : 0.05" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>توان آزمون (ϭ - 1)</strong></label>
            <input type="number" id="number2" class="form-control"
                placeholder="مقدار پیش فرض : 0.9"  step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>اندازه اثر (ES)</strong></label>
            <input type="number" id="number9" class="form-control"
                placeholder="مقدار پیش فرض : 1" step="0.01" />
        </div>
    </div>
    <div class="text-center">
    <button class="btn btn-primary calc-sample-btn" type="button" id="avg_size">محاسبه نمونه</button>
    <div class="text-center text-success" id="sample_size_success"></div>
     <div class="text-center text-danger" id="sample_size_error"></div>
  </div>
  </div>
  </div>`;
  const type4 = `<div class="calc-type" id="type4">
  <div>
    <div class="form-group">
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>تعداد متغییرهای مستقل (m)</strong></label>
            <input type="number" id="number10" class="form-control"
                placeholder="مقدار پیش فرض : 2"/>
        </div>
    </div>
    <div class="text-center">
    <button class="btn btn-primary calc-sample-btn" type="button" id="linear">محاسبه نمونه</button>
    <div class="text-center text-success" id="sample_size_success"></div>
     <div class="text-center text-danger" id="sample_size_error"></div>
  </div>
  </div>
  </div>`;
  const type5 = `<div class="calc-type" id="type5">
  <div>
    <div class="form-group">
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>تعداد متغییرهای مستقل (m)</strong></label>
            <input type="number" id="number10" class="form-control"
                placeholder="مقدار پیش فرض : 2"/>
        </div>
    </div>
    <div class="text-center">
    <button id="logistic"  class="btn btn-primary calc-sample-btn" type="button">محاسبه نمونه</button>
    <div class="text-center text-success" id="sample_size_success"></div>
     <div class="text-center text-danger" id="sample_size_error"></div>
  </div>
  </div>
  </div>`;
  const type6 = `<div class="calc-type" id="type6">
  <div>
    <div class="form-group">
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>سطح اطمینان (α)</strong></label>
            <input type="number" id="number1" class="form-control"
                placeholder="مقدار پیش فرض : 0.05" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>مقدار شیوع (p)</strong></label>
            <input type="number" id="number11" class="form-control"
                placeholder="مقدار پیش فرض : 0.5" step="0.01" />
        </div>
        <div class="col-12 col-md-6 px-2 py-3">
            <label><strong>طول بازه اطمینان (d)</strong></label>
            <input type="number" id="number12" class="form-control"
                placeholder="مقدار پیش فرض : 1" step="0.01" />
        </div>
    </div>
    <div class="text-center">
    <button class="btn btn-primary calc-sample-btn" type="button" id="prevalenceEst">محاسبه نمونه</button>
    <div class="text-center text-success" id="sample_size_success"></div>
     <div class="text-center text-danger" id="sample_size_error"></div>
  </div>
  </div>
  </div>`;

  if ($("#sample-type").find(":selected").val() == "type1") {
    $("#formula_form_box").html(type1);
  } else if ($("#sample-type").find(":selected").val() == "type2") {
    $("#formula_form_box").html(type2);
  } else if ($("#sample-type").find(":selected").val() == "type3") {
    $("#formula_form_box").html(type3);
  } else if ($("#sample-type").find(":selected").val() == "type4") {
    $("#formula_form_box").html(type4);
  } else if ($("#sample-type").find(":selected").val() == "type5") {
    $("#formula_form_box").html(type5);
  } else if ($("#sample-type").find(":selected").val() == "type6") {
    $("#formula_form_box").html(type6);
  }

  $("#sample-type").on("change", function () {
    if ($(this).find(":selected").val() == "type1") {
      $("#formula_form_box").html(type1);
    } else if ($(this).find(":selected").val() == "type2") {
      $("#formula_form_box").html(type2);
    } else if ($(this).find(":selected").val() == "type3") {
      $("#formula_form_box").html(type3);
    } else if ($(this).find(":selected").val() == "type4") {
      $("#formula_form_box").html(type4);
    } else if ($(this).find(":selected").val() == "type5") {
      $("#formula_form_box").html(type5);
    } else if ($(this).find(":selected").val() == "type6") {
      $("#formula_form_box").html(type6);
    }
  });
});
