type TicketType = {
	text: 'string'
	isDone: boolean
	_id: string
}

interface ITicketData extends TicketType {
	bruh: string
}

export { TicketType, ITicketData }
