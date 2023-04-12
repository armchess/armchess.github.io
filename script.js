let clas = document.getElementById("class");
let tour = document.getElementById("tour");
let score = document.getElementById("score");
let point = document.getElementById("point");
let submit = document.getElementById("submit");

let qual = [
    { // 1-րդ կարգ
        doneClas: 1,
        tour9: [
            {
                start: 9,
                end: 9,
                yourPoint: 4.5
            },
            {
                start: 10,
                end: 11,
                yourPoint: 5
            },
            {
                start: 12,
                end: 13,
                yourPoint: 5.5
            },
            {
                start: 14,
                end: 15,
                yourPoint: 6
            },
            {
                start: 16,
                end: 17,
                yourPoint: 6.5
            },
            {
                start: 18,
                end: 19,
                yourPoint: 7
            },
            {
                start: 20,
                end: 21,
                yourPoint: 7.5
            }
        ],
        tour10: [
            {
                start: 10,
                end: 10,
                yourPoint: 5
            },
            {
                start: 11,
                end: 12,
                yourPoint: 5.5
            },
            {
                start: 13,
                end: 14,
                yourPoint: 6
            },
            {
                start: 15,
                end: 16,
                yourPoint: 6.5
            },
            {
                start: 17,
                end: 18,
                yourPoint: 7
            },
            {
                start: 19,
                end: 20,
                yourPoint: 7.5
            },
            {
                start: 21,
                end: 22,
                yourPoint: 8
            },
            {
                start: 23,
                end: 24,
                yourPoint: 8.5
            }
        ],
        tour11: [
            {
                start: 11,
                end: 11,
                yourPoint: 5.5
            },
            {
                start: 12,
                end: 13,
                yourPoint: 6
            },
            {
                start: 14,
                end: 15,
                yourPoint: 6.5
            },
            {
                start: 16,
                end: 17,
                yourPoint: 7
            },
            {
                start: 18,
                end: 19,
                yourPoint: 7.5
            },
            {
                start: 20,
                end: 20,
                yourPoint: 8
            },
            {
                start: 21,
                end: 23,
                yourPoint: 8.5
            },
            {
                start: 24,
                end: 25,
                yourPoint: 9
            },
            {
                start: 26,
                end: 26,
                yourPoint: 9.5
            }
        ]
    },

    { // 2-րդ կարգ
        doneClas: 2,
        tour9: [
            {
                start: 9,
                end: 11,
                yourPoint: 3
            },
            {
                start: 12,
                end: 13,
                yourPoint: 3.5
            },
            {
                start: 14,
                end: 16,
                yourPoint: 4
            },
            {
                start: 17,
                end: 18,
                yourPoint: 4.5
            },
            {
                start: 19,
                end: 20,
                yourPoint: 5
            },
            {
                start: 21,
                end: 22,
                yourPoint: 5.5
            },
            {
                start: 23,
                end: 24,
                yourPoint: 6
            },
            {
                start: 25,
                end: 26,
                yourPoint: 6.5
            },
            {
                start: 27,
                end: 28,
                yourPoint: 7
            },
            {
                start: 29,
                end: 30,
                yourPoint: 7.5
            }
        ],
        tour10: [
            {
                start: 10,
                end: 11,
                yourPoint: 3
            },
            {
                start: 12,
                end: 13,
                yourPoint: 3.5
            },
            {
                start: 14,
                end: 16,
                yourPoint: 4
            },
            {
                start: 17,
                end: 18,
                yourPoint: 4.5
            },
            {
                start: 19,
                end: 20,
                yourPoint: 5
            },
            {
                start: 21,
                end: 22,
                yourPoint: 5.5
            },
            {
                start: 23,
                end: 24,
                yourPoint: 6
            },
            {
                start: 25,
                end: 26,
                yourPoint: 6.5
            },
            {
                start: 27,
                end: 28,
                yourPoint: 7
            },
            {
                start: 29,
                end: 30,
                yourPoint: 7.5
            },
            {
                start: 31,
                end: 32,
                yourPoint: 8
            },
            {
                start: 33,
                end: 34,
                yourPoint: 8.5
            }
        ],
        tour11: [
            {
                start: 11,
                end: 13,
                yourPoint: 3.5
            },
            {
                start: 14,
                end: 15,
                yourPoint: 4
            },
            {
                start: 16,
                end: 17,
                yourPoint: 4.5
            },
            {
                start: 18,
                end: 19,
                yourPoint: 5
            },
            {
                start: 20,
                end: 22,
                yourPoint: 5.5
            },
            {
                start: 23,
                end: 24,
                yourPoint: 6
            },
            {
                start: 25,
                end: 26,
                yourPoint: 6.5
            },
            {
                start: 27,
                end: 28,
                yourPoint: 7
            },
            {
                start: 29,
                end: 30,
                yourPoint: 7.5
            },
            {
                start: 31,
                end: 31,
                yourPoint: 8
            },
            {
                start: 32,
                end: 34,
                yourPoint: 8.5
            },
            {
                start: 35,
                end: 36,
                yourPoint: 9
            },
            {
                start: 37,
                end: 37,
                yourPoint: 9.5
            }
        ]
    },

    { // 3-րդ կարգ
        doneClas: 3,
        tour8: [
            {
                start: 8,
                end: 17,
                yourPoint: 2.5
            },
            {
                start: 18,
                end: 20,
                yourPoint: 3
            },
            {
                start: 21,
                end: 22,
                yourPoint: 3.5
            },
            {
                start: 23,
                end: 24,
                yourPoint: 4
            },
            {
                start: 25,
                end: 26,
                yourPoint: 4.5
            },
            {
                start: 27,
                end: 28,
                yourPoint: 5
            },
            {
                start: 29,
                end: 30,
                yourPoint: 5.5
            },
            {
                start: 31,
                end: 32,
                yourPoint: 6
            },
            {
                start: 33,
                end: 34,
                yourPoint: 6.5
            },
            {
                start: 35,
                end: 35,
                yourPoint: 7
            }
        ],
        tour9: [
            {
                start: 9,
                end: 20,
                yourPoint: 3
            },
            {
                start: 21,
                end: 22,
                yourPoint: 3.5
            },
            {
                start: 23,
                end: 25,
                yourPoint: 4
            },
            {
                start: 26,
                end: 27,
                yourPoint: 4.5
            },
            {
                start: 28,
                end: 29,
                yourPoint: 5
            },
            {
                start: 30,
                end: 31,
                yourPoint: 5.5
            },
            {
                start: 32,
                end: 33,
                yourPoint: 6
            },
            {
                start: 34,
                end: 35,
                yourPoint: 6.5
            },
            {
                start: 36,
                end: 37,
                yourPoint: 7
            },
            {
                start: 38,
                end: 39,
                yourPoint: 7.5
            }
        ],
        tour10: [
            {
                start: 10,
                end: 21,
                yourPoint: 3
            },
            {
                start: 22,
                end: 23,
                yourPoint: 3.5
            },
            {
                start: 24,
                end: 26,
                yourPoint: 4
            },
            {
                start: 27,
                end: 28,
                yourPoint: 4.5
            },
            {
                start: 29,
                end: 30,
                yourPoint: 5
            },
            {
                start: 31,
                end: 32,
                yourPoint: 5.5
            },
            {
                start: 33,
                end: 34,
                yourPoint: 6
            },
            {
                start: 35,
                end: 36,
                yourPoint: 6.5
            },
            {
                start: 37,
                end: 38,
                yourPoint: 7
            },
            {
                start: 39,
                end: 40,
                yourPoint: 7.5
            },
            {
                start: 41,
                end: 42,
                yourPoint: 8
            },
            {
                start: 43,
                end: 44,
                yourPoint: 8.5
            }
        ],
        tour11: [
            {
                start: 11,
                end: 24,
                yourPoint: 3.5
            },
            {
                start: 25,
                end: 26,
                yourPoint: 4
            },
            {
                start: 27,
                end: 28,
                yourPoint: 4.5
            },
            {
                start: 39,
                end: 30,
                yourPoint: 5
            },
            {
                start: 31,
                end: 33,
                yourPoint: 5.5
            },
            {
                start: 34,
                end: 35,
                yourPoint: 6
            },
            {
                start: 36,
                end: 37,
                yourPoint: 6.5
            },
            {
                start: 38,
                end: 39,
                yourPoint: 7
            },
            {
                start: 40,
                end: 41,
                yourPoint: 7.5
            },
            {
                start: 42,
                end: 42,
                yourPoint: 8
            },
            {
                start: 43,
                end: 45,
                yourPoint: 8.5
            },
            {
                start: 46,
                end: 47,
                yourPoint: 9
            },
            {
                start: 48,
                end: 48,
                yourPoint: 9.5
            }
        ]
    },

    { // 4-րդ կարգ
        doneClas: 4,
        tour8: [
            {
                start: 8,
                end: 26,
                yourPoint: 2.5
            },
            {
                start: 27,
                end: 28,
                yourPoint: 3
            },
            {
                start: 29,
                end: 30,
                yourPoint: 3.5
            },
            {
                start: 31,
                end: 32,
                yourPoint: 4
            },
            {
                start: 33,
                end: 34,
                yourPoint: 4.5
            },
            {
                start: 35,
                end: 36,
                yourPoint: 5
            },
            {
                start: 37,
                end: 38,
                yourPoint: 5.5
            },
            {
                start: 39,
                end: 40,
                yourPoint: 6
            },
        ],
        tour9: [
            {
                start: 9,
                end: 29,
                yourPoint: 3
            },
            {
                start: 30,
                end: 31,
                yourPoint: 3.5
            },
            {
                start: 32,
                end: 34,
                yourPoint: 4
            },
            {
                start: 35,
                end: 36,
                yourPoint: 4.5
            },
            {
                start: 37,
                end: 38,
                yourPoint: 5
            },
            {
                start: 39,
                end: 40,
                yourPoint: 5.5
            },
            {
                start: 41,
                end: 42,
                yourPoint: 6
            },
            {
                start: 43,
                end: 44,
                yourPoint: 6.5
            },
            {
                start: 45,
                end: 45,
                yourPoint: 7
            }
        ],
        tour10: [
            {
                start: 10,
                end: 31,
                yourPoint: 3
            },
            {
                start: 32,
                end: 33,
                yourPoint: 3.5
            },
            {
                start: 34,
                end: 36,
                yourPoint: 4
            },
            {
                start: 37,
                end: 38,
                yourPoint: 4.5
            },
            {
                start: 39,
                end: 40,
                yourPoint: 5
            },
            {
                start: 41,
                end: 42,
                yourPoint: 5.5
            },
            {
                start: 43,
                end: 44,
                yourPoint: 6
            },
            {
                start: 45,
                end: 46,
                yourPoint: 6.5
            },
            {
                start: 47,
                end: 48,
                yourPoint: 7
            },
            {
                start: 49,
                end: 50,
                yourPoint: 7.5
            }
        ],
        tour11: [
            {
                start: 11,
                end: 35,
                yourPoint: 3.5
            },
            {
                start: 36,
                end: 37,
                yourPoint: 4
            },
            {
                start: 38,
                end: 39,
                yourPoint: 4.5
            },
            {
                start: 40,
                end: 41,
                yourPoint: 5
            },
            {
                start: 42,
                end: 44,
                yourPoint: 5.5
            },
            {
                start: 45,
                end: 46,
                yourPoint: 6
            },
            {
                start: 47,
                end: 48,
                yourPoint: 6.5
            },
            {
                start: 49,
                end: 50,
                yourPoint: 7
            },
            {
                start: 51,
                end: 52,
                yourPoint: 7.5
            },
            {
                start: 53,
                end: 54,
                yourPoint: 8
            },
            {
                start: 55,
                end: 55,
                yourPoint: 8.5
            }
        ]
    },

]

