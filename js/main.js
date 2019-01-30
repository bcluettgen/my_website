<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>Lab 1a</title>

		<!--put your external stylesheet links here--> style.css
		<link rel="stylesheet" href="css/style.css">
		<!--[if IE<9]>
			<link rel="stylesheet" href="css/style.ie.css">
		<![endif]-->
	</head>

	<body>
    <style>
        #mydiv {
            background-color: red;
            width: 80%;
            margin: 0 auto;
            height: 100px;
        }
    </style>
		<!--put your initial page content here-->
	<div id="mydiv">
        Hello World!
    </div>
			
		<!--you can also use this space for internal scripts or stylesheets;
		place these within <script> or <style> tags-->

		<!--put your external script links here-->
	<script>
		var mydiv = document.getElementById("mydiv");
		mydiv.addEventListener("click", function(){
        alert("Hello World!");
    });
	</script>
		<script type="text/javascript" src="js/main.js"></script>
	</body>
</html>