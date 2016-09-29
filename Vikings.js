var villageTreasure = 0;
var vilageTreasureInit = 0;
var vikingRandom = [];
var names = ["Cloud", "Barret", "Red XIII", "Tifa", "Cait Sith", "Aeris", "Yuffie", "Terra", "Locke", "Edgar", "Biggs", "Wedge", "Sabin", "Celes", "Shadow", "Gau", "Relm", "Gestahl", "Umaro", "Mogu", "Gogo", "Squall", "Quistis", "Rinoa", "Irvine", "Cristi", "Zell", "Selphie", "Yitán", "Vivi", "Freya", "Quina", "Garnet", "Steiner", "Amarant", "Tidus", "Yuna", "Auron", "Wakka", "Lulu", "Kimahri", "Gilgamesh", "Rosa", "Cecil", "Gabranth", "Lorenzo", "Ifrit", "Shiva", "Odin", "Ramú", "Bahamut", "Alejandro", "Thor", "Cactilio", "Moguri", "Chocobo", "Warrior of Light", "Firion", "Onion Knight", "Golbez", "Bartz", "ExDeath", "Kefka", "Sephiroth", "Artemisa", "Kuja", "Seymour", "Jecht", "Vaan", "Penelo", "Ashe", "Basch", "Balthier", "Lightning", "Hope", "Vanille", "Fran", "Larsa", "Snow", "Kain", "Rydia", "Edward", "Strago"];
var saxonRandom = [];
var toTheBattle = [];
var victory;
var vikingsDead = 0;
var saxonsDead = 0;
var weaponry = ["hacha", "lanza", "arco", "espada ancha", "escudo"];
var arsenal = [];


var Vikings = function(name) {
  var life =  1000 + Math.floor(Math.random() * 500);
  
  this.name = name || names[Math.floor(Math.random() * (names.length))],
  this.health = life,
  this.maxhealth = life,
  this.strength = 100 + Math.floor(Math.random() * 50),
  this.defense = 30 + Math.floor(Math.random() * 30),
  this.speedIniciative = 200 + Math.floor(Math.random() * 100),
  this.block = 50 + Math.floor(Math.random() * 30);
  this.viking = true;
  this.dead = false;
  this.age = 5 + Math.floor(Math.random() * 70);
  this.weapon = '';
};

var Training = function(viking1, viking2) {
  var fastAttacker = viking1;
  var slowAttacker = viking2;
  if (viking1.speedIniciative >= viking2.speedIniciative) {
    fastAttacker = viking1;
    slowAttacker = viking2;
  } else {
    vikingFast = viking2;
    fastAttacker = viking1;
  }
  console.log(fastAttacker.name + ' es más rápido y ataca primero.');

this.round = function() {
    
    while ((fastAttacker.strength - slowAttacker.defense)*1.2 < slowAttacker.health && (slowAttacker.strength - fastAttacker.defense)*1.2 < fastAttacker.health) {
      
      var blocked = false;
      
   this.blocking = function(defender) { 
  var blockAlea = Math.floor(Math.random() * 2000);
  if (defender.block >= blockAlea){
    blocked = true ;
    console.log("¡¿Qué ha sido eso?!")
  } else {
    blocked = false;
    
  }
};

      this.blocking(slowAttacker);
      if (blocked === false){
      var hitFast = (fastAttacker.strength - slowAttacker.defense) + Math.round(100 + Math.floor(Math.random() * 4000)/100);
      slowAttacker.health = slowAttacker.health - hitFast;
      console.log(slowAttacker.name + ' ha recibido ' + hitFast + ' puntos de daño');
      } else if (blocked === true){
      console.log('¡' +slowAttacker.name + ' ha conseguido bloquear el ataque!');
      }
      
      this.blocking(fastAttacker);
      if (slowAttacker.health > 0) {
        if(blocked === false) {
      var hitSlow = (slowAttacker.strength - fastAttacker.defense) + Math.round(100 + Math.floor(Math.random() * 4000)/100);
      fastAttacker.health = fastAttacker.health - hitSlow;
      console.log(fastAttacker.name + ' ha recibido ' + hitSlow + ' puntos de daño');
      }
      else if (blocked === true){
      console.log( '¡' + fastAttacker.name + ' ha conseguido bloquear el ataque!');
      }}
    }
  };
  this.round();
  console.log('El entrenamiento ha finalizado');
};

var Saxon = function() {
  this.name = 'El sajón';
  this.health = 500 + Math.floor(Math.random() * 400),
    this.strength = 20 + Math.floor(Math.random() * 40),
    this.defense = 10 + Math.floor(Math.random() * 30),
    this.speedIniciative = 160 + Math.floor(Math.random() * 80),
    this.gold = 146 + Math.floor(Math.random() * 55),
    this.block = 30 + Math.floor(Math.random() * 20);
    this.viking = false,
    this.dead = false;
};

