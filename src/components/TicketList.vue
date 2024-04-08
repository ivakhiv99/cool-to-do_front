<template>
	<div class="ticket_list_wrapper">
		<div v-if="!isLoading && tickets.length" class="">
			<Ticket
				v-for="ticket in tickets"
				:key="ticket.text"
				:ticketData="ticket"
			/>
		</div>
		<div v-else-if="isLoading" class="loaderWrapper">
			<p>Loading data...</p>
		</div>
	</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Ticket from './Ticket.vue'
import { TicketType } from '../types/tickets'

export default {
	setup() {
		const tickets = ref<TicketType[]>([])
		const isLoading = ref(false)

		const fetchTickets = async () => {
			try {
				isLoading.value = true
				const res = await fetch('/api/all-tickets')
				const parsedResult = await res.json()
				isLoading.value = false
				tickets.value = parsedResult
				if (!res.ok) {
					throw Error('something wrong :[')
				}
			} catch (err) {
				console.error(err)
			}
		}
		fetchTickets()

		return { tickets, isLoading }
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

	.loaderWrapper {
		font-weight: 700;
		color: #fff;
	}
}
</style>
