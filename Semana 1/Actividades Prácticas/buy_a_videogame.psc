Algoritmo buy_a_videogame
	
	Definir saved_money, cost_videogame, money_difference Como Real
	
	Escribir "Ingrese la cantidad de dinero ahorrada: "
	Leer saved_money
	
	cost_videogame <- 120000
	
	Si (saved_money >= cost_videogame) Entonces
		money_difference <- saved_money - cost_videogame
		Escribir "Puedes comprar el video juego. Te sobra: " money_difference
	SiNo
		money_difference <- cost_videogame - saved_money
		Escribir "No te alcancaza. Te faltan: " money_difference
		
	FinSi
	
FinAlgoritmo
