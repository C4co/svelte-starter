describe('Welcome component', () => {
	it('Check component render', () => {
		cy.visit('/')
		cy.contains('Svelte Starter')
	})
})
