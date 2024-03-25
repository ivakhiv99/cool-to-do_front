<template>
	<TicketList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TicketList from './components/TicketList.vue'

export default defineComponent({
	name: 'App',
	components: {
		TicketList,
	},
})
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	margin: 0;
}
* {
	box-sizing: border-box;
}
</style>
