
;(function() {

	var keyfile = {
		"SproutSocial" : {
			"id" :"biailfjhlmalakjackgpekkbmljelldc",
			"resource" : "Sprout_Extension_19.png"
		}
	};
	var installed = function() {
		alert('installed');
	};

	var notinstalled = function() {
		alert('not installed')
	};	

	var testScript = document.createElement("img");            
	testScript.setAttribute("onload", installed);
	testScript.setAttribute("onerror", notinstalled);
	testScript.setAttribute("src", "chrome-extension://"+keyfile["SproutSocial"].id+"/"+keyfile["SproutSocial"].resource);
	document.body.appendChild(testScript);

})();