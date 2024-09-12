def celsius_para_fahrenheit(celsius):
    return (celsius * 9/5) + 32

celsius = float(input("Digite a temperatura em Celsius: "))
fahrenheit = celsius_para_fahrenheit(celsius)

print(f"{celsius}°C é equivalente a {fahrenheit}°F")