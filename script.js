details = document.querySelector("details")
img = document.querySelector("details img")

value = 0	// 0 = wa e 1 == wa
notFirstTime = 0 //multiplicador para a primeira vez que rodar a imagem

details.ontoggle = function () {
	if (value == 0) {
		setTimeout(function(){
			img.src = "w.jpg"
			value = 1

			if (! notFirstTime) {
				notFirstTime = 1
			}
		}, notFirstTime * 50) 

	}
	else {
		img.src = "wa.jpg"
		value = 0
	}
}