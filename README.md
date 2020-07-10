# Overview
On Tuesday we learned how to use jQuery to read json files using ajax to create a photo gallery. We implemented a filtering feature and styled it using floats. On Wednesday we learned about templating and Flexbox CSS. We implemented a pagination feature.

## Feature #1: Display images (Tuesday) - DONE
As a user, I want to view the images on the page so that I can browse the photo collection.

I used jQuery and Ajax to read data from a json file.

## Feature #2: Filter images (Tuesday) - DONE
As a user, I want to be able to filter the images so that I can view only images that match a keyword.

## Feature #3: Style the application (Tuesday) - DONE
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

I styled my layout using Flexbox instead of floats.

## Feature 1: Pagination (Wednesday)
As a user, I want to have the ability to view additional images so that my view does not become cluttered.

We added navigation for the user to switch between pages. Each page renders a unique set of images from provided JSON files. Each time we reset the filters, then repopulate them using only keywords from the images currently being displayed.

## Feature 2: Templating (Wednesday) - DONE
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

I created a Mustache template in the HTML.

## Feature 3: Sort the images (Wednesday)
As a user, I want to be able to sort the images so that there is an order to their rendering.

We added the ability for the user to sort the images by title or by number of horns.

## Stretch Goal: Detail view (Wednesday)
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

We added a detail view which will display the image in larger detail in the center of the screen with a colored background. When the user clicks off of the image, they return to the grid view. We used a transition/animation to show and hide the detail view of an image.

## Stretch Goal: Fuzzy search (Wednesday)
As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

We added an input element to allow users to search for an image by title or keyword. We write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.