// selects the div with an id of placeholder
var div = document.getElementById('placeholder');

// say that fruits contains all your data
var fruits = ['Apples','Bananas','Pineapples','Peaches','Grapes'];
var ul = document.createElement('ul'); // create an arbitrary ul element

// loop through the fruits array
for(var i in fruits) {
    // create an arbitrary li element
    var li = document.createElement('li'),
        content = document.createTextNode(fruits); // create a textnode to the document

    li.appendChild(content); // append the created textnode above to the li element
    ul.appendChild(li); // append the created li element above to the ul element
}

div.appendChild(ul); // finally the ul element to the div with an id of placeholder