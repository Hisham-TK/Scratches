class LooperCalculator(object):
    def __init__(self):
        th_num = 1
        self.number = int(input('enter the {}th number: '.format(th_num)))
        while True:
            th_num += 1
            self.operation = input('enter your operation: Such as ((+, -, *, /, **, //, %): ')
            if self.operation != '+' and self.operation != '-' and self.operation != '*' \
                    and self.operation != '/' and self.operation != '**' \
                    and self.operation != '//' and self.operation != '%':
                self.operation = input('enter your operation: Such as ((+, -, *, /, **, //, %): ')
            self.second_number = int(input('enter the {}th number: '.format(th_num)))
            if self.operation == '+':
                print('{n1} + {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number + self.second_number)
                self.number += self.second_number
            elif self.operation == '-':
                print('{n1} - {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number - self.second_number)
                self.number -= self.second_number
            elif self.operation == '*':
                print('{n1} * {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number * self.second_number)
                self.number *= self.second_number
            elif self.operation == '/':
                print('{n1} / {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number / self.second_number)
                self.number /= self.second_number
            elif self.operation == '**':
                print('{n1} ** {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number ** self.second_number)
                self.number **= self.second_number
            elif self.operation == '%':
                print('{n1} % {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number % self.second_number)
                self.number %= self.second_number
            elif self.operation == '//':
                print('{n1} // {n2} = '.format(n1=self.number, n2=self.second_number),
                      self.number // self.second_number)
                self.number //= self.second_number
            else:
                self.operation = input('enter your operation: Such as ((+, -, *, /, **, //, %): ')


if __name__ == '__main__':
    LooperCalculator()
