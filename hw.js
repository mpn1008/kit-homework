function tcvuongphai(h) {
    for (let i = 1; i <= h; i++) {
        let  star = "";
        for (let k = 1; k <= h - i; k++) {
            star += " ";
        }
        for (let j = 1; j <= i; j++) {
           star += "*";
        }
        console.log(star);
    }
}
 tcvuongphai(5);