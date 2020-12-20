const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const createPhotoList = (obj) => {
  const listItemRef = document.createElement("li");
  listItemRef.classList.add("gallery__item");

  const photoRef = document.createElement("img");
  photoRef.src = obj.url;
  photoRef.alt = obj.alt;

  listItemRef.appendChild(photoRef);

  return listItemRef;
};

const mapped = images.map((obj) => createPhotoList(obj));

const galleryRef = document.querySelector("#gallery");

galleryRef.append(...mapped);