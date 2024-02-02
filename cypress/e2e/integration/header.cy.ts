describe("Header", () => {
  it("links to the correct pages", () => {
    cy.visit("http://localhost:5173/")

    cy.get('[data-testid="logo"]').click()
    cy.location("pathname").should("eq", "/")

    cy.get('[data-testid="browse-category"]').click()
    cy.location("pathname").should("eq", "/category/")

    cy.get('[data-testid="button-cart"]').click()
    cy.location("pathname").should("eq", "/cart/")
  })
})