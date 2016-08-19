#####################################################
# GA17 Privacy Enhancing Technologies -- Lab 03
#
# Basics of Privacy Friendly Computations through
#         Additive Homomorphic Encryption.
#
# Run the tests through:
# $ py.test -v test_file_name.py

#####################################################
# TASK 1 -- Setup, key derivation, log
#           Encryption and Decryption

import pytest
from pytest import raises
from pyqtree import *
import time
import math


@pytest.mark.task1
def test_encrypt():
    arr={}
    numbers=[1,10,100,1000,10000]
    for n in numbers:
        sp=Index(bbox=(0,0,n+1,n+1))
        t0=time.time()
        value=int(math.ceil(0.75*n))
        print value,n
        for i in range(1,n,2):
            sp.insert(i,(i,i,i+1,i+1))
        t1=time.time()
        total=t1-t0
        arr[n]=total
    print arr

