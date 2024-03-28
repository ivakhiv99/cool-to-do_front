<template>
	<div class="ticket_item_wrapper">
		<input type="checkbox" :checked="ticketData.isDone" />
		<p :class="ticketData.isDone ? 'crossedText' : ''">
			{{ ticketData.text }}
		</p>
	</div>
</template>

<script lang="ts">
export default {
	props: ['ticketData'],
}
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
	justify-content: flex-start;
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
	input[type='checkbox'] {
		margin-right: 15px;
		width: 20px;
		height: 20px;
	}
}
</style>
