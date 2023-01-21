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

        <h2>اطلاعات کاربران</h2>
        <div class="date">{{ $date }}</div>
        <table>
            <thead>
                <tr class="header">
                    <th>شماره</td>
                    <th>نام کاربری</td>
                    <th>ایمیل</td>
                    <th>وضعیت </td>
                </tr>
            </thead>
            <tbody>
                @php($counter = 1)
                @foreach ($array as $user)
                    <tr class="row border-bottom">
                        <td class="col-lg-4 ">
                            <p>{{ $counter++ }}</p>
                        </td>
                        <td class="col-lg-4 ">
                            <p>{{ $user->username }}</p>
                        </td>
                        <td class=" col-lg-4 ">
                            <p>{{ $user->email }}</p>
                        </td>
                        <td class=" col-lg-4 ">
                            <div class="input-group">
                                <p>{{ $user->status ? 'تاییدشده' : 'تایید نشده' }}</p>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>

</body>

</html>