var Assault = function(viking, saxon) {
  var fastAttacker = viking;
  var slowAttacker = saxon;
  
  this.setFirstAttacker = function() {
    if (viking.speedIniciative >= saxon.speedIniciative) {
      fastAttacker = viking;
      slowAttacker = saxon;
    } else {
      fastAttacker = saxon;
      slowAttacker = viking;
    } 
  }



  this.round = function() {
    
    while (slowAttacker.health > 0 && fastAttacker.health > 0) {
      
      var blocked = false;
      
   this.blocking = function(defender) { 
  var blockAlea = Math.floor(Math.random() * 2000);
  if (defender.block >= blockAlea){
    blocked = true ;
    console.log("¡¿Qué ha sido eso?!")
  } else {
    blocked = false;
    
  }
};

      this.blocking(slowAttacker);
      if (blocked === false){
      var hitFast = (fastAttacker.strength - slowAttacker.defense) + Math.round(100 + Math.floor(Math.random() * 4000)/100);
      slowAttacker.health = slowAttacker.health - hitFast;
      console.log(slowAttacker.name + ' ha recibido ' + hitFast + ' puntos de daño');
      } else if (blocked === true){
      console.log('¡' +slowAttacker.name + ' ha conseguido bloquear el ataque!');
      }
      
      this.blocking(fastAttacker);
      if (slowAttacker.health > 0) {
        if(blocked === false) {
      var hitSlow = (slowAttacker.strength - fastAttacker.defense) + Math.round(100 + Math.floor(Math.random() * 4000)/100);
      fastAttacker.health = fastAttacker.health - hitSlow;
      console.log(fastAttacker.name + ' ha recibido ' + hitSlow + ' puntos de daño');
      }
      else if (blocked === true){
      console.log( '¡' + fastAttacker.name + ' ha conseguido bloquear el ataque!');
      }}
    }
  };
  
  this.checkDead = function() {
    if (viking.health <= 0) {
      console.log('¡Tu vikingo, ' + viking.name + ' ha muerto en combate! ¡Pronto irá al Valhalla!');
      vikingsDead++;
      viking.dead = true;
      eliminateDead(vikingRandom);
    } 
    if (saxon.health <= 0) {
      console.log('¡El sajón ha muerto! Consigues ' + saxon.gold + ' monedas de oro');
      villageTreasure = villageTreasure + saxon.gold;
      saxonsDead++;
      saxon.dead = true;
      eliminateDead(saxonRandom);
    }
  };


  
  this.setFirstAttacker();
  this.round();
  this.checkDead();

};

var Weapons = function(name){
  if (name === 'escudo') {
  this.defense = (20 + Math.floor(Math.random() * 30)),
  this.name = name,
  this.taked = false;
  this.block = 100 + Math.floor(Math.random() * 50);
  } else {
  this.strength = (30 + Math.floor(Math.random() * 40)),
  this.name = name,
  this.taked = false;
  }
};


function createWeapons() {
  for (var i = 0; i < vikingRandom.length; i++) {
    arsenal[i] = new Weapons(weaponry[Math.floor(Math.random() * 5)]);
    console.log("Se ha creado un nuevo arma " + arsenal[i].name);
  }
  return arsenal;
}

function createArmy() {
  for (var i = 0; i < 100; i++) {
    vikingRandom[i] = new Vikings();
    console.log("Ha nacido un nuevo vikingo: " + vikingRandom[i].name);
  }

  return vikingRandom;
}

function createArmySaxon() {
  for (var i = 0; i < 100; i++) {
    saxonRandom[i] = new Saxon();
  }
  return saxonRandom;
}

function createBattle() {
  if (vikingRandom.length === 0 || saxonRandom.length === 0){
    console.log('No hay suficientes guerreros para la batalla.');
  } else {
    villageTreasureInit = villageTreasure;
  for (var i = 0; i < 100 && vikingRandom.length > 0 && saxonRandom.length > 0; i++) {
    toTheBattle[i] = new Assault(vikingRandom[Math.floor(Math.random() * (vikingRandom.length))], saxonRandom[Math.floor(Math.random() * (saxonRandom.length))]);
    }
   showMeTheWinner();
  }

}

function pickWeapons() {
  for (var i= 0; i < vikingRandom.length; i++) {
    var j = Math.floor(Math.random() * arsenal.length);
    vikingRandom[i].weapon = arsenal[j];
    arsenal[j].taked = true;
    console.log(vikingRandom[i].name + " ha cogido un " + arsenal[j].name + ".");
    arsenal.splice(j, 1);
  }
  return arsenal;
}

function addStats(viking) { 
  for (var i = 0; i < vikingRandom.length; i++){
    var strengthBefore = vikingRandom[i].strength;
      if (vikingRandom[i].weapon.name === 'escudo'){
    vikingRandom[i].defense = vikingRandom[i].defense + vikingRandom[i].weapon.defense;
    vikingRandom[i].block = vikingRandom[i].block + vikingRandom[i].weapon.block
      }else {
    vikingRandom[i].strength = vikingRandom[i].strength + vikingRandom[i].weapon.strength;
}
    console.log(vikingRandom[i].name + ' tiene ahora ' + vikingRandom[i].strength + ' puntos de ataque, antes tenía ' + strengthBefore)
  }
}

