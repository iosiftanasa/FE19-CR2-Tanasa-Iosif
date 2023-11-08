let tasks = [
    {
        picture: "https://www.lux-review.com/wp-content/uploads/2020/12/grocery-shopping.jpg",
        taskHeading: "Shopping...",
        taskDescription: "Shop for weekly groceries at SPAR and PENNY .",
        priority: 1,
        deadline: "10.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuMfret7fvUYzBTdrCHp2H0rWFJ9TWsMUmw&usqp=CAU",
        taskHeading: "Wash the car!",
        taskDescription: "By car to the professional car wash...",
        priority: 3,
        deadline: "11.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6VQrxKv0gGG-rRUQ94NYV887DmgmwOKmO6g&usqp=CAU",
        taskHeading: "Change phone protective film!",
        taskDescription: "Buy a quality protective film.",
        priority: 4,
        deadline: "09.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkbuYMenpRKAczBRt_JU_kkaFI-556sIzZzg&usqp=CAU",
        taskHeading: "Play football!",
        taskDescription: "Sport is healthy!.",
        priority: 4,
        deadline: "12.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiIJFtv0cLK1joWubTM80VVsi33lemdWLCpg&usqp=CAU",
        taskHeading: "Clean coffee machine!",
        taskDescription: "Refresh coffee machine...",
        priority: 2,
        deadline: "13.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnoP1I-GDUVdkE5Dnw3-NLzUmu1YbY4Rh8lg&usqp=CAU",
        taskHeading: "Work equipment!",
        taskDescription: "Get your winter work gear ready!...",
        priority: 2,
        deadline: "14.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz8zrFi0dIB-HiKYvUZ-OMFnqlJ1Q8o4W93A&usqp=CAU",
        taskHeading: "Collect the flowers!",
        taskDescription: "<b> !No later ! </b> <br> Collect the flowers from the balcony before it freezes...",
        priority: 5,
        deadline: "20.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQviUplBSVALbsd1VvtQu4Iq2jszzffvQvv-Q&usqp=CAU",
        taskHeading: "Change car tires!",
        taskDescription: "Safety is the most important...",
        priority: 5,
        deadline: "17.11.2023"
    },
    {
        picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfWUWWBoO1UTTtuMUshCmgTXIQFRZO1JMHnA&usqp=CAU",
        taskHeading: "Mother's birthday",
        taskDescription: "Prepare Mother's Gift!.",
        priority: 2,
        deadline: "16.11.2023"
    },
];

