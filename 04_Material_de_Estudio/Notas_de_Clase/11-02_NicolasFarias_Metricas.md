En el enfoque tradicional:
	valor que se toma con respecto a la realidad
	objetivo: evaluar la salud del proyecto, proceso, producto
	- dominio de las metricas:
		- metricas proceso -> se ve a traves del proyecto. 
		- metricas proyecto -> duran lo que dura el proyecto. por ej: como van los costos con la expetativa. medidas que mejoren durante el proyecto
		- metricas producto -> por ej: bugs, cant lineas de codigo
	Metricas basicas
		- tamano del producto -> metricas del producto
		- esfuerzo -> metricas del proyecto/proceso
		- tiempo (calendario) -> metricas de proyecto/producto
		- defectos -> metricas del producto
	Ejemplos de metricas tradicionales
		Desarrollador:
			esfuerzo
			efuerzo y duracion estimada y actual de una tarea
		Organizacion
			Tiempo calendario
			performance actual y planificada de esfuerzo
		Equipo de desarrollo
			tamano del producto 
			duracion estimada y actual entre los hitos mas importantes
	Las metricas deben ser un esfuerzo minimo 
En el enfoque en ambientes agiles
	filosofia minimalista de las metricas -> alinieandose a la filosofia de agiles, que el software este funcionando
	"Medir lo que sea necesario y nada mas".
	los 2 principios que guian lo que vamos a definir:
		"nuestra mayor prioridad es satisfacer al cliente por medio de entregas tempranas y continuas de software valioso, funcionando"
		"El software funcionando es la principal medida de progreso"
	- Velocidad
		cantidad de sp de las us que el po nos acepto en una review
		se espera que la velocidad sea cte
	- RTF (running tested features)
		La tendencia sea creciente (que siempre este entregando sw)
		Esta metrica casi no se usa pq lo muestra la Velocidad tambien.
	- Capacidad
		Se mide cuanto trabajo puede hacer un equipo en un sprint
		cuando se empieza a tener una velocidad estable, se empieza a ESTIMAR la capacidad
		En los primeros sprint se toman horas y no sp
Metricas en kanban
	gestiona la mejora de procesos continuos, NO proyectos
	- Lead time -> vista del cliente
		- tiempo transcurrido desde que la pieza de trabajo entra en el backlog hasta que llega al cliente. 
		- cuanto se demora por pieza de trabajo en entregarle al cliente
	- Cycle time 
		- tiempo en trabajo entre el inicio y el final del proceso para una pieza de trabajo
		- se suele medir en duas de trabajo
	- Touch time
		- tiempo efectivo que estuve trabajando sobre la pieza 
		- touch time <= cycle time <= lead time
	- Eficiencai del cliclo de proceso 
		- % eficiencia ciclo proceso = Touch time / lead time
	Son metricas que miden la satisfaccion del cliente y estan orientadas al cliente
Metricas para producto
	Tamano
		Lineas de codigo
		requerimientos 
			CU
			features
			clases 
			SP
	Defectos 
		Cobertura
		defectos por severidad
		densidad de defectos