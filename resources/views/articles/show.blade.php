@extends('app')


@section('content')
	<h1 style="color:#BF0000;">{{ $article->title }}</h1>
	

	<article>
		{{ $article->body }}
	</article>

@stop