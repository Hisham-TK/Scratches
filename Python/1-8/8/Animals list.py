animals_list=lambda a:''.join(f'{i}. {v}\n' for i,v in enumerate(a))

animals=['cat','dog','horse']

print(animals_list(animals), '1. car\n2. dog\n3. horse\n')