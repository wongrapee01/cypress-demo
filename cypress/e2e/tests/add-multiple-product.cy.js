import { LoginPage } from "../pages/LoginPage";
import { MultipleProduct } from "../pages/MultipleProducts";

const loginPage = new LoginPage();
const multipleProduct = new MultipleProduct();

describe("Product Browse & Interaction", () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.loginAsStandardUser();
  });
  it("TC_011 Add 3 items ", () => {
    const itemsToAdd = [
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
    ];
    //เพิ่ม 3 รายการ
    multipleProduct.addMultipleProducts(itemsToAdd);
    multipleProduct.verifyCartCount(3);
  });

  it("TC_012 Add 3 items and remove 1", () => {
    const itemsToAdd = [
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
      "Sauce Labs Bolt T-Shirt",
    ];
    //เพิ่ม 3 รายการ
    multipleProduct.addMultipleProducts(itemsToAdd);
    //ลบ 1 รายการ
    multipleProduct.removeProductFromCart("Sauce Labs Bike Light");
    //ควรเหลือ 2 รายการ
    multipleProduct.verifyCartCount(2);
  });
});
