import requests

def trivia_fetch(num):
    url = f"http://numbersapi.com/{num}"
    response = requests.get(url)
    if response.status_code == 200:
        return {"number": num, "trivia": response.text}
    else:
        return None

def main():
    score = 0
    for _ in range(3):  # Ask 3 questions
        num = int(input("Enter a number: "))
        trivia = trivia_fetch(num)
        if trivia:
            print(trivia["trivia"])
            answer = input("Is this statement true or false? ")
            if answer.lower() == "true":
                score += 1
    print(f"Your score is: {score}/3")

if __name__ == "__main__":
    main()