submit.addEventListener("click", calculator)

function validation(){
    if(+point.value < 0 || +point.value > 11){
        alert("Անվավեր միավորների քանակ։")
        point.value = ""
        return
    }
    if(+tour.value < 8 || +tour.value > 11){
        alert("Անվավեր տուրերի քանակ։")
        tour.value = ""
        return
    }
    if(+clas.value < 0 || +clas.value > 4 || +clas.value === 1){
        alert("Անվավեր կարգ։")
        clas.value = ""
        return
    }
    if(+score.value < 8 || +score.value > 55){
        alert("Մրցակիցների կարգերի գումարը անվավեր է")
        clas.value = ""
        return
    }
    if(+point.value > +tour.value){
        alert("Միավորը չի կարող ավել լինել տուրերի քանակից:")
        point.value = ""
        return
    }
    return true
}

function calculator (){
    if(!validation()){
        return
    }
    let clasVal = +clas.value
    if(+clasVal === 0){
        clasVal = 5
    }
    for(let i = 0; i < clasVal - 1; i++){
        let el = qual[i]
        if(el["tour"+tour.value]){
            for(let item of el["tour"+tour.value]) {
                if(+score.value >= item?.start && +score.value <= item?.end && +point.value >= item.yourPoint){
                    alert(`Դուք լրացրել եք ${el.doneClas}-${el.doneClas === 1 ? "ին" : "րդ"} կարգ`)
                    q = 0
                    score.value = ""
                    return
                }
            }
        }
    }
    alert("Ձեր միավորը չի բավարարում կարգ լրացնելու համար")
    q = 0
    score.value = ""
}



