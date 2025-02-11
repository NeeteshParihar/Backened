console.log("Hello from html") ;

console.log("printing the window") ;

console.log(window) ;

// screen  // research
console.log(window.outerWidth)  ;
console.log(window.outerHeight) ;

// navigator  // research 
console.log(navigator)

console.log(navigator.userAgent) ;

// location 

console.log(location.host) ;
console.log(`hostname ${location.hostname}`)
console.log(`${location.href}`)

console.log("printing the document object model") ;

// document contains the html document :
// the html is converted to a tree like structure with the object called document 

console.log(document) ;

console.log(document.firstChild)
console.log(document.lastChild)

// first child is <!DOCTYPE html>
// second child is <html>


console.log(document.lastChild.lastChild)
console.log(document.lastChild.lastChild.firstChild)

// slecting the element by tagNAme 

let tag = document.getElementsByTagName('p') ;

console.log(tag) ;



