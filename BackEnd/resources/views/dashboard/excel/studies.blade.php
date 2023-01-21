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
<h2 class="mb-3" align="center">گزارش طرح ها</h2>
<table align='center'>
    <thead>
    <tr>
        <th width='15' height='25' align="center">شماره</th>
        <th width='15' height='25' align="center">عنوان</th>
        <th width='15' height='25' align="center">نام اختصاری</th>
        <th width='15' height='25' align="center">تاریخ شروع کارآزمایی</th>
        <th width='15' height='25' align="center">تاریخ پایان کارآزمایی</th>
        <th width='15' height='25' align="center">جنسیت</th>
        <th width='15' height='25' align="center">حداقل سن</th>
        <th width='15' height='25' align="center">حداکثر سن</th>
    </tr>
    </thead>
    <tbody>
    @php
        $counter = 1;
    @endphp
    @foreach ($studies as $study)
        <tr>
            <td width='15' height='25' align="center" >{{$counter++}}</td>
            <td width='15' height='25' align="center">{{ $study->title }}</td>
            <td width='35' height='25' align="center" >{{ $study->name }}</td>
            <td width='35' height='25' align="center" >{{ $study->start_date }}</td>
            <td width='35' height='25' align="center" >{{ $study->end_date }}</td>
            <td width='35' height='25' align="center" >{{ $study->gender->title }}</td>
            <td width='35' height='25' align="center" >{{ $study->maximum_age != null ? $study->maximum_age[0].'سال و '.$study->maximum_age[1].'ماه و '.$study->maximum_age[2].'روز' : '' }}</td>
            <td width='35' height='25' align="center" >{{$study->minimum_age != null ?  $study->minimum_age[0].'سال و '.$study->minimum_age[1].'ماه و '.$study->minimum_age[2].'روز' : '' }}</td>


        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>

