function tamgiacvuong(h) { 
    let cnt = 0;
    for (let i = 1; i <= h; i++) {
        let row = "";
        let space = "";
        cnt++;

        for (let j = 0; j <= h-i; j++) {
            space += " ";
            cnt++;

            if (j == h-i) {
                for (let k = 0; k < i; k++) {
                    cnt++;
                    row += "*";
                }
            }
        }
        console.log(i + " " + space + row );
  
    }

    console.log("Total number of loops1: " + cnt);
}

function tcvuongphai(h) {
    let cnt = 0;
    for (let i = 1; i <= h; i++) {
        let  star = "";
        cnt++;
        for (let k = 1; k <= h - i; k++) {
            star += " ";
            cnt++;
        }

        for (let j = 1; j <= i; j++) {
           star += "*";
           cnt++;
        }
        console.log(star);
    }

    console.log("Total number of loops2: " + cnt);
}




// tamgiacvuong(5)

tcvuongphai(5);


// ****A // i = 1; * = h -i ; A = i
// ***AA // i = 2; * = h -i ; A = i
// **AAA
// *AAAA
// AAAAA


function tg(h) {
    for (let i = 1; i <= h; i++) {
        console.log(i)
    }
}

//input = 10 , operations = 30000
// tg(10)