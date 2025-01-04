export type TranslationsType = {
  es: {
    navLinks1: string;
    navLink2: string;
    navLink3: string;
    hola1: string;
    hola2: string;
    hola3: string;
    hola4: string;
    tituloAbout: string;
    introducción1: string;
    introducción2: string;
    introducción3: string;
    introducción4: string;
    introducción5: string;
    introducción6: string;
    stack1: string;
    stack2: string;
    stack3: string;
    stack4: string;
    tituloExperiencia: string;
    experiencia1: string;
    experiencia2: string;
    experiencia3: string;
    experiencia4: string;
    experiencia5: string;
    tituloProyectos: string;
    proyectos1: string;
    proyectos2: string;
    proyectos3: string;
    proyectos4: string;
    footer: string;
  };
  en: {
    navLinks1: string;
    navLink2: string;
    navLink3: string;
    hola1: string;
    hola2: string;
    hola3: string;
    hola4: string;
    tituloAbout: string;
    introducción1: string;
    introducción2: string;
    introducción3: string;
    introducción4: string;
    introducción5: string;
    introducción6: string;
    stack1: string;
    stack2: string;
    stack3: string;
    stack4: string;
    tituloExperiencia: string;
    experiencia1: string;
    experiencia2: string;
    experiencia3: string;
    experiencia4: string;
    experiencia5: string;
    tituloProyectos: string;
    proyectos1: string;
    proyectos2: string;
    proyectos3: string;
    proyectos4: string;
    footer: string;
  };
};

export const translations: TranslationsType = {
  es: {
    navLinks1: "Sobre mí",
    navLink2: "Experiencia",
    navLink3: "Proyectos",
    hola1: "¡Hola!",
    hola2: "Mi nombre es Gonçalo Cagica",
    hola3: "Y soy ",
    hola4: "Desarrollador Junior de Frontend",
    tituloAbout: "Sobre mí",
    introducción1: "Soy desarrollador de Frontend Junior autodidacta con experiencia en ",
    introducción2: "HTML, CSS, JavaScript, React, Next.js, Tailwind, postgreSQL y Node.js/Express.js",
    introducción3: ". Estoy comprometido con el aprendizaje continúo y recientemente completé un proyecto personal, se trata de una aplicación de libros hecha con React y Next.js, y está diseñada con el objetivo de ayudar a los usuarios a organizar su colección de libros.",
    introducción4: "Mi experiencia pasada en logística y liderazgo me ha enseñado habilidades como ",
    introducción5: "gestión de equipos, comunicación y resolución de problemas",
    introducción6: ", las cuales aplico también en el desarrollo de software.",
    stack1: "Tecnologías",
    stack2: "Frontend",
    stack3: "Backend",
    stack4: "Herramientas",
    tituloExperiencia: "Experiencia Laboral",
    experiencia1: "Responsable de la gestión de contenido de las tienda online ",
    experiencia2: "Ceramed, Produits Adaptés Handy, Melanie Mills Hollywood, The Makeup Altar y Chimparoo",
    experiencia3: " en Shopify, incluyendo la redacción de textos optimizados para SEO, la edición de imágenes utilizando Photoshop, compresión de las mismas para mantener un rendimiento óptimo y tiempos de carga rápidos, y de integrar la información proporcionada por el cliente final en los componentes dinámicos de la tienda, asegurando que los datos se reflejan correctamente en el frontend. En estos proyectos he aplicado personalizaciones específicas utilizando ",
    experiencia4: "CSS y JavaScript",
    experiencia5: ", para garantizar un diseño responsivo en diferentes dispositivos.",
    tituloProyectos: "Proyectos",
    proyectos1: "En este proyecto he aplicado los conocimientos que he adquirido hasta ahora; inicialmente, utilicé únicamente React y Next.js para el Frontend. Sin embargo, a medida que surgieron nuevas necesidades, fui adaptando y ampliando el alcance del proyecto.",
    proyectos2: "En un principio, los libros se almacenaban en un fichero JSON de forma local; con el tiempo, comprendí que era necesario contar con un Backend. Para ello, implementé una API utilizando Node.js/Express; además, para garantizar que los datos estuvieran bien estructurados, utilicé PostgreSQL para crear una base de datos que almacenara toda la información de cada libro (título, autor, país, género y descripción).",
    proyectos3: "Actualmente, estoy en la etapa final del desarrollo: he añadido la funcionalidad de autenticación de usuarios mediante Auth0, lo que permite que cada usuario acceda a la biblioteca tras un proceso rápido y seguro de autenticación. Una vez autenticados, los usuarios solo podrán visualizar los libros que pertenecen a su biblioteca personal; para lograr esto, estoy adaptando la base de datos para soportar esta funcionalidad.",
    proyectos4: "Tecnologías utilizadas",
    footer: "Volver al inicio",
  },
  en: {
    navLinks1: "About me",
    navLink2: "Experience",
    navLink3: "Projects",
    hola1: "Hi!",
    hola2: "My name is Gonçalo Cagica",
    hola3: "And I'm ",
    hola4: "a Junior Fronted Developer",
    tituloAbout: "About me",
    introducción1: "I'm a self-thaught Junior Frontend Developer with experience in ",
    introducción2: "HTML, CSS, JavaScript, React, Next.js, Tailwind, postgreSQL and Node.js/Express.js",
    introducción3: ". I am committed to continuous learning and recently completed a personal project, it is a book application made with React and Next.js, and it is designed with the goal of helping users to organize their book collection.",
    introducción4: "My past experience in logistics and leadership has taught me skills such as ",
    introducción5: "team management, communication and problem solving",
    introducción6: "I also apply them in software development.",
    stack1: "Technologies",
    stack2: "Frontend",
    stack3: "Backend",
    stack4: "Tools",
    tituloExperiencia: "Experience",
    experiencia1: "Responsible for the content management of the online store ",
    experiencia2: "Ceramed, Produits Adaptés Handy, Melanie Mills Hollywood, The Makeup Altar and Chimparoo",
    experiencia3: " in Shopify, including writing SEO optimized texts, editing images using Photoshop, compressing them to maintain optimal performance and fast load times, and integrating the information provided by the end customer into the dynamic components of the store, ensuring that the data is correctly reflected in the frontend. In these projects I have applied specific customizations using ",
    experiencia4: "CSS y JavaScript",
    experiencia5: "to ensure a responsive design on different devices.",
    tituloProyectos: "Projects",
    proyectos1: "In this project I applied the knowledge I have acquired so far; initially, I used only React and Next.js for the Frontend. However, as new needs emerged, I adapted and expanded the scope of the project.",
    proyectos2: "Initially, the books were stored in a JSON file locally; over time, I realized that a backend was necessary. For this, I implemented an API using Node.js/Express; furthermore, to ensure that the data was well structured, I used PostgreSQL to create a database that stored all the information for each book (title, author, country, genre and description).",
    proyectos3: "Currently, I am in the final stage of development: I have added user authentication functionality via Auth0, which allows each user to access the library after a fast and secure authentication process. Once authenticated, users will only be able to view books that belong to their personal library; to achieve this, I am adapting the database to support this functionality.",
    proyectos4: "Technologies used",
    footer: "Back to top",
  }
}
