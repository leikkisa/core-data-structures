var Yurt = function(ribs) {
  this.ribs = ribs;
}
Yurt.prototype.countRibs = function(){
  if(this.ribs > 10) {
    console.log("Yum!");
  }
}
var biancasHouse= new Yurt(50);
biancasHouse.countRibs() //"Yum!"
