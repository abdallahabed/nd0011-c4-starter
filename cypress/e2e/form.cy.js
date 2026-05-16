describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  it("creates a set (happy path)", () => {
    cy.get("form").then(($form) => {
      const form = $form[0];

      const input = form.querySelector("#titleInput");
      if (input) {
        input.value = "Biology Set";
        input.dispatchEvent(new Event("input", { bubbles: true }));
      }

      form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    cy.contains("Biology Set", { timeout: 10000 }).should("exist");
  });

  it("shows error on empty submission", () => {
    cy.get("form").then(($form) => {
      const form = $form[0];

      form.dispatchEvent(new Event("submit", { bubbles: true }));
    });

    cy.get("p.error").should("exist");
  });
});