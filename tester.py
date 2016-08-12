from pyqtree import *
import time
sp=Index(bbox=(0,0,1000001,10000001))
t0=time.time()
for i in range(10000):
	sp.insert(i,(i,i,i+2000,i+2000))
t1=time.time()
total=t1-t0
print total