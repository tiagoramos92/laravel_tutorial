@extends('app')

@section('content')
	<h1 style="color:#BF0000;">Articles</h1>
	<br/>

	@foreach ($articles as $article)
		<article>
			<h2>
				<a href="{{ url('/articles', $article->id) }}">{{ $article->title }}</a>
			</h2>
			<br/>

			<div class="body">
				{{ $article->body }}
			</div>

		</article>

	@endforeach

@stop