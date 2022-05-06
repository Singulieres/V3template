<script setup lang="ts">
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
	<h2>{{ msg }}</h2>
	<br>
	<el-button type="primary" @click="count++">count is: {{ count }}</el-button>
	<p>
		<br>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>
</template>

<style scoped>
a {
	color: #42b983;
}

label {
	margin: 0 0.5em;
	font-weight: bold;
}

code {
	background-color: #eee;
	padding: 2px 4px;
	border-radius: 4px;
	color: #304455;
}
</style>
