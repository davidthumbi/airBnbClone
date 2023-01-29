import img1 from "./assets/img/img1.jpg";
import img2 from "./assets/img/img2.jpg";
import img3 from "./assets/img/img3.jpg";
import img4 from "./assets/img/img4.jpg";
import img5 from "./assets/img/img5.jpg";

const data = [
  {
    id: 1,
    title: "Travel to the Bahamas",
    description:
      "Experience a holiday like no other on a 3 day trip to the Bahamas.",
    price: 125,
    coverImg: img1,
    stats: {
      rating: 5.0,
      reviewCount: 30,
    },
    location: "Bahamas",
    openSpots: 0,
  },
  {
    id: 2,
    title: "Title 2",
    description: "Description 2",
    price: 105,
    coverImg: img2,
    stats: {
      rating: 4.5,
      reviewCount: 36,
    },
    location: "online",
    openSpots: 27,
  },
  {
    id: 3,
    title: "Title 3",
    description: "Description 3",
    price: 145,
    coverImg: img3,
    stats: {
      rating: 3.0,
      reviewCount: 98,
    },
    location: "WISBON",
    openSpots: 2,
  },
  {
    id: 4,
    title: "Title 4",
    description: "Description 4",
    price: 195,
    coverImg: img4,
    stats: {
      rating: 3.5,
      reviewCount: 80,
    },
    location: "online",
    openSpots: 10,
  },
  {
    id: 5,
    title: "Title 4",
    description: "Description 4",
    price: 195,
    coverImg: img5,
    stats: {
      rating: 3.5,
      reviewCount: 80,
    },
    location: "online",
    openSpots: 10,
  },
];

export default data;
