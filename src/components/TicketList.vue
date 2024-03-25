<template>
	<div class="ticket_list_wrapper">
		<Ticket
			v-for="ticket in tickets"
			:key="ticket.text"
			:ticketData="ticket"
		/>
	</div>
</template>

<script lang="ts">
import Ticket from './Ticket.vue'

export default {
	data() {
		return {
			tickets: [
				{
					text: 'learn Vue',
					isDone: false,
				},
				{
					text: 'learn Node',
					isDone: false,
				},
				{
					text: 'make a project',
					isDone: false,
				},
			],
		}
	},
	components: {
		Ticket,
	},
}
</script>

<style lang="scss">
.ticket_list_wrapper {
	width: 100%;
	height: 100vh;
	padding: 50px 20px;
	background-color: #2c3e50;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
</style>
