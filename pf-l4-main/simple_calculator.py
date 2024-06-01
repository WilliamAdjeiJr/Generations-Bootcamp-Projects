# main.py
def add_numbers(num1, num2):
    return num1 + num2

def subtract_numbers(num1, num2):
    return num1 - num2

def multiply_numbers(num1, num2):
    return num1 * num2

def divide_numbers(num1, num2):
    if num2 != 0:
        return num1 / num2
    else:
        return "Error: Division by zero"

if __name__ == "__main__":
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    
    print("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division")
    choice = int(input("Enter your choice (1/2/3/4): "))

    if choice == 1:
        result = add_numbers(num1, num2)
        print("The result is:", result)
    elif choice == 2:
        result = subtract_numbers(num1, num2)
        print("The result is:", result)
    elif choice == 3:
        result = multiply_numbers(num1, num2)
        print("The result is:", result)
    elif choice == 4:
        result = divide_numbers(num1, num2)
        print("The result is:", result)
    else:
        print("Invalid choice")
