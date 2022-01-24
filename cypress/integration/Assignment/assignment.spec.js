/// <reference types="cypress" />
import BasePage from  "../../PageObject/BasePage";
const base_page = new BasePage;

import signIn from  "../../PageObject/loginPage";
const login = new signIn;

import SearchPage from  "../../PageObject/search";
const search = new SearchPage ;


describe('Assignment login-> ', () => {

  it('Go to the login website and check website properly loaded', () => {
    base_page.go_to_page();
    cy.get('#anonLogin').click()
  })
  it("fill up the form and click on submit",()=>
  {
    const number = "01842184018";
    const password = "anik@2645";
    login.fill_up_login_form(number,password);
    login.click_on_submit();
  })

  // it("logging out from the website",()=>
  // {
  //   login.logout();
  // })


})
