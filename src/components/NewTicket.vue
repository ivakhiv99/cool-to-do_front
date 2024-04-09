<template>
	<div class="newTicket_Wrapper">
		<input
			type="text"
			placeholder="Ticket title here"
			v-model="ticketTitle"
		/>
		<button @click="addTicket">add</button>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const ticketTitle = ref('')

const addTicket = async () => {
	try {
		const res = await fetch('/api/add-ticket', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify({
				text: ticketTitle.value,
				isDone: false,
			}),
		})
		const data = await res.json()
		if (data.acknowledged) {
			ticketTitle.value = ''
			//TODO: need to notify list that a ticket was created // use emit ?
		} else throw new Error('')
	} catch (err) {
		console.error('could not create a ticket')
	}
}
</script>

<style lang="scss">
.newTicket_Wrapper {
	height: 150px;
	width: 100%;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 30px;

	input[type='text'] {
		outline: none;
		/* width: 60px; */
		height: 35px;
		padding: 0 10px;
		border-bottom: 1px solid #070c11;
		border-top: none;
		border-left: none;
		border-right: none;
		margin-right: 15px;

		color: #3e5871;
		font-weight: 700;
		font-size: 22px;

		&::placeholder {
			font-style: italic;
			font-weight: 500;
			color: #527597;
		}
	}
}
</style>
