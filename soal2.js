
  for (i = 0; i < 9; i++){
    for (h = 0; h < 9; h++){
      if (h == i) {
        document.write(h * 2 - 1)
      }else if(i == 8 - h){
        document.write(h * 2 - 2)
      }else if(h > i && i < 8 - h){
        document.write('A')
      }else if(h < i && i > 8 - h){
        document.write('B')
      }else{
        document.write(' - ')
      }
    }
    document.write("<br>")
  }

  document.write('<br>')