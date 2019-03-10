# -----------------------------------------------------------------------------------------------------------------
# format_strings
# this code will help you to print variables in text so easy
# اهلاً هذا السطر كذا و السطر التالى كذا و السطر السابق كذا
# -------------------------------------------------Version 1-------------------------------------------------------
x = int(input('Enter number of lines: '))
for i in range(x):
    if i == 0:
        # the first line
        print('Hi this is the {line} th line, and the next line will be the {next} th line.'.format(line=(i + 1),
                                                                                                    next=(i + 2)))
    elif i == (x - 1):
        # the last line
        print('Hi this is the {line} th line, the last line was the {last} th.'.format(line=(i + 1), last=i))
    else:
        print('Hi this is the {line} th line, and the next line will be the {next} th line,'
              'the last line was the {last} th.'.format(line=(i + 1), last=i, next=(i + 2)))
