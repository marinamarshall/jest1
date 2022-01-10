/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => {
    //  document.body.innerHTML = "<p id='par'></p>";
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

 });
 
 describe("DOM tests", () => {
     test("Expects p content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     // Testing if h1 tag exists
     test("h1 should exist", () => {
         // Stored in an array, if h1 exists, length of array will be one
         expect(document.getElementsByName("h1").length).toBe(1);
     });
 });


