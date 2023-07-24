# dannyprowebsites
This repository contains JavaScript, JQuery, CSS and PHP code snippets along with general tips and instructions which I used to enhance the appereance
of my projects and create a more interactive and user-friendly display.  

**For sidebar**: I built this site with wordpress and elementor, and the idea was to create an interactive sidebar which will expand horizontally once
the user clicks or hovers on the toggle button, and will be minimized once the user scrolls or clicks anywhere else on the screen. On mobile view,
the sidebar is replaced with a top header.
This was quite challenging since Wordpress and elementor generally have low integration with that kind of complexity, so I had to implement a few workarounds. 
For starters, I created an Elementor section which is divided into five columns:  

- a logo image with the class: '.logo'.  
-  a toggle icon  with a class '.sidbar-toggle' which is initially hidden (opacity:0) and with position:absolute.
- an icon-list with a class of '.navigation' which displays all the website's menu-links.
- an HTML box which contains the JavaScript code.
- a bottom section that contains my picture and introductory details with a class of '.user'.

In addition, I created another section and container which are invisible in the large device view, but will become visible on mobile view:
- a section for mobile menu-header with the class 'mobile-header' which is divided to three equal-width horizontal columns: one for the phone icon,
  one for the logo, and one for the mobile toggle icon.
- a container for the phone number display which is visible on large screen, but will be hidden on mobile view.

After initially positioning all the elements in the desired spots using the elemntor tools,
I inserted the code in sidebar.js into the HTML box in the first section, and the code in sidbar.css in the "Custom CSS" tab of the main section.  

**For slider**: The idea was to create an iteractive display using a "mockup" which is basically a nice way to display projects using video slides
that present a glance view of different websites one after another, inside of a tv-shaped frame. This section located in the middle of the main page, to the
right of the "Want to appear here as well?" headline, below the "about" section. This was, again, quite challenging since wordpress
and elementor don't offer this feature by default. moreover, a lot of times the JavaScript code of the video feature is interfering with the elementor base code,
which can create errors that can lead to crashes and malfunctioning. Therefore, it is important to be very precise in this kind of coding.
The whole feature was done using HTML and JavaScript and CSS, with almost no use of Elementor other than initial framing and positioning.  

First, I've created a section. The first element of the section is a div with an "h3" element titled: "Hover to watch video display."
The div is surrounded by a black-transparent background which bounces in and out slowly, grabbing the attention of the user. 
Once the user hovers the mouse cursor over the frame, the div with the text dissappears and the slideshow begins. 
If the user is moving the cursor out of the section area, the video freezes. Once the cursor is moved back to the area, the slides continue to run.  

In the bottom of the mockup there is a "pagination" div, which is basically 4 bullet points that allow the user to go over the videos. 
Each point is linked to a different video, and once the user is clicking on a point, the mockup display changes to the corresponding video.   
Next are the video divs: initially, three videos has a "0" opacity to keep them invisible, and only one has a "1" opacity and will initially be displayed. 
Each div has the "muted" property, to ensure the video won't start playing until the user will hover over the section. When that happens,
a propery called 'onmouseover', which is the second property of each video, triggers a fucntion called play(): a function that plays the video. 
The third property of each video is "onmouseout()=this.stop()" which stops the video once the mouse cursor is out of the section. 
Each video also has a class and an id for more flexibility and options to menuver their display.   

Next are the "onended" functions which are in charge of the loop - when one video is finished, the next one will play creating an infinite loop
that will as soon as the user moves the mouse cursor out of the section.   

The last functions are p1,p2,p3 and p4 that represent the display of the four videos - when one needs to be played, his opacity becomes "1" and he will be visible, 
while the rest will get a "0" opacity. The videos were created using "kapwing", which is an excellent software that allows you to efficiently
capture screen recordings along with advanced tools for editing the video. The slider.js code goes into the HTML box, while the "slider.css" goes into
the "Custom CSS" tab of the same box.
