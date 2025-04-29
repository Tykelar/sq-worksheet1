describe('home page spec', () => { 
  it('passes', () => { 
    cy.visit('<YOUR CLOUDFLARE WORKER URL>') 
  }) 
 
  it('h1 contains "MEI"', () => { 
    cy.visit('<YOUR CLOUDFLARE WORKER URL>'); 
    cy.get('h1').contains('MEI') 
  }) 
}) 