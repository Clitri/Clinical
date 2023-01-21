<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            direction: rtl;
            font-size: 0.9em;
            font-family: 'examplefont', sans-serif;
            text-align: center;
        }

        table {
            width: 100%;
            text-align: center;
        }


        table thead th {
            color: white !important;
            background-color: #55a5c5;
            padding: 10px 0 !important;
            border-bottom: 1px solid #2091bd;
        }

        table tbody td {
            padding: 7px 0;
            border-bottom: 1px solid #a6d1e2;
        }

        .mb-3 {
            margin-bottom: 20px;
        }


        .pagination {
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            background-color: #2091bd;
            color: white;
            font-size: 1.3em;
        }

        .border-bottom {
            border-bottom: 1px solid #ccc;
        }


        .date {
            float: left;
            text-align: left;
        }
    </style>
</head>

<body>
<div class="pdf-content">

    <h2>طرح ها </h2>
    <div class="date">{{ $date }}</div>
    <table class="box ">
        <thead>
        <tr class="header">
            <th>شماره</th>
            <th>عنوان</th>
            <th>نام اختصاری</th>
            <th>تاریخ شروع کارآزمایی</th>
            <th>تاریخ پایان کارآزمایی</th>
            <th>جنسیت</th>
            <th>حداقل سن</th>
            <th>حداکثر سن</th>
        </tr>
        </thead>
        <tbody>
        @php($counter = 1)
        @foreach ($studies as $study)
            <tr class="row">
                <td class="col-lg-4 ">
                    <p>{{ $counter++ }}</p>
                </td>
                <td class="col-lg-4 ">
                    <p>{{ $study->title }}</p>
                </td>
                <td class="col-lg-4 ">
                    <p>{{ $study->name }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $study->start_date }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $study->end_date }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $study->gender->title }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{$study->maximum_age != null ? $study->maximum_age[0].'سال و '.$study->maximum_age[1].'ماه و '.$study->maximum_age[2].'روز' : '' }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{$study->minimum_age != null ? $study->minimum_age[0].'سال و '.$study->minimum_age[1].'ماه و '.$study->minimum_age[2].'روز' : '' }}</p>
                </td>

            </tr>
        @endforeach
        </tbody>
    </table>

</div>

</body>

</html>
