<script>
	import { Router, Link, Route } from 'svelte-routing';
	import Home from './Home.svelte';
	import Todo from './Todo.svelte';
	
</script>

<main>
	<Router>
		<nav>
			<Link to="/">Home</Link>
			<Link to="todo">To do</Link>
		</nav>
		<div>
			<Route path="/" component={Home} />
			<Route path="todo" component={Todo} />
		</div>
	</Router>
</main>

