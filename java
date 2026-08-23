function tamgiac(h) {
    for (let i = 1; i <= h; i++) {
        let row = "";
        let space = "";
        for (let k = 1; k <= h-i ; k++) { 

            space += "   ";
        }
        for(let j =1; j <=2i-1; j++) {
           row += " ";
        }
        console.log(space+row);
    }

}

tamgiac(3)
