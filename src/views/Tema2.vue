<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas colaborativas

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Continuando con las herramientas colaborativas, las cuales son aplicaciones y <i>software</i> desarrollados para brindar y mejorar las actividades de trabajo en equipo; son un servicio integral de una o varias herramientas en función de objetivos grupales de equipos de trabajo.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Estas permiten el trabajo en forma sincrónica o asincrónica, solo con un ordenador y conexión a Internet. Los pioneros de estas aplicaciones fueron los correos electrónicos y mensajes instantáneos, y en la actualidad existe una gran cantidad de aplicaciones que facilitan las reuniones, los informes, la producción de colectivos de trabajo en remoto.
    
    p.mb-4 Las principales herramientas colaborativas son:

    .row.justify-content-center.mb-4
      .col-md-7
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Videoconferencias")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 De gran desarrollo en el 2020, en ese momento se determinó su importancia y efectividad, reuniones empresariales, clases universitarias y de escuela, reuniones familiares y hasta fiestas interactivas se realizaron, a través de las aplicaciones en los dispositivos.

              p Además de enviar imagen y sonido (algo básico para la comunicación), muchas permiten compartir pantalla, enviar documentos, videos, imágenes, etc., facilitando a los participantes trabajar en el mismo documento, en tiempo real.

          .row(titulo="Pantallas interactivas")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Son computadores con una pantalla de gran tamaño, conectados a un proyector, que permite que todos los asistentes en la sala, puedan ver lo que se reproduce.

              p Con estas herramientas, los participantes pueden realizar anotaciones a mano o con el ratón, las cuales se comparten con el resto de asistentes y se pueden compartir y exportar en diferentes formatos.

          .row(titulo="Proyectores")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Los proyectores son muy utilizados en presentaciones o en sesiones de <i>briefing,</i> para explicar a los equipos de trabajo, las claves de un proyecto, las estrategias a seguir, o los resultados de las acciones implementadas.

              p Gracias a los proyectores, las personas que se encuentran en una sala pueden ir viendo los documentos en los que se está trabajando en el computador que difunde la imagen. No se podrá trabajar a tiempo real como con las pantallas interactivas, porque los proyectores reproducen la imagen sobre una pantalla de proyección o pared blanca.

          .row(titulo="Uso compartido a través de dispositivos móviles")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Las aplicaciones en dispositivos móviles, flexibles, fáciles de portar y transportar, son tan versátiles como los mismos equipos móviles, porque no requieren tantos comandos para su ejecución, solo poco <i>“touch”</i> en la pantalla digital, permitiendo ser ejecutadas mientras se está en movimiento. Se puede estar en una conferencia mientras se desplaza en un taxi, o en el auto, aún en el transporte público o, simplemente, repasar un producto de un colectivo en el Drive o en el One Drive.

              p A través de estas aplicaciones se pueden enviar tareas de impresión desde cualquier dispositivo (computador portátil, <i>smartphone</i> o tableta), con un acceso a la información, protegido por contraseña y una autorización de documentos, protegida por una clave.
      .col-md-5
        img(src='@/assets/curso/temas/texto_destacado/img16.png', alt='imagen relacionada')   

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img17.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 El desarrollo de las tecnologías de la información, ha permitido que muchas Pymes aprovechen los bajos costos, la velocidad y segmentación que permiten las aplicaciones. Actualmente, no se abre un correo en Gmail o Hotmail, se abre una cuenta con varios servicios y posibilidades, entre ellas varias aplicaciones en la nube que no requieren ser descargadas en el computador; simplemente, se accede entrando con la clave del correo, e igualmente se accede a herramientas de colaboración en la nube, en cualquier dispositivo, en cualquier momento, elementos esenciales para concertar reuniones a través de “Meets” o de “Teams”, con solo tener una cuenta gratuita en Gmail o Hotmail. También, de forma gratuita, se dispone de espacio para almacenar información de 1GB; otras aplicaciones para colaboración de forma gratuita, son ideales para desarrollar las <i>Star up</i> y Pymes.
    
    p.mb-4 Existen igualmente otras herramientas colaborativas en la nube que son de pago, obviamente con mayores bondades y posibilidades.
    
    p.mb-4 Las herramientas colaborativas más conocidas son:

    .mx-auto.col-md-10.mb-4
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img18.svg', alt='diagrama')

              .tarjeta.color-puntoC.puntoC_acento.p-4(x="24%" y="35%" numero="+" style='border-radius: 10px;width: 410px')
                p.mb-4.puntoC_acento Antes llamado Google Docs, aumentando sus posibilidades ahora como Drive, más potente, más dinámico y predictivo, haciendo las veces de programador, agenda, almacenamiento y utilitario, todo en la nube. En dispositivos móviles se puede tener acceso al Drive, incluso para realizar cambios sin conexión, los cuales se actualizarán al tener conexión a la web.

                p.mb-4.puntoC_acento Los principales programas colaborativos de Google Drive son: un editor de documentos, otro de hojas de cálculo y el de presentaciones. En todos los casos, se podrá crear un documento y compartirlo con otros usuarios, simplemente añadiendo su email de Gmail. Además, se podrán dar los permisos que se requieran en el documento (leer, editar). Con ello, se podrá actualizar un documento y los otros usuarios ver, en tiempo real, los cambios que se realizan. Cualquier usuario podrá consultar la última versión del archivo en todo momento. También se podrán crear formularios y compartirlos.
              
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="35%" y="28%" numero="+" style='border-radius: 10px')
                p.mb-4.puntoC_acento Google Photos es otro espacio de colaboración donde se pueden subir fotos y crear álbumes en la web, pudiendo ser compartidos con quien se desee. Es ideal para una Pyme, donde podrá subir portafolio gráfico de sus productos y/o servicios, garantizando permanencia y seguridad.
                
                p.mb-4.puntoC_acento Además, permite liberar de los dispositivos Android las imágenes, dejando espacio libre para el celular o la tableta y manteniendo una copia de todas las imágenes en la nube. Todo ello compartido, de forma que los usuarios que tengan permiso, podrán actualizar los álbumes con nuevas imágenes.

              .tarjeta.color-puntoC.puntoC_acento.p-4(x="51%" y="27%" numero="+" style='border-radius: 10px')
                p.puntoC_acento Esta herramienta es ideal para el envío de correos masivos, agilizando y garantizando que la misma información llegue en el propio momento, a un grupo de usuarios, solo con un listado.
                  
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="23%" y="60%" numero="+" style='border-radius: 10px')
                p.puntoC_acento En esta herramienta se potencializa el objeto de realizar videollamadas a varias bandas, realizar videoconferencia estando en el correo de Gmail, siendo guardadas automáticamente en el correo y en el espacio gratuito que se le da a la cuenta del usuario.
              
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="34%" y="49%" numero="+" style='border-radius: 10px; width: 350px')
                p.mb-4.puntoC_acento El calendario de Google cuenta con prestaciones colaborativas interesantes, como la opción de crear y compartir calendarios. Con esta opción, en una misma empresa, se puede disponer de calendarios compartidos con miembros de un departamento, con el global de la empresa, o con un solo empleado y todo de forma simultánea y en la nube.

                p.puntoC_acento Desde Gmail y el mismo Calendar, se pueden convocar reuniones o eventos a los usuarios que se desee, y una vez la acepten hacer que esa cita se añada automáticamente en su calendario. Todo esto, reduce bastante las comunicaciones innecesarias y hace más fluido el proceso de gestión de agendas y calendarios.

              .tarjeta.color-puntoC.puntoC_acento.p-4(x="51%" y="55%" numero="+" style='border-radius: 10px')
                p.puntoC_acento Si se requiere tomar nota, vaya a Google Keep. Ideal para compartir listas de tareas de colectivos y equipos de trabajo (tipo Kanban), dando importancia a las tareas, de acuerdo con los requerimientos planteados, todo en un espacio común.

                 
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="61%" y="29%" numero="+" style='border-radius: 10px; width: 350px')
                p.mb-4.puntoC_acento Es un espacio colaborativo con variedad de aplicaciones para compartir todo tipo de archivos, con capacidad gratuita de 5Gb.
                p.mb-4.puntoC_acento Cuenta con todo el paquete Office en la web, como PowerPoint, Word y Excell (si no lo tiene instalado en su computador, ya no tiene problema), de acceso en cualquier parte y en cualquier momento.
                p.puntoC_acento Además, el conjunto de OneDrive incluye también un espacio de creación de galerías de fotos divididas, el uso compartido de favoritos, o la creación de grupos de usuarios que pueden interactuar de forma colaborativa.
              
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="78%" y="34%" numero="+" style='border-radius: 10px')
                p.puntoC_acento Se puede decir que Skype fue el primer <i>software</i> de videoconferencias, capaz de compartir voz, video, archivos de texto, ideal para reuniones en tiempo real. Inicialmente era muy lento y pesado, pero con la competencia de otras aplicaciones, tomó un nuevo respiro; se puede entrar directamente desde las aplicaciones de Office.
              
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="61%" y="50%" numero="+" style='border-radius: 10px')
                p.puntoC_acento El correo se hace más versátil con el Outlook, para compartir citas con otros usuarios, como apoyo colaborativo a las otras aplicaciones de Office, donde se entra directamente; ideal para comunicación interna en las organizaciones.
                  
              .tarjeta.color-puntoC.puntoC_acento.p-4(x="78%" y="52%" numero="+" style='border-radius: 10px')
                p.puntoC_acento Enfocado al sector empresarial, permite añadir al <i>software</i> tradicional, funcionalidades colaborativas para compartir documentos, realizar módulos de administración de procesos, módulos de búsqueda y gestión documental.

    p.mb-4 Durante la pandemia del 2020, se evidenció la importancia de las diferentes aplicaciones que sirven para comunicarnos; además, permitió que muchas de ellas se potencializaran en función del mejoramiento de las reuniones y actividades virtuales. Una supervivencia que no habría sido posible sin el teletrabajo y el uso generalizado de las herramientas colaborativas, salvavidas para muchas organizaciones en tiempos difíciles. Ahora, con el debate abierto sobre los nuevos esquemas laborales, estas plataformas continuarán siendo determinantes para el cambio organizativo y cultural que supone la transformación tecnológica, en el ámbito corporativo. 

    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 En la actualidad, a través del correo, se accede no solo al mismo, sino también a una variedad de aplicaciones que ofrecen diferentes funciones para el mejoramiento de las reuniones, conferencias, colaboración, edición, envío y recibo de información en distintos formatos, permitiendo acceder a ellas de forma sincrónica o asincrónica. Dependiendo del perfil del equipo de trabajo, se han diseñado varios “paquetes” de aplicaciones colaborativas, muchas de las cuales interactúan entre sí, dando valor agregado y muchas posibilidades a quienes las utilizan.
       
    p.mb-4 Actualmente, es posible encontrar en el mercado una amplia oferta de aplicaciones para el trabajo colaborativo, adecuadas para casi cualquier ámbito de actividad profesional, las cuales pueden clasificarse en las siguientes categorías:

    .row.mb-5
      .col-sm-6.col-lg-2.mb-4.mb-lg-0(style=" width: 213px;")
        .tarjeta.p-4(style='min-height:220px; height:330px; background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjetas/avatar1.svg', alt='Texto que describa la imagen')

          h5.text-center Para la creación de proyectos
          ul.lista-ul
            li 
              |●  Symbaloo
            li 
              |●  MindMeister
            li 
              |●  Padlet

      .col-sm-6.col-lg-2.mb-4.mb-lg-0(style=" width: 213px;")
        .tarjeta.p-4(style='min-height:220px; height:330px; background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjetas/avatar2.svg', alt='Texto que describa la imagen')

          h5.text-center Para entornos de trabajo
          ul.lista-ul
            li 
              |● Office 365 de Microsoft
            li 
              |● Google WorkSpace
            li 
              |● Zoho.


      .col-sm-6.col-lg-2.mb-4.mb-sm-0(style=" width: 213px;")
        .tarjeta.p-4(style='min-height:220px; height:330px; background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjetas/avatar3.svg', alt='Texto que describa la imagen')
          h5.text-center Para comunicación online
          ul.lista-ul
            li 
              |●  Google Hangout
            li 
              |●  Skype
            li 
              |●  Zoom
            li 
              |●  Slack

      .col-sm-6.col-lg-2.mb-4.mb-sm-0(style=" width: 213px;")
        .tarjeta.p-4(style='min-height:220px; height:330px; background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjetas/avatar4.svg', alt='Texto que describa la imagen')

          h5.text-center Para gestión de tareas
          ul.lista-ul
            li 
              |●  Basecamp
            li 
              |●  Trello

      .col-sm-6.col-lg-2(style="width: 213px;")
        .tarjeta.p-4(style='min-height:220px; height:330px; background-color: #CFE5B6')
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tarjetas/avatar5.svg', alt='Texto que describa la imagen')
          h5.text-center Para compartir y almacenar en la nube
          ul.lista-ul
            li 
              |●  Dropbox
            li 
              |●  Google Drive
            li 
              |●  WeTransfer
    
    h3
      i#t_2_1.fas.fa-square.me-3.cuadrado.mb-4
      | Depuración de datos

    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 El proceso de homogeneización de los datos, o sea, la conversión y transformación de datos desde formatos no estructurados hasta llevarlos a una estructura general que facilite los análisis y depuraciones posteriores, hasta llevar la tipología de los datos a formar cuadros de información estructurados para, al final, tomar decisiones, esto es depuración de datos.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 La depuración es esencial en el tratamiento de los datos, debido a que los limpia y estandariza, librándose de errores para, posteriormente, formatearlos antes de introducirlos en el sistema de destino, de tal forma que podamos trabajar con ellos de manera apropiada.  
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img19.png', alt='imagen relacionada')
    
    .mb-4 Las herramientas de depuración de datos pueden ayudar a omitir el tedioso proceso de revisar todos los datos manualmente, al limpiarlos a través de transformaciones integradas. La limpieza manual de datos implica revisar las entradas individualmente, fila por fila, e inspeccionarlas en busca de invalidez, valores faltantes, etc.




</template>

<script>
export default {
  name: 'Tema2',
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
