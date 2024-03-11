'''
int type(2)

float type(2.2)

type(2 + 3.0)   // O resutado será float

int(9.888)

round(9.888, 2)  // 9.89
'''

from decimal import *

d = Decimal('0.10')
e = Decimal('0.30')

f = d + d + d -e

print(f)
