var entities = [
  "to_room_1",
  "to_room_2",
  "to_corridor",
  "to_hall_elev",
  "to_hall_info",
  "to_mart_door",
  "to_mart_inside",
  "to_classroom",
  "to_projectroom",
  "to_lounge",
  "to_second_floor",
  "to_frontdoor"
];


async function clearEntities(){
  var els = document.getElementsByTagName('a-entity')
    for(var i=0, el_name; el_name=entities[i]; i++){
      var arr_name = el_name + "_arrow"
      var arr = document.getElementById(arr_name)
      var el = document.getElementById(el_name);
      console.log(el)
      el.setAttribute("visible", false);
      el.setAttribute("scale", "0 0 0");
      arr.setAttribute("visible", false);
      arr.setAttribute("scale", "0 0 0"); 
    };
};

async function newEntity(id, pos="0 0 -5", rot="0 0 0"){
    var arrow_id = id + "_arrow"
    var element = document.getElementById(id)
    var arrow = document.getElementById(arrow_id)
    var arrowpos = pos.split(" ")
    var x = arrowpos[0]
    var y = arrowpos[1]
    var z = String(parseFloat(arrowpos[2]+0.00001))
    var newpos = x+" "+y+" "+z
    console.log(newpos)
    arrow.setAttribute("visible", true)
    arrow.setAttribute("scale", "1 1 1")
    arrow.setAttribute("position", newpos)
    arrow.setAttribute("rotation", rot)
    element.setAttribute("visible", false)
    element.setAttribute("scale", "1 1 1")
    element.setAttribute("position", pos)
    element.setAttribute("rotation", rot)
    
} 

async function initEntities() {
  clearEntities();
  newEntity("to_hall_info", "0 150 0", "-2 -0.72655 3.5");
}

$("#to_room_1").click(function() {
  clearEntities();
  // 생성될 썸네일
  // newEntity
  newEntity("to_room_2", "4.9 -2.1 -3.2", "0 -60 0");
  newEntity("to_corridor", "-5.6 -2 4.3", "0 120 0");
});

$("#to_room_2").click(function() {
  clearEntities();
  newEntity("to_room_1", "6.9 -2.2 1.8", "0 250 0");
  newEntity("to_corridor", "-3 -5.6 3", "0 120 0");
});

$("#to_corridor").click(function() {
  clearEntities();
  newEntity("to_room_1", "-2.5 -0.5 6.75", "0 180 0");
  newEntity("to_hall_elev", "-3.3 -1.7 -3.45", "0 45 0");
  newEntity("to_second_floor", "-4.5 -1.45 -4.7", "0 45 0");
});

$("#to_hall_elev").click(function() {
  clearEntities();
  newEntity("to_corridor", "5.88 -0.57 3.1", "0 240 0");
  newEntity("to_hall_info", "1.1 0 -5.3", "0 -30 0");
  newEntity("to_second_floor", "-3.3 1.25 -5.9", "0 20 0");
});

$("#to_hall_info").click(function() {
  clearEntities();
  newEntity("to_mart_door", "-5 0.25 1.48", "0 110 0");
  newEntity("to_frontdoor", "1.3 -0.93 6.8", "0 200 0");
  newEntity("to_hall_elev", "-5.6 0 -2.7", "0 100 0");
  newEntity("to_second_floor", "-2.78 1.7 -5.62", "0 20 0");
});

$("#to_mart_door").click(function() {
  clearEntities();
  newEntity("to_hall_info", "4.95 -3.3 3.9", "0 250 0");
  newEntity("to_mart_inside", "-5.2 -1 -0.15", "0 90 0");
});

$("#to_mart_inside").click(function() {
  clearEntities();
  newEntity("to_mart_door", "1.328 -0.77 -2.649", "0 -20 0");
});

$("#to_classroom").click(function() {
  clearEntities();
  newEntity("to_second_floor", "2.51 -1.35 -4.3", "0 -60 0");
});

$("#to_projectroom").click(function() {
  clearEntities();
  newEntity("to_second_floor", "5.3 0.92 -2.9", "0 -60 0");
});

$("#to_lounge").click(function() {
  clearEntities();
  newEntity("to_second_floor", "-2.46 -2 4.74", "0 -220 0");
});

$("#to_second_floor").click(function() {
  clearEntities();
  newEntity("to_hall_info", "-3.46 0.03 -6.7", "0 40 0");
  newEntity("to_classroom", "-6.7 -0.6 -4.1", "0 50 0");
  newEntity("to_projectroom", "-5.44 0.18 -5", "0 40 0");
  newEntity("to_lounge", "0.86 -0.93 5.2", "0 180 0");
});

$("#to_frontdoor").click(function() {
  clearEntities();
  newEntity("to_hall_info","-2 -0.72655 3.5", "0 150 0");
});
