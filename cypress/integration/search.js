describe('Search elements', ()=>{
    it('search for elements with multiple results', ()=>{
        cy.visit('/')
        cy.fixture('index').then((index)=>{
            cy.get(index.searchAction).click();
            cy.get(index.searchInput).type('A52s');
            cy.get(index.searchButtonAction).click();
            
        })
        cy.fixture('searchResult1').then((searchResult1)=>{
            cy.get(searchResult1.searchButtonAction).click()
        })
        
        cy.fixture('searchResult2').then((searchResult2)=>{
            cy.get(searchResult2.searchButtonBuyAction).click();
            cy.get(searchResult2.searchBanner).should('contain', 'Hasta 12 cuotas sin interés');
        })
    })
})
