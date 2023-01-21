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
<h2 class="mb-3" align="center">گزارش طراحان</h2>
<table align='center'>
    <thead>
    <tr>
        <th width='15' height='25' align="center"> شماره </th>
        <th width='15' height='25' align="center"> نام </th>
        <th width='15' height='25' align="center"> نام خانوادگی</th>
        <th width='35' height='25' align="center"> کد ملی </th>
        <th width='15' height='25' align="center"> مرتبه علمی </th>
        <th width='15' height='25' align="center"> رشته </th>
        <th width='15' height='25' align="center"> تخصص </th>
        <th width='15' height='25' align="center"> دانشگاه </th>
        <th width='15' height='25' align="center"> سازمان </th>
    </tr>
    </thead>
    <tbody>
    @php
        $counter = 1;
    @endphp
    @foreach ($researchers as $researcher)
        <tr>
            <td width='15' height='25' align="center" >{{$counter++}}</td>
            <td width='15' height='25' align="center">{{ $researcher->name }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->f_name }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->n_number }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->range }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->major }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->proficiency }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->university }}</td>
            <td width='35' height='25' align="center" >{{ $researcher->organization }}</td>


        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>

