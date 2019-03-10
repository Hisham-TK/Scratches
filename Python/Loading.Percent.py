# -----------------------------------------------------------------------------------------------------------------
# format_strings
# create loading percent of loop that you choose
# يصنع نسبة تحميل من الرقم المدخل و يحسبها من البداية حتى النهاية
# -----------------------------------------------------------------------------------------------------------------

i = 0
num = int(input("Enter the Number of your loading: "))
while i < num:
    for i in range(num):
        percent = i / num * 100
        print('Loading {count} of {total} ( %1.2f'.format(count=i, total=num) % percent + ' % )')
    print('Loading {count} of {total} ( 100.00 % )'.format(count=i+1, total=num))
    print("Congratulation it's done")

    i += 1
 
