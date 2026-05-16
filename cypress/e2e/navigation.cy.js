describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("navigates to Home page", () => {
    cy.get("body").should("exist");
    cy.contains("Home").click();
  });

  it("navigates to About page", () => {
    cy.contains("About").click();
    cy.contains("About").should("exist");
  });

  it("navigates to Card Set page", () => {
    cy.contains("Card Set").click();
    cy.contains("Card Set").should("exist");
  });
});