# Online Shopping Reactjs

This project is the product of a coding challenge for frontends. The objective was to build a single page application that included 3 pages between it. 
The theme was a Checkout Process so I would need to make:
* A products list page for product and quantity selection
* The atual checkout page
* The success page

Minor warning: this page was made using dummy data from [faker.js](https://rawgit.com/Marak/faker.js/master/examples/browser/index.html#commerce), so it might be normal for a car that costs $50 and has a description and image different from the product name to happear. 

## How to run the project

This project is being hosted on Netlify, so if you want to take a quick look at the demo you can simply head over to [online-shopping-reactjs.netlify.app](https://online-shopping-reactjs.netlify.app/).

## How it works

Like it was previously said, the theme of the project was a Checkout Process.
### Shopping Page

1. You will first be presented with the products list that consists of five random products. 
2. To add a product to your cart you will need to click on the `add to cart` icon button (it is located on the bottom right of the product card). 
3. A modal will pop-up and you'll see that 1 of that item was already added to the cart, but you'll still be able to either add more quantity or remove the item from the cart.
4. You can see the summary of your cart by clicking on the `cart` icon on the top right corner of the page. In here you'll also be able to proceed to checkout or empty your cart.

### Checkout Page
1. The Checkout Page is divided into 2 steps. The Shipping details and the Order review.
2. The shipping details is the first step. In here you fill out a form  with details like your name, email, phone number, and the shipping address, postal code and country. If these details were already saved from a previous purchase this form will be automatically filled.
3. The order review is the second step. It has two sections. The summary of the products you're buying and a more compact summary of the shipping details you just filled. If those exact shipping details aren't the ones saved you can also choose to save them for a future purchase.

### Confirmation page
1. Since we are not making a real purchase, you will be redirect to a success page.
2. This is a basic page with a thank you message and the details of the items you bought and the total price paid.
3. You can either return back to the home page by clicking the button at the end of the card or the icon/page name on the navbar.

## How it was made

Given time constrains, this project wasn't made entirely from scratch. It is the adaptation of a previous exercise I did a few months back while helping a friend better understand React. Since I liked the design of that exercise, and the theme matched this one, this was the approach I decided to take.

### Technologies used

* The core of this project is without doubt the [Material-UI](https://material-ui.com/) framework. It was made with almost only the components from the `@material-ui/core` and `@material-ui/icons` packages.
* Given that this isn't a large project, and honestly because of personal preference, I decided to go with the `React Context API` to pass and store data between components.
* Next we have `react-router-dom` which was a must because we were building a single page application.
* To reduce the number of renders during the filling of the shipping details form the package `react-hook-form` was used.
* To generate random dummy data for the products list we used `faker.js`.
* `localStorage` was used to store the shipping details (when the user decides to save them) and `lodash` to more easily check if what was saved and the current shipping details were equal.

## Improvments

There is obviously room for improvments. Since we need to ensure that the code meets a certain quality standart and saves time on the long run when developing and catching bugs, the most obvious improvment this project needs is the unit tests.
Next is the absence of Typescript. I love Typescript because it makes my code easier to read and less open to bugs. I tried to migrate my existing project to Typescript but some errors ocurred and given time constrains this was something that I decided to leave aside.

Following those we have some minor improvments that would turn this into a bit more complex page:
* Having the ability to see the saved shipping details and add more / remove them.
* Choose between filling the shipping form or use one of the saved details. Right now it just auto fills the shipping form if you saved the details from another purchase.
* Purchase history section
* Having a proper product list, and with that, storing the current shopping cart to prevent it from being cleared on refresh. I atempted to do this but since we use faker.js, when we reload the page the products also get randomized. This would mean that some products already on the cart wouldn't be on the current products you could choose from.
