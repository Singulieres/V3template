<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>V3template</h1>
	<br>
	<HelloWorld msg="Vue 3 + TypeScript + Vite + Vue Router + Element Plus + Axios + Auto imports" />
	<br>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link>
	</nav>
	<br>
	<router-view />
</template>

<style>
* {
	padding: 0;
	margin: 0;
}

html,
body,
#app {
	width: 100%;
	height: 100%;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
