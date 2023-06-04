<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body class="font-sans antialiased">
    <h1>hello</h1>
    <form method="post" action="{{route('verification.send')}}">
        @csrf
    </form>
    <button class="ml-3">
        {{ __('Log in') }}
    </button>
</body>
</html>
