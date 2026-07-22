@extends('emails.layouts.main')


@section('content')
    <div>
        <b><?= $code ?></b> — ваш код для входа на сайт.
    </div>

    <div>
        Если вы не запрашивали код для входа на сайт, то можете игнорировать это письмо.
    </div>
@endsection