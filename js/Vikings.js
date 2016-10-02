var armyvikings = [];
var armysaxons = [];
var Viking = function (name) {
  this.name = name,
  this.life = Math.floor(Math.random()*50)+10,
  this.strength = Math.floor(Math.random()*20)+4
  
 
}  
Viking.prototype.attack = function (attack) {
attack = this.strength;
return attack;
}
var Saxon = function () {
  this.life = Math.floor(Math.random()*50)+10,
  this.strength = Math.floor(Math.random()*18) 
  
}  
Saxon.prototype.attack = function (attack) {
attack = this.strength;
return attack;
}
function ejercitos () {
  for (i = 0; i < 500; i++) {
   armyvikings.push(new Viking(i));
   armysaxons.push(new Saxon());
  }
}
 ejercitos();
var v1 = new Viking ("ShurVikingo keru");
var v2 = new Viking ("VikingoQueLoPeta Fran");
this.winner = "";
var counter = 0;
function pit (v1, v2) { //parametrizo la función
  
  var counter = 0;
  while (counter < 10 && (v1.attack() < v2.life && v2.attack() < v1.life)) {
  
    counter++;
   
      console.log("La vida del "+ v2.name + " es " + v2.life);
      console.log("La fuerza del golpe de "+ v1.name + " es " + v1.attack());
      
      if(v2.life = v2.life - v1.attack()){
      console.log("Después del golpe de "+ v1.name + " , al "+ v2.name + " le quedan " + v2.life + " de vida");
        console.log("---------Se acabó el turno de " + v1.name + " ---------");
      
         console.log("La vida de "+ v1.name + " es " + v1.life);
        console.log("La fuerza del golpe de "+ v2.name + " es " + v2.attack());
        }
        if(v1.life = v1.life - v2.attack()){
        console.log("Después del golpe de "+ v2.name + " , al "+ v1.name + " le quedan " + v1.life + " de vida"); 
          console.log("---------Se acabó el turno de " + v2.name + " ---------" );
        } 
  }
  console.log("Se acabó la batalla entre "+ v1.name+ " y " + v2.name +" , porque como ocurra otra vez...se han quedado temblando los dos...que os vais a matar!")
if(v1.life > v2.life){
      this.winner = v1.name;
    
      this.winner = v2.name;
    
    console.log("El ganador es " + this.winner + "!!!Ahora a por los Saxones!!!!Esto es la guerra!!!")
    }
    }
pit(v1,v2);
function batallaAMuerte() {
    var vikingosMuertos = 0;
    var saxonsMuertos = 0;
    for (var i =0; i<armyvikings.length; i++) {
        var vikinglife = armyvikings[i].life;
        var saxonlife = armysaxons[i].life;
        var vikingHostias = armyvikings[i].attack();
        var saxonHostias = armysaxons[i].attack();
        while (vikinglife > 0 && saxonlife > 0) {
            saxonlife = saxonlife - vikingHostias;
            vikinglife = vikinglife - saxonHostias;
        }
        if (vikinglife <= 0) {
                vikingosMuertos ++;
        }
        else if (saxonlife <= 0) {
                saxonsMuertos ++;
        }
    }
  console.log("CUIDADO QUE LOS SAXONS Y LOS VIKINGS NO SE LLEVAN BIEN!");
    console.log("QUE SE PELEAN!!!");
    console.log("ESTO ES LA GUERRA!!!!!");
  
    console.log("Han muerto " + saxonsMuertos + " Saxons en la batalla con los Vikingos");
    console.log ("Han muerto " + vikingosMuertos + " Vikingos en la batalla con los Saxones");
    console.log("________$$$$$$$$$$________ ");
console.log("_____d$$$$$$$$$$$$$b______ ");
console.log("_____$$$$$$$$$$$$$$$$_____ ");
console.log("____4$$$$$$$$$$$$$$$$F____ ");
console.log("____4$$$$$$$$$$$$$$$$F____ ");
console.log("____$$$$___$$$$___$$$$_____ ");
console.log("_____$$F___4$$F___4$$_____ ");
console.log("______$F___4$$F___4$______ ");
console.log("______$$___$$$$___$P______ ");
console.log("______4$$$$$_^$$$$$%_____ ");
console.log("_______$$$$F__4$$$$_______ ");
console.log("_________$$$ee$$$_________ ");
console.log("__________*$$$$F4_________ ");
console.log("_________$______$_________ ");
console.log("__________$$$$$$__________ ");
console.log("__________^$$$$___________ ");
console.log("_4$$c_________________$$r_ ");
console.log("_^$$$b______________e$$$__ ");
console.log("_d$$$$$e__________z$$$$$b_ ");
console.log("4$$$*$$$$$c_____$$$$$*$$$r ");
console.log("_______^*$$$be$$$*________ ");
console.log("___________$$$$___________ ");
console.log("_________d$$P$$$b_________ ");
console.log("_______d$$P___^$$$b_______ ");
console.log("____ed$$$________$$$be____ ");
console.log("_$$$$$$P__________*$$$$$$_ ");
console.log("_4$$$$$P____________$$$$$$_ ");
console.log("__*$$$______________^$$P___ ");
console.log("___________________________ ");
    if (vikingosMuertos < saxonsMuertos) {
      console.log("Han ganado los Vikingos, querían masacrar a los Saxones y... lo han conseguido! Han arrasado con todo!!!");
    }else {
      console.log("Han ganado los Saxones, ni ellos se lo creen");
    }
}
batallaAMuerte();