//don`t repeat your self
// rewrite with a function to avoid repeating code
const listOfPenguins = document.getElementById("listOfPenguins");
let wrapp = document.createElement("div");
let cont = document.createElement("div");
cont.className = "container";
wrapp.className = "wrapper";
wrapp.append(cont);
listOfPenguins.append(wrapp);
document.querySelector(".container").style.display = "flex";
listOfPenguins.style.width = "280px";
document.querySelector(".wrapper").style.overflow = "hidden";
listOfPenguins.className = "list-of-penguins";

fetch("data1.json")
  .then((results) => results.json())
  .then((date) => {
    let arr =[];
    arr = date;
    for (let i = 0; i < arr.length; i++) {
      let div = document.createElement("div");
      div.className = "item";
      cont.append(div);
      div.style.width = "285px";
      let h3 = document.createElement("h3");
      h3.innerHTML = `${arr[i].name}`;
      div.append(h3);
      let img = document.createElement("img");
      img.className = "penguin-image";
      img.src = `${arr[i].imageUrl}`;
      div.append(img);
      let p = document.createElement("p");
      p.innerHTML = `<b>Size:</b> ${arr[i].size}`;
      div.append(p);
      let p1 = document.createElement("p");
      p1.innerHTML = `<b>Favorite food:</b> ${arr[i].favoriteFood}`;
      div.append(p1);
    }
    let a = document.createElement("a");
    a.className = "button";
    a.innerHTML = "Previous";
    listOfPenguins.append(a);
    let a1 = document.createElement("a");
    a1.className = "next button";
    a1.innerHTML = "Next";
    listOfPenguins.append(a1);
    const items = document.querySelectorAll(".item");
    const itemsCount = items.length;
    let position = 0;
    const toShow = 1;
    const toScroll = 1;
    const divWidth = document.querySelector(".wrapper").clientWidth / toScroll;
    console.log(divWidth);
    const movePosition = toScroll * divWidth;
    items.forEach((item) => {
      item.style.minWidth = `${divWidth}px`;
    });
    document.querySelector(".button").addEventListener("click", function () {
      console.log("previos");
      const itemsLeft = Math.abs(position) / divWidth;
      console.log(itemsLeft);
      position += itemsLeft >= toScroll ? movePosition : itemsLeft * divWidth;
      setPosition();
    });
    document.querySelector(".next").addEventListener("click", function () {
      const itemsLeft =
        itemsCount - (Math.abs(position) + toShow * divWidth) / divWidth;
      console.log(itemsLeft);
      position -= itemsLeft >= toScroll ? movePosition : itemsLeft * divWidth;
      console.log(position);

      setPosition();
    });
    const setPosition = () => {
      document.querySelector(
        ".container"
      ).style.transform = `translateX(${position}px)`;
    };
  });

const listOfPenguins2 = document.getElementById("listOfPenguins2");
let wrapp2 = document.createElement("div");
let cont2 = document.createElement("div");
cont2.className = "container2";
wrapp2.className = "wrapper2";
wrapp2.append(cont2);
listOfPenguins2.append(wrapp2);
document.querySelector(".container2").style.display = "flex";
listOfPenguins2.style.width = "280px";
document.querySelector(".wrapper2").style.overflow = "hidden";
listOfPenguins2.className = "list-of-penguins";

fetch(`data2.json`)
  .then((results) => results.json())
  .then((date1) => {
    let arrSecond =[];
    arrSecond = date1;
    console.log(arrSecond);

    for (let i = 0; i < arrSecond.length; i++) {
      let div2 = document.createElement("div");
      div2.className = "item2";
      cont2.append(div2);
      div2.style.width = "200px";
      let h32 = document.createElement("h3");
      h32.innerHTML = `${arrSecond[i].name}`;
      div2.append(h32);
      let img2 = document.createElement("img");
      img2.className = "penguin-image";
      img2.src = `${arrSecond[i].imageUrl}`;
      div2.append(img2);
      let p2 = document.createElement("p");
      p2.innerHTML = `<b>Size:</b> ${arrSecond[i].size}`;
      div2.append(p2);
      let p12 = document.createElement("p");
      p12.innerHTML = `<b>Favorite food:</b> ${arrSecond[i].favoriteFood}`;
      div2.append(p12);
    }
    let a2 = document.createElement("a");
    a2.className = "button btn2";
    a2.innerHTML = "Previous";
    listOfPenguins2.append(a2);
    let a12 = document.createElement("a");

    a12.className = "next button nt2";
    a12.innerHTML = "Next";
    listOfPenguins2.append(a12);
    const items2 = document.querySelectorAll(".item2");
    const itemsCount2 = items2.length;
    let position2 = 0;
    const toShow2 = 1;
    const toScroll2 = 1;
    const divWidth2 =
      document.querySelector(".wrapper2").clientWidth / toScroll2;
    console.log(divWidth2);
    const movePosition2 = toScroll2 * divWidth2;
    items2.forEach((item) => {
      item.style.minWidth = `${divWidth2}px`;
    });
    document.querySelector(".btn2").addEventListener("click", function () {
      console.log("previos");

      const itemsLeft2 = Math.abs(position2) / divWidth2;
      console.log(itemsLeft2);
      position2 +=
        itemsLeft2 >= toScroll2 ? movePosition2 : itemsLeft2 * divWidth2;
      setPosition1();
    });
    document.querySelector(".nt2").addEventListener("click", function () {
      console.log(position2);
      const itemsLeft2 =
        itemsCount2 - (Math.abs(position2) + toShow2 * divWidth2) / divWidth2;
      console.log(Math.abs(position2) + toShow2 * divWidth2);
      position2 -=
        itemsLeft2 >= toScroll2 ? movePosition2 : itemsLeft2 * divWidth2;
      console.log(position2);

      setPosition1();
    });
    const setPosition1 = () => {
      document.querySelector(
        ".container2"
      ).style.transform = `translateX(${position2}px)`;
    };
  });
