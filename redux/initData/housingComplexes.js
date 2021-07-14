const singleHousingComplex = {
  id: 1,
  name: 'ЖК "Абрикосово"',
  prices: {
    from: 2.96,
    to: 7.7,
  },
  housesCount: {
    already: 23,
    areBuilding: 56,
  },
  images: [
    "/slider/img1.jpg",
    "/slider/img2.jpg",
    "/slider/img3.jpg",
    "/slider/img4.jpg",
    "/slider/img5.jpg",
    "/slider/img1.jpg",
    "/slider/img2.jpg",
    "/slider/img3.jpg",
  ],
  advantages: [
    {
      title: "Повседневная практика поазывает",
      text: "Дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации.",
    },
    {
      title: "Повседневная практика поазывает",
      text: "Дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации.",
    },
    {
      title: "Повседневная практика поазывает",
      text: "Дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке соответствующий условий активизации.",
    },
  ],
  disadvantages: [
    {
      title: "Не следует, однако, забывать",
      text: "что дальнейшее развитие различных форм деятельности играет важную роль в формировании направлений прогрессивного развития.",
    },
    {
      title: "Задача организации, в особенности же новая модель ",
      text: "Не следует, однако забывать, что укрепление и развитие структуры позволяет оценить значение существенных финансовых и административных условий.",
    },
    {
      title: "Таким образом дальнейшее развитие",
      text: "Разнообразный и богатый опыт начало повседневной работы по формированию позиции влечет за собой процесс внедрения и модернизации систем массового участия.",
    },
  ],
  rating: {
    krasnodar: 5,
    region: 3,
    russia: 4.6,
    date: new Date(),
  },
  developer: {
    image: "/images/developers/CCK.svg",
    name: "ГК ССК",
    classH: "Комфорт",
    otdelka: true,
    square: { from: 46.5, to: 74.6 },
    year: 2012,
    info: `<p>“СпецСтройКубань” – один из ведущих застройщиков Южного федерального округа России. Молодая и амбициозная компания уже доказала свою надежность и клиентоориентированность. На выбор покупателей представлены квартиры в домах класса “бизнес” и “комфорт плюс”.Это современное и стильное жилье и развитая инфраструктура на прилегающей территории.</p>
          <p>Если вы ищете квартиру в многоэтажной новостройке Краснодара, то наверняка уже знаете об этом застройщике. Дома от ССК расцветают в регионе на глазах, преображая облик города. В строительстве находится почти 1 миллион квадратных метров площадей – жилищные комплексы расположены в разных районах Краснодара.</p>`,
    website: "#",
  },
  docs: {
    projects: [
      { name: "/pdfs/project1.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/project2.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/project3.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/project4.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/project5.pdf", date: new Date(), size: 234 },
    ],
    allows: [
      { name: "/pdfs/allow1.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/allow2.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/allow3.pdf", date: new Date(), size: 234 },
      { name: "/pdfs/allow4.pdf", date: new Date(), size: 234 },
    ],
  },
  buildingProcessData: [
    {
      date: "15 июля 2014",
      images: [
        "/images/gallery/building process/image1.png",
        "/images/gallery/building process/image2.png",
        "/images/gallery/building process/image3.png",
        "/images/gallery/building process/image4.png",
        "/images/gallery/building process/image5.png",
        "/images/gallery/building process/image6.png",
      ],
    },
    {
      date: "15 августа 2014",
      images: [
        "/images/gallery/building process/image1.png",
        "/images/gallery/building process/image2.png",
      ],
    },
    {
      date: "15 сентября 2014",
      images: [
        "/images/gallery/building process/image1.png",
        "/images/gallery/building process/image2.png",
        "/images/gallery/building process/image3.png",
        "/images/gallery/building process/image4.png",
      ],
    },
    {
      date: "15 октября 2014",
      images: ["/images/gallery/building process/image1.png"],
    },
    {
      date: "15 ноября 2014",
      images: ["/images/gallery/building process/image1.png"],
    },
  ],
};

export default singleHousingComplex;
