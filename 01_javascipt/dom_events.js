/**
 * Key Concepts of DOM Events
Event Types:

Mouse Events: Triggered by mouse actions (e.g., click, dblclick, mousedown, mouseup, mousemove, mouseenter, mouseleave).
Keyboard Events: Triggered by keyboard actions (e.g., keydown, keypress, keyup).
Form Events: Triggered by form-related actions (e.g., submit, change, focus, blur, input).
Window Events: Triggered by actions on the browser window (e.g., resize, scroll, load, unload).
Touch Events (for touch screens): e.g., touchstart, touchend, touchmove.
 */
/**
 * Event Properties:
The event object (event) provides properties to get information about the event:

    target: The element that triggered the event.
    type: The type of event (e.g., click, keypress).
    key: The key pressed (for keyboard events).
    clientX and clientY: Coordinates of a mouse event.
    javascript
 */
//check event type and target
document.addEventListener("click", function(event) {
    console.log("Event type: " + event.type);
    console.log("Target element: " + event.target);
});

//check the event tag name
document.getElementById("parent").addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
        console.log("Button clicked: " + event.target.textContent);
    }
});

    