<template>
	<div class="ticket_item_wrapper">
		<input type="checkbox" :checked="ticketData.isDone" />
		<p>{{ ticketData.text }}</p>
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
		font-size: 22px;
		font-weight: 700;
	}

	input[type='checkbox'] {
		margin-right: 15px;
	}
}
</style>
