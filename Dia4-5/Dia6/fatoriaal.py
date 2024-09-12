def fatorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * fatorial(n - 1)


numero = int(input("Digite um número: "))
resultado = fatorial(numero)

print("O fatorial  é", resultado)