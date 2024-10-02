interface ProjectCard {
    id: string;
    title: string;
    tools: string[];
    year: number;
    description: string;
    image: string;
    link: string;
}

export const cards: ProjectCard[] = [
    {
        id: 'Zisca',
        title: 'Zisca',
        tools: [
            'Angular, ',
            'Java, ',
            'JavaScript, ',
            'MySQL, ',
            'Spring, ',
            'Tailwind, ',
            'TypeScript'
        ],
        year: 2024,
        description: 'Zisca es un emprendimiento peruano dedicado a la venta de ropa para mujeres. Con el objetivo de ampliar su alcance, se desarrolló una aplicación web de eCommerce, permitiendo a los clientes de Zisca realizar sus compras de manera segura desde la plataforma.',
        image: 'zisca.webp',
        link: 'https://zisca.pe'
    },
    {
        id: 'Aneimera',
        title: 'Aneimera',
        tools: [
            'Astro, ',
            'JavaScript, ',
            'Tailwind, ',
            'TypeScript'
        ],
        year: 2024,
        description: 'Aneimera es una asociación que promueve el desarrollo de la investigación en las facultades de las universidades afiliadas, fomentando el intercambio de conocimientos, ideas y la competencia sana. Sin embargo, Aneimera UPC no contaba con una página web para difundir su información, por lo que se solicitó a un grupo de voluntarios llevar a cabo el proyecto.',
        image: 'aneimera.webp',
        link: 'https://aneimera-upc.vercel.app/'
    },
    {
        id: 'Greenhouse',
        title: 'Greenhouse',
        tools: [
            'Angular, ',
            'Java, ',
            'JavaScript, ',
            'MySQL, ',
            'Spring, ',
            'Bootstrap, ',
            'Tailwind, ',
            'TypeScript'
        ],
        year: 2023,
        description: 'Greenhouse es una plataforma de gestión de cultivos de champiñones, desarrollada con el objetivo de apoyar a los trabajadores en el registro de sus actividades y permitir a los administradores visualizar en tiempo real el estado de los cultivos.',
        image: 'greenhouse.webp',
        link: 'https://integradis-opensource.github.io/LandingPage/'
    },
    {
        id: 'MRS',
        title: 'Movie Recommendation System',
        tools: [
            'Flask, ',
            'Pandas, ',
            'Python',
        ],
        year: 2023,
        description: 'Movie Recommendation System fue uno de los primeros proyectos que desarrollé, con el objetivo de mejorar la precisión en la recomendación de títulos. Las plataformas actuales suelen utilizar modelos que no siempre benefician al usuario, lo que resulta en recomendaciones que no se alinean con sus gustos individuales. Para abordar este problema, la solución implementa un algoritmo de búsqueda en grafos no dirigidos con profundidad limitada, optimizando así la personalización de las sugerencias.',
        image: 'mrs.webp',
        link: 'https://alangalavis.pythonanywhere.com/'
    },
    {
        id: 'GdP',
        title: 'Gestor de Pedidos',
        tools: [
            'HTML, ',
            'JavaScript, ',
            'TailwindCSS',
        ],
        year: 2024,
        description: 'El proyecto Gestor de Pedidos fue desarrollado durante mi curso de certificación en JavaScript, el cual realicé con el objetivo de perfeccionar mis habilidades en esta tecnología. Este proyecto tiene como finalidad gestionar las rutas de entrega de una serie de pedidos, proporcionando una interfaz más intuitiva para visualizar los destinos y los productos que deben ser entregados, optimizando así el proceso logístico.',
        image: 'gp.webp',
        link: 'https://gestor-de-productos.vercel.app/'
    },
    {
        id: 'eCR',
        title: 'eCommerce en React',
        tools: [
            'React, ',
            'Firestore, ',
            'JavaScript, ',
            'Tailwind, ',
        ],
        year: 2024,
        description: 'Desarrollé un eCommerce en React como parte de mi curso de certificación. El proyecto consistía en implementar un eCommerce completo que permitiera al usuario seguir todo el flujo de compra. Todos los productos se almacenan en Firestore, que también se utiliza para registrar las órdenes de compra una vez que el usuario selecciona los productos y confirma la compra. Finalmente, se recupera el ID de la orden para mostrárselo al usuario.',
        image: 'eCommerceReact.webp',
        link: 'https://ecommercereact-omega.vercel.app/'
    }
]