function checkVikings() {
  console.log('¡Tienes ' + vikingRandom.length + ' vikingos listos para la batalla! ¡Éstas son sus características!:');
  console.log(vikingRandom);
}

function checkMoney() {
  console.log("Tienes " + villageTreasure + " monedas de oro");
}

function checkSaxon() {
  console.log('¡Hay ' + saxonRandom.length + ' sajones en el pueblo! ¡Éstas son sus características!:');
  console.log(saxonRandom);
}

function checkArsenal() {
  console.log('¡Tienes ' + arsenal.length + ' armas en el arsenal! ¡Son éstas!:');
  console.log(arsenal)
}

function eliminateDead(group) {
  for (var i = 0; i < group.length; i++) {
    if (group[i].dead) {
      group.splice(i, 1);
    }
  }
}

function eliminateYoungOld() {
 for (var i = vikingRandom.length-1; i >= 0 ; i--) {
   if (vikingRandom[i].age < 15 || vikingRandom[i].age > 45) {
     console.log(vikingRandom[i].name + ' no puede luchar por tener ' + vikingRandom[i].age + ' años.');
     vikingRandom.splice(i, 1);
   }
 }
}

function showMeTheWinner() {
if (vikingsDead >= saxonsDead) {
  victory = false;
} else {
  victory = true;
}

if (vikingRandom.length === 0) {
  victory = false;
  console.log('¡Oh, no! Todos los vikingos atacantes han muerto en combate!')
} else if (saxonRandom.length === 0) {
  victory = true;
  console.log('¡Sí! ¡El pueblo sajón ha perecido bajo el poder de las armas vikingas!')
}

if (victory === false) {
  console.log('Han ganado los sajones. ¡Pierdes todo el tesoro acumulado en este saqueo!');
  villageTreasure = villageTreasureInit;
} else {
  console.log('Han ganado los vikingos. ¡El saqueo ha sido efectivo!');
  villageTreasureInit = villageTreasure
}

console.log('¡Han sobrevivido ' + vikingRandom.length + ' vikingos!')
console.log('¡Han sobrevivido ' + saxonRandom.length + ' sajones!')
checkMoney()
}

function weaponShop(name, price) {
  if (villageTreasure >= price) {
  arsenal.push(new Weapons(name));
  villageTreasure = villageTreasure - price;
  console.log('Has comprado ' + name + ' por un precio de ' + price + ' monedas de oro.');
  } else {
    console.log('¡No tienes suficiente dinero!');
  }
}

function merchant(weapon) {
  if (weapon === 'arco'){
    weaponShop('arco', 250);
  } else if (weapon === 'hacha') {
    weaponShop('hacha', 400);
  } else if (weapon === 'lanza') {
    weaponShop('lanza', 300);
  } else if (weapon === 'espada ancha') {
    weaponShop('espada ancha', 500);
  } else if (weapon === 'escudo') {
    weaponShop('escudo', 350);
  } else {
    console.log('¡No tengo esa arma disponible!')
  }
}

function inn(){
  var innAnswer = prompt("¿Quieres entrar en la posada y curar a tus vikingos por 50 de oro por cada uno? Por favor, responde si o no")
  if (innAnswer === "si"||innAnswer ==="SI"||innAnswer ==="Si"||innAnswer ==="sí"||innAnswer ==="SÍ"||innAnswer ==="Sí"){
  var innPrice = vikingRandom.length * 50
  if (villageTreasure < innPrice){
    console.log ('¡No tienes suficiente dinero para descansar aquí!')
  } else {
  for ( var i = 0; i<vikingRandom.length; i++) {
    vikingRandom[i].health = vikingRandom[i].maxhealth;
  }
  villageTreasure = villageTreasure - innPrice;
  console.log ('Todos tus vikingos se han curado completamente. Tienes ' + villageTreasure + ' monedas de oro.');
}
}}

//LLAMADAS

var antonio = new Vikings('Antonio');
var dragor = new Vikings('Dragor');

var training1 = new Training(antonio, dragor);

console.log(antonio)
console.log(dragor)

var saxon1 = new Saxon();
var saxon2 = new Saxon();
var saxon3 = new Saxon();


createArmy();
createArmySaxon();

eliminateYoungOld();

checkVikings();
checkSaxon();

createWeapons();

checkArsenal();

pickWeapons();
addStats();

checkVikings();
createBattle();

checkVikings();
checkSaxon();

checkMoney();

weaponShop('escudo', 500);

checkMoney();
merchant('arco');
checkArsenal();
checkMoney();

createBattle();

inn();

checkVikings();
