

const productsDatabase = [
    {
        id: "1",
        img: ["glenn_front.png", "glenn_back.png", "glenn_closeup.png", "glenn.png" ],
        name:"GLENN",
        price:"599",
        inventory: 0,
        desc: "Our knitted sweater Glenn is designed in Sweden. The sweater consists of 75% cotton and 25% acrylic and comes in a nice multicolored design (white, red, light blue, and dark blue). All our knitted sweaters are made in Italy. ",
        size: "M, L, XL",
        infobox: { 
            material: "75% cotton, 25% acrylic",
            madeIn: "Italy",
            color: "white, red, light blue, dark blue",
            washing: "30 degrees",
            ironing: "cool iron",
            dryclean: "no",
            tumbleDry: "no"        
        }
    },

    {
        id: "2",
        img:["gota_front.png", "gota_back.png", "gota_closeup.png", "gota_lifestyle1.png", "gota_lifestyle2.png"],
        name:"GÖTA",
        price:"599",
        inventory: 3,
        desc: "Our knitted sweater Göta is designed in Sweden. The sweater consists of 75% cotton and 25% acrylic and comes in a nice black design. All our knitted sweaters are made in Italy. ",
        size: "M, L, XL",
    },
    {
        id: "3",
        img:["hjalmar_front.png", "hjalmar_back.png", "hjalmar_closeup.png", "hjalmar_lifestyle.png", "hjalmar_lifestyle2.png"],
        name:"HJALMAR",
        price:"599",
        inventory: 5,
        desc: "Our knitted sweater Hjalmar is designed in Sweden. The sweater consists of 75% cotton and 25% acrylic and comes in a nice multicolored design (white, gray, and black). All our knitted sweaters are made in Italy. ",
        size: "M, L, XL",
    },
    {
        id: "4",
        img:["linne_front.png", "linne_back.png", "linne_closeup.png"],
        name:"LINNÉ",
        price:"499",
        inventory: 8,
        desc: "Our knitted sweater Linné is designed in Sweden . The sweater consists of 100% cotton and comes in a nice military green color design. All our knitted sweaters are made in Italy. ",
        size: "M, L, XL",
    },
    {
        id: "5",
        img:["gustav_front.png", "gustav_back.png", "gustav_closeup.png", "gustav_lifestyle.png"],
        name:"GUSTAV",
        price:"499",
        inventory: 10,
        desc: "Our knitted sweater Gustav is designed in Sweden. The sweater consists of 100% cotton and comes in a nice copper color design. All our knitted sweaters are made in Italy. ",
        size: "M, L, XL",
    },
];

export default productsDatabase;