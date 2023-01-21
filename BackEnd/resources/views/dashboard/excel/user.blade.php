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
<h2 class="mb-3" align="center">گزارش کاربران</h2>
<table align='center'>
    <thead>
    <tr>
        <th width='15' height='25' align="center"> شماره </th>
        <th width='15' height='25' align="center"> نام کاربری </th>
        <th width='35' height='25' align="center"> ایمیل </th>
        <th width='15' height='25' align="center"> وضعیت </th>
    </tr>
    </thead>
    <tbody>
    @php
        $counter = 1;
    @endphp
    @foreach ($array as $user)
        <tr>
            <td width='15' height='25' align="center" >{{$counter++}}</td>
            <td width='15' height='25' align="center">{{ $user->username }}</td>
            <td width='35' height='25' align="center" >{{ $user->email }}</td>
            <td width='15' height='25' align="center">{{$user->enabled ? 'تایید شده' : 'تایید نشده'}}</td>


        </tr>
    @endforeach
    </tbody>
</table>
</body>
</html>

