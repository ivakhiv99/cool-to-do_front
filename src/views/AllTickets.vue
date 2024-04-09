<template>
	<div class="allTickets_Wrapper">
		<TicketList />
		<NewTicket />
	</div>
</template>

<script lang="ts" setup>
import TicketList from '../components/TicketList.vue'
import NewTicket from '../components/NewTicket.vue'
</script>

<style lang="scss">
.allTickets_Wrapper {
	height: 100vh;
	background-color: #2c3e50;
}
</style>
