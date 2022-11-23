export default {
  global: {
    componenteFormativo: 'Acciones de mejora basadas en Big data',
    descripcionCurso:
      'Este componente formativo explora cómo se deben tratar los datos para iniciar y mantener un proceso de depuración, con el fin de ser utilizados en la organización, para generar valor a los procesos desde la gestión de datos e información, teniendo en cuenta el uso sistemático de los datos y cómo se deben salvaguardar y proteger como un activo importante para la empresa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciencia de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de transformación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Modelos neuronales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Internet de las cosas (IoT)',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Inteligencia artificial (IA)',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas colaborativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normativa',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ciencia de datos',
      referencia:
        'visoalgt. (2021). <em>Obtener y Transformar Datos en Excel</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/8JRLZKLzvxs',
    },
    {
      tema: 'Ciencia de datos',
      referencia:
        'Comunicación Numérica. (2020).<em> Fundamentos del análisis de datos para la toma de decisiones </em>(video) YouTube',
      tipo: 'Video',
      link: 'https://youtu.be/qvZxvMWMvDo',
    },
    {
      tema: 'Normativa',
      referencia:
        'Gestión & Formación. (2016).<em> Qué significa SGSST?</em> (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y1Kxw3-jPL0 ',
    },
    {
      tema: 'Normativa',
      referencia:
        'Gestión & Formación. (2019). <em>Objetivos del SGSST </em>(video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QHg-z31nKG0 ',
    },
  ],
  glosario: [
    {
      termino: 'Aprendizaje de refuerzo',
      significado:
        'el ordenador en su medio circundante, identifica y analiza los datos desde su conducta y comportamiento, para minimizar el riesgo de parametrizar los datos no estructurados y dar solución a tareas.',
    },
    {
      termino: 'Aprendizaje no supervisado',
      significado:
        'los datos no están etiquetados, extrayendo información o patrones antes desconocidos.',
    },
    {
      termino: 'Aprendizaje supervisado',
      significado:
        'los datos son etiquetados para aprender a realizar una tarea humana, es un modelo sencillo, emular el aprendizaje humano.',
    },
    {
      termino: 'Herramientas colaborativas',
      significado:
        'el conjunto de programas usados para intercambiar, socializar o construir conocimientos, utilizando la web, sin necesidad de estar físicamente presente.',
    },
    {
      termino: 'Internet de las cosas',
      significado:
        'se llama Internet de las cosas a todos los mecanismos, dispositivos y aplicaciones que hacen más fácil realizar las labores cotidianas, las pequeñas “cosas” con ayuda del Internet (imprescindible para su comunicación).',
    },
    {
      termino: 'Mapeo de datos',
      significado:
        'es el proceso de selección y clasificación de los datos de acuerdo con la información, la tipología y caracterización de los datos requeridos, para su asignación final.',
    },
    {
      termino: 'Muestra',
      significado:
        'es la cantidad mínima representativa de la población para ser estudiada.',
    },
    {
      termino: 'Normativa',
      significado:
        'es el conjunto de normas que rigen, guían y dirigen el comportamiento del individuo, grupo de personas, corporación, actividad u objetos. ',
    },
    {
      termino: 'Población',
      significado:
        'cantidad de individuos, animales, objetos o eventos con características similares u homogéneas que se agrupan para un estudio o análisis, la población se puede considerar infinita o finita. ',
    },
    {
      termino: 'Transformación de datos',
      significado:
        'en este proceso se convierten datos de un formato a otro, es un proceso de conversión de estructuras que se quieren analizar. ',
    },
  ],
  referencias: [
    {
      referencia:
        'De Pablos Heredero, C.,  López Hermoso, J. J., Martín-Romo Romero, S. & Medina Salgado, S. (2019).<em> Organización y Transformación de los sistemas de información de la empresa.</em> Esic Editorial.',
      link: 'https://es.calameo.com/read/000652564453af060729a',
    },
    {
      referencia:
        'Joyanes Aguilar, L. (2019).<em> Inteligencia de Negocios y Analítica de datos.</em> Alfaomega.',
      link:
        'https://docplayer.es/190222261-Inteligencia-de-negocios-y-analitica-de-datos.html',
    },
    {
      referencia:
        'Ladrón de Guevara, M. Á. (2020).<em> Procesadores de texto y presentaciones de información básicos.</em> Editorial Tutor Formación. ',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el sistema de riesgos laborales y se dictan otras disposiciones en materia de salud ocupacional. Julio 11 de 2012. ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
