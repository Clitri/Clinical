import gaussian from "https://cdn.skypack.dev/gaussian";

$(document).ready(function () {
    const distribution = gaussian(0, 1);

    function logistic(event) {
        event.preventDefault();
        const independent_variables = $("#number10");
        let sample_size;
        if (independent_variables.val() != "") {
            sample_size = 100 + 50 * parseInt(independent_variables.val());
        } else {
            sample_size = 100 + 50 * 2;
        }

        if (
            parseInt(independent_variables.val()) < 0 ||
            parseInt(independent_variables.val()) % 1 > 0
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else {
            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        }
    }

    function linear(event) {
        event.preventDefault();
        const independent_variables = $("#number10");
        let sample_size;
        if (independent_variables.val() != "") {
            sample_size = 50 + 8 * parseInt(independent_variables.val());
        } else {
            sample_size = 50 + 8 * 2;
        }

        if (
            parseInt(independent_variables.val()) < 0 ||
            parseInt(independent_variables.val()) % 1 > 0
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else {
            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        }
    }

    function avg1(event) {
        event.preventDefault();
        const alpha = $("#number1");
        const betha = $("#number2");
        const sigma1 = $("#number3");
        const sigma2 = $("#number4");
        const mu1 = $("#number5");
        const mu2 = $("#number6");

        const alphaValue = alpha.val();
        const bethaValue = betha.val();
        const sigma1Value = sigma1.val();
        const sigma2Value = sigma2.val();
        const mu1Value = mu1.val();
        const mu2Value = mu2.val();

        let sample_size;

        if (
            !alphaValue &&
            !bethaValue &&
            !sigma1Value &&
            !sigma2Value &&
            !mu1Value &&
            !mu2Value
        ) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - 0.05 / 2).toFixed(5)
            );
            const zBetha = parseFloat(distribution.ppf(1 - 0.9).toFixed(5));
            const alpBet = zAlpha + zBetha;
            const zPower = Math.pow(alpBet, 2);
            const sigma = 1 ** 2 + 1 ** 2;
            const muPower = (1 - 0) ** 2;
            const n = (zPower * sigma) / muPower;

            sample_size = n.toFixed(0);

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else if (
            parseFloat(alphaValue) <= 0 ||
            parseFloat(bethaValue) <= 0 ||
            (parseFloat(sigma1Value) <= 0 &&
                parseFloat(sigma1Value) % 1 == 0) ||
            (parseFloat(sigma2Value) <= 0 &&
                parseFloat(sigma2Value) % 1 == 0) ||
            (parseFloat(mu1Value) <= 0 && parseFloat(mu1Value) % 1 == 0) ||
            (parseFloat(mu2Value) <= 0 && parseFloat(mu2Value) % 1 == 0)
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else if (
            parseFloat(alphaValue) > 0 &&
            parseFloat(bethaValue) > 0 &&
            parseFloat(sigma1Value) > 0 &&
            parseFloat(sigma2Value) > 0 &&
            parseFloat(mu1Value) > 0 &&
            parseFloat(mu2Value) > 0
        ) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - alphaValue / 2).toFixed(5)
            );
            const zBetha = parseFloat(
                distribution.ppf(1 - bethaValue).toFixed(5)
            );

            const zPower = (zAlpha + zBetha) ** 2;
            const sigma = sigma1Value ** 2 + sigma2Value ** 2;
            const muPower = (mu2Value - mu1Value) ** 2;
            const n = (zPower * sigma) / muPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else {
            $("#sample_size_error").text("*لطفا همه فیلد ها را پر کنید!");
            $(".form-questions #2 #sample_size_success").text(``);
        }
    }

    function Prevalence(event) {
        event.preventDefault();
        const alpha = $("#number1");
        const betha = $("#number2");
        const p1 = $("#number7");
        const p2 = $("#number8");

        const alphaValue = alpha.val();
        const bethaValue = betha.val();
        const p1Value = p1.val();
        const p2Value = p2.val();

        let sample_size;

        if (!alphaValue && !bethaValue && !p1Value && !p2Value) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - 0.05 / 2).toFixed(5)
            );
            const zBetha = parseFloat(distribution.ppf(1 - 0.9).toFixed(5));
            const zPower = (zAlpha + zBetha) ** 2;

            const pq = 0.5 * 1 + 1 * 1;

            const pPower = (0.5 - 1) ** 2;

            const n = (zPower * pq) / pPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else if (
            parseFloat(alphaValue) <= 0 ||
            parseFloat(bethaValue) <= 0 ||
            parseFloat(p1Value) <= 0 ||
            parseFloat(p2Value) <= 0
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else if (
            parseFloat(alphaValue) > 0 &&
            parseFloat(bethaValue) > 0 &&
            parseFloat(p1Value) > 0 &&
            parseFloat(p2Value) > 0
        ) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - alphaValue / 2).toFixed(5)
            );
            const zBetha = parseFloat(
                distribution.ppf(1 - bethaValue).toFixed(5)
            );
            const zPower = (zAlpha + zBetha) ** 2;

            const pq = p1Value * (1 - p1Value) + p2Value * (1 - p2Value);

            const pPower = (p1Value - p2Value) ** 2;
            const n = (zPower * pq) / pPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else {
            $("#sample_size_error").text("*لطفا همه فیلد ها را پر کنید!");
            $(".form-questions #2 #sample_size_success").text(``);
        }
    }

    function avgSize(event) {
        event.preventDefault();
        const alpha = $("#number1");
        const betha = $("#number2");
        const es = $("#number9");

        console.log("check");

        const alphaValue = alpha.val();
        const bethaValue = betha.val();
        const esValue = es.val();

        let sample_size;

        if (!alphaValue && !bethaValue && !esValue) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - 0.05 / 2).toFixed(5)
            );
            const zBetha = parseFloat(distribution.ppf(1 - 0.9).toFixed(5));
            const zPower = (zAlpha + zBetha) ** 2;

            const esPower = 1 ** 2;

            const n = zPower / esPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else if (
            parseFloat(alphaValue) <= 0 ||
            parseFloat(bethaValue) <= 0 ||
            parseFloat(esValue) <= 0
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else if (
            parseFloat(alphaValue) > 0 &&
            parseFloat(bethaValue) > 0 &&
            parseFloat(esValue) > 0
        ) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - alphaValue / 2).toFixed(5)
            );
            const zBetha = parseFloat(
                distribution.ppf(1 - bethaValue).toFixed(5)
            );
            const zPower = (zAlpha + zBetha) ** 2;

            const esPower = esValue ** 2;

            const n = zPower / esPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else {
            $("#sample_size_error").text("*لطفا همه فیلد ها را پر کنید!");
            $(".form-questions #2 #sample_size_success").text(``);
        }
    }

    function prevalenceEst(event) {
        event.preventDefault();
        const alpha = $("#number1");
        const p = $("#number11");
        const d = $("#number12");

        const alphaValue = alpha.val();
        const pValue = p.val();
        const dValue = d.val();

        let sample_size;

        if (!alphaValue && !pValue && !dValue) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - 0.05 / 2).toFixed(5)
            );
            const zPower = (zAlpha / 1) ** 2;

            const n = 0.5 * (1 - 0.5) * zPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else if (
            parseFloat(alphaValue) <= 0 ||
            parseFloat(pValue) <= 0 ||
            parseFloat(dValue) <= 0
        ) {
            $("#sample_size_error").text(
                "*مقادیر ورودی باید مثبت و معتبر باشند!"
            );
            $(".form-questions #2 #sample_size_success").text(``);
        } else if (
            parseFloat(alphaValue) > 0 &&
            parseFloat(pValue) > 0 &&
            parseFloat(dValue) > 0
        ) {
            const zAlpha = parseFloat(
                distribution.ppf(1 - alphaValue / 2).toFixed(5)
            );
            const zPower = (zAlpha / dValue) ** 2;

            const n = pValue * (1 - pValue) * zPower;

            sample_size = Math.abs(parseInt(n.toFixed(0)));

            $(".form-questions #2 input[name=sample_size]").val(sample_size);
            $(".form-questions #2 #sample_size_success").text(
                `مقدار نمونه محاسبه شده ${sample_size} است.`
            );
            $("#sample_size_error").text("");
        } else {
            $("#sample_size_error").text("*لطفا همه فیلد ها را پر کنید!");
            $(".form-questions #2 #sample_size_success").text(``);
        }
    }
    $("#logistic").on("click", logistic);
    $("#linear").on("click", linear);
    $("#avg1").on("click", avg1);
    $("#Prevalence").on("click", Prevalence);
    $("#avg_size").on("click", avgSize);
    $("#prevalenceEst").on("click", prevalenceEst);

    $("#sample-type").on("change", function (event) {
        $("#logistic").on("click", logistic);
        $("#linear").on("click", linear);
        $("#avg1").on("click", avg1);
        $("#Prevalence").on("click", Prevalence);
        $("#avg_size").on("click", avgSize);
        $("#prevalenceEst").on("click", prevalenceEst);

        $(".form-questions #2 #sample_size_success").text("");
    });
});
