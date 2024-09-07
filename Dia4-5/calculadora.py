def adicionar(x, y):
    return x + y

def subtrair(x, y):
    return x - y

def multiplicar(x, y):
    return x * y

def dividir(x, y):
    if y != 0:
        return x / y
    else:
        return "Erro: Divisão por zero não permitida"

def main():
    print("Escolha a operação:")
    print("1. Adição")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")

    escolha = input("Digite o número da operação (1/2/3/4): ")

    if escolha in ['1', '2', '3', '4']:
        try:
            num1 = float(input("Digite o primeiro número: "))
            num2 = float(input("Digite o segundo número: "))

            if escolha == '1':
                print(f"O resultado da adição é: {adicionar(num1, num2)}")
            elif escolha == '2':
                print(f"O resultado da subtração é: {subtrair(num1, num2)}")
            elif escolha == '3':
                print(f"O resultado da multiplicação é: {multiplicar(num1, num2)}")
            elif escolha == '4':
                print(f"O resultado da divisão é: {dividir(num1, num2)}")
        except ValueError:
            print("Erro: Por favor, insira um número válido.")
    else:
        print("Escolha inválida. Por favor, escolha uma operação válida.")

if __name__ == "__main__":
    main()