reload();
function reload() {
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let newColumn = document.createElement("div");
        newColumn.className = "col";
        newColumn.innerHTML = `
                <div class="mainCard card mt-3 mb-5 pt-2 pb-3 px-2 shadow" >
                  <div class="mt-3 mb-4">
                      <span id="mainCardsInfo" class ="ps-5 my-5"> Task </span>
                      <span class="">
                          <img src="data:image/png;base64,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" width="8%"  class="offset-5">
                          <img src="https://e7.pngegg.com/pngimages/179/938/png-clipart-computer-icons-hamburger-button-dots-kebab-menu-text-rectangle-thumbnail.png" width="3%"  class="ms-3 mt-0">
                      </span>
                    </div>
                    <div class="text-center">
                        <img src="${tasks[i].picture}" class="card-img-top w-75 ms-3" alt="...">
                    </div>
                    <div class="card-body text-center">
                        <h5 id="mainCardHeading" class="card-title mb-3  ">${tasks[i].taskHeading}</h5>
                        <p id="mainCardDescription" class="card-text">${tasks[i].taskDescription}</p>
                    </div>
                    <ul class="list-group list-group-flush border-0">
                        <li class="list-group-item bg-warning mb-2 text-center border-0" style="--bs-bg-opacity: .0;">
                          <img src="https://e7.pngegg.com/pngimages/596/866/png-clipart-exclamation-mark-exclamation-mark-thumbnail.png" width ="17%" height =100%" class="pb-1 pe-2">
                          Priority: <a href="#" id="buttons" class="btn  ms-3 shadow myBtn">${tasks[i].priority}</a>
                        </li>
                        <li class="  list-group-item bg-warning text-center border-0" style="--bs-bg-opacity: .0;">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiLg4O1N_JZggoXc1TmtlGKvZK_00BuNm_yg&usqp=CAU" width ="20%" height ="110%" class="pb-2 pe-2" >
                          Deadline: ${tasks[i].deadline}
                        </li>
                     </ul>
                    <div class="card-body text-center pt-4 pb-2">
                      <a href="#" id="buttons" class="btn btn-danger shadow m-3 " style="width:29%;"  > <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAD1CAMAAAAvfDqYAAAAclBMVEXrV1f////rUlLwi4vrVVXqSEjqTEzqT0/qSkrrU1PqR0fsY2PqRUX509P85+f86+vtbGz2u7v1trb+9PTxlJT63Nz0rq7zo6P4ycn4zs7udnb62dnym5vvg4P3wsL0qansXl7vfX3yl5fucnLtaGj+8vJYg0gDAAAN7UlEQVR4nN2da1urvBKGKeVQKlq1Wk+rnlb9/39x1+WrzRxSbwLuFueTXhfQ3BCSmWcmJJsMbYvbp6v7k+dsrz2f3F893S4G//Fs2MvdXRVtVedNsZ8my4omr6s2v7od9veHxDl7rWf5tyACKp/VV2cDNmE4nOuXtu7E8knUvlwP1oihcBbrtunO8mFNux7qLRoIZ9XmqTDvlrerYdoxCM7b+awPzLvNzt+GaMkQOKdVcj/bWVOdDtCUAXAu2oQRwFrRXhwDzqodAubdBniBeuNcDkaz5bk8NM7dgDRbnr5OQk+cRTnIe/NpRdnTReiJczLAmBZac3JInJtqWJosq24Oh3M26IvzYW2v7tYL56WXZ+Nb/nIonOsfeDjbx9PHv+6DM/2Bh7N9PNPD4Cx/5OFsH8/yIDiPgw9rH1Y9HgRnva+vFd/YnlPz9UFw9oTSzaw62WvVLD7/FvUhcB7KeHfZ3H139t0m3lXLh+RGpeM81dHm/CHn/4nejvopuVHpOOex7lIjmi1P7H4058mNSsZZxm5u0dBLRMXFMnmoTsa5jakd+RW9xFVsaJwlhz3JOAO0ZYA7oi0Z5znWU+a4pyznkUsUz6mtSsWJxgbNhl9kExtNkqOEVJxVbFjqMspGx/o6VdNJxFlU0VGpg39/HR0dq0TROg3nLu7gzLrgRLXgov7Wr3Bth3O6ep0yW2ezuLtWNPAqW9uTDCrKbA2v8ro61TjX01lZ1zm0vWJUQa8y1HXquiyn1yHOtO2WNTs2K/J2+oWzyKLe5HiszhYfOIt6YO3vMNbUi384z7+CZsvz/I4zvJJ5KKtuJlnUcRqhzZfZT+kxh7DqMfsZ7e8wlk+zzagnHGnF5tAtGNqiYdgIrXjO7n/JrPNuzX128wscnE+rn7KfSdIcxtrrLC7/jc6a862T83seT3v97oKufombM199xDs3v+L5tDef0ehFv+K6Y7D8o97qI7h+WyfVcR6LFXW7fhNKzmKVjZanyFafstxOmBrvgN38dXS28Xo7zb2Dsx4vztrBGW8cF9SJ7HCi+aejtyC7tcOJZl6P3oLc8g5nvJFCfePgxOsEjt2CDNkOJ5pPO3oLcnU7nIvRCm7VhYMzXv0wqBjb4USz/EdvQSXDDuduvDh3Ds7peHFMbnSyJyt+9Bbk/nc4Z+PFOXNwFqNVQOYLB+dtvE/nzcFZjncoWP5+nElXr6Cpq6oiAlCRb4+sSSFG8e+SXcPiauLhdJOm8nJz83h78eek/ObXi6parx4fV+sqWmX1nzXlyZ+L28ebTdkpkgzrrgOcTnUs5fpzdLy+39tLm+prfd7l/vWls/vP+eNs3WVYKnIXp4vQNg/XCewTufNNUEu53Oy57fOwJO+xw6xRhAy7P084jlpBeBm9mbqUMloumZVykeUt182LYL1cgMN1Q1P4HV1dUaqqwUUM3Kyj4NJFWEUe4GDdsJipn54sIvfSFrzHWtmaask9JYAKZ6cahjh7F7CE5qx/+uvfClsYGnF0A13207DuFz7YLOH8yq4l9mUgb+mKPx046xYu6TwY3t0AB+uGzvKnSx+nsDj+SiSn0vgW4wQ18QEOfvkcHF83CYfQrx90cSq7uB9rF+GTDX4Q64bOb0dwnKeDcbCyFKiGIQ4W2px3x7+VHXCc/otxgo4a4Pj9/5vz/zNfBuI4zrISfHfr4O4GOPzpWhxfBuqAY4vaeWcJOmqAw989u2rCl4E64NjvlmDNPOyoAQ7WDZ1Jwl+myHGcxYh4ZAo7aoCDdcP81fy2P9l3wLELMV7pNBh21ADnAeNYJ8dXtTrg2PVH2EmZBU82wMG6oYPjq1ocZ94DJ3yyAQ7WDRu7KLo3jl1+hD3i8MkGOFg3bF7Mb7+5EQLHae0Xpl5ovBLeigDHb5KHc29+2/92QQccu5wRh1/hrQhw8OcUvEXEfXHsgZEQyjk3uBWhz0txCmct5fA4uF49PDcJx1ml2negtgfiAu8YDh3ZvDDGDTIxjhe2Yp0svBVhy6huGOp0+1uJcZwblNSa8Dr48RolJ3Iux3G6L3WIxbkhTtLLt+9cjkMHl+/ODXH40Gh/3D0X4zi6FMYR54Y4eB6mkx7HoROzd+5LBAd7SdQl4Tgv5jjsowg5OMTBPix1GDGO86Uf7EEK/z7EwbohjU44Do2gvHPDL2mEOFg3dHDcW8Fx7Mc9MI4I9UMcHJ07obB7KzgODdc9nFCICXGwFESFCoyDxRTv3FAmC3Gw7khlJI5DpS7HhCYb4mDdkIp8HIcKkR5OKG+HOFg3pBkRjmNVb5wPEY0JcbBuSAVyjINFfMeEvB3i8O4K0xccp0c+RLzIIQ4eTOjN5Dg98iFimA1x+FAPMyIYp08+REyCIQ6fiO246g5EHMcOlTiBIFyUEAd7fbX9jq8rcHOcHgkE4Q+HONgndyZxt6NiHOo1eSailRAHR0yOxzg4DnbvRSwpJBSMA/15jtMjgSAifYHTI8HjvncYx4kHeXonikOlLSd4dN87jmOjdRrpS9FP4FDh0Qnt3fcO4zhaCtVhpOIo/qEFelRH4jj2OKqSFeJj9gKHFuhRla8PTrwuUZrMzggcmiGiGiyfRu1xuKcIiU7gpPXXD/OGEYqDNXwP5yWKg0cTmL/AODTD4pgcZcWFeO7b/ryXQsA4NP/l4Yg5UODgQgvn1fX6OsZxttrAHorQtAQO9mIdHG9UpDg4d+yY9O4FDo4x4DyBcXrkQ2TsJXBwBAgzIhinRz5ERsYCB9cbwowIxnkxh/HYS+gWAgerJzAjQnH65EOkCCRwsLYF4xOM0yMfIkUggYOFVJgRwTg98iFSNRE4WDeEsT3FodqDiyPkf4GDdUMnheDNWRgHKkOeyeSMwOG3hOliGAfqdi6O6CgCh3dYplpiHFpn7uGI11jg8NGRZUQwTo8EgpwzBA6eiuEaEYrTZ32IdFBkpIFx2O9jHLqCxsORVxf/4Tp3li3DOPZVxP6WjMslDhXaYC6T4vRYUKHicolDA3SYacY46QsqVFwu/6MFenDewzjp+RAVl0scqgZBr4Ti9MiHKMlP4lDdEGZEeuDQfIiKyyUO1Q2hR49x0vMhKpCVOFQ3hBkRitMjH6ICWYlDdUMYDVOcHgsqVCArcRIf8bt5DhLGSV9QofqJxKHjiSeM9Xl3LA4dlNQYK3HwaO/Ils6XPLCTYw/DU4acASUOnosdUdlxkCCOl0DAE7r0TyQO9pTYUneKgxfOOzjSe5Q4tK7Hy4g495PiOM+a5kNUtZPEoVFGwXp7D5zvvqnzhSMjL4nDS/xsA5xFFRTHSbXihshQSeJg/cRJZjpDK8Txhn3cEBkqSRysG87sTOFkRCiOzYfg73epUEniYN2wtG6JM49THOtj4I/FqZJuiYN1Q/05n4n7PWuK82KOin4eyDRExhYSB+uGzAeGOH3yISq2kDixrxF9d5V3cwIuitMjH6K+fiRx8L5c7PsCFKfHggq1WavCSdPt/5njvkIcT0jBavk+HOxbsIxIOg6dMbS3pXCiezVrHJQRoTjp+RC9C7XCobohy4hQnPR8iK7mUf/SMINlRChOej5Ee68KhwaBTPOHOD3yITosVjg0RGeLKihOej5Ee68KhwoorLtDnB4LKrS7p3CovMUGI4qTvqBCu3sKhwptbKqgOCyt75n2jxQOVbq9lZHpOOn5EK39KxyqG7KMCMTpkQ/R7VA4qXdl4jrBFAeuefZwVKdXOPQV9Hx6641DnB4fmNJDksKhAyRbVAFx7BdbcSpDTxgKh+qG3qKK5M7mrA+hE4aezhUOdS6Y+EJHNiQL+TjKoVA41JN1pLFlupOTng/RDoXCwXGGkxGxoR/D8QRv6gprh0Lh4CjQkZVt6AdxGnsUDVS0Q6FwaIzuLYKwOQyIgz+sZU1rFqpZVEGBDXWg2VE0vaMdCnUpKtexDgJxUMf1TcuX6gexNuyMRk5DnSyhzTk60M4o6ZvWyjVOeumxdyesN+bJm1a/5zW2+3HwbbEBj+dQ2CjPcwptpM4/ja06iX7QVDcsTG/z3t6iVkctveubcWVJU4lmykrFyXIVpU/dG6pdVd+1rJV/fk9XeX2LQ4eUbRtES68iL10lWjqN9OWZCJ/WeEcHM8BqHPyBxC3P89eUfH0efefqzddM97CJtrM6/xpaTp/5bodmUNT/d9hIJCvKzer07Ozh8u98j8fYlOfvR52uzvdtbdPM/14+vB+1Kbu0QLuOGqfbBsRNPSvL2Xf7/wx5lDpHO/YaZ1wbEJskscYZ1wbE5lPSGmdcGxAbBUbjjGsDYqOPaZxxbUBs1EuNM64NiI3nqHHGtQGxcXE1zrg2IDZpJo0zrg2ITRpS44xrA2KThtQ4uN7wKMwsy9I449qA2KQhNc64NiA2aUiNM64NiI0Ao3HGtQGxUYo0ztuoNiA2mSEj2Y3r6ejWGxz8ffojMJs0Mzhj8kGtdmlwTkfU22wJp5W7u+1AfEhz0nYWZzwBnFN6YnFwLfXBzalHcBJKY1E/nMoTD+etiw55OCucZR0ezmQ1Cjd0ZgsefZzJ3xF0N28NUwTHTSodl9l0WRxnct0eOU/R2pK+OM7k9Lh5itZWw+7DmTzsS8Yc2oq5LYbdjzM5y47WO6gLW574Hc5ksp4fZYcr5rbSkeBMbvPjG+GKOrcl/gxnMnmqaIb//2NFXdl6dI4zWa6y8lgeUZGX2cqdbTDO1k5fs7aqc1qS9SMgRV5XbXYVG8+64Gxtcfs0vT95PhTN88n99OnWRgOO/Q9FmsHRYRQDQgAAAABJRU5ErkJggg==" width="30%" class="me-2 mb-1 pt-1">Delete</a>
                      <a href="#" id="buttons" class="btn btn-success shadow m-3" style="width:29%;"><img src="../images/save.png" width="30%"  class="me-2 mb-1 pt-1"> Save </a>
                    </div>
                </div>

          `;
        resultDiv.appendChild(newColumn);
    }

    //Change button color of priority:
    let btns = document.getElementsByClassName("myBtn");
    for (let i = 0; i < btns.length; i++) {
        if (tasks[i].priority < 2) {
            btns[i].classList.remove("btn-danger");
            btns[i].classList.add("btn-success");
        }
        else if (tasks[i].priority < 4) {
            btns[i].classList.remove("btn-success");
            btns[i].classList.add("btn-warning");
        }
        else if (tasks[i].priority < 6) {
            btns[i].classList.remove("btn-warning");
            btns[i].classList.add("btn-danger");
        }
    }

    //Change priority index:
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (event) {
            event.preventDefault();
            tasks[i].priority++;
            if (tasks[i].priority > 5) {
                tasks[i].priority = 0
            }
            if (tasks[i].priority < 2) {
                btns[i].classList.remove("btn-danger");
                btns[i].classList.add("btn-success");
            }
            else if (tasks[i].priority < 4) {
                btns[i].classList.remove("btn-success");
                btns[i].classList.add("btn-warning");
            }
            else if (tasks[i].priority < 6) {
                btns[i].classList.remove("btn-warning");
                btns[i].classList.add("btn-danger");
            }

            btns[i].innerHTML = tasks[i].priority;
        });

    }
    adjustCardHeights();
}

