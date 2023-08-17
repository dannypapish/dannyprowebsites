# dannyprowebsites
This repository contains JavaScript, JQuery, CSS and PHP code snippets along with general tips and instructions which I used to enhance the appereance
of my projects and create a more interactive and user-friendly display.  

**For sidebar**: Location: the sidebar in https://dannyprowebsites.com. I built this site with wordpress and elementor, and the idea was to create an interactive sidebar which will expand horizontally once
the user clicks or hovers the toggle button, and will be minimized once the user scrolls or clicks anywhere else on the screen. On mobile view,
the sidebar is replaced with a top header.
This was quite challenging since Wordpress and elementor generally have low integration with this kind of complexity, so I had to implement a few workarounds. 
For starters, I created an Elementor section which is divided into five columns:  

- a logo image with the class: '.logo'.  
-  a toggle icon  with a class '.sidbar-toggle' which is initially hidden (opacity:0, initially when the webpage is loaded, the sidebar is expanded) and with position:absolute.
- an icon-list with a class of '.navigation' which displays all the website's menu-links.
- a hidden HTML box which contains the JavaScript code.
- a bottom section that contains my picture and introductory details with a class of '.user'.

In addition, I created another section and container which are invisible in the large device view, but will become visible on mobile view:
- a section for mobile menu-header with the class 'mobile-header' which is divided to three equal-width horizontal columns: one for the phone icon,
  one for the logo, and one for the mobile toggle icon.
- a container for the phone number display which is visible on large screen, but will be hidden on mobile view.

After initially positioning all the elements in the desired spots using the elemntor tools,
I inserted the code in sidebar.js into the HTML box in the first section, and the code in sidbar.css in the "Custom CSS" tab of the main section.  

**For slider**: Location: in https://dannyprowebsites.com, middle of the main page, to the
right of the "Want to appear here as well?" headline, below the "about" section. The idea was to create an interactive display using a "mockup" which is basically a nice way to display my different projects using a loop of video slides
that present a glance video views of different websites inside of a tv-shaped frame. This was, again, quite challenging since wordpress
and elementor don't offer this feature by default. moreover, a lot of times the JavaScript code of the video feature is interfering with the elementor base code,
which can create errors that can lead to crashes and malfunctioning. Therefore, it is important to be very precise in this kind of coding.
The whole feature was done using HTML, JavaScript and CSS, with almost no use of Elementor other than initial framing and positioning.  

First, I created an elementor section which represents the designated area for the mockup. Inside I placed a div which is used as a wrapper for the mockup frame with the videos inside (the whole setup was premade using a media editing software called "kapwing"). The first element inside the div is an "h3" element titled: "Hover to watch video display"
which is surrounded by a black-transparent background that bounces in and out slowly, grabbing the attention of the user. 
Once the user hovers the mouse cursor over the frame, the div with the text dissappears and the slideshow begins. 
If the user is moving the cursor out of the section area, the video freezes. Once the cursor is moved back inside the frame, the video continues to run from
the point it froze.  

In the bottom of the mockup there is a "pagination" div, which is basically 4 bullet points that allow the user to go over the different videos. 
Each point is linked to a different video, and once the user is clicking on a point, the mockup display changes to the corresponding video.   
Next are the video divs: initially, three videos have a "0" opacity to keep them invisible, and only one has a "1" opacity and will initially be displayed. 
Each div has the "muted" property, to ensure the video won't start playing until the user will hover over the section. When that happens,
a property called 'onmouseover', which is the second property of each video, triggers a fucntion called play() that plays the video. 
The third property of each video is "onmouseout()=this.stop()" which stops the video once the mouse cursor is out of the section. 
Each video also has a class and an id for more flexibility and options to menuver their display.   

Next are the "onended" functions which are in charge of the loop - when one video is finished, the next one will play, creating an infinite loop
that will terminate as soon as the user moves the mouse cursor out of the section. In addition, it marks the associated pagination bullet by changing its color to "black" differentiating it from the other bullets.  

The last functions are p1,p2,p3 and p4 that represent the display of the four videos - when one needs to be played, its opacity becomes "1" and it will be visible, 
while the rest will get a "0" opacity. The videos were created using "kapwing", which is an excellent software that allows you to efficiently
capture screen recordings along with advanced tools for editing the video. The slider.js code goes into the HTML box, while the "slider.css" goes into
the "Custom CSS" tab of the same box.  

*On mobile display, there is a different setup - same mockup but with images instead of videos. This is sense Wordpress's security settings are not allowing videos to play on mobile view. 

**For swiperSlider:** located in http://nadlan1.org/assets/ (any of the assets in the display). The website is a real estate site which allows the admin to easily upload new assets and edit their info (headline, description, photo gallery etc.) that are available for rent or sale, using the "custom fields" CMS. One of the sections in each asset page is an interactive slider, where the admin can upload asset-related photos which will loop infinitely until a user-interaction. The user also has the ability to control the slides by using the two arrows in the right and left side of the frame, and the pagination buttons in the bottom. Was made with a combination of PHP, JavaScript, CSS, the "Cloudfate CDN" library and was inserted via the 'Wordpress' plugin 'XYZ PHP Code Snippets' in the designated elemntor section. as for the custom code:  

The body section contains the slideshow structure:

- A div element with a class of "grid-container" is used to create a container for the slideshow.
- Inside the "grid-container" div, there is another div with a class of "swiper-container". This is the main container for the Swiper slider.
- Inside the "swiper-container" div, there is a div with a class of "swiper-wrapper". This will contain the individual slides/images.  

The PHP Code:  

- using a loop to iterate over images from the field "gallery1" which is fetched using the get_field function.
- For each image in the corresponding "gallery" array, it creates an img element with a class of "swiper-slide" and sets the image source using the url property of the image array.

The JavaScript code:  

- initializes the Swiper slider using predefined properties of the "cloudfare" custom library and gives the developer an option to define them as he wishes.
- selects the "swiper-container" element to create the slider inside it.
- The 'loop: true' option makes the slider loop continuously.
- 'centeredSlides: true' centers the active slide.
- 'slidesPerView: 1' means it displays one slide at a time.
- 'speed: 500' sets the speed of the slide transition to 500ms.
 - The autoplay option enables automatic slide switching with a delay of 5000ms (5 seconds). It will stop sliding when the user interacts with the slider (disableOnInteraction: true).
- The pagination option enables pagination with clickable dots, and it specifies the element with the class "swiper-pagination" as the pagination container.  
- The navigation option enables navigation arrows (previous and next) and specifies the elements with the classes "swiper-button-prev" and "swiper-button-next" as the buttons.






