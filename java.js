function tamgiac(h) {
    for (let i = 0; i <= h; i++) {
        let row = "";
        let space = "";

        for (let j = 1; j <= h-i; j++) {
            space += "_";
        }

        for (let k = 1; k <= 2*i-1 ; k++) { 

            row += "*";
        }

        console.log(space + row);

    }

}


tamgiac(4)

//________*
//______ ***
//_____ *****
//_____*******