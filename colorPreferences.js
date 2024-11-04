function myColorsFav() {
    let favcolors = [];

    for (let i = 0; i < 3; i++) {
        let enterColor = prompt("Enter Your Three Favorite colors.");
        favcolors.push(enterColor);
        alert("My Colors Favorite are: " + favcolors);
    }
    let pushcolor = prompt("Add another color you like.");
    favcolors.push(pushcolor);
    alert("Your new colors are: " + favcolors)

}
