//mark up text
document.addEventListener("mouseup", function () {
    // Get the selected text
    let selectedText = window.getSelection().toString();
  
    // Check if there's any selected text
    if (selectedText.length > 0) {
      // Create a new range to highlight the selected text
      let range = window.getSelection().getRangeAt(0);
  
      // Create a new span element to wrap the selected text and apply the highlight class
      let span = document.createElement("span");
      span.className = "highlighted";
      range.surroundContents(span);
  
      // Add a double-click event listener to the highlighted element to remove the highlight
      span.addEventListener("dblclick", function () {
        let parent = this.parentNode;
        let text = this.textContent;
        parent.replaceChild(document.createTextNode(text), this);
      });
    }
  });
  