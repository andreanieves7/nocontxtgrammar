let sentences = []
function generate() {
    var data = {
    	    	"start": ["#C#"],
    	"C": ["#C2#","#C3#","#C4#"],
		"C2": ["#S#->#F#","#S#->#A#","#A#->#F#","#S#->#UU#","#S#->#UD#","#S#->#DD#","#S#->#DU#","#UU#->#F#","#UD#->#F#","#DU#->#F#","#DD#->#F#"],
		"C3": ["#3UD#,#3DU#","#3DD#","#3UU#","#3A#","#S#->#2UD#","#S#->#2DD#","#S#->#2UU#","#S#->#2DU#","#2DU#->#F#","#2UU#->#F#","#2DD#->#F#","#2UD#->#F#",
				"#S#->#UU#->#F#","#S#->#UD#->#F#","#S#->#DU#->#F#","#S#->#DD#->#F#","#S#->#A#->#F#","#S#->#2A#","#2A#->#F#"],
		"C4": ["#S#->#3DU#","#S#->#3DD#","#S#->#3UD#","#S#->#3UU#","#S#->#3A#","#3UU#->#F#","#3UD#->#F#","#3DU#->#F#","#3DD#->#F#","#3A#->#F#","#2A#->#2UD#",
				"#2A#->#2DU#","#2A#->#2UU#","#2A#->#2DD#","#UD#->#2A#","#DU#->#2A#","#UU#->#2A#","#DD#->#2A#","#S#->#2DD#->#F#","#S#->#2DU#->#F#","#S#->#2UD#->#F#",
					"#S#->#2UU#->#F#","#S#->#2A#->#F#"],
		"C5": ["#2A#->#3A#","#2A#->#3UU#","#2A#->#3UD#","#2A#->#3DU#","#2A#->#3DD#","#2A#->#2UU#->#F#","#2A#->#2UD#->#F#","#2A#->#2DU#->#F#","#2A#->#2DD#->#F#",
				"#2UU#->#2A#->#F#","#2UD#->#2A#->#F#","#2DU#->#2A#->#F#","#2DD#->#2A#->#F#","#3UU#->#A#->#F#","#3DU#->#A#->#F#","#3UD#->#A#->#F#","#3DD#->#A#->#F#",
				"#3A#->#A#->#F#","#S#->#2A#->#2UD#","#S#->#2A#->#2UU#","#S#->#2A#->#2DU#","#S#->#2A#->#2DD#","#S#->#2UU#->#2A#","#S#->#2UD#->#2A#","#S#->#2DU#->#2A#",
				"#S#->#2DD#->#2A#","#S#->#2A#->#2A#","#S#->#3UU#->#A#","#S#->#3UD#->#A#","#S#->#3DU#->#A#","#S#->#3DD#->#A#","#S#->#3A#->#UU#","#S#->#3A#->#UD#",
				"#S#->#3A#->#DU#","#S#->#3A#->#DD#","#3A#->#UU#->#F#","#3A#->#UD#->#F#","#3A#->#DU#->#F#","#3A#->#DD#->#F#","#S#->#3A#->#F#", "#S#->#3UU#->#F#",
				"#S#->#DU#->#F#","#S#->#UD#->#F#","#S#->#DD#->#F#","#2UD#->#2DU#->#F#","#2UD#->#2DD#->#F#","#2UU#->#2UU#->#F#","#2UU#->#2UD#->#F#","#2DU#->#2UD#->#F#",
				"#2DU#->#2UU#->#F#","#2DD#->#2DU#->#F#","#2DD#->#2DD#->#F#","#S#->#2UD#->#2DU#","#S#->#2UD#->#2DD#","#S#->#2UU#->#2UU#","#S#->#2UU#->#2UD#",
				"#S#->#2DU#->#2UD#","#S#->#2DU#->#2UU#","#S#->#2DD#->#2DU#","#S#->#2DD#->#2DD#","#2UU#->#3UU#","#2UU#->#3UD#","#2UD#->#3DU#","#2UD#->#3DD#","#2DU#->#3UU#",
				"#2DU#->#3UD#","#2DD#->#3DU#","#2DD#->#3DD#"],
		"2A": ["#A#->#A#"],
		"3A": ["#A#->#A#->#A#", "#A#->#DD#->#A#","#A#->#UD#->#A#","#A#->#DU#->#A#","#A#->#UU#->#A#"],
    	"2UD": ["#UU#->#UD#","#A#->#UD#","#A#->#DD#","#UD#->#DD#","#UU#->#A#","#UD#->#A#"],
		"2UU": ["#UU#->#UU#","#UD#->#DU#","#A#->#UU#","#A#->#DU#", "#UU#->#A#","#UD#->#A#"],
    	"2DD": ["#A#->#UD#","#A#->#DD#","#DU#->#A#","#DD#->#A#", "#DD#->#DD#","#DU#->#UD#"],
		"2DU": ["#A#->#DU#","#A#->#UU#","#DU#->#A#","#DD#->#A#","#DU#->#UU#","#DD#->#DU#"],
		"3UD": ["#A#->#2DD#","#A#->#2UD#","#UU#->#2UD#","#UD#->#2DD#","#2UD#->#A#","#2UU#->#A#","#2UD#->#DD#","#2UU#->#UD#"],
		"3DU": ["#A#->#2DU#","#A#->#2UU#","#DU#->#2UU#","#DD#->#2DU#","#2DD#->#A#","#2DU#->#A#","#2DD#->#DU#","#2DU#->#UU#"],
		"3DD": ["#A#->#2DD#","#A#->#2UD#","#DU#->#2UD#","#DD#->#2DD#","#2DD#->#A#","#2DU#->#A#","#2DD#->#DD#","#2DU#->#UD#"],
		"3UU": ["#A#->#2DU#","#A#->#2UU#","#UU#->#2UU#","#UD#->#2DU#","#2UU#->#A#","#2UD#->#A#","#2UD#->#DU#","#2UU#->#UU#"],	
		"F": ["Receives:ANY, Sends:NULL"],
		"S": ["Receives:NULL, Sends:ANY"],
    	"A": ["Receives:ANY, Sends:ANY"]
		"UU": ["Receives:UP, Sends:UP"],
		"UD": ["Receives:UP, Sends:DOWN"],
		"DU": ["Receives:DOWN, Sends:UP"],
		"DD": ["Receives:DOWN, Sends:DOWN"]
    }
    
    let grammar = tracery.createGrammar(data);
    let expansion = grammar.flatten('#start#');

    sentences.push(expansion);

    printSentences(sentences);
}

function printSentences(sentences) {
    let textBox = document.getElementById("sentences");
    textBox.innerHTML = "";
    for(let i=sentences.length-1; i>=0; i--) {
        textBox.innerHTML += "<p>"+sentences[i]+"</p>"
    }
}