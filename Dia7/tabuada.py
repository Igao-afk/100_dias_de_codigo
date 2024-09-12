def tabuada(n):
    print(f"Tabuada do {n}:")
    for i in range(1, 11):
        print(f"{n} x {i} = {n * i}")


numero = int(input("Digite um número: "))
tabuada(numero)