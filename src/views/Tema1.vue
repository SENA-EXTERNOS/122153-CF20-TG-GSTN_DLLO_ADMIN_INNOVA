<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ciencia de datos
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Antes de comenzar con el tema de la ciencia de datos, es necesario estudiar la estadística inferencial, la cual hace parte de la estadística que, fuera de describir, deduce una situación a partir de datos. Infiere propiedades, conclusiones y tendencias, partiendo de una muestra del conjunto de datos (población), interpreta, compara y proyecta. Esta información servirá para cuando se utilicen los datos obtenidos, y así poder comprobar resultados de modelos estadísticos.
    
    p.mb-4 En la inferencia estadística, se miden los datos a través de diferentes parámetros:

    .row.justify-content-center.mb-4
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Media")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 También conocida como promedio, es el valor que se obtiene al dividir la suma de un grupo de datos y dividirlos por la cantidad de datos que se tenga. La media aritmética o promedio, representa el reparto equitativo, el equilibrio, la equidad. Es el valor que tendrían los datos, si todos ellos fueran iguales o, también, el valor que correspondería a cada uno de los datos, en la distribución, si su suma total se repartiera por igual.
              
          .row(titulo="Varianza")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Se conoce como varianza a la raíz cuadrada que se desprende de una desviación estándar, la cual permite que las industrias de manufactura puedan trabajar, con precisión, en su producción y reduzcan su índice de errores.
              p La varianza toma los datos dispersos de la media y, luego de medirlos, le da valor a las variaciones y desviaciones. Además, permite contabilizar y prevenir posibles errores.
              
          .row(titulo="Muestra")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Es la cantidad mínima representativa de la población a ser estudiada y debe mantener las características de los pobladores; existen varios métodos para calcular la muestra, dependiendo de la cantidad de la población y el tipo de parámetro a estudiar.
              
          .row(titulo="Población")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Es la cantidad de individuos, animales, objetos o eventos, con características similares u homogéneas, que se agrupan para un estudio o análisis; la población se puede nombrar como infinita o finita. De acuerdo con los parámetros requeridos para su estudio, la población se puede considerar de tipo discreto o continuo.
                         
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img3.png', alt='imagen relacionada')

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Ahora, se abordará la temática de la ciencia de los datos, la cual se encarga del estudio de los datos para obtener información que pueda aportar valor a las organizaciones, realizándolo desde diferentes frentes, integrando la estadística, la matemática, la informática, la inteligencia artificial y otras afines. Tenga en cuenta que interdisciplinariamente, se analiza mucha cantidad datos a grandes velocidades.
    
    separador 

    #t_1_1.titulo-segundo.color-acento-contenido.mb-5  
      h3 1.1 Técnicas de transformación

    p.mb-4 Se habla de transformación de datos, cuando se realiza un proceso de envío de información de un formato a otro. Este proceso de envío de información genera una conversión de la misma desde un formato de origen, al formato de recepción de la información. La transformación puede darse solo de formato a formato, pero también puede implicar un cambio desde el lenguaje de origen, al lenguaje de recibo, en condiciones diferentes y con diversas plataformas.

    p.mb-4 Hablemos sobre este proceso:

    .row.justify-content-center.mb-4
      .col-md-7
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Mapeo de datos")
            .col-md-12.mb-4.mb-md-0
              p Es el proceso de selección y clasificación de los datos de acuerdo con la información, tipología y caracterización de los datos requeridos, para su asignación final. Se puede tener un mapeo sencillo, cuando se estima una fuente y un destino, pero se complica cuando se presentan combinaciones de una fuente a varios destinos, varias fuentes a un destinatario o, finalmente, múltiples fuentes a diversos destinos con lenguajes igualmente variados.
          
          .row(numero="2" titulo="Generación de código")
            .col-md-12.mb-4.mb-md-0
              p Ya seleccionado y depurado el mapa de datos, se especifica en función de diseñar el programa “trasformador” de los datos, del lenguaje de origen, al lenguaje que será el “ejecutable” en todo el proceso de transformación de los datos. Los lenguajes de transformación comúnmente utilizados son Perl, AWK, XSLT y TXL.

          .row(numero="3" titulo="Transformación de datos")
            .col-md-12.mb-4.mb-md-0
              p En este proceso se convierten datos de un formato a otro; es un procedimiento de conversión de estructuras que se quieren analizar. Esta modificación es vital para la integración y gestión de datos, e incluye varias actividades como limpiar, convertir, duplicar o agregar información. 
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img5.jpeg', alt='imagen relacionada')  
    
    p.mb-4 La transformación de datos  es un proceso que ayuda a mejorar la productividad y está compuesta por dos etapas.

    p.mb-4 Estas etapas son:

    .row.justify-content-center.mb-4
      .col-md-3.col-lg-4(style="margin-top: 10px; ")
        img(src='@/assets/curso/temas/texto_destacado/img6.png', alt='imagen relacionada') 
      .col-md-8.col-lg-8
        TabsA.color-acento-contenido.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Etapa I")
            .row
              .col-md-12.p-4.color-fondo
                p En esta etapa, se identifican los datos que se van a transformar, sus tipos y sus fuentes. Se determina cómo están estructurados (si lo están), para establecer cómo y qué transformaciones se deben llevar a cabo. Por último, se realizan las asignaciones pertinentes, adecuando los campos individualmente.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Etapa II")
            .row
              .col-md-12.p-4.color-fondo
                p.mb-4 Se extraen los datos de la fuente original. El rango de fuentes puede variar, incluidas las fuentes estructuradas, como las bases de datos o las fuentes de transmisión y, seguidamente, se realizan las transformaciones.
                
                p.mb-0 Por ejemplo, se realiza la transformación, agregando datos como compras, datos de fechas, eliminar datos nulos “null”. Se depuran y envían los datos al proveedor de compras, a la división de facturación o de contabilidad y allí, según la estructura, se analizarán los datos y se tomarán las decisiones necesarias.
              
    separador 

    #t_1_2.titulo-segundo.color-acento-contenido.mb-5  
      h3 1.2 Modelos neuronales
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 En relación con el modelo neuronal, este es un arreglo que enseña a las computadoras a procesar datos como lo hace el cerebro humano; es un aprendizaje de máquina (<i>machine learning</i>) que, utilizando redes o nodos (como las neuronas humanas) interconectados, como lo hace el cerebro humano, crea sistemas adaptables, capaces de aprender de sus errores y, de esta manera, las computadoras trabajan desde su propia mejora. Las redes neuronales resuelven problemas complicados y complejos con mayor precisión.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 La importancia de las redes neuronales se fundamenta en que ayudan a las computadoras o redes de información, en la toma de decisiones de forma automática y casi autónoma, disminuyendo la acción humana. Dada la complejidad del funcionamiento neuronal y la rapidez de responder ante situaciones complejas, desde este principio, las computadores aprenden rápidamente en función de la solución de modelos, parte del análisis de datos de entrada, para dar solución con datos e información de salida, lineales y no lineales, igualmente complejos.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img7.png', alt='imagen relacionada')
    
    p.mb-4 Las tareas que pueden realizar las computadoras y sistemas de información, con ayuda de los modelos neuronales, son:


    .row.justify-content-center.mb-5
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img8.png', alt='imagen relacionada')

      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Generalizaciones y conclusiones")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Comprender datos no estructurados, desde allí analizar y concluir, sin un previo entrenamiento. Puede detectar diferencias y semejanzas entre dos oraciones cualesquiera.
              
          .row(titulo="Revelar relaciones y patrones ocultos")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Con redes neuronales, se pueden analizar profundamente nuevos conocimientos y procesos sin entrenamiento alguno. Por ejemplo, consideremos una red neuronal de reconocimiento de patrones que analiza las compras de los consumidores. Si se comparan los patrones de compra de varios usuarios, la red neuronal puede sugerir artículos nuevos que podrían interesar a un consumidor específico.
              
          .row(titulo="Crean sistemas de autoaprendizaje autónomos")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Otro principio fundamental del <i>machine learning</i>, es el aprendizaje continuo y propio, consiste en las correcciones de lenguaje que se tienen en la escritura en los diferentes <i>software</i>, que van mejorando cada vez que se hace una nueva corrección. Supongamos que el modelo fue entrenado en el idioma inglés y puede corregir la ortografía de las palabras en ese idioma; sin embargo, si se escriben con frecuencia palabras que no están en inglés, como <i>danke</i>; la red neuronal también puede aprender y corregir estas palabras, de forma automática.
              
          .row(titulo="Modelado y aprendizaje de datos volátiles")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Los datos transaccionales contienen, eventualmente, grandes variaciones de acuerdo a como se presenten los cruces de pagos, ventas o producción. Los modelos neuronales detectan estas variaciones para configurar el comportamiento de estos datos. Por ejemplo, pueden analizar las transacciones financieras y señalar algunas de ellas para la detección de fraudes. También pueden procesar datos complejos que son la clave de problemas biológicos difíciles, como el plegamiento de proteínas o el análisis del ADN, entre otros.
                         
      p.mb-4.mt-4 Como ejemplo de utilidades de las redes de datos tenemos:

      .row.justify-content-center.mb-4
        .col-md-7      
          ol.lista-ol--cuadro.lista-ol--separador
            li 
              .lista-ol--cuadro__vineta
              | Clasificación de imágenes médicas y diagnóstico médico.
            li 
              .lista-ol--cuadro__vineta
              | Psicología del consumidor y filtrado de redes sociales.
            li 
              .lista-ol--cuadro__vineta
              |Análisis de datos históricos para predicciones futuras.
            li 
              .lista-ol--cuadro__vineta
              | Control de calidad.
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img9.png', alt='imagen relacionada')

      p.mb-4 Algunas ventajas de uso de las redes neuronales son:

      .mx-auto.col-md-10.mb-4
        .tarjeta
          .imgCont.m-auto
            .row.justify-content-center.mb-4
              ImagenInfografica.color-acento-botones.mb-5
                template(v-slot:imagen)
                  figure
                    img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img10.svg', alt='diagrama')

                .tarjeta.color-puntoC.p-4(x="2%" y="17%" numero="+" style='border-radius: 10px')
                  p Se puede realizar un seguimiento de las actividades de cualquier usuario, utilizando redes neuronales, así como descubrir sus necesidades, gustos o nuevos intereses. Los usuarios, generalmente “dan clic” al tema, producto o servicio que más les interesa; los motores de búsqueda detectan estas acciones, guardan la información e inmediatamente, dentro de su “red” de información, buscan datos compatibles con la información de interés del usuario, enviándola a sus perfiles.

                .tarjeta.color-puntoC.p-4(x="100%" y="19%" numero="+" style='border-radius: 10px')
                  p Las computadoras y sistemas de información, tienen la habilidad de reconocer, extraer datos y asimilar las imágenes y videos; pueden distinguir estos objetos como lo hace el ser humano. Por ejemplo, el reconocimiento de las señales de tránsito para los vehículos automotores, la eliminación de contenidos inseguros en los archivos de videos e imágenes, o el reconocimiento facial en cámaras de seguridad.
                  
                .tarjeta.color-puntoC.p-4(x="2%" y="78%" numero="+" style='border-radius: 10px')
                  p Los computadores adquieren esta habilidad, a partir de las redes de neuronas, obteniendo información y reconociendo el significado de los datos y documentos de texto. Los “bots” son ejemplos claros, presentes en los chats automáticos, que inician conversaciones con humanos y realizan tareas de asesoría y guianza entre varios menús de opciones. También tenemos la calificación automática de datos escritos, el análisis de correos electrónicos, entre otros.
                    
                .tarjeta.color-puntoC.p-4(x="100%" y="80%" numero="+" style='border-radius: 10px')
                  p Las redes neuronales analizan el tono, el acento, el idioma y el patrón de habla de la voz, para diferenciar o reconocer voces con características particulares. Por ejemplo, en los centros de llamadas (<i>call center</i>) ayudan a clasificar y seleccionar llamadas, subtítulos de videos e imágenes de texto.

      separador 

      #t_1_3.titulo-segundo.color-acento-contenido.mb-5  
        h3 1.3 Internet de las cosas (IoT)          
      
      .row.justify-content-center.mb-5
        .col-md-7      
          p.mb-0 Se llama internet de las cosas o IoT (siglas en inglés de <i>Internet of Things</i>), a todos los mecanismos, dispositivos y aplicaciones que hacen más fácil realizar las labores cotidianas, equipos inteligentes, casas inteligentes, hasta ciudades inteligentes; todos interconectados, enviando y recibiendo información en tiempo real, a través de pequeños dispositivos que monitorean o administran pequeñas cosas.
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img11.png', alt='imagen relacionada')
      
      p.mb-4 Lo invitamos a ver el siguiente video, en el cual se presenta a Mateo y un ejemplo sobre cómo transcurren sus primeras horas del día, utilizando diferentes dispositivos.

      figure.mb-5
        .video
          <iframe width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      p.mb-4 Un sistema de IoT tradicional, funciona enviando, recibiendo y analizando datos de forma permanente, en un ciclo de retroalimentación. Según el tipo de tecnología de IoT, las personas o los sistemas de inteligencia artificial y Aprendizaje Automático (IA/ML), pueden analizar estos datos casi de inmediato, o durante un cierto tiempo.

      p.mb-4 Conozca la aplicación de la IoT y su utilización en diferentes ámbitos: 

      .tarjeta.tarjeta--secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0

              h3.mb-4 IoT empresarial
              
              p.mb-4 Las organizaciones le están dando mucha importancia a la gran utilidad, el fácil acceso y manejo de la información, a través de sencillos y variados dispositivos. Aplicaciones ágiles, prácticas y fáciles de utilizar, han ido mejorando la interacción que tienen los usuarios con diferentes fuentes de información. 
              
              p.mb-4 El paradigma de la segmentación lenta y depurada para “clasificar” clientes, que se utilizaba en el siglo anterior y por demás costosa, ya es historia; todas las aplicaciones hacen esa tarea por el usuario, solo es definir a quién, cuándo, cómo y a qué precio se quiere llegar; el resto lo hace la aplicación.
              
              p Los antiguos departamentos de <i>marketing</i> de las organizaciones, en las actualidad se gestionan desde las diferentes especialidades relacionadas con el <i>“Funnel”</i> de conversión de redes sociales, páginas web e Internet, en términos generales.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder1.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              h3.mb-4(style="margin-top: -70px;") IoT en transporte y logística
              p Una de las primeras implementaciones del IoT se da en el sector de la logística y el transporte, que consiste en etiquetar los contenedores de transporte con dispositivos de identificación por radiofrecuencia (RFID). Estas etiquetas almacenan datos que se pueden captar por medio de ondas de radio, lo que permite que las empresas de logística realicen un seguimiento de los movimientos de los contenedores en ciertos puestos de control, con RFID, como en el caso de los depósitos o las terminales de carga portuarias. Gracias a los avances en el IoT, se han desarrollado dispositivos de seguimiento con baterías que transfieren datos permanentemente a las aplicaciones de IoT, sin la necesidad de tener lectores en las instalaciones, lo que posibilita a las empresas para que analicen la información de los envíos de forma instantánea, en cada tramo de la cadena de suministro.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder2.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              h3.mb-4(style="margin-top: -70px;") IoT en la agricultura
              p El IoT ha revolucionado el sector agrícola de varias formas, como es el caso del uso de sensores de humedad. Cuando los instalan en los campos, los agricultores obtienen datos más precisos para programar los períodos de riego. Además, pueden conectarlos a las aplicaciones de IoT que controlan la maquinaria de riego, la cual se activa automáticamente en función de los datos que generan los sensores.

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder3.svg', alt='imagen ilustrativa')

      #t_1_4.titulo-segundo.color-acento-contenido.mb-5  
        h3 1.4 Inteligencia artificial (IA)

      p.mb-4 Definir la inteligencia artificial (IA) es un poco difícil; primero, por ser una ciencia relativamente nueva y, segundo, porque se está desarrollando tan rápido que no es posible definirla aún dentro de unos parámetros estables, como la inteligencia humana (no definida con exactitud), usándola como parámetro de comparación.

      p.mb-4 A continuación, se presentan algunos datos importantes sobre su evolución: 

      .tarjeta.tarjeta--secundario.p-4.mb-5
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0    

              p.mb-4 En tiempos de Aristóteles, ya se hablaba de inteligencia artificial, pero, solo hasta antes de la Segunda Guerra Mundial, se le dio un inicio a su investigación, con el matemático Allan Turing, quien publicó “Máquina Universal” en 1936, donde explica su concepto de IA, descrito a través de un algoritmo informático y una máquina ordenadora. El Test de Turing fue la formalización de inicio de una nueva era, la era de la IA, evaluando si una máquina era o no, inteligente.
              
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder4.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4            
            .col-md-6.mb-4.mb-md-0
              p.mb-4 El término de “Inteligencia Artificial” se utilizó por primera vez en 1956 con John McCarthy, Simon Newell y Marvin Minsky en una conferencia en Dartmouth (Estados Unidos). 

              p.mb-0 Minsky creó el primer simulador de redes neuronales, también inventó el microscopio confocal y patentó el primer casco de realidad virtual en 1963. 

            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder5.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p.mb-4 El verdadero auge de la inteligencia artificial, a un nivel práctico, llegó cuando comenzaron a aparecer ordenadores potentes y baratos, capaces de experimentar con la IA a un nivel global y cotidiano, contrario a lo que se esperaba de grandes robots autómatas, capaces de analizar y hasta destruir ciudades.

              p Mantener una conversación cotidiana entre humanos, fueron los primeros pinos como agentes inteligentes, analizando datos en tiempos récord, manteniendo unas “reglas de juego”, fueron los primeros Chats con IA, los ChatBots.
            
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder6.svg', alt='imagen ilustrativa')
          
          .row.justify-content-center.align-items-center.my-lg-4
            .col-md-6.mb-4.mb-md-0
              p.mb-4 En 1997, Deep Blue de IBM, un ordenador, venció en una partida de ajedrez a Gary Kasparov, el entonces mejor ajedrecista del mundo y, tal vez, de la historia; ya no era ficción o cine, era una realidad, la verdad de la IA.
              
              p Actualmente, Deep Mind, creado por Google ,es el ordenador más popular y ha competido con éxito en otros juegos de mayor complejidad que el ajedrez.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tarjetas/placeholder7.svg', alt='imagen ilustrativa')

      p.mb-4 En términos sencillos, la IA es una emulación de la inteligencia humana, aplicada y ejecutada en un robot o <i>software</i>.

      .row.justify-content-center.mb-4
        .col-md-7      
          .cajon.color-acento-botones.color-fondo-secundario.p-4
            p.mb-0 La imitación del pensamiento humano es el principio de la IA. El cerebro humano es como un recipiente que se va llenando con información constantemente. Con el pasar del tiempo y las acciones de aprendizaje, van llenando el recipiente con información determinante para desarrollar procesos inteligentes más complejos.
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img12.png', alt='imagen relacionada')
     
      p.mb-4 Ahora, el aprendizaje automático hace parte de la IA, es el proceso por el cual el ordenador reconoce patrones y la capacidad de aprender sobre esos patrones, en un proceso continuo y creciente; llega a desarrollar estimaciones (predicciones con un alto porcentaje de acierto), basado en datos históricos y la característica principal es la capacidad de realizar ajustes, sin haber sido programado para hacerlo.
      
      p.mb-4 Las ventajas del aprendizaje automático son:

      .row.justify-content-center.mb-4
        .col-md-3.col-lg-3(style="margin-top: 10px; ")
          img(src='@/assets/curso/temas/texto_destacado/img13.png', alt='imagen relacionada') 
        .col-md-8.col-lg-9
          TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="El usuario mejora<br>su experiencia")
              .row
                .col-md-12.p-4.color-fondo
                  p Este aprendizaje permite que los motores de búsqueda, las aplicaciones en la web y otras tecnologías, se adapten para coincidir con las exploraciones de los usuarios, personalizando las investigaciones y perfeccionando cada vez más, las experiencias personales en la web.
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Inteligencia en la <br>gestión <i>Big data</i>")
              .row
                .col-md-12.p-4.color-fondo
                  p.mb-0 Gracias a la velocidad del aprendizaje automático, se pueden realizar tareas rápidas, efectivas y voluminosas en cada momento, casi al ritmo que se ingresa información estructurada y no estructurada de diferentes dispositivos, al <i>Big data</i>.
            
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Dispositivos<br>inteligentes")
              .row
                .col-md-12.p-4.color-fondo
                  p.mb-0 Desde dispositivos móviles que dan seguimiento a la salud y a los objetivos de bienestar, hasta vehículos de conducción autónoma y "ciudades inteligentes" con infraestructura que puede reducir automáticamente desperdicio de tiempo y energía, el Internet de las cosas (IoT) es una gran promesa, y el aprendizaje automático puede ayudar a dar sentido a este aumento significativo en los datos.

      p.mb-4 El funcionamiento del aprendizaje automático se refiere a algún ordenador que identifica patrones y analiza datos, para luego ser usados y optimizar tareas asignadas. Cualquier tarea se puede computarizar mediante este aprendizaje, no importa su complejidad.

      p.mb-4 El aprendizaje automático es flexible y adaptable y utiliza básicamente cuatro modelos:  

      .row.justify-content-center.mb-4
        .col-md-8.col-lg-8
          TabsA.color-acento-contenido.mb-4
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Aprendizaje<br> supervisado")
              .row
                .col-md-12.p-4.color-fondo
                  p Los datos son etiquetados para aprender a realizar una tarea humana, es un modelo sencillo, se trata de emular el aprendizaje humano.
                
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Aprendizaje <br>no supervisado")
              .row
                .col-md-12.p-4.color-fondo
                  p.mb-0 Los datos no están etiquetados, extrayendo información o patrones antes desconocidos. 
            
            .tarjeta.color-acento-contenido-borde.p-4(titulo="Aprendizaje <br> semisupervisado")
              .row
                .col-md-12.p-4.color-fondo
                  p.mb-0 Los datos son parcialmente etiquetados (unos etiquetados y otros no), el ordenador inicia analizando los datos etiquetados y extiende el proceso de aprendizaje a los datos no etiquetados.

            .tarjeta.color-acento-contenido-borde.p-4(titulo="Aprendizaje de <br> refuerzo")            
              .row
                .col-md-12.p-4.color-fondo
                  p.mb-0 El ordenador en su medio circundante, identifica y analiza los datos desde su conducta y comportamiento, para minimizar el riesgo de parametrizar los datos no estructurados y dar solución a tareas.
        
        .col-md-3.col-lg-4(style="margin-top: 10px; ")
          img(src='@/assets/curso/temas/texto_destacado/img14.png', alt='imagen relacionada') 

      .row.justify-content-center.mb-4
        .col-md-10.mb-4
          .cajon.color-acento-botones.color-fondo-secundario.p-4
            p.mb-0 El aprendizaje automático se ha desarrollado gradual y crecientemente en el sector industrial, mejorando los procesos industriales, analizando datos de máquinas y hombre máquina, para dar soluciones con alta efectividad a los procesos en producción, ayudando a las técnicas de gestión de calidad organizacional.
       
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
