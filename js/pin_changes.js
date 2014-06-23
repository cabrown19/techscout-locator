
function setPin() {
        
  for (y = 0; y < 5; y++){
    for (x = 0; x < markers[y].length; x++){
      markers[y][x].setVisible(true);
    }     
  }

        
  for (y = document.getElementById("test").value; y<5; y++){
   for (x = 0; x < markers[y].length; x++){
       markers[y][x].setVisible(false);
    }    
 }
        
}