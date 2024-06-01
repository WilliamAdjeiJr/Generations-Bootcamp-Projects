function showLinkInfo() {
    // Get all links on the page
    var links = document.getElementsByTagName("a");

    // Get the number of links
    var numberOfLinks = links.length;

    // Get the first link
    var firstLink = links[0].href;

    // Get the last link
    var lastLink = links[numberOfLinks - 1].href;

    // Show the information in an alert
    alert("Number of links: " + numberOfLinks + "\nFirst link: " + firstLink + "\nLast link: " + lastLink);
}

// Call the function to show the link info
showLinkInfo();
