document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
    const willYou = document.getElementById("willYou");
    const beMyValentine = document.getElementById("beMyValentine");
    const yesbtn = document.getElementById("yesbtn");
    const nobtn = document.getElementById("nobtn");
    const response = document.getElementById("response");
    const options = document.getElementById("options");
    const thankyou = document.getElementById("thankyou");
    const means = document.getElementById("means");
    const aww = document.getElementById("aww");
    const nexttime = document.getElementById("nexttime");

    //hide everything at the beginning
    willYou.style.visibility = "hidden";
    beMyValentine.style.visibility = "hidden";
    yesbtn.style.visibility = "hidden";
    nobtn.style.visibility = "hidden";
    thankyou.style.visibility = "hidden";
    means.style.visibility = "hidden";
    aww.style.visibility = "hidden";
    nexttime.style.visibility = "hidden";

    // Show Will You... after 1.5s
    setTimeout(() => {
        willYou.style.visibility = "visible";
    }, 1500);
    //show be my valentine after 2sec
    setTimeout(() => {
        beMyValentine.style.visibility = "visible";
    }, 3500);

    // Show Yes/No buttons after 1 second
    setTimeout(() => {
        yesbtn.style.visibility = "visible";
        nobtn.style.visibility = "visible";
        const gifcontainer = document.getElementById("gif-container");
        gifcontainer.innerHTML = '';
        gifcontainer.style.display = "block"; 
        gifcontainer.style.position = "absolute"; 
        gifcontainer.style.bottom = "200px";
        gifcontainer.style.left = "150px";

        const gif0 = document.createElement("img");
        gif0.src = "catpeek.gif"; // Path to your locally stored GIF
        gif0.alt = "cat peek"; // Alt text for accessibility
        gif0.id = "gif0";
        gif0.style.position = "absolute";
        gif0.style.left = "75px";
        gif0.style.bottom = "15px";
        gif0.style.width = "140px";
        gif0.style.height = "auto";
        gifcontainer.appendChild(gif0);
    }, 4800);

    // Function to clear the screen
    function clearScreen() {
        greeting.style.visibility = "hidden";
        willYou.style.visibility = "hidden";
        beMyValentine.style.visibility = "hidden";
        yesbtn.style.visibility = "hidden";
        nobtn.style.visibility = "hidden";
        options.style.visibility = "hidden"; // Hide options
    }
    // yes button behavior 
    yesbtn.addEventListener("click", () => {
        clearScreen(); // Clear screen before showing the next action
        yesbtn.style.position = "absolute";  // Make it absolute so we can control its position
        yesbtn.style.left = "150px";         // Adjust the left position as needed
        yesbtn.style.top = "200px";          // Adjust the top position as needed
        const gif0 = document.getElementById("gif0");
        if (gif0) {
            gif0.style.visibility = "hidden";
        }
        response.style.position = "relative";
        response.style.top = "-400px";
        setTimeout(() => {
            means.style.visibility = "visible";
        }, 0);
        setTimeout(() => {
            thankyou.style.visibility = "visible";
        }, 1700);        
        setTimeout(() => {
            // Select the container where the GIFs will be placed
            const gifcontainer = document.getElementById("gif-container");
            gifcontainer.innerHTML = '';
            gifcontainer.style.display = "block"; 
            gifcontainer.style.position = "absolute";
            gifcontainer.style.bottom = "210px";
            gifcontainer.style.left = "160px";
            gifcontainer.style.gap = "30px";

            // Create new image elements and set their sources to the local GIFs
            const gif1 = document.createElement("img");
            gif1.src = "catheartwink.gif"; // Path to your locally stored GIF
            gif1.alt = "Cat Heart Wink"; // Alt text for accessibility
            gif1.classList.add("gif-size");
            gifcontainer.appendChild(gif1); // Append to the container

            const gif2 = document.createElement("img");
            gif2.src = "catheartpull.gif"; // Path to your locally stored GIF
            gif2.alt = "Cat Heart Pull"; // Alt text for accessibility
            gif2.classList.add("gif-size");
            gifcontainer.appendChild(gif2); // Append to the container

            const gif3 = document.createElement("img");
            gif3.src = "catheartarrow.gif"; // Path to your locally stored GIF
            gif3.alt = "Cat Heart Arrow"; // Alt text for accessibility
            gif3.classList.add("gif-size");
            gif3.style.width = "230px"
            gif3.style.length = "296px"
            gifcontainer.appendChild(gif3); // Append to the container
            gif2.style.marginRight = "20px";
            gif3.style.marginLeft = "20px";
        }, 2500); // Slight delay before showing the response and stickers
    });
    // no button behavior 
    let clickCount = 0;
    nobtn.addEventListener("click", () =>{ 
        clickCount++; // Increment the click count each time the button is clicked

        if (clickCount < 4) {
            // Disable the button during movement
            nobtn.disabled = true;
            // Function to generate random position
            function getRandomPosition() {
                const maxLeft = 1000; 
                const maxTop = 300; 
                const randomLeft = Math.random() * maxLeft;
                const randomTop = Math.random() * maxTop;
                return { left: randomLeft, top: randomTop };
            }

            // Move the button randomly once on each click
            const { left, top } = getRandomPosition();
            nobtn.style.position = "absolute";
            nobtn.style.left = `${left}px`;
            nobtn.style.top = `${top}px`;
            
        // Re-enable the button after 1 second
        setTimeout(() => {
            nobtn.disabled = false; // Make the button clickable again
        }, 50); // Delay before enabling the button again

        } else if (clickCount === 4) {
        nobtn.style.position = ""; // Keep the button in normal flow after the 4th click
        nobtn.style.left = originalLeft;   // Reset to the original left position
        nobtn.style.top = originalTop;     // Reset to the original top position
        } else if (clickCount > 4) {
        
        clearScreen(); // Clear screen before showing the next action
        const gif0 = document.getElementById("gif0");
        if (gif0) {
            gif0.style.visibility = "hidden";
        }
        response.style.position = "relative";
        response.style.top = "-500px";
        setTimeout(() => {
            aww.style.visibility = "visible";
        }, 0);
        setTimeout(() => {
            nexttime.style.visibility = "visible";
        }, 1400);
        setTimeout(() => {
            setTimeout(() => {
                nobtn.disabled = false; // Make the button clickable again
            }, 100); // Delay before enabling the button again

            // Select the container where the GIFs will be placed
            const gifcontainer = document.getElementById("gif-container");
            gifcontainer.innerHTML = '';
            gifcontainer.style.display = "block"; // Make sure the container is visible
            gifcontainer.style.position = "absolute"; // Make sure gif container is positione
            gifcontainer.style.bottom = "380px";
            gifcontainer.style.left = "130px";
            gifcontainer.style.gap = "30px";
            
            // Create new image elements and set their sources to the local GIFs
            const gif4 = document.createElement("img");
            gif4.src = "cattear.gif"; // Path to your locally stored GIF
            gif4.alt = "cat tear"; // Alt text for accessibility
            gif4.style.width = "200px"
            gif4.style.length = "260px"
            gif4.style.position = "absolute";
            gif4.style.top = "20px"; // Position vertically
            gif4.style.left = "0px"; // Position horizontally
            gifcontainer.appendChild(gif4); // Append to the container

            const gif5 = document.createElement("img");
            gif5.src = "catsad.gif"; // Path to your locally stored GIF
            gif5.alt = "cat sad"; // Alt text for accessibility
            gifcontainer.appendChild(gif5); // Append to the container
            gif5.style.width = "180px"
            gif5.style.length = "250px"
            gif5.style.position = "absolute";
            gif5.style.top = "20px"; // Position vertically
            gif5.style.left = "220px";
            gif5.style.marginLeft = "50px";

            const gif6 = document.createElement("img");
            gif6.src = "catlookaway.gif"; // Path to your locally stored GIF
            gif6.alt = "cat look away"; // Alt text for accessibility
            gifcontainer.appendChild(gif6); // Append to the container
            gif6.style.width = "180px"
            gif6.style.length = "250px"
            gif6.style.position = "absolute";
            gif6.style.top = "20px"; // Position vertically
            gif6.style.left = "440px"; // Position horizontally, adjust the value as needed
            gif6.style.marginLeft = "90px";
        }, 2800); // Slight delay before showing the response and stickers
        setTimeout(() => {
            nobtn.disabled = false; // Make the button clickable again
        }, 100); // Delay before enabling the button again
        }
    });
});
