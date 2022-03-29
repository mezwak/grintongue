const test = "We're in the swamp and we will be waiting for you. If you think you have got what it takes then speak to our master. Down with Thrall."

function translate(text, dictionary) {
	if (text) {
		dictionary = data
		words = text.split(" ");
		let result = "";

		for (let i = 0; i < words.length; i++) {
			let str = "";
			let selection = words[i].split(/(?=[.,:;?!])|(?<=[.,:;?!])/g);
			if (selection[0].toLowerCase() in dictionary) {
				if (selection.length == 2){
					str = dictionary[selection[0].toLowerCase()] + selection[1] + " ";
				}else{
					str = dictionary[selection[0].toLowerCase()] + " "
				}

				console.log(selection[0][0].toUpperCase() + "::" + selection[0][0] + ":")
				console.log(selection[0][0].toUpperCase() === selection[0][0])

				if (str != "") {
					if (selection[0][0].toUpperCase() === selection[0][0]) {
						result += str.charAt(0).toUpperCase() + str.slice(1);
					} else {
						result += str;
					}
				}
			} else{
				result += words[i] + " ";
			}
		}

		result = result.replace(/ +(?= )/g,'');

		document.getElementById("output").value = result;

		console.log(result);
	}
}

