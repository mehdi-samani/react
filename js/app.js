function persianToEnNumConvert() {
  makeTimer();
	persianNums = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' , "%":'٪'};
	  function change(el) {
		if (el.nodeType == 3) {
		  var list = el.data.match(/[0-9]|[%]/g);
			if (list != null && list.length != 0) {
			  for (var i = 0; i < list.length; i++)
				el.data = el.data.replace(list[i], persianNums[list[i]]);
			  }
		}
		  for (var i = 0; i < el.childNodes.length; i++) {
			change(el.childNodes[i]);
		  }
	  }
	  change(document.body);
	 
  setInterval(function() { makeTimer(); }, 1000);
  

  }
  

  

  $(function(){
    $(".text-head").click(function(){
        $(".text-p").css('display','inline');
    });


    $(".button-club").click(function(){
        $("#pop-main").css('display','inline');
    });
    $(".club-clos").click(function(){
        $("#pop-main").css("display","none");
    });
});
function makeTimer() {

	//		var endTime = new Date("29 November 2019 00:00:00 GMT+01:00");	
		// var endTime = new Date("30 November  2019 00:00:00 GMT+01:00");			
		// 	endTime = (Date.parse(endTime) / 1000);

		// 	var now = new Date();
        // 	now = (Date.parse(now) / 1000);
        
        var endTime = new Date("30 November 2020 00:00:00 GMT+01:00");
        endTime = (Date.parse(endTime)/ 1000);


        var now = new Date();
        now = (Date.parse(now) / 1000);

			var timeLeft = endTime - now;

			var days = Math.floor(timeLeft / 86400); 
			var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
			var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
			var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
  
			if (hours < "10") { hours = "0" + hours; }
			if (minutes < "10") { minutes = "0" + minutes; }
			if (seconds < "1") { seconds = "3" + seconds; }

			$("#days").html(days + "<span></span>");
			$("#hours").html(hours + "<span></span>");
			$("#minutes").html(minutes + "<span></span>");
			$("#seconds").html(seconds + "<span></span>");		

	}
  persianToEnNumConvert();





