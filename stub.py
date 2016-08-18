from pyqtree import *
sp=Index(bbox=(0,0,1000,1000))
for i in range(99):
	sp.insert(i,(i,i,i+1,i+1))
sp.hashcal()
sp.recompute_hash()
#child hashes then node hashes
sp.insert("dishant",(0,0,5,5))
sp.insert