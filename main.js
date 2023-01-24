const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP.rGNBCY7-hI6pIL-PqI668AHaE9&pid=Api&P=0",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.bs4ooQwzl-0g967R_J97MgHaFJ&pid=Api&P=0"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP.707-2xIffxgQSXm1f4hmowHaHa&pid=Api&P=0"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.hj91y4UKgGlcsD9b6rTYkQHaEX&pid=Api&P=0"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.oQNPbenQHHnPH7Pap-mAigHaFj&pid=Api&P=0"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.XmCph34uNhV3CQadUCrukAHaD7&pid=Api&P=0"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.j-mHovmd4MsqGaXpmG9oZAHaHC&pid=Api&P=0"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://tse3.mm.bing.net/th?id=OIP.L9hs6Nfi0cCPJXCzbRFwWQHaEK&pid=Api&P=0"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.lAce87lWFJwiehnEckCQKwHaEK&pid=Api&P=0"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.x2NA8Oi1TwXKXK3V0NDoAwHaGZ&pid=Api&P=0"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.rSOtD5qeYMjsBMS3gVc2lAHaFj&pid=Api&P=0"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "https://tse2.mm.bing.net/th?id=OIP.aQZdvd_k50NhX9QN4XHCWAHaFj&pid=Api&P=0"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.sLl3j6t1InBeGSGPfG1xrwHaFj&pid=Api&P=0"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://tse1.mm.bing.net/th?id=OIP.Bvqwa7btOfZtjER7flS2HAHaLH&pid=Api&P=0"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://tse4.mm.bing.net/th?id=OIP.MbtSYlXfkSxnuuwxSsr30QHaEK&pid=Api&P=0"
    }

  ];
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

 // const targetingApp = document.querySelector("#pet");
  let domString = "";
  const cardsOnDom = (array) => {
    let domString = "";
    for (const pet of array) {

   
    domString += `<div class="card" style="width: 18rem;">
    <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
    <div class="card-body">
    <h5 class="card-title">${pet.name}</h5>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
      <p class="card-text">${pet.type}</p>
      <button class="btn btn-danger" id="delete--${member.id}">Delete</button>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
  };
  renderToDom("#app", domString) 
  }




const filter = (array, petString) => {
  const petsArray = [];
  for (const pet of array) {
    if (pet.type === petString) {
      petsArray.push(pet)
    }
  } 
  return petsArray
}

const showAll = document.querySelector("#all")
const showCats = document.querySelector("#cat")
const showDogs = document.querySelector("#dog")
const showDinos = document.querySelector("#dino")

showAll.addEventListener("click", () => {
  cardsOnDom(pets)
  }
)

showCats.addEventListener("click", () => {
  const catsFilter = filter (pets, "cat")
  cardsOnDom(catsFilter)
  }
)

showDogs.addEventListener("click", () => {
  const dogsFilter = filter (pets, "dog")
  cardsOnDom(dogsFilter)
  }
)
showDinos.addEventListener("click", () => {
  const dinoFilter = filter (pets, "dino")
  cardsOnDom(dinoFilter)
  }
)


// creates a function that grabs all the values from the form pushes new object to array and rerenders to the DOM 

const createPet = (e) => {
  e.preventDefault(); //every time you create a form

    const name = document.querySelector("#name");
    const color = document.querySelector ("#color");
    const specialSkill = document.querySelector ("#specialSkill");
    const type = document.querySelector ("#type");
    const image = document.querySelector("#image");
 
    const newPet = {
      name: name.value,
      color: color.value,
      specialSkill: specialSkill.value,
      type: type.value,
      image: image.value
    };
    pets.push(newPet);
    cardsOnDom(pets)
};


// add an event listener 
const submitButton = document.querySelector("form-submit");
submitButton.addEventListener("click", createPet);
