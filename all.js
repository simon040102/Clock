list = document.querySelector('.list')
nineNine();
function nineNine() {
    let answer = '';
    let ary = [];
    for (let i = 2; i < 10; i++) {
        var str1 = '';
        var str2 = '';
        let total = '';
        for (let j = 1; j < 10; j++) {
            answer = i * j;
            if(j==1){
                str1 += "<div><h2>" + i + "</h2><p>" + i + " x " + j + " = " + answer + "</p></div>"
            }
            if (j < 4 && j>1) {
                str1 += "<div><p>" + i + " x " + j + " = " + answer + "</p></div>"
            }
            else if (j < 9) {
                str2 += "<div><p>" + i + " x " + j + " =  " + answer + "</p></div>"
            }
            else if (j == 9) {
                str2 += "<div><p>" + i + " x " + j + " = " + answer + "</p></div>"
                total = "<li class='col-3 border row d-flex'><div class='col-5 me-2'>" + str1 + "</div><div  class='mt-4 col-5'>" + str2 + "</div></li>"

                ary.push(total)
                console.log(total);
            }

        }

    }
    let len = ary.length
    for (let i = 0; i < len; i++) {
        list.innerHTML += ary[i];
    }

}