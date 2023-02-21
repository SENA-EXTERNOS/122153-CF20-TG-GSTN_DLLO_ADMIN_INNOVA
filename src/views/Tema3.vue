<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normativa
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img20.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Continuamos con un tema importante, la normativa, que es el conjunto de normas que rigen, guían y dirigen el comportamiento del individuo, grupo de personas, corporación, actividad u objetos. Este término es utilizado como sinónimo de regla, procedimiento o método y de ahí la importancia en las organizaciones, porque accionan sobre todo el fundamento de los procesos y el objeto que persiguen, bajo una directriz planeada.
       
    p.mb-4 Conozcamos las principales características de la normativa: 

    .row.justify-content-center.mb-4
      .col-md-8.col-lg-8
        TabsA.color-acento-contenido.mb-4
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Impersonales")
            .row
              .col-md-12.p-4.color-fondo
                p Las normas o reglas que forman la normativa no son nominales, es decir, no van dirigidas a personas en concreto, sino que se dirigen a la sociedad en conjunto.
              
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Obligatorias")
            .row
              .col-md-12.p-4.color-fondo
                p.mb-0 Las normas tienen carácter vinculante, es decir, tienen fuerza obligatoria para con los ciudadanos. Es obligatorio respetar y cumplir con la ley. 
          
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Abstractas")
            .row
              .col-md-12.p-4.color-fondo
                p.mb-0 Las normas no recogen supuestos concretos, sino que hablan de un supuesto general, donde se puede entender que abordan casos concretos y sus particularidades.

          .tarjeta.color-acento-contenido-borde.p-4(titulo="Generales")            
            .row
              .col-md-12.p-4.color-fondo
                p.mb-0 Las normas son dictadas para que sean cumplidas por toda la población a la que hace referencia dicha ley en su regulación.
      
          .tarjeta.color-acento-contenido-borde.p-4(titulo="Públicas")
            .row
              .col-md-12.p-4.color-fondo
                p.mb-0 Las normas deben ser publicadas para que sean de posible conocimiento por toda la población, sin la cual no se podría exigir su obligado cumplimiento.

      
      .col-md-3.col-lg-4(style="margin-top: 10px; ")
        img(src='@/assets/curso/temas/texto_destacado/img21.png', alt='imagen relacionada') 

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-4 Continuemos con la seguridad de la información. Se puede decir que, la seguridad de la información, son todas las prácticas, técnicas, medidas, acciones y controles que se emplean para salvaguardar y mantener seguros los datos suministrados, adquiridos (bajos las normas vigentes de protección de datos), compartidos y enviados, para que fluyan sin sufrir modificaciones que afecten su veracidad, así como la pérdida parcial o total de estos.
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Se debe garantizar el acceso a la información en el momento en que sea requerido, por quien sea solicitada y bajo las condiciones que se hayan especificado para dicha consulta. La seguridad de la información debe garantizar los medios para que estas consultas y disponibilidad se den en unos ambientes libres de manipulaciones y acciones fuera de las normativas.
    
    p.mb-4 La ISO 27001 dicta los objetivos de la seguridad de la información, proporcionando un modelo para que la implementación del SGSI (Sistema de Gestión de Seguridad de la Información), pueda proteger los datos e información, sistemas y equipos de cómputo.

    p.mb-4 Para establecer el sistema ISO de seguridad de la información, hay que tener en cuenta tres aspectos fundamentales: 

    .row.justify-content-center.mb-5
      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img23.png', alt='imagen relacionada')

      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Integridad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Se refiere a que la información no pierda veracidad, o sea, que permanezca real a su esencia inicial y, para esto, en los equipos con los que se procesan los datos, se debe garantizar que no habrá variación alguna de esta información. Si existe variación de la información, debe ser autorizada y valorada por algún responsable y asumir dichos cambios para evitar manipulaciones.
              
          .row(titulo="Confidencialidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 La información administrada debe ser salvaguardada del uso indebido y no autorizado de datos de vital importancia organizacional, como información clave para el éxito organizacional o datos privados financieros, así como también datos particulares que hayan sido suministrados, para que no lleguen a terceros no autorizados. Igualmente, los equipos deben asegurar que no se filtre dicha información.
             
          .row(titulo="Disponibilidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 La información debe estar disponible 24/7 los 365 días del año a quienes tengan autorización de uso y gestión de la información almacenada. Este aspecto es clave en el éxito organizacional en la actualidad.

    .row.justify-content-center.mb-4
      .col-md-7      
        p.mb-4 Hoy en día, por el valor privilegiado que tienen los datos y la información, toma gran importancia la acción de proteger este activo tan valioso para la organización. Tener una información en la empresa no es suficiente; esta información no solo debe ser clara e íntegra como exige la ISO, sino que además debe ser segura y libre de manipulaciones no autorizadas. 
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Los sistemas de la seguridad de la información deben ser capaces de gestionar el riesgo existente y superarlo con el menor impacto para la empresa, es decir, deben ser capaces de garantizar la resiliencia de la empresa y sus sistemas de seguridad para prevenir, evitar y solucionar cualquier riesgo o ataque que se derive del tratamiento de la información y los datos.
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img24.png', alt='imagen relacionada')           

    p.mb-4 Por ello, las empresas deben contar con soluciones tecnológicas adecuadas que no solo aseguren la protección, sino que también permitan conocer en todo momento el estado de dicha protección y que proporcionen las herramientas necesarias para garantizar la continuidad de la empresa y su actividad en caso de ataque.

    p.mb-4 La información está fundamentada en tres características:

    .row.justify-content-around.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(data-aos="fade-up-right" src="@/assets/curso/temas/tarjetas/tarjeta1.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-4 Crítica
            p.mb-0 Esta información es la que se hace indispensable para el funcionamiento de la organización. Es crítica porque sin ella la empresa no podría operar satisfactoriamente todos sus procesos y protocolos pero, operando con esta información, los retornos organizaciones llegarán sobre las estimaciones planeadas.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta2.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-4 Valiosa
            p.mb-0 Es la información que no es crítica, porque, sin ella la empresa funciona normalmente, pero la información valiosa determina los elementos diferenciales y misionales de la empresa. La misión determina, precisamente, el valor de cierta información y el uso que de esta se haga.

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tarjetas/tarjeta3.svg", alt="imagen relacionada")
          .crd_hover_txt--body
            h4.mb-4 Sensible
            p.mb-0 La información es sensible en el sentido que es información privada de los clientes de la empresa y, por lo tanto, solo deben tener acceso a la misma, persona autorizadas. Los sistemas de seguridad de la información, deben garantizar la protección de datos de los clientes (usuarios).

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img25.png', alt='imagen relacionada')
      .col-md-7      
        p.mb-0 <b>Seguridad y Salud en el Trabajo (SST).</b> Todo programa sobre gestión en seguridad y salud en el trabajo, debe tener una introducción, alcance, objetivos, interesados o responsables, acciones (actividades), cronograma, sistemas de medición de las acciones y planes ejecutados, indicadores (obligatorios y no obligatorios), acciones y ejecución de acciones de mejora. Cada Sistema de Gestión de Seguridad y Salud en el Trabajo (GS-SST), debe ser único y elaborado, de acuerdo con los riesgos detectados, medidos y clasificados en la empresa, así como las acciones de mitigación, eliminación u otra labor que se ejecute; por lo tanto, la metodología general se aplica conforme a lo estipulado por la norma, pero las actividades y riesgos son particulares a cada proceso, cada área y cada empresa. 

    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Por ejemplo, dos constructoras tienen riesgos similares en procesos parecidos, pero difieren en riesgos específicos en el campo de obra; una se dedica a la construcción de casas de un solo nivel y la otra a edificios multivivienda, generando, adicionalmente, riesgo en alturas, necesitando capacitación en esta área para las labores colaterales al riesgo de altura mientras, la otra constructora, no lo necesitará.

    p.mb-4 En la normativa encontramos algunos términos importantes que debemos tener en cuenta: 

    SlyderF.mb-5.slyder-g(columnas="col-lg-12 col-xl-4")
      .tarjeta.p-4.color-acento-contenido(style='height:620px;')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/curso/temas/tarjetas/avatar6.svg' alt='dibujo relacionado')      
        h4.text-center Propiedad intelectual
        p.mb-4.text-center Es toda producción que resulta de la creación innata y única de sus autores, de la imaginación y obra manual o física; puede ser creación artística, literaria, musical u otra afín. La legislación protege a los individuos que poseen creaciones propias e inéditas.
        p.text-center Sin embargo, se establece una diferencia con los desarrollos industriales como marcas, patentes, invenciones y modelos de tipo industrial.

      .tarjeta.p-4.color-acento-contenido(style='height:620px;')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/curso/temas/tarjetas/avatar7.svg' alt='dibujo relacionado')    
        h4.text-center Derechos de autor
        p.mb-4.text-center Se refiere a todos los derechos que, por ley, se le da a un autor por sus obras y creaciones. El mérito se otorga desde la autoría y lo económico.
        p.text-center El derecho de autor no protege la idea, pero sí toda expresión material de su creación u obra.

      .tarjeta.p-4.color-acento-contenido(style='height:620px;')
        .row.justify-content-center.mb-6
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/curso/temas/tarjetas/avatar8.svg' alt='dibujo relacionado')
        h4.text-center Derechos patrimoniales o económicos 
        p.mb-4.text-center Hacen referencia a la reproducción, distribución, comunicación pública o transformación de la obra, otorgando al autor la posibilidad de decidir sobre el uso de la misma, o  por parte de terceros, de manera que puede ceder esos derechos.

    p.mb-4 Para finalizar se habla de la calidad, la cual se concibe como un compromiso organizacional que abarca todas las tareas, acciones, procesos, protocolos y normas que la empresa “caracteriza”, para llegar a buscar optimizar procesos.  

    p.mb-4 Es importante definir, en un sistema de calidad, la importancia de los tres diferentes tipos de acciones para minimizar factores externos que influyen en las organizaciones y sus decisiones.  

    .row.justify-content-center.mb-5
      .col-md-4
        img(src='@/assets/curso/temas/texto_destacado/img26.png', alt='imagen relacionada')

      .col-md-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
          .row(titulo="Acciones preventivas")
            .col-md-12.mb-4.mb-md-0
              p.mb-0 Son todas aquellas que se realizan procurando evitar posibles errores, fallas o reprocesos. Las grandes organizaciones invierten en mantener procesos que procuren evitar reprocesos, los cuales pueden ser mucho más costosos. Desde la planeación, se destinan recursos para este objetivo. Van enfocadas, igualmente, con el seguimiento de los clientes y la satisfacción de estos con respecto a los productos y servicios ofrecidos por la empresa; los clientes tienen mucho que decir del producto de la empresa, información que puede ser muy útil para determinar acciones de mejora. Desde las acciones preventivas, surgen muchas tareas para evitar, por ejemplo, sobreproducción, sobrecostos, bajo nivel de productividad, programación efectiva de recursos y otras tantas que evitan a mediano y largo plazo, subutilización de los recursos.
              
          .row(titulo="Acciones correctivas")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Son acciones de mejora que se enfocan en todas las tareas que se deben ejecutar como respuesta a los seguimientos y controles de los procesos de gestión y organización. Estas actividades se planean y programan, buscando eliminar, reducir o mitigar, las “no conformidades encontradas”. 
              p.mb-0 Las acciones de mejora son vitales para incrementar los estándares de calidad y es el primer paso para el inicio de un sistema de gestión de la calidad y todos sus procesos.

          .row(titulo="No conformidad")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Se refiere al incumplimiento de un requisito preestablecido; este requisito puede tener un origen externo que es cuando se incumple, por ejemplo, una norma ISO, o puede tener un origen interno que es cuando se incumplen procedimientos internos de la empresa, entre otros.

              p.mb-4 Es un hallazgo que se hace en los procesos de auditoría (generalmente externa), donde la acción, el procedimiento o proceso no está “conforme”, desde la acción, a como ha sido planeado. 

              p.mb-0 Las no conformidades se dividen en menores y mayores. Las menores se solucionan con acciones sencillas que no implican mayores recursos y se pueden realizar en el corto plazo, incluso en el mismo momento del hallazgo. Las no conformidades mayores, requieren desplegar recursos y programar acciones de mejora, enfocadas a solucionar en el menor tiempo posible.

    .row.justify-content-center.mb-4
      .col-md-10.mb-4
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros






</template>

<script>
export default {
  name: 'Tema3',
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
