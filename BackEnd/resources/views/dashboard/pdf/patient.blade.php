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

    <h2>اطلاعات بیماران</h2>
    <div class="date">{{ $date }}</div>
    <table>
        <thead>
        <tr class="header">
            <th>شماره</th>
            {{--            <th>نام کاربری</th>--}}
            {{--            <th>ایمیل</th>--}}
            <th>نام و نام خانوادگی</th>
            <th>کدملی</th>
            <th>تاریخ تولد</th>
            <th>جنسیت</th>
            <th>وضعیت تاُهل</th>
            <th>قد</th>
            <th>وزن</th>
            <th>شهر</th>
            <th>عارضه</th>
            {{--            <th>وضعیت</th>--}}
        </tr>
        </thead>
        <tbody>
        @php($counter = 1)
        @foreach ($patients as $patient)
            <tr class="row border-bottom">
                <td class="col-lg-4 ">
                    <p>{{ $counter++ }}</p>
                </td>
                {{--                <td class="col-lg-4 ">--}}
                {{--                    <p>{{ $patient->user->username }}</p>--}}
                {{--                </td>--}}
                {{--                <td class=" col-lg-4 ">--}}
                {{--                    <p>{{ $patient->user->email }}</p>--}}
                {{--                </td>--}}
                <td class=" col-lg-4 ">
                    <p>{{ $patient->name.' '.$patient->f_name }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->n_number }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->birthdate }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->gender->title }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->marriage ? 'متاُهل' : 'مجرد'  }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->height }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->weight }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->province->name }}</p>
                </td>
                <td class=" col-lg-4 ">
                    <p>{{ $patient->sickness->name  }}</p>
                </td>
                {{--                <td class=" col-lg-4 ">--}}
                {{--                    <div class="input-group">--}}
                {{--                        <p>{{ $patient->user->status ? 'تاییدشده' : 'تایید نشده' }}</p>--}}
                {{--                    </div>--}}
                {{--                </td>--}}

            </tr>
        @endforeach
        </tbody>
    </table>

</div>

</body>

</html>
