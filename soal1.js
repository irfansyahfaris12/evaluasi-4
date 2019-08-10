var n = 9
for (i = 0; i <= n; i++){
    for (h = 0; h <= n; h++){
      if (h >= 8 - i) {
        document.write((n - i) * 2 + " ")
      }else{
        document.write(' - ')
      }
    }
    document.write("<br>")
  }


  document.write("<br>")
