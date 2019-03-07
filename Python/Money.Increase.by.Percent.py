# Input variables
user_money = float(input('Enter Money: '))
user_percent = float(input('Enter percent: '))
user_years = int(input('Enter numbers of Years: '))


# To calculate the increase percent in money during years (Print last year only)
def money_increase_calculator_final_year_only(money: float, percent: float, years: int):
    year = (years - years + 1)  # Start my years in print from the 1 year
    for i in range(years):
        increase_percent = money * percent / 100  # Get percent from the money
        money += increase_percent  # Reconstruct money value
        if year < years:
            year += 1  # Increase a year
        else:
            break
    print('Money value after the', year, 'th Year =', money)


# To calculate the increase percent in money during years (Print all years)
def money_increase_calculator_all_years(money: float, percent: float, years: int):
    year = (years - years + 1)  # Start my years in print from the 1 year
    for i in range(years):
        increase_percent = money * percent / 100  # Get percent from the money
        money += increase_percent  # Reconstruct money value
        if money >= 1e5:
            print('Money value after the', year, 'th Year =', int(money))
        else:
            print('Money value after the', year, 'th Year =', money)
        year += 1  # Increase a year


money_increase_calculator_final_year_only(user_money, user_percent, user_years)
print('-------------------------')
money_increase_calculator_all_years(user_money, user_percent, user_years)
