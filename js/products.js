const products = [
    {
        // Para la tarjeta del producto
        id: "tortilla13_1",
        title: { en: "Corn tortillas 13 cm", es: "Tortillas de maíz 13 cm", pl: "Tortille kukurydziane 13 cm" },
        desSmall: {
            en: "Natural corn tortillas manufactured with corn processed with nixtamalization",
            es: "Tortillas de maíz natural fabricadas con maíz procesado con nixtamalización",
            pl: "Naturalne tortille kukurydziane produkowane z kukurydzy nixtamalizowanej"
        },
        priceLocal: 36,
        priceEu: 8.6,
        footer: { en: "Package 1 kg", es: "Paquete 1 kg", pl: "Opakowanie 1 kg" },
        images: ["images/13_1.jpg", "images/13_2.png", "images/13_3.png"],
        // Para el detalle del producto
        description: {
            en: `Natural corn tortillas manufactured with nixtamalized corn.<br>
                They taste like authentic Mexican corn tortillas, produced in Poland.<br>
                Because we use only natural corn and preservatives, our tortillas are gluten-free.<br>
                Perfect for tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas or chilaquiles.<br>
                <strong>Shelf life</strong>:  up to 4 weeks, refrigerated and vacuum sealed. We ship the day after production.<br>
                <strong>Storage</strong>:  once opened, store in the fridge for no more than 4 days<br>
                <strong>Country of production</strong>: Poland<br>
                <strong>Nutritional details</strong>:  872kJ (207 kcal)/100g<br><br>`,
            es: `Tortillas de maíz natural fabricadas con maíz nixtamalizado.<br>
                Saben como auténticas tortillas de maíz mexicanas, producidas en Polonia.<br>
                Gracias a que utilizamos solo maíz y conservantes naturales, nuestras tortillas son libres de gluten.<br>
                Perfectas para tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas o chilaquiles.<br>
                <strong>Vida útil</strong>:  hasta 4 semanas, refrigeradas y  selladas al vacío. Realizamos envíos el día después de producidas<br>
                <strong>Almacenamiento</strong>:  una vez abierto, conservar en el refrigerador por no más de 4 días<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  872kJ (207 kcal)/100g<br><br>`,
            pl: `Naturalne tortille kukurydziane produkowane z nixtamalizowanej kukurydzy.<br>
                Smakują jak w Meksyku, wyprodukowane w Polsce.<br>
                Dzięki wykorzystaniu kukurydzy oraz naturalnych konserwantów, nasze tortille są bezglutenowe.<br>
                Idealne do tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas czy chilaquiles.<br>
                <strong>Okres przydatności do spożycia</strong>:  do 4 tygodni w lodówce w opakowaniu próżniowym.  Tortille wysyłamy następnego dnia po produkcji.<br>
                <strong>Przechowywanie</strong>:  po otwarciu przechowywać w lodówce nie dłużej niż 4 dni<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  872kJ (207 kcal)/100g<br><br>`
        },
        image: 'images/13_1.jpg',
        glutenFree: 1,
        productoPolski: 1,
        spicyLevel: 0,
    },
    {
        // Para la tarjeta del producto
        id: "tortilla15_1",
        title: { en: "Corn tortillas 15 cm", es: "Tortillas de maíz 15cm", pl: "Tortille kukurydziane 15 cm" },
        desSmall: {
            en: "Natural corn tortillas manufactured with corn processed with nixtamalization",
            es: "Tortillas de maíz natural fabricadas con maíz procesado con nixtamalización",
            pl: "Naturalne tortille kukurydziane produkowane z kukurydzy nixtamalizowanej"
        },
        priceLocal: 36,
        priceEu: 8.6,
        footer: { en: "Package 1 kg", es: "Paquete 1 kg", pl: "Opakowanie 1 kg" },
        images: ["images/15_1.png", "images/15_2.png", "images/15_3.png"],
        // Para el detalle del producto
        description: {
            en: `Natural corn tortillas manufactured with nixtamalized corn.<br>
                They taste like authentic Mexican corn tortillas, produced in Poland.<br>
                Because we use only natural corn and preservatives, our tortillas are gluten-free.<br>
                Perfect for tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas or chilaquiles.<br>
                <strong>Shelf life</strong>:  up to 4 weeks, refrigerated and vacuum sealed. We ship the day after production.<br>
                <strong>Storage</strong>:  once opened, store in the fridge for no more than 4 days<br>
                <strong>Country of production</strong>: Poland<br>
                <strong>Nutritional details</strong>:  872kJ (207 kcal)/100g<br><br>`,
            es: `Tortillas de maíz natural fabricadas con maíz nixtamalizado.<br>
                Saben como auténticas tortillas de maíz mexicanas, producidas en Polonia.<br>
                Gracias a que utilizamos solo maíz y conservantes naturales, nuestras tortillas son libres de gluten.<br>
                Perfectas para tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas o chilaquiles.<br>
                <strong>Vida útil</strong>:  hasta 4 semanas, refrigeradas y  selladas al vacío. Realizamos envíos el día después de producidas<br>
                <strong>Almacenamiento</strong>:  una vez abierto, conservar en el refrigerador por no más de 4 días<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  872kJ (207 kcal)/100g<br><br>`,
            pl: `Naturalne tortille kukurydziane produkowane z nixtamalizowanej kukurydzy.<br>
                Smakują jak w Meksyku, wyprodukowane w Polsce.<br>
                Dzięki wykorzystaniu kukurydzy oraz naturalnych konserwantów, nasze tortille są bezglutenowe.<br>
                Idealne do tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas czy chilaquiles.<br>
                <strong>Okres przydatności do spożycia</strong>:  do 4 tygodni w lodówce w opakowaniu próżniowym.  Tortille wysyłamy następnego dnia po produkcji.<br>
                <strong>Przechowywanie</strong>:  po otwarciu przechowywać w lodówce nie dłużej niż 4 dni<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  872kJ (207 kcal)/100g<br><br>`
        },
        image: 'images/15_1.png',
        glutenFree: 1,
        productoPolski: 1,
        spicyLevel: 0,
    },
    {
        // Para la tarjeta del producto
        id: "tortilla15_500",
        title: { en: "Corn tortillas 15 cm", es: "Tortillas de maíz 15cm", pl: "Tortille kukurydziane 15 cm" },
        desSmall: {
            en: "Natural corn tortillas manufactured with corn processed with nixtamalization",
            es: "Tortillas de maíz natural fabricadas con maíz procesado con nixtamalización",
            pl: "Naturalne tortille kukurydziane produkowane z kukurydzy nixtamalizowanej"
        },
        priceLocal: 22,
        priceEu: 5.3,
        footer: { en: "Package 500 gr", es: "Paquete 500 gr", pl: "Opakowanie 500 gr" },
        images: ["images/15_4.png", "images/15_5.png", "images/15_6.png"],
        description: {
            en: `Natural corn tortillas manufactured with nixtamalized corn.<br>
                They taste like authentic Mexican corn tortillas, produced in Poland.<br>
                Because we use only natural corn and preservatives, our tortillas are gluten-free.<br>
                Perfect for tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas or chilaquiles.<br>
                <strong>Shelf life</strong>:  up to 4 weeks, refrigerated and vacuum sealed. We ship the day after production.<br>
                <strong>Storage</strong>:  once opened, store in the fridge for no more than 4 days<br>
                <strong>Country of production</strong>: Poland<br>
                <strong>Nutritional details</strong>:  872kJ (207 kcal)/100g<br><br>`,
            es: `Tortillas de maíz natural fabricadas con maíz nixtamalizado.<br>
                Saben como auténticas tortillas de maíz mexicanas, producidas en Polonia.<br>
                Gracias a que utilizamos solo maíz y conservantes naturales, nuestras tortillas son libres de gluten.<br>
                Perfectas para tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas o chilaquiles.<br>
                <strong>Vida útil</strong>:  hasta 4 semanas, refrigeradas y  selladas al vacío. Realizamos envíos el día después de producidas<br>
                <strong>Almacenamiento</strong>:  una vez abierto, conservar en el refrigerador por no más de 4 días<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  872kJ (207 kcal)/100g<br><br>`,
            pl: `Naturalne tortille kukurydziane produkowane z nixtamalizowanej kukurydzy.<br>
                Smakują jak w Meksyku, wyprodukowane w Polsce.<br>
                Dzięki wykorzystaniu kukurydzy oraz naturalnych konserwantów, nasze tortille są bezglutenowe.<br>
                Idealne do tacos, quesadillas, totopos, enchiladas, enfrijoladas, entomatadas, chalupas, flautas czy chilaquiles.<br>
                <strong>Okres przydatności do spożycia</strong>:  do 4 tygodni w lodówce w opakowaniu próżniowym.  Tortille wysyłamy następnego dnia po produkcji.<br>
                <strong>Przechowywanie</strong>:  po otwarciu przechowywać w lodówce nie dłużej niż 4 dni<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  872kJ (207 kcal)/100g<br><br>`
        },
        image: 'images/15_4.png',
        glutenFree: 1,
        productoPolski: 1,
        spicyLevel: 0,
    },

    {
        // Para la tarjeta del producto
        id: "masa_1",
        title: { en: "Fresh corn dough", es: "Masa de maíz fresca", pl: "Świeże ciasto kukurydziane" },
        desSmall: {
            en: "Natural corn dough manufactured with nixtamalized corn",
            es: "Masa de maíz natural fabricada con maíz nixtamalizado",
            pl: "Naturalne ciasto kukurydziane wytwarzane z nixtamalizowanej kukurydzy"
        },
        priceLocal: 25,
        priceEu: 6.0,
        footer: { en: "Package 1 kg", es: "Paquete 1 kg", pl: "Opakowanie 1 kg" },
        images: ["images/masa2.png", "images/masa1.jpeg", "images/masa3.png"],
        // Para el detalle del producto
        description: {
            en: `Dough elaborated with nixtamalized corn, it does not contain preservatives or chemical additives.<br>
                Because the recipe is 100% corn, our dough is a gluten free product.<br>
                Perfect for homemade tortillas, tamales, sopes, gorditas, tlacoyos, and atole.<br>
                <strong>Shelf life</strong>:  2-3 days.  Keep refrigerated<br>
                <strong>Storage</strong>:  once opened, it is recommended to use all the dough at once.<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  872kJ (207 kcal)/100g<br><br>`,
            es: `Masa elaborada con maíz nixtamalizado, no contiene conservantes ni aditivos químicos.<br>
                Gracias a que la receta es 100% maíz, nuestra masa es un producto libre de gluten.<br>
                Perfecta para tortillas caseras, tamales, sopes, gorditas, tlacoyos y atole..<br>
                <strong>Vida útil</strong>:  2-3 días.  Mantener refrigerado.<br>
                <strong>Almacenamiento</strong>:  una vez abierta, se recomienda utilizar toda la masa de una vez.<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  872kJ (207 kcal)/100g<br><br>`,
            pl: `Ciasto wyprodukowane z nixtamalizowanej kukurydzy, nie zawiera konserwantów ani sztucznych dodatków.<br>
                Dzięki recepturze składającej się w 100% z kukurydzy, nasze ciasto jest produktem bezglutenowym.<br>
                Idealne do przygotowania domowych tortilli, tamales, sopes, gorditas, tlacoyos i atole.<br>
                <strong>Przydatność do spożycia</strong>:  2-3 dni. Przechowywać w lodówce<br>
                <strong>Przechowywanie</strong>: po otwarciu zaleca się wykorzystanie całego ciasta na raz. <br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości spożywcze</strong>:  872kJ (207 kcal)/100g<br><br>`,},
        image: 'images/masa3.png',
        glutenFree: 1,
        productoPolski: 1,
        spicyLevel: 0,

    },
    {
        // Para la tarjeta del producto
        id: "salsa_3",
        title: { en: "Dziki Bill - Jalapeño Sauce", es: "Dziki Bill - Salsa Jalapeño", pl: "Dziki Bill - Sos Jalapeño" },
        desSmall: {
            en: "Winner of the EU Hot Sauce Awards",
            es: "Ganador de los premios EU Hot Sauce Awards",
            pl: "Zwycięzca EU Hot Sauce Awards"
        },
        priceLocal: 33.99,
        priceEu: 8.1,
        footer: { en: "Glass bottle 200 ml", es: "Botella de vidrio 200 ml", pl: "Szklana butelka 200 ml" },
        images: ["images/sosJalapenoM.png"],
        // Para el detalle del producto
        description: {
            en: `Awarded the prestigious European Hot Sauce Awards.<br>
                It is characterized by a very fresh taste, quite different from what you would expect from hot sauces. Jalapeño sauce is one of Dziki Bill's three founding sauces. It was awarded the prestigious European Hot Sauce Awards, winning first place in the mild category.<br>
                The sauce perfectly complements any meal by adding spiciness and light sweetness.  It goes great with Mexican and North American dishes, as well as a dip for nachos or fresh vegetables.<br>
                <strong>Shelf life</strong>:  one year from the date of production<br>
                <strong>Storage</strong>:  once opened, keep in the fridge<br>
                <strong>Manufacturer</strong>:  Dziki Bill<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  16.9kJ (3.9 kcal)/5g<br><br>`,
            es: `Galardonada con el prestigioso premio European Hot Sauce Awards.<br>
                Se caracteriza por un sabor muy fresco, muy diferente de lo que se puede esperar de las salsas picantes. La salsa Jalapeño es una de las tres salsas fundadoras de Dziki Bill. Fue galardonada en los prestigiosos European Hot Sauce Awards, obteniendo el primer puesto en la categoría suave..<br>
                La salsa complementa perfectamente cualquier comida añadiendo picante y un ligero dulzor.  Combina muy bien con platos mexicanos y norte americanos, así como salsa para nachos o verduras frescas.<br>
                <strong>Vida útil</strong>:  un año a partir de la fecha de producción<br>
                <strong>Almacenamiento</strong>:  una vez abierto, mantener refrigerado<br>
                <strong>Fabricante</strong>:  Dziki Bill<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  16.9kJ (3.9 kcal)/5g<br><br>`,
            pl: `Nagrodzony prestiżową nagrodą European Hot Sauce Awards.<br>
                Charakteryzuje się bardzo świeżym smakiem, zupełnie odmiennym od tych, których można się spodziewać po ostrych sosach. Sos Jalapeño to jeden z trzech „sosów założycielskich” Dzikiego Billa. Nagrodzony został prestiżową nagrodą European Hot Sauce Awards, zdobywając pierwsze miejsce w kategorii „mild”.<br>
                Sos doskonale uzupełnia każdy posiłek dodając mu ostrości i lekkiej słodyczy. Świetnie pasuje do dań kuchni meksykańskiej i amerykańskiej, a także jako dip do nachosów czy świeżych warzyw.<br>
                <strong>Okres przydatności do spożycia</strong>:  rok od daty produkcji<br>
                <strong>Przechowywanie</strong>:  po otwarciu w lodówce<br>
                <strong>Producent</strong>:  Dziki Bill<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  16.9kJ (3.9 kcal)/5g<br><br>`},
        image: 'images/sosJalapenoG.png',
        glutenFree: 0,
        productoPolski: 1,
        spicyLevel: 3,
    },
    {
        // Para la tarjeta del producto
        id: "salsa_1",
        title: { en: "Dziki Bill - Hula X", es: "Dziki Bill - Hula X", pl: "Dziki Bill - Hula X" },
        desSmall: {
            en: "Habanero and mango",
            es: "Habanero y mango",
            pl: "Habanero i mango"
        },
        priceLocal: 37.99,
        priceEu: 9.0,
        footer: { en: "Glass bottle 200 ml", es: "Botella de vidrio 200 ml", pl: "Szklana butelka 200 ml" },
        images: ["images/hulaXM.png"],
        // Para el detalle del producto
        description: {
            en: `A classic sauce with a strong spiciness, to which mango gives a unique fruity note.<br>
                It's a great accompaniment to nachos. It also works well as a marinade for skewers and an ingredient in stir-fry dishes, and curry with coconut milk will add spiciness and a fruity note.<br>
                <strong>Shelf life</strong>:  One year from the date of production.<br>
                <strong>Storage</strong>:  Once opened, keep in the fridge<br>
                <strong>Manufacturer</strong>:  Dziki Bill<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  18.2kJ (4.3 kcal)/5g<br><br>`,
            es: `Una salsa clásica con un fuerte picante, a la que el mango aporta una nota afrutada única.<br>
                Es un gran acompañamiento para los nachos. También funciona bien como adobo para brochetas y como ingrediente en platos salteados, y el curry con leche de coco le añadirá picante y una nota afrutada.<br>
                <strong>Vida útil</strong>:  Un año a partir de la fecha de producción<br>
                <strong>Almacenamiento</strong>:  una vez abierto, mantener refrigerado<br>
                <strong>Fabricante</strong>:  Dziki Bill<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  18.2kJ (4.3 kcal)/5g<br><br>`,
            pl: `Klasyczny sos o mocno wyczuwalnej ostrości, któremu mango nadaje niepowtarzalnej owocowej nuty.<br>
                To świetny dodatek do nachosów. Sprawdza się także jako marynata do szaszłyków i składnik dań stir-fry, a curry z mlekiem kokosowym doda ostrości i owocowej nuty.<br>
                <strong>Okres przydatności do spożycia</strong>: rok od daty produkcji<br>
                <strong>Przechowywanie</strong>:  po otwarciu w lodówce<br>
                <strong>Producent</strong>:  Dziki Bill.<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  18.2kJ (4.3 kcal)/5g<br><br>`},
        image: 'images/hulaXG.png',
        glutenFree: 0,
        productoPolski: 1,
        spicyLevel: 5,
    },
    {
        // Para la tarjeta del producto
        id: "salsa_2",
        title: { en: "Dziki Bill - Jabali", es: "Dziki Bill - Jabali", pl: "Dziki Bill - Jabali" },
        desSmall: {
            en: "Chipotle sauce",
            es: "Salsa chipotle",
            pl: "Sos chipotle"
        },
        priceLocal: 37.99,
        priceEu: 9.0,
        footer: { en: "Glass bottle 200 ml", es: "Botella de vidrio 200 ml", pl: "Szklana butelka 200 ml" },
        images: ["images/chipotleM.png"],
        // Para el detalle del producto
        description: {
            en: `Chipotle sauce with a rich and deep flavor with interesting additives.<br>
                Chipotle sauce, which owes its rich and deep flavor to traditionally smoked and dried jalapeno peppers. It is made with the addition of Grodzisk beer from Piwoteka (already brewed with the sauce), prunes, brown sugar and a touch of fish sauce.<br>
                It combines perfectly with hamburgers, burritos, as well as it works very well as a sauce for French fries.<br>
                <strong>Shelf life</strong>:  one year from the date of production<br>
                <strong>Storage</strong>:  once opened, keep in the fridge<br>
                <strong>Manufacturer</strong>:  Dziki Bill<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  21.77kJ (5.2 kcal)/5g<br><br>`,
            es: `Salsa chipotle de sabor rico y profundo con interesantes aditivos.<br>
                Salsa chipotle, que debe su rico y profundo sabor a los pimientos jalapeños ahumados y secados tradicionalmente. Se elabora añadiendo cerveza Grodzisk de Piwoteka (ya elaborada con la salsa), ciruelas pasas, azúcar moreno y un toque de salsa de pescado.<br>
                Combina perfectamente con hamburguesas, burritos, como también funciona muy bien como salsa para patatas fritas.<br>
                <strong>Vida útil</strong>:  Un año a partir de la fecha de producción<br>
                <strong>Almacenamiento</strong>:  una vez abierto, mantener refrigerado<br>
                <strong>Fabricante</strong>:  Dziki Bill<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  21.77kJ (5.2 kcal)/5g<br><br>`,
            pl: `Sos chipotle o bogatym i głębokim smaku z ciekawymi dodatkami.<br>
                Sos chipotle, który swój bogaty i głęboki smak zawdzięcza tradycyjnie wędzonym i suszonym papryczkom jalapeno. Wytwarzany jest z dodatkiem grodziskiego piwa od Piwoteki (warzonego już z dodatkiem sosu), śliwek, brązowego cukru i odrobiny sosu rybnego.<br>
                Idealnie pasuje do burgerów, ale także do burrito. Świetnie sprawdza się także jako dip do frytek.<br>
                <strong>Okres przydatności do spożycia</strong>:  rok od daty produkcji<br>
                <strong>Przechowywanie</strong>:  po otwarciu w lodówce<br>
                <strong>Producent</strong>:  Dziki Bill<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  21.77kJ (5.2 kcal)/5g<br><br>`},
        image: 'images/chipotleG.png',
        glutenFree: 0,
        productoPolski: 1,
        spicyLevel: 4,
    },

    {
        // Para la tarjeta del producto
        id: "salsa_4",
        title: { en: "Dziki Bill - Habanero sauce", es: "Dziki Bill - Salsa Habanero", pl: "Dziki Bill - Sos Habanero" },
        desSmall: {
            en: "Habanero and pepperoni",
            es: "Habanero y pepperoni",
            pl: "Habanero i pepperoni"
        },
        priceLocal: 34.99,
        priceEu: 8.3,
        footer: { en: "Glass bottle 200 ml", es: "Botella de vidrio 200 ml", pl: "Szklana butelka 200 ml" },
        images: ["images/habaneroM.png"],
        // Para el detalle del producto
        description: {
            en: `It is distinguished by the unique flavor of fresh Pepperoni and Habanero peppers.<br>
                It is many times hotter than the commonly available, so-called “spicy” sauces. This is the first Dziki Bill sauce where it all started, and its unique recipe was created by this Polish brand from scratch and remains their strongly guarded secret.<br>
                It's perfect for any Central American cuisine. Thanks to its balanced density, it also works well as a dip for nachos or even French fries.<br>
                <strong>Shelf life</strong>:  one year from the date of production.<br>
                <strong>Storage</strong>:  once opened, keep in the refrigerator<br>
                <strong>Manufacturer</strong>:  Dziki Bill<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  21.77kJ (207 kcal)/5g<br><br>`,
            es: `Se distingue por el sabor único del Pepperoni fresco y los pimientos Habanero.<br>
                Es muchas veces más picante que las salsas comúnmente disponibles, llamadas «picantes». Esta es la primera salsa Dziki Bill donde empezó todo, y su receta única fue creada por esta marca polaca desde cero y sigue siendo su secreto fuertemente guardado.<br>
                Es perfecta para cualquier cocina centroamericana. Gracias a su densidad equilibrada, también funciona bien como salsa para nachos o incluso patatas fritas.<br>
                <strong>Vida útil</strong>:  un año a partir de la fecha de producción<br>
                <strong>Almacenamiento</strong>:  una vez abierto, mantener refrigerado<br>
                <strong>Fabricante</strong>:  Dziki Bill<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  21.77kJ (207 kcal)/5<br><br>`,
            pl: `Wyróżnia się wyjątkowym smakiem świeżych papryczek Pepperoni i Habanero.<br>
                Jest wielokrotnie ostrzejszy od powszechnie dostępnych, tak zwanych „pikantnych” sosów. To pierwszy sos Dzikiego Billa, od którego wszystko się zaczęło, a jego unikalna receptura została stworzona przez tę polską markę od podstaw i pozostaje ich silnie strzeżonym sekretem.<br>
                Idealny do wszelkich potraw kuchni Ameryki Środkowej. Dzięki wyważonej gęstości, świetnie sprawdza się również jako dip do nachosów, a nawet frytek.<br>
                <strong>Okres przydatności do spożycia</strong>:  rok od daty produkcji<br>
                <strong>Przechowywanie</strong>:  po otwarciu w lodówce<br>
                <strong>Producent</strong>:  Dziki Bill<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  21.77kJ (207 kcal)/5<br><br>`},
        image: 'images/habaneroG.png',
        glutenFree: 0,
        productoPolski: 1,
        spicyLevel: 4,
    },
    {
        // Para la tarjeta del producto
        id: "salsa_5",
        title: { en: "Dziki Bill - Yolo", es: "Dziki Bill - Yolo", pl: "Dziki Bill - Yolo" },
        desSmall: {
            en: "Naga Jolokia (Ghost Pepper) sauce",
            es: "Salsa de Naga Jolokia (Ghost Pepper)",
            pl: "Sos z Naga Jolokia (Ghost Pepper)"
        },
        priceLocal: 42.99,
        priceEu: 10.2,
        footer: { en: "Glass bottle: 200 ml", es: "Botella de vidrio 200: ml", pl: "Szklana butelka: 200 ml" },
        images: ["images/yoloM.png"],
        // Para el detalle del producto
        description: {
            en: `A sauce based on Naga Jolokia peppers, also called Ghost Pepper or less commonly Raja Mirchi. The #Yolo is, until recently, the hottest sauce in Wild Bill's permanent offerings.<br>
                The #Yolo hot sauce is very versatile and fits in with dishes from different parts of the world, including Latin America. It allows you to strongly sharpen any dish adding only paprika flavor and spiciness at a very high level indeed.<br>
                <strong>Shelf life</strong>:  one year from the date of production<br>
                <strong>Storage</strong>:  once opened, keep in the fridge<br>
                <strong>Manufacturer</strong>:  Dziki Bill<br>
                <strong>Country of production</strong>:  Poland<br>
                <strong>Nutritional details</strong>:  14.86kJ (3.6 kcal)/5g<br><br>`,
            es: `Una salsa a base de pimientos Naga Jolokia, también llamados Ghost Pepper o, menos comúnmente, Raja Mirchi. La #Yolo es, hasta hace poco, la salsa más picante de la oferta permanente de Dziki Bill.<br>
                La salsa picante #Yolo es muy versátil y encaja con platos de distintas partes del mundo, incluida Latinoamérica. Permite dar un fuerte toque picante a cualquier plato añadiendo únicamente sabor a pimentón y picante a un nivel realmente alto.<br>
                <strong>Vida útil</strong>:  un año a partir de la fecha de producción<br>
                <strong>Almacenamiento</strong>:  una vez abierto, mantener refrigerado<br>
                <strong>Fabricante</strong>:  Dziki Bill<br>
                <strong>País de producción</strong>:  Polonia<br>
                <strong>Detalles nutricionales</strong>:  14.86kJ (3.6 kcal)/5g<br><br>`,
            pl: `Sos na bazie papryczek Naga Jolokia, nazywanych także Ghost Pepper albo rzadziej Raja Mirchi. #Yolo to do niedawna najostrzejszy sos w stałej ofercie Dzikiego Billa.<br>
                Ostry sos #Yolo jest bardzo uniwersalny i wpasowuje się w dania z różnych zakątków świata, m.in. Ameryki Łacińskiej. Pozwala mocno zaostrzyć dowolną potrawę dodając wyłącznie paprykowego smaku i ostrości na naprawdę bardzo wysokim poziomie.<br>
                <strong>Okres przydatności do spożycia</strong>:  rok od daty produkcj<br>
                <strong>Przechowywanie</strong>:  po otwarciu w lodówce<br>
                <strong>Producent</strong>:  Dziki Bill<br>
                <strong>Kraj produkcji</strong>:  Polska<br>
                <strong>Wartości odżywcze</strong>:  14.86kJ (3.6 kcal)/5g<br><br>`},
        image: 'images/yoloG.png',
        glutenFree: 0,
        productoPolski: 1,
        spicyLevel: 7,
    },



    // Agrega más productos según sea necesario
];
