// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        'R6xmma6F4U6edNQuu67M0gUQlmOqpxuV4Jrfcsyj8CcZQWFEpJGH%2Bd8S4qF6CBpdjPlIqZrQ3r6NBSxV%2BHM4R%2FhfWI7uAc9nTU7Y%2BsOeBE%2FwOdUQnml1Qt639oLkOD%2F9nqbIgRvchhnFEzppztIZkOF%2BNOeKQKqe0AC2ln1yBWkcUHRHXz1GZUd3XHnchb589htKN5jHjTmCAurq0qlFq1F6GyYtcHeIaiUWCdY0TNxO1SKxv7HuPHoDRQRvPQGdiZZ2j7MX2a8SWDXNiLCo1X1jBvkTdU7xCqkeMdaYse7E7OfjAmjFQw6GhBLwuFkL%2BZRCDYHBWZZ4OkuaUKT%2Bp4%2BCkUD%2BgrKaYOUCD4O33siNrducQD2HkszvkugKUbGkTC9nD1iC%2FDBtxaNUixtTgFMAv5ucYm8h5IKRWcw%2Fe4jJMEmyBGGH8fOpFFnP4g7MeEh7Y4Wh2EIsGPpZP%2FgMtd4OlfTJA8j%2FwNB5iUVKrwA%3D000362'
    )
})
