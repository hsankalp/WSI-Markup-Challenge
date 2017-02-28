DOCUMENTATION:

I am using Node Package Manager (comes with nodejs installation) and Bower Package Manager to install dependencies and Gulp to clean build, inject dependencies into the build and for initiating a server for front end code.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

How to run the app:

1. Install nodejs if not on the system, which installs npm too
2. Use command line (gitbash for windows) to install bower if not on the system:
		npm install -g bower
		
	NOTE: npm is used to manage nodejs modules or development tools such as gulp, bower etc while bower is used to find packages from bower repository which is solely for the front-end.

3. Extract the zip file and go to the WSI directory
	
4. Use command line to install gulp if not on the system:
		npm install -g gulp
5. Install all dependencies from package.json (created by npm init command) by:
		npm install
6. Install all dependencies from bower.json (created by bower init command) by:
		bower install
7. Run the app by:
		gulp serve
	
	NOTE: gulp serve first injects all the css, jss and bower components in the index.html and then initiates the server to test the code which runs on localhost:3000

8. Once the app launches on the default browser, it opens http://localhost:<port number>/#/ which is a dummy home page. All tabs on the navigation bar can be clicked (also dummy pages). These pages were created just to show the angular routing functionality

9. To open the markup challenge page (apron page), go to: http://localhost:<port number>/#/homekeeping/apron/1 	

10. Once the page opens, 
	a. We can click the smaller images to view the larger image. 
	b. The color in the product's title also changes based on the small image selection
	c. We can enter a number in the quantity field which is mandatory to add to the cart. It takes numbers from 1 to the product's quantity (i.e. 100 in the json file)
	d. Below add to cart button, there are 3 tabs which can be expanded and collapsed individually.
	e. Once u enter the quantity, press add to cart which opens a modal which shows the product (with details) was added to the basket.
	
	
	NOTE: I referred the Williams Sonoma website to see the functionality on the front End. The additional info section was created referring from the website's sections. Since the gallery is a bit different from the original website, I made the smaller images section as a color chooser which I saw for many items on the website. So instead of creating multiple json objects, I created only one which has an images array whcih has multiple js objects of colors and their images. 
		
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser Compatibility:

The app was tested successfully on: 
	- IE11
	- Google Chrome v56.0.2924.87 
	- Mozilla Firefox v43.0.1

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Responsive Design:

The app is created with responsive design and runs successfully on smaller windows (mobile screen size) as well.