# -----------------------------------------------------------------------------------------------------------------
# string_indexes
# give him the full name to extract the name every single component
# تعطيه الاسم الكامل ليستخرج لك الاسم الاول و الاوسط و الاخير
# -------------------------------------------------Version 1-------------------------------------------------------

user_name = input('Enter your full name (at lest 3 even less that 3 also work): ')
def name_component(name: str):
    ls_name = name.split()
    middle_name = ''
    middle_number = 1
    for ls in range(len(ls_name) - 2):
        if ls_name[middle_number][0] == 'e' and ls_name[middle_number][1] == 'l':
            print(ls_name[middle_number])
        word = ls_name[middle_number].capitalize()
        middle_name += word + ' '
        middle_number += 1
    if len(ls_name) == 1:
        print('First name: ', ls_name[0].capitalize())
    elif len(ls_name) == 2:
        print('First name: ', ls_name[0].capitalize(), '\nLast name: ', ls_name[(len(ls_name) - 1)].capitalize())
    else:
        print('First name: ', ls_name[0].capitalize(), '\nMiddle name: ', middle_name,
              '\nLast name: ', ls_name[(len(ls_name) - 1)].capitalize())


name_component(user_name)
