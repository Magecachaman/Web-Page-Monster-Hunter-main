let monsters = [
  {
    name: "Uragaan",
    type: "Wyvern bruto",
    weakness: "Agua",
    element: "Nitro"
  },
  {
    name: "Nergigante",
    type: "Wyvern bruto",
    weakness: "Rayo",
    element: "Ninguno"
  },
  {
    name: "Astalos",
    type: "Wyvern pajaro",
    weakness: "Rayo y Veneno",
    element: "Rayo"
  }
];

let editingIndex = null;

function listenToEvents() {
  let customMonstersForm = document.getElementById("form-custom-monster");
  customMonstersForm.addEventListener("submit", validateCustomMonstersForm);
}

function validateCustomMonstersForm(event) {
  let monsterName = event.target['monster-name'].value;
  let monsterType = event.target['monster-type'].value;
  let monsterWeakness = event.target['monster-weakness'].value;
  let monsterElement = event.target['monster-element'].value;


  let error = false;

  if (monsterName == "") {
    error = true;

    const MONSTER_NAME_REQUIRED_ERROR = document.getElementById("monster-name-required-error");
    MONSTER_NAME_REQUIRED_ERROR.style.visibility = "visible"
  }

  if (monsterType == "") {
    error = true;

    const MONSTER_TYPE_REQUIRED_ERROR = document.getElementById("monster-type-required-error");
    MONSTER_TYPE_REQUIRED_ERROR.style.visibility = "visible"
  }
  if (monsterWeakness == "") {
    error = true;

    const MONSTER_WEAKNESS_REQUIRED_ERROR = document.getElementById("monster-weakness-required-error");
    MONSTER_WEAKNESS_REQUIRED_ERROR.style.visibility = "visible"
  }
  if (monsterElement == "") {
    error = true;

    const MONSTER_ELEMENT_REQUIRED_ERROR = document.getElementById("monster-element-required-error");
    MONSTER_ELEMENT_REQUIRED_ERROR.style.visibility = "visible"
  }

  if (error) {
    console.log("ocurrió un error")
    event.preventDefault();
  } else {
    if (editingIndex === null) {
      addToMonsters(event);
    }else{
      updateMonster(event);
    }
  }
}

function addToMonsters(event) {
  event.preventDefault();
  let monsterName = event.target["monster-name"].value;
  let monsterType = event.target["monster-type"].value;
  let monsterWeakness = event.target["monster-weakness"].value;
  let monsterElement = event.target["monster-element"].value;


  let newMonster = {
    name: monsterName,
    type: monsterType,
    weakness: monsterWeakness,
    element: monsterElement
  }
  monsters.push(newMonster);

  showMonstersList();
}

function showMonstersList() {

  let monsterList = "";
  monsterList += "<tr>";
  monsterList += "<th>Nombre</th>";
  monsterList += "<th>Tipo</th>";
  monsterList += "<th>Elemento</th>";
  monsterList += "<th>Debilidad</th>";
  monsterList += "</tr>";
  for (let i = 0; i < monsters.length; i++) {
    monsterList += "<tr>";
    monsterList += "<td>" + monsters[i].name;
    monsterList += "<td>" + monsters[i].type;
    monsterList += "<td>" + monsters[i].element;
    monsterList += "<td>" + monsters[i].weakness;
    monsterList += "<td><button class='btn-edit' onclick='editMonster(" + i + ")'>Editar</button> " + "<button class='btn-delete' onclick='deleteMonster(" + i + ")'>Eliminar</button></td>";
    monsterList += "</tr>";
  }

  document.getElementById("monsters-list").innerHTML = monsterList;
}

function deleteMonster(index) {
  monsters.splice(index, 1);
  showMonstersList();
}

function updateMonster(event) {
  event.preventDefault();

  let monsterName = event.target["monster-name"].value.trim();
  let monsterType = event.target["monster-type"].value.trim();
  let monsterWeakness = event.target["monster-weakness"].value.trim();
  let monsterElement = event.target["monster-element"].value.trim();

  monsters[editingIndex].name = monsterName;
  monsters[editingIndex].type = monsterType;
  monsters[editingIndex].weakness = monsterWeakness;
  monsters[editingIndex].element = monsterElement;

  editingIndex = null;
  document.getElementById("form-custom-monster").reset();
  showMonstersList();
}

function editMonster(index) {
  editingIndex = index;

  document.getElementById("monster-name").value = monsters[index].name;
  document.getElementById("monster-type").value = monsters[index].type;
  document.getElementById("monster-element").value = monsters[index].element;
  document.getElementById("monster-weakness").value = monsters[index].weakness;
}

showMonstersList();
listenToEvents();