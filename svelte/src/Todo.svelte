<script>
    import { onMount } from "svelte";
    let todos;
    onMount(async () => {
        await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            todos = data
        })
    })
</script>

<div>
    <h1>To do</h1>
    <p>These are your to do</p>
    {#if todos}
        {#each todos as todo }
            <ul>
                {#if todo.completed}
                    <li class="completed">    
                        {todo.title}
                    </li>
                {:else}
                    <li>    
                        {todo.title}
                    </li>
                {/if}
            </ul>
        {/each}
    {:else}
        <p class="loading">loading...</p>
    {/if}
</div>

<style>
	div {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		div {
			max-width: none;
		}
	}

    loading {
    opacity: 0;
    animation: 0.4s 0.8s forwards fade-in;
    }

    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    li {
        list-style-type: georgian;
    }

    .completed {
        text-decoration: line-through;
        color: #2196f3;
    }
</style>