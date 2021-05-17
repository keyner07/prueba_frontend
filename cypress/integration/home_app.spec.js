describe('E2E tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    it('frontpage can be opened', () => {
        cy.contains('Top Rated');
        cy.screenshot();
    })

    it('should can add fav', () => {
        cy.get('.ant-card:first').get('button:first').click();
        cy.get('.ant-btn-dangerous')
        cy.contains('Favourites Movies').click();
        cy.get('.ListOfMovies > .ant-row:last').children().should('have.length',1)
    })

    it('should can delete fav from favourites page', () => {
        cy.get('button:first').click();
        cy.contains('Favourites Movies').click();
        cy.get('.ant-btn-dangerous').click();
    })

    it('should can show details of a movie, rate movie and check the movie in rated movies page', () => {
        cy.get('.ant-card:last').within(() => {
            cy.get('a').click();
        });

        cy.contains('Description:')

        cy.get('.ant-space-item').first().within(() => {
            cy.get('ul>li').each(($el)=> {
                cy.wrap($el).click()
            })
        })
        cy.contains('Enviar').click();

        cy.screenshot()
        cy.wait(500);

        cy.contains('Rated movies').click();
        cy.contains('Peliculas votadas por mi')
        
        cy.get('.ListOfMovies > .ant-row:last').children().should('have.length',1)
        cy.screenshot()
    })

    it('home page should be have 20 movies', () => {
        cy.get('.ListOfMovies > .ant-row:last').children().should('have.length',20)
    })
    it('similar movie should have 8 movies before click more movies later should more than 8', () => {
        cy.visit('http://localhost:3000/movies/278');

        cy.get('.ListOfMovies > .ant-row').children().as('getListOfMovies')

        cy.get('@getListOfMovies').should('have.length',9)
        cy.contains('More movies').click();

        cy.get('@getListOfMovies').should('have.length.greaterThan',8);
        cy.contains('Less movies');

        cy.contains('More movies').should('not.exist');
    })
})
