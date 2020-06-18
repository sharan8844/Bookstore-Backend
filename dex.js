
function gen()
{
    var newGenre= document.getElementById('enter').value;
    //console.log(newGenre);
        console.log("yahan tk");
        fetch('http://localhost:3002/api/genres',{ 
            method: "POST",
            body:  JSON.stringify({name: newGenre}),
            headers: { 
                "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(response => response.json()) 
            .then(json => console.log(json));   


}
/*
// main.js 

// POST request using fetch() 
fetch("https://jsonplaceholder.typicode.com/posts", { 
	
	// Adding method type 
	method: "POST", 
	
	// Adding body or contents to send 
	body: JSON.stringify({ 
		title: "foo", 
		body: "bar", 
		userId: 1 
	}), 
	
	// Adding headers to the request 
	headers: { 
		"Content-type": "application/json; charset=UTF-8"
	} 
}) 

// Converting to JSON 
.then(response => response.json()) 

// Displaying results to console 
.then(json => console.log(json)); 

*/