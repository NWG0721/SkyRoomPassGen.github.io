function Generate() {
    let input = document.getElementById("telephone").value;
  
    // گرفتن ارقام از دوم تا یازدهم
    input = input.substring(1, 11);
  
    let sumedNumbers = 0;
    for (let i = 0; i < input.length; i++) {
      sumedNumbers += parseInt(input[i], 10);
    }
  
    input = parseInt(input, 10) / sumedNumbers;
  
    input = input.toString().substring(0, 5);
  
    let codeShow = "";
    for (let i = 0; i < 5; i++) {
      codeShow += input[i];`    `
      if (i < 4) {
        codeShow += "-";
      }
    }
  
    document.getElementById("Code").innerHTML = codeShow;
  }
  