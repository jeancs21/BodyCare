//Funcion que permite insertar contenido al final de este elemento.
//Genera el año actual automaticamente.
$(document).ready(function() {
    $(".copyRt").append("Powered by Jean C. Sánchez &copy; " + (new Date).getFullYear() + " | Body Care");
})


//SECCION DE EXPERIENCIAS

/*--------------Parrafo de Francis--------------*/

var parrafoFrancis = document.getElementById("Francis");

parrafoFrancis.innerHTML = ("Francis es un joven audaz que le gusta trabajar como programador de software " +
    "para ayudar a las personas. Sin embargo, a pesar de su pasión en su área de trabajo, " +
    "lidiaba también con el stress de dicho trabajo incluyendo su estudio de su carrera " +
    "en la universidad lo que lo llevó a descuidar su estilo de vida saludable. " +
    "Actualmente, se las arregló para entrenar por las mañanas antes de trabajar " + 
    "pudiendo sentirse satisfecho con su cuerpo y con más energía convirtiéndose " +
    "en un ejemplo a seguir.");



/*--------------Parrafo de Naya--------------*/

var parrafoNaysa = document.getElementById("Naysa");

parrafoNaysa.innerHTML = ("Mujer con alto nivel de optimismo. Su energía positiva toca " +
    "a las demás personas que le rodean siendo capaz de inspirarlas " +
    "y su curiosidad la ha llevado a investigar sobre mantenerse " +
    "en un estado saludable especialmente con su alimentación. " + 
    "Ha descartado muchos alimentos que pueden ser dañinos para " +
    "el cuerpo incluyendo las comidas chatarras, y complementa " +
    "su sana alimentación con ejercicios que la mantiene en forma " +
    "y contenta consigo misma.");



/*--------------Parrafo de Heidy--------------*/

var parrafoHeidy = document.getElementById("Heidy");

parrafoHeidy.innerHTML = ("Heidy es una joven creativa que tiene como pasión aprender " +
    "ya que crecer es prioridad, se presentó el reto: " + 
    "\'cambio es salud\', y tras descuidar su estilo de vida saludable " +
    "se empeñó en usar su creatividad para crear platos \'A la Heidy\' " +
    "donde la variedad nutritiva es lo importante y por supuesto, " + 
    "disminuir la ingesta de dulces y frituras. Optó por ser fiel " +
    "a caminar 30 minutos al día en un ritmo que le permite sentir " +
    "el cardiovascular, a pesar de ser ente de discusión, bailar zumba " +
    "y entrenar en el gimnasio con el tiempo la vitalidad y salud "+ 
    "fueron su aliado.");


//SECCION NOSOTROS

/*--------------Parrafo de la descripcion--------------*/

var descripcion = document.getElementById("descripcion_nosotros");

descripcion.innerHTML = ("Somos una entidad que ofrece apoyo y asesoramiento " +
    "a las personas con relación a la práctica de ejercicios físicos y " +
    "motivarlos a una sana alimentación lo cual les ayude a desarrollar " +
    "la disciplina y la persistencia en el cuidado de nuestro cuerpo.");

var mision = document.getElementById("mision_nosotros");

mision.innerHTML = ("Nuestra misión es que las personas tengan un " +
    "estilo de vida saludable, conscientizarlos de la importancia de " +
    "este estilo de vida, cómo nuestro cuerpo responde de acuerdo a las " +
    "decisiones que tomamos con él, sean alimenticias, físicas y hasta psicológicas.");

var vision = document.getElementById("vision_nosotros");

vision.innerHTML = ("Ser reconocidos de manera que el reconocimiento sea "+
    "a través del impacto positivo que deseamos en las personas " +
    "que sepan que independientemente de nuestras situaciones " +
    "podemos mantener nuestro cuerpo en un estado saludable de " +
    "forma persistente.");