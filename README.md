[![español](https://img.shields.io/static/v1?label=lang&message=español&color=green)](https://github.com/essequie1/React-e-commerce/blob/master/README.es.md)

# SARTORIAL

Sartorial is an e-commerce web application made for a fictitious clothing store. It was developed in the course Frontend Development with React of [CoderHouse](https://www.coderhouse.com/), in the span of approximately 2 months (from May 7 to April 27, 2023).

# 🛠️ **¡¡¡PROJECT IN DEVELOPMENT!!!** 🛠️

Handovers were as follows:
  - March 16th:** First pre-handover (Components).
  - April 4th:** Second pre-handover (Routes).
  - April 27th:** Final project.
  
## 📚 Contents:

  - [Base requirements](#%EF%B8%8F-base-requirements)
  - [Extra requirements (Optional)](#%EF%B8%8F-extra-requirements-optional)
  - [My Approach](#%EF%B8%8F-my-approach)

## ⚙️ Base requirements

  - **Index:**
    - The base Route ("/") shows all the available products, and also has access to the shopping cart (in the "/cart" route). The navbar should have categories that will show the products that are contained in the same category (in the "/categories/:categoryId" route).
    
  - **Flow:**
    - When clicking on a product, it will show that product's details (in the "/item/:id" route), the id of the product will be generated by the database.
    Inside the details you should ee product pictures, a description, the price, and be able to select a quantity and add them to the cart. There should be an error handling for when the the user tries to change the URL and access another ID that doesn't exists.
    
  - **Firebase:**
    - There should exist at least 2 collections: "products" for all the data about the products, and "orders" for all the orders that all the users could make when purchasing something. Optionally a collection for the categories can be created, so that they work dinamically with the items ("/categories/:product_id").
    
  - **Cart:**
    - The shopping cart should be accessible during the whole experience and it has to show how many items are inside of it.
    
  - **Checkout:**
    - The checkout proccess has to show the item quantities and the total price of the order, plus the option of adding adding user information (name, surname, phone and mail with verification). When doing the checkout the user should get prompted with an "orderId" to access the order information at any time.
    
## 🕹️ Extra requirements (Optional)

  - [X] **Auth/Login:**
    - Implement a auth service from Firebase.
    
  - [X] **Whislist:**
    - Allow the user to save products to a wishlist and make it accessible from the navbar. This wishlist should allow the user to add items directly to the cart.
    
  - [X] **Custom Item:**
    - The user should be able to add a set of features to the product (size, color, etc.). This customization should NOT modify the price, and should be detailed at checkout.
    
  - [ ] **Stock Check:**
    - When adding items to the cart check if there's available stock.
    
  - [ ] **Dinamic categories:**
    - Add a collection for the categories to firebase and hidrate the menu with that.
    
  - [X] **Persistent cart:**
    - Make the cart persistent utilizing localStorage or sessionStorage.
    
  - [ ] **My orders:**
    - With the orderId the user should be able to see all the information about the order he made without showing personal data.
    
## 🛠️ My Approach
