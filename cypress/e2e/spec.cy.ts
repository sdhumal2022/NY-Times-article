/// <reference types="cypress" />

describe('CpArticleListing Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=WV5mBWo5fY5zO1T3AUpPKeeqlzDHKeNr', {
      fixture: 'articles.json'
    }).as('getArticles');

    cy.visit('http://localhost:3000/'); // Adjust this to the URL where your component is rendered
  });

  it('should display articles correctly', () => {
    cy.wait('@getArticles').then((interception) => {
      if (interception.response) {
        cy.log(JSON.stringify(interception.response.body)); // Log the intercepted response to verify the fixture data
      } else {
        cy.log('No response received for the intercepted request');
      }
    });

    // Wait for the article list to appear and verify its presence
    cy.get('.article-list-item', { timeout: 30000 }).should('have.length', 2); // Assuming your fixture has 2 articles

    cy.get('.article-list-item').first().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'image1_large.jpg');
      cy.get('.article-title').should('contain', 'Title 1');
      cy.get('.article-date').should('contain', '2023-07-01');
      cy.get('.desc').should('contain', 'Abstract 1');
    });

    cy.get('.article-list-item').last().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'image2_large.jpg');
      cy.get('.article-title').should('contain', 'Title 2');
      cy.get('.article-date').should('contain', '2023-07-02');
      cy.get('.desc').should('contain', 'Abstract 2');
    });
  });
});
