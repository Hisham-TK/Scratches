class StudentDB(object):
    def __init__(self):
        self.main()

    @staticmethod
    def main():
        # create database
        my_database = []
        student = 1
        number_of_subjects = None
        number_of_students = None
        in_subject = None

        # input only number of students
        input_number_of_students = input('Number of Students : ')
        test_students = input_number_of_students.isnumeric()
        if test_students is True:
            number_of_students = int(input_number_of_students)
        else:
            while test_students is False:
                input_number_of_students = input('!!! Wrong entry (must be numbers)\n'
                                                 'Number of Students: ')
                test_students = input_number_of_students.isnumeric()
                if test_students is True:
                    number_of_students = int(input_number_of_students)
                    break

        # input only number of subjects
        input_number_of_subjects = input('Number of Students : ')
        test_subjects = input_number_of_subjects.isnumeric()
        if test_subjects is True:
            number_of_subjects = int(input_number_of_subjects)
        else:
            while test_subjects is False:
                input_number_of_subjects = input('!!! Wrong entry (must be numbers)\n'
                                                 'Number of Students: ')
                test_subjects = input_number_of_subjects.isnumeric()
                if test_subjects is True:
                    number_of_subjects = int(input_number_of_subjects)
                    break

        # input degree of all students and there names
        for students in range(number_of_students):
            data = []
            subject = 1
            name = input('Enter the ({student_num})th Student Name: '.format(student_num=student))
            student += 1
            data.append(name.capitalize())
            for subjects in range(number_of_subjects):
                degree = ''
                input_in_subject = input('Enter the ({subject_num})th Subject of {name_of_student}: '
                                         .format(subject_num=subject, name_of_student=name.capitalize()))
                test_subject = input_in_subject.isnumeric()
                if test_subject is True:
                    in_subject = float(input_in_subject)
                    if 0.0 <= in_subject <= 100:
                        if 0.0 <= in_subject < 50:
                            degree = 'Fall'
                        elif 50.0 <= in_subject < 65:
                            degree = 'Pass'
                        elif 65.0 <= in_subject < 75:
                            degree = 'Good'
                        elif 75.0 <= in_subject < 85:
                            degree = 'Very Good'
                        elif 85.0 <= in_subject <= 100:
                            degree = 'Excellent'
                    else:
                        while (in_subject < 0) or (in_subject > 100):
                            input_in_subject = input('!!! Wrong entry (only numbers from 0 to 100 accept)\n'
                                                     'Enter the ({subject_num})th Subject of {name_of_student}: '
                                                     .format(subject_num=subject, name_of_student=name.capitalize()))
                            test_subject = input_in_subject.isnumeric()
                            if test_subject is True:
                                in_subject = float(input_in_subject)
                                if 0.0 <= in_subject <= 100:
                                    if 0.0 <= in_subject < 50:
                                        degree = 'Fall'
                                    elif 50.0 <= in_subject < 65:
                                        degree = 'Pass'
                                    elif 65.0 <= in_subject < 75:
                                        degree = 'Good'
                                    elif 75.0 <= in_subject < 85:
                                        degree = 'Very Good'
                                    elif 85.0 <= in_subject <= 100:
                                        degree = 'Excellent'
                else:
                    while test_subject is False:
                        input_in_subject = input('!!! Wrong entry (only numbers from 0 to 100 accept)\n'
                                                 'Enter the ({subject_num})th Subject of {name_of_student}: '
                                                 .format(subject_num=subject, name_of_student=name.capitalize()))
                        test_subject_2 = input_in_subject.isnumeric()
                        if test_subject_2 is True:
                            in_subject = float(input_in_subject)
                            if 0.0 <= in_subject <= 100:
                                if 0.0 <= in_subject < 50:
                                    degree = 'Fall'
                                elif 50.0 <= in_subject < 65:
                                    degree = 'Pass'
                                elif 65.0 <= in_subject < 75:
                                    degree = 'Good'
                                elif 75.0 <= in_subject < 85:
                                    degree = 'Very Good'
                                elif 85.0 <= in_subject <= 100:
                                    degree = 'Excellent'
                                test_subject = True
                            else:
                                while (in_subject < 0) and (in_subject > 100):
                                    input_in_subject = input('!!! Wrong entry (only numbers from 0 to 100 accept)\n'
                                                             'Enter the ({subject_num})th Subject of {'
                                                             'name_of_student}: '
                                                             .format(subject_num=subject,
                                                                     name_of_student=name.capitalize()))
                                    test_subject_2 = input_in_subject.isnumeric()
                                    if test_subject_2 is True:
                                        in_subject = float(input_in_subject)
                                        if 0.0 <= in_subject <= 100:
                                            if 0.0 <= in_subject < 50:
                                                degree = 'Fall'
                                            elif 50.0 <= in_subject < 65:
                                                degree = 'Pass'
                                            elif 65.0 <= in_subject < 75:
                                                degree = 'Good'
                                            elif 75.0 <= in_subject < 85:
                                                degree = 'Very Good'
                                            elif 85.0 <= in_subject <= 100:
                                                degree = 'Excellent'
                                            test_subject = True
                subject += 1
                data.append(degree)
                data.append(in_subject)
            my_database.append(data)
        num_sub = len(my_database[0])
        real_num_sub = int((num_sub - 1) / 2)

        # print all students names and there degrees and total of subjects
        for prints in my_database:
            print('-------------------------------------------------\n'
                  'The Result of student ( {name_for} ): '.format(name_for=prints[0]))
            degree_index = 1
            subject_index = 2
            total_subjects = 0
            subj = 1
            for subjects_print in range(real_num_sub):
                st_degree = prints[degree_index]
                st_subject = prints[subject_index]
                total_subjects += st_subject
                print('The {subject_num}th subject :( {st_subject} ) = grade ( {st_degree} ).'
                      .format(subject_num=subj, st_subject=st_subject, st_degree=st_degree))
                degree_index += 2
                subject_index += 2
                subj += 1
            print('Total of subjects = ( {total_subjects} ).'
                  .format(total_subjects=total_subjects))


if __name__ == '__main__':
    StudentDB()