//Sort Button (Sort by priority):
let sortDirection = 0;
let sortButton = document.getElementById("sort");
sortButton.addEventListener("click", function () {
    if (sortDirection == 0) {
        sortButton.innerHTML = `Sort by priority: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///8AAABWVlbV1dU4ODi5ubkhISHBwcHc3Nzn5+dgYGDh4eH5+fk/Pz/m5ubv7+/Nzc0ZGRmTk5NRUVGsrKxERERjY2PS0tIqKipaWloNDQ2+vr5ubm5JSUkXFxcvLy92dnahoaGIiIioqKiOjo6AgICYmJhra2tDI2A+AAAEeklEQVR4nO2d6WKiMBRGcUMUBLVWoZZBbWvf/w3Hjm1lCUnIQhLmO3/BNseQ3CzX4HkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzPJNv92E6y01yF4O5lZDHjRFpwa9qBhazifGPagMVYTjD6NC3ARq4trlemy8/mJGW4802Xn00mZ2h9M5RtiLPUdPnZLKUM47Hp8rO5ShnaHw5HqWRAXCxNG7DYyQl63sRuxY3kM/pFeH42rdGKr2bo7YUTWwnkx90AAAAAAAAAAAAAAACVBMdZzxyDDsVL5sdYRi+6mFnt3XKuhc7v22NnYcFFYUZwNHriqcfo/ed20ayMJDcleFPkKHNpb+xTTPG9vQD62TKLt54+7n55ExGMn8z53ehWAa8ilXg01gr/wWqJyWv57tVawNBwpsKRUbwgK9/ti2y1Gc42YVVKUEkzEDI0nDEU6TeMXtv+eR/krOIpMPTmJh9TZs+hwtB7M6XHMxBTYhjN/pjxK3asVqjI8Bb1d8vVtGdW+92Co2iKDC0Ghu4DQ/eBofvA0H1g6D4wdB8Yug8M3QeG7gND94Gh+9i5XppfDuyl3j4Ndax5n7rkkmg31LJvkSlStHjv6aTmQbV5//Bgi6G2PeCLLYba9vGZ27u9GerKxVjZYqgtn2Zvi6G2nCjpcwJUGerKayt4dnj7MdSUm6imCtWMabTkl54VjUzVjLzV5wjnIhl2Gg09xXnea2UzC8wPhwAM3QeG7gND94Gh+8DQfWDoEMElyz6aC+VMw2S7HJ/mCmczmgi/V4vGYe0CwzD5uF/YKJuQaiL4daj/Oo1uGD9+9zXrr7QCJKWTKWvLA1TDsHRqp291LV7LFlVFmmG4L1879VnirlQPUK08qBTD2tGyz2q2grQQ1NYz00npWqthVPuUb3FLPDS2vx5Ro92wfob1RtEKrQ7ixpr05veJazNMpvXPpNQ65D+DNtQRW5tH+09/2mKL4aK520I7vqDLOcL5uR6TFUB4wcbzmmYYEg53puzIdjwLejlp/1OCkHbav4MG0bAaJu6s2r/5zud5L9XXYkLY4rsHDZIhqcR/KN979zPZVe26lCC0q1FxIBuSvo4RRVDgXP1cQ1MkbtSGRMNGL0oXFHo3gvqWeKtFQtt6OTQNI0J5U2qBRDIVdBgSu4/iUDdsb7HthgLZJloMvYCgmJ8rRumZ1IsyZhUCGUO+qrS8GqRaTCsP5YZQHVPWtEngXUEnXWfdxxn7n9fx2VOKzu972uhbDiIFDQY8LaZrQFTwvolWOmf38HUJnd67luqdpHQbYfm8fR7/u/OWvGesCUPqbtqYWjytpxByd31Cp0bZAG8tMsOEvcRcbTF1V5AzaGgadvQER9DQM3LsjwVjdEOb8DpCTO1uHA0TVWg9qrNhogppMjUoQfKS4RfFUARbg4b7ncwDYtAYkuCtFpsLgcMSbK7AFUMTrAeNwfSiZcpBY5CC5fniQAVvbfF6/50yIZ9oKETh/Lqd4X2dAAAAAAAAAAAAAAAAAAAAwAh/AaSpTv49FAF+AAAAAElFTkSuQmCC" width="3%" class="ms-3" >`;
        sortDirection = 1;
        tasks.sort((a, b) => a.priority - b.priority);
        reload();
    }
    else {
        sortButton.innerHTML = `Sort by priority: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzFNqf4McnZWvthoTHDLiwtjTZnF3khY4lag&usqp=CAU" width="3%" class="ms-3" >`;
        sortDirection = 0;
        tasks.sort((a, b) => b.priority - a.priority);
        reload();
    }
})

// Adjust the height of the cards so they have the same height:
function adjustCardHeights() {
    const cards = document.querySelectorAll('.mainCard');
    let maxHeight = 0;

    cards.forEach(card => {
        card.style.height = 'auto';
        const cardHeight = card.offsetHeight;

        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('load', adjustCardHeights);
window.addEventListener('resize', adjustCardHeights);


