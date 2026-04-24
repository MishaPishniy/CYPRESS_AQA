class InventoryPage {
  selectors = {
    pageTitle: '[data-test="title"]',
    inventoryItems: ".inventory_item",
    sortDropdown: '[data-test="product-sort-container"]',
    burgerMenuButton: "#react-burger-menu-btn",
    logoutLink: "#logout_sidebar_link",
  };

  getPageTitle() {
    return cy.get(this.selectors.pageTitle);
  }

  getInventoryItems() {
    return cy.get(this.selectors.inventoryItems);
  }

  getSortDropdown() {
    return cy.get(this.selectors.sortDropdown);
  }

  getBurgerMenuButton() {
    return cy.get(this.selectors.burgerMenuButton);
  }

  getLogoutLink() {
    return cy.get(this.selectors.logoutLink);
  }

  verifyInventoryPageIsOpened() {
    cy.url().should("include", "/inventory.html");
    this.getPageTitle().should("be.visible").and("have.text", "Products");
  }

  verifyItemsCountGreaterThan(number) {
    this.getInventoryItems().should("have.length.greaterThan", number);
  }

  sortBy(value) {
    this.getSortDropdown().select(value);
  }

  verifySelectedSortValue(value) {
    this.getSortDropdown().should("have.value", value);
  }

  openBurgerMenu() {
    this.getBurgerMenuButton().click();
  }

  clickLogout() {
    this.getLogoutLink().should("be.visible").click();
  }

  logout() {
    this.openBurgerMenu();
    this.clickLogout();
  }
}

export default new InventoryPage();
