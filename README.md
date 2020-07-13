# Overview
On Tuesday we learned how to use jQuery to read json files using ajax to create a photo gallery. We implemented a filtering feature and styled it using floats. On Wednesday we learned about templating and Flexbox CSS. We implemented a pagination feature.

## Feature #1: Display images (Lab 2)
As a user, I want to view the images on the page so that I can browse the photo collection.

I used jQuery and Ajax to read data from a json file.

## Feature #2: Filter images (Lab 2)
As a user, I want to be able to filter the images so that I can view only images that match a keyword.

I used the filter() method to create a new array with elements that had a keyword that matched the selected option.

## Feature #3: Style the application (Lab 2)
As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images in a grid like pattern.

I styled my layout using Flexbox.

## Feature 4: Pagination (Lab 3)
As a user, I want to have the ability to view additional images so that my view does not become cluttered.

I added navigation for the user to switch between pages that render a unique set of images. Pagination is updated each time the filter or search bar is used.

## Feature 5: Templating (Lab 3)
As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

I created a Mustache template in the HTML to structure each creature.

## Feature 6: Sort the images (Lab 3)
As a user, I want to be able to sort the images so that there is an order to their rendering.

I added the ability for the user to sort the images by title or by number of horns.

## Stretch Goal: Detail view (Lab 3)
As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

I added a detail view which displays the image in larger detail in the center of the screen. When the user clicks off of the image or clicks the "X", they return to the grid view.

## Stretch Goal: Search (Lab 3)
As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

I added an input element to allow users to search for an image by title. The results are narrowed down and displayed every time the user presses the Enter key or clicks the Go button.