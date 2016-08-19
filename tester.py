from pyqtree import *
import time
import math
import random
numbers=[10,100,1000,10000]

#This is a test case of a single quadrant where items are focussed
def skewedinsertion():
	arr={}
	intersectiontime={}
	coordinates={}
	for n in numbers:
		sp=Index(bbox=(0,0,n+1,n+1))
		t0=time.time()
		value=int(math.ceil(0.75*n))
		print value,n
		for i in range(value,n,2):
			sp.insert(i,(i,i,i+1,i+1))
		t1=time.time()
		total=t1-t0
		arr[n]=total

		a=random.randrange(value,n)

		t3=time.time()
		sp.intersect((a,a,a+1,a+1))
		t4=time.time()
		totalinter=t4-t3
		intersectiontime[n]=(totalinter,a)

	print arr
	print intersectiontime
	print coordinates

#uniform insertion blocks of 1x1
def insertion():
	arr={}
	intersectiontime={}
	coordinates={}
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

		a=random.randrange(0,n)

		t3=time.time()
		sp.intersect((a,a,a+1,a+1))
		t4=time.time()
		totalinter=t4-t3
		intersectiontime[n]=(totalinter,a)

	print arr
	print intersectiontime
	print coordinates

def largeintersection():
	arr={}
	intersectiontime={}
	coordinates={}
	for n in numbers:
		sp=Index(bbox=(0,0,n+1,n+1))
		t0=time.time()
		for i in range(1,n,2):
			sp.insert(i,(i,i,i+1,i+1))
		t1=time.time()
		total=t1-t0
		arr[n]=total

		a=random.randrange(0,n)
		b=random.randrange(0,n)

		t3=time.time()
		sp.intersect((a,a,b,b))
		t4=time.time()
		totalinter=t4-t3


		intersectiontime[n]=(totalinter,a,b)

	print arr
	print intersectiontime

def fixedintersection():
	arr={}
	intersectiontime={}
	coordinates={}
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

		a=random.randrange(0,n)
		b=random.randrange(0,n)

		t3=time.time()
		sp.intersect((3,3,5,5))
		t4=time.time()
		totalinter=t4-t3
		intersectiontime[n]=(totalinter,a,b)

	print arr
	print intersectiontime


def randomitems():
	items = [Item(random.randrange(5,95),random.randrange(5,95)) for _ in range(10000)]
	spindex = pyqtree.Index(bbox=[-11,-33,100,100])
	for item in items:
	    spindex.insert(item, item.bbox)
	print("{0} members in this index.".format(len(spindex)))

	#test intersection
	print("testing hit")
	testitem = (51,51,86,86)
	t = time.time()
	matches = spindex.intersect(testitem)
	print("{0} seconds".format(time.time()-t))

def pushtiming():
	t0=time.time()
	insertthroughnodejs("aa:aa:aa")
	t1=time.time()
	total=t1-t0
	print total

##{1000: 0.11288690567016602, 10000: 1.5429410934448242, 10: 0.00012612342834472656, 100: 0.005457162857055664}

#skewed {1000: 0.030871868133544922, 10000: 0.3902149200439453, 10: 6.29425048828125e-05, 100: 0.0042629241943359375}
#{1000: 0.03163790702819824, 10000: 0.3713109493255615, 10: 6.103515625e-05, 100000: 5.713748931884766, 100: 0.0018301010131835938}
