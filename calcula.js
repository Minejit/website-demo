  let password = Math.floor(1000 + Math.random() * 9000).toString();
  console.log(password)

    
    const divs = document.querySelectorAll('.btn'),
          clear = document.querySelector("#clearbtn"),
          check = document.querySelector("#checkbtn");
          
    let display = document.querySelector("#ca");
    let digits = 0;
    let codeEntered = "";

    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener('click', () => {
            digits++;

       
            if (display.innerHTML === 'CORRECT' || display.innerHTML === 'WRONG') {
                display.innerHTML = '';
                codeEntered = "";
            }

           
            codeEntered += divs[i].innerHTML;

            display.innerHTML = codeEntered;
        });
    }

    
    check.addEventListener('click', () => {
        const Entered = display.innerHTML
        let result = ["❌", "❌", "❌", "❌"];
       

        for (let i = 0; i < 4; i++) {
          if (password.includes(Entered[i])) {
            if (Entered[i] === password[i]) {
              result[i] = "✅";
            } else {
              result[i] = "❔";
            }
          }
        }
      display.innerHTML= result.join('');
      

    });

    clear.addEventListener('click', () => {
        display.innerHTML = '';
        codeEntered = "";
    });
