/// <reference types="cypress" />

describe('CpArticleListing Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=WV5mBWo5fY5zO1T3AUpPKeeqlzDHKeNr', {
      fixture: 'articles.json'
    }).as('getArticles');

    cy.visit('http://localhost:3000/'); // Ensure this matches your application's route for CpArticleListing component
  });

  it('should display articles correctly', () => {
    cy.wait('@getArticles').then((interception) => {
      if (interception.response) {
        cy.log('API Response:', interception.response.body); // Log intercepted response to verify data
      } else {
        cy.log('No response received for the intercepted request');
      }
    });

    // Wait for article list to appear and verify its presence
    cy.get('.article-list-item', { timeout: 60000 }).should('have.length', 2); // Adjust timeout as necessary

    // Additional checks on each article item
    cy.get('.article-list-item').first().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'image1_large.jpg'); // Adjust image src based on fixture data
      cy.get('.article-title').should('contain', 'Title 1'); // Adjust title based on fixture data
      cy.get('.article-date').should('contain', '2023-07-01'); // Adjust date based on fixture data
      cy.get('.desc').should('contain', 'Abstract 1'); // Adjust abstract based on fixture data
    });

    cy.get('.article-list-item').last().within(() => {
      cy.get('img').should('have.attr', 'src').and('include', 'image2_large.jpg'); // Adjust image src based on fixture data
      cy.get('.article-title').should('contain', 'Title 2'); // Adjust title based on fixture data
      cy.get('.article-date').should('contain', '2023-07-02'); // Adjust date based on fixture data
      cy.get('.desc').should('contain', 'Abstract 2'); // Adjust abstract based on fixture data
    });
  });
});
