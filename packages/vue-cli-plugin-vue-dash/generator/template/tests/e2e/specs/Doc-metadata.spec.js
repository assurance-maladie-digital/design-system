// https://docs.cypress.io/api/introduction/api.html
describe('Check metadata', () => {
	beforeEach(()=>{
		cy.visit('/');
	})

	it('looks inside the head content using `cy.document()`', () => {
		// this will yield the entire window.document object
		// if you click on DOCUMENT from the command log,
		// it will output the entire #document to the console
		cy.document()
	  })
	
	  // or make assertions on any of the metadata in the head element
	
	  it('looks inside <title> tag', () => {
		cy.get('head title')
		  .should('contain', 'CNAM')
	  })
	
	  it('looks inside <meta> tag for description', () => {
		cy.get('head meta[name="description"]')
		  .should('have.attr', 'content', "My cat&#39;s pajamas project.")
	  })
});
