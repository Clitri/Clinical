<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>7learn Laravel PDF</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
</head>
<style>
    tr, th, td {
        border: solid #4e555b;
        padding: 15px;
        text-align: center;
    }

    th {
        font-size: 22px;
    }

    table {
        border-collapse: collapse;
    }

    body {
        font-family: 'examplefont', sans-serif;
    }
</style>
<body>
<h2 class="mb-3" align="center">گزارش بیماران</h2>
<table align='center'>
    <thead>
    <tr>
        <th width='15' height='25' align="center"> شماره </th>
{{--        <th width='15' height='25' align="center"> نام کاربری </th>--}}
{{--        <th width='35' height='25' align="center"> ایمیل </th>--}}
        <th width='35' height='25' align="center"> نام و نام خانوادگی </th>
        <th width='35' height='25' align="center"> کد ملی </th>
        <th width='35' height='25' align="center">تاریخ تولد</th>
        <th width='35' height='25' align="center">جنسیت</th>
        <th width='35' height='25' align="center">وضعیت تاُهل</th>
        <th width='35' height='25' align="center">قد</th>
        <th width='35' height='25' align="center">وزن</th>
        <th width='35' height='25' align="center">شهر</th>
        <th width='35' height='25' align="center">عارضه</th>
{{--        <th width='15' height='25' align="center"> وضعیت </th>--}}
    </tr>
    </thead>
    <tbody>
    @php
        $counter = 1;
    @endphp
    @foreach ($patients as $patient)
        <tr>
            <td width='15' height='25' align="center" >{{$counter++}}</td>
{{--            <td width='15' height='25' align="center">{{ $patient->user->username }}</td>--}}
{{--            <td width='35' height='25' align="center" >{{ $patient->user->email }}</td>--}}
            <td width='35' height='25' align="center" >{{ $patient->name.' '.$patient->f_name }}</td>
            <td width='35' height='25' align="center" >{{ $patient->n_number }}</td>
            <td width='35' height='25' align="center" >
                {{ $patient->birthdate }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->gender->title }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->marriage ? 'متاُهل' : 'مجرد'  }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->height }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->weight }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->province->name }}
            </td>
            <td width='35' height='25' align="center" >{{ $patient->sickness->name  }}
            </td>
{{--            <td width='15' height='25' align="center">{{$patient->user->enabled ? 'تایید شده' : 'تایید نشده'}}</td>--}}


        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>

