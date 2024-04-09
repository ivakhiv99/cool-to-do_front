<template>
	<div class="ticket_item_wrapper">
		<div class="ticket_item_content">
			<input
				type="checkbox"
				v-model="isChecked"
				@change="handleCheckbox"
			/>
			<p :class="isChecked ? 'crossedText' : ''">
				{{ ticketData.text }}
			</p>
		</div>
		<div>
			<button @click="deleteTicket">delete</button>
		</div>
	</div>
</template>

<script lang="ts">
import { TicketType } from '../types/tickets'
import { defineComponent, PropType, ref } from 'vue'

export default defineComponent({
	emits: ['ticketDeleted'],
	props: {
		ticketData: {
			type: Object as PropType<TicketType>,
			required: true,
		},
	},
	setup(props, { emit }) {
		const isChecked = ref(props.ticketData.isDone)

		const handleCheckbox = async () => {
			try {
				const res = await fetch(
					`/api/edit-ticket/${props.ticketData._id}`,
					{
						method: 'PATCH',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ isDone: isChecked.value }),
					}
				)
				const data = await res.json()
				if (!data.acknowledged) {
					throw new Error('')
				}
			} catch (err) {
				console.error('could not update ticket')
				isChecked.value = !isChecked.value
			}
		}

		const deleteTicket = async () => {
			try {
				const res = await fetch(
					`/api/remove-ticket/${props.ticketData._id}`,
					{ method: 'DELETE' }
				)
				const data = await res.json()
				if (!data.acknowledged) {
					throw new Error('')
				} else {
					emit('ticketDeleted')
				}
			} catch (err) {
				console.error('could not delete a ticket')
			}
		}

		return { isChecked, handleCheckbox, deleteTicket }
	},
})
</script>

<style lang="scss">
.ticket_item_wrapper {
	width: 450px;
	height: 150px;
	padding: 15px 20px 15px 35px;
	background-color: #fff;
	border-radius: 20px;
	margin-bottom: 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	.ticket_item_content {
		display: flex;
		align-items: center;

		p {
			color: #2c3e50;
			font-size: 22px;
			font-weight: 700;
		}

		.crossedText {
			text-decoration: line-through;
			color: #3e5871;
		}
	}

	input[type='checkbox'] {
		margin-right: 15px;
		width: 20px;
		height: 20px;
		cursor: pointer;
	}
}
</style>
