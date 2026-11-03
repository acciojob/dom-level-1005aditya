//your JS code here. If required.
const element=document.getElementById("level");
        let count=0;
        let currentElement=element;
        // currentElement=currentElement.parentElement;
        // currentElement=currentElement.parentElement;
        // currentElement=currentElement.parentElement;
        while(currentElement){
            count++;
            currentElement=currentElement.parentElement;
        }
        alert(count);