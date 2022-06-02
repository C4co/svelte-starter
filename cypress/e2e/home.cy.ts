describe('Home', () => {
	it('Check home page', () => {
		cy.visit('/')
		cy.contains('Svelte Starter')
	})
})
