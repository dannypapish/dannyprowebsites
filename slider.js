<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
	
<body>
	<div class="container">
	      <div class="wrap">
    	   <h3 class="hhh" id="hhh">Hover to watch video display!</h3>
    	 </div>
		<video muted playsinline onmouseover="this.play()" onmouseout="this.pause()" class="box1" id="box1" src="https://dannyprowebsites.com/wp-content/uploads/2022/12/risinggg.mp4"></video>
		
		<video muted playsinline class="box2" id="box2" src="https://dannyprowebsites.com/wp-content/uploads/2022/12/Studio_Project.mp4"></video> 
		<video muted playsinline class="box3" id="box3" src="https://dannyprowebsites.com/wp-content/uploads/2022/12/70268-27-apple-imac-mockup-5fa100808a736.mp4"></video>
		<div class="wrapp">
		<video muted playsinline onmouseover="this.play(); document.getElementById('hhh').style.display='none'" onmouseout="this.pause();this.currentTime=0;" class="box4" id="box4" src="https://dannyprowebsites.com/wp-content/uploads/2022/12/70268-27-apple-imac-mockup-5fa100808a736-1.mp4"></video>
		
		
    	<div class="pagination">
    	    <label onClick="p1()" for="slider_1" id="pag1" class="pagg1"></label>
          <label onClick="p2()" for="slider_2" id="pag2" class="pagg2"></label>
          <label onClick="p3()" for="slider_3" id="pag3" class="pagg3"></label>
          <label onClick="p4()" for="slider_4" id="pag4" class="paag4"></label>
    	</div>
	 	</div>
	</div>

	<script>
	   
      var box1 = document.getElementById('box1');
	    var box2 = document.getElementById('box2');
	    var box3 = document.getElementById('box3');
	    var box4 = document.getElementById('box4');
	    var pag1 = document.getElementById('pag1');
	    var pag2 = document.getElementById('pag2');
	    var pag3 = document.getElementById('pag3');
	    var pag4 = document.getElementById('pag4');

      box1.onended = function () {
	        box2.play();
	        box1.style.opacity=0;
	        box2.style.opacity=1;
        	pag2.style.background="black";
        	pag1.style.background="#1DC1E6";
        	pag3.style.background="#1DC1E6";
        	pag4.style.background="#1DC1E6";
	    }
	    box2.onended = function () {
	        box3.play();
	        box2.style.opacity=0;
	        box3.style.opacity=1;
        	pag3.style.background="black";
        	pag2.style.background="#1DC1E6";
        	pag1.style.background="#1DC1E6";
        	pag4.style.background="#1DC1E6";
	    }
	    box3.onended = function () {
	        box4.play();
	        box3.style.opacity=0;
	        box4.style.opacity=1;
        	pag1.style.background="#1DC1E6";
        	pag2.style.background="#1DC1E6";
        	pag4.style.background="black";
        	pag3.style.background="#1DC1E6";
	    }
	    box4.onended = function () {
	        box1.play();
	        box4.style.opacity=0;
	        box1.style.opacity=1;
	        pag1.style.background="black";
	        pag2.style.background="#1DC1E6";
        	pag3.style.background="#1DC1E6";
        	pag4.style.background="#1DC1E6";
      }

	    function p1 () {
	        
        	box1.play();
        	box1.style.opacity=1;
        	box2.style.opacity=0;
          box3.style.opacity=0;
        	box4.style.opacity=0;
        	pag1.style.background="black";
        	pag2.style.background="#1DC1E6";
        	pag3.style.background="#1DC1E6";
        	pag4.style.background="#1DC1E6";
      }

      function p2() {
	        box2.play();
	        box1.style.opacity=0;
	        box2.style.opacity=1;
	        box3.style.opacity=0;
	        box4.style.opacity=0;
	        pag2.style.background="black";
	        pag1.style.background="#1DC1E6";
	        pag3.style.background="#1DC1E6";
	        pag4.style.background="#1DC1E6";

	    }

	    function p3() {
	        box3.play();
	        box3.style.opacity=1;
	        box2.style.opacity=0;
	        box1.style.opacity=0;
	        box4.style.opacity=0;
	        pag3.style.background="black";
	        pag1.style.background="#1DC1E6";
	        pag2.style.background="#1DC1E6";
	        pag4.style.background="#1DC1E6";
	           
	    }

	    function p4() {
           box4.play();
           box4.style.opacity=1;
           box2.style.opacity=0;
           box1.style.opacity=0;
           box3.style.opacity=0;
           pag4.style.background="black";
           pag1.style.background="#1DC1E6";
           pag3.style.background="#1DC1E6";
           pag2.style.background="#1DC1E6";

	           
       }

	   
	</script>
</body>
</html>
