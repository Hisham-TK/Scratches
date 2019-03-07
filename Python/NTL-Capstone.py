#################################################################################
#               Generate similar values for Joined table in ArcGIS
#################################################################################
# # Pre Logic script
# import random
#
#
# def percentage_ranger_function(value, percent):
#     return (float("{0:3f}".format((random.uniform(float("{0:2f}".format((value - (percent * value / 100)))),
#                                                   float("{0:2f}".format((value + (percent * value / 100)))))))))

# Field command
""" percentage_ranger_function( !EEAA_Alexandria_Stations_201_Ma.! ,2) """

#################################################################################
#                 Generate ranger of main value for ArcGIS
#################################################################################
# # Pre Logic script
# def ranger(number, percent):
#     return (float("{0:2f}".format((number - (number * percent / 100)))),
#             float("{0:2f}".format((number + (number * percent / 100)))))


# Field command


#################################################################################
#                         Dissolved Oxygen function
#################################################################################
# # Pre Logic script
# def less_than_four(dissolved_oxygen_field):
#     if dissolved_oxygen_field > 4:
#         result = 0
#     else:
#         result = 4 - dissolved_oxygen_field
#     return result


# Field command
""" less_than_four( !DissolvedOxygen! ) """

#################################################################################
#      Insert graph values to Arc Map field with python Field Calculator
#################################################################################
# # Pre Logic script
# myData = """Bar0, 38.01322
# Bar1, 38.01322
# Bar2, 38.35691
# """
#
# myList, newList = myData.split(), []
#
#
# def my_list_func(input_list):
#     for item in input_list:
#         if myList.index(item) % 2 == 1:
#             result = newList.append(item)
#         else:
#             continue
#     return result
#
#
# newList.append(my_list_func(myList))
# newList.pop(-1)

# Field command
""" newList[ ( !OBJECTID! - 1) ] """

#################################################################################
#          Calculate multi fields values even if there is Null values
#################################################################################
# # Pre Logic script
# def null(field):
#     field = 0 if field is None else field
#     return field


# Field command
""" null(!field1!) + null(!field2!) + null(!filed3!) """

#################################################################################
#                       Total Coli Bacteria function
#################################################################################
# # Pre Logic script
# def more_five_hundred(num):
#     if num < 500:
#         result = 0
#     else:
#         result = num - 500
#     return result


# Field command
"""" more_five_hundred( !TotalColiBacteria! ) """

#################################################################################
#                 Streptococci & Escherichia Bacteria function
#################################################################################
# # Pre Logic script
# def more_hundred(num):
#     if num < 100:
#         result = 0
#     else:
#         result = num - 100
#     return result


# Field command
"""  
more_hundred( !EscherichiaColi! )
more_hundred( !StreptococciFaecal! )
"""

#################################################################################
#              Numbering features depend on start number and interval
#################################################################################
# # Pre Logic script
# record = None
#
#
# def numbering():
#     global record
#     start_number, interval = 5, 2
#     if record is None:
#         record = start_number
#     else:
#         record += interval
#     return record


# Field command
""" numbering() """

#################################################################################
#      Numbering features once odd or even depend on previous feature number
#################################################################################
# # Pre Logic script
# def numbering_even_odd():
#     global record, pre_num_is_even
#     start_number, odd_interval, even_interval = 8, 1, 2
#     if record is None:
#         record = start_number
#         if record % 2 == 0:
#             pre_num_is_even = False
#         else:
#             pre_num_is_even = True
#     else:
#         if pre_num_is_even is False:
#             record += odd_interval
#             pre_num_is_even = True
#         elif pre_num_is_even is True:
#             record += even_interval
#             pre_num_is_even = False
#     return record
#
#
# record, pre_num_is_even = None, None

# Field command
""" numbering_even_odd() """

#################################################################################
#      Romanian feature field by add I, II, III for feature incrementing
#################################################################################
# # Pre Logic script
# def romanian():
#     global record
#     start_value = "I"
#     if record is None:
#         record = start_value
#     else:
#         record += start_value
#     return record
#
# record = None


# Field command
""" romanian() """

#################################################################################
#           Arithmetic operation = Get sum of 7 valid places raster
#################################################################################
#     This Code :
""" Float( SetNull( ( Con(IsNull("ValidPlaces_2018_02_27"),0,"ValidPlaces_2018_02_27") + Con(IsNull("ValidPlaces_2017_07_11"),0,"ValidPlaces_2017_07_11") + Con(IsNull("ValidPlaces_2017_03_08"),0,"ValidPlaces_2017_03_08") + Con(IsNull("ValidPlaces_2016_07_24"),0,"ValidPlaces_2016_07_24") + Con(IsNull("ValidPlaces_2016_02_15"),0,"ValidPlaces_2016_02_15") + Con(IsNull("ValidPlaces_2015_07_19"),0,"ValidPlaces_2015_07_19") + Con(IsNull("ValidPlaces_2015_02_03"),0,"ValidPlaces_2015_02_03") ) == 0,  ( Con(IsNull("ValidPlaces_2018_02_27"),0,"ValidPlaces_2018_02_27") + Con(IsNull("ValidPlaces_2017_07_11"),0,"ValidPlaces_2017_07_11") + Con(IsNull("ValidPlaces_2017_03_08"),0,"ValidPlaces_2017_03_08") + Con(IsNull("ValidPlaces_2016_07_24"),0,"ValidPlaces_2016_07_24") + Con(IsNull("ValidPlaces_2016_02_15"),0,"ValidPlaces_2016_02_15") + Con(IsNull("ValidPlaces_2015_07_19"),0,"ValidPlaces_2015_07_19") + Con(IsNull("ValidPlaces_2015_02_03"),0,"ValidPlaces_2015_02_03") ) ) ) """

#     Alternative to this code :
""" "ValidPlaces_2018_02_27" + "ValidPlaces_2017_07_11" + "ValidPlaces_2017_03_08" + "ValidPlaces_2016_07_24" + "ValidPlaces_2016_02_15" + "ValidPlaces_2015_07_19" + "ValidPlaces_2015_02_03" """
