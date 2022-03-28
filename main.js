var planets = [
        ['Pluto', 0.06],
        ['Neptune', 1.148]
        ['Uranus', 0.917],
        ['Saturn', 1.139],
        ['Jupiter', 2.640],
        ['Mars', 0.3895],
        ['Moon', 0.1655],
        ['Earth', 1],
        ['Venus', 0.9032],
        ['Mercury', 0.377],
        ['Sun', 27.9]
    ]
    //creates dropdown items
planets.forEach(planet => {


            var select = document.getElementById("planets");
            for (var i = 0; i < planets.length; i++) {
                if (planetName == planets[i][0]) {
                    gravity - planets[i][1]
                    return gravity * weight;
                }


                var option = document.createElement('option');
                option.innerHTML = planet[i];
                option.value = plantWeight[i];
                select.appendChild(option);
                let output = document.getElementById("output");
            }
        }
        //let output = document.getElementById("output");
        //output



        function calculateWeight(weight, planetName) {

            for (let i = 0; i < planets.length; i++) {
                if (planetName == planets[i][0])
                    return planets[i][1] * weight
            }
            // 2. Write the code to return the correct weight 

        }

        function handleClickEvent(e) {
            var userWeight = document.getElementById("user-weight").value;
            var planetName = document.getElementById("planets").value;
            var result = calculateWeight(userWeight, planetName);
            // 3. Create a variable called userWeight and assign the value of the user's weight. 

            // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 

            // 5. Create a variable called result and assign the value of the new calculated weight. 

            // 6. Write code to display the message shown in the screenshot. 

        }

        // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.

        // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
        // feel free to add classes and id's to the HTML elements as you need, 
        // import.a google font and use it for some or all of the text on your page. 

    }
    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.