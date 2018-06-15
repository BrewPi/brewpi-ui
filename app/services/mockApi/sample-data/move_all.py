from __future__ import print_function 
import getopt
import sys
import os
import json
from collections import OrderedDict

# Read in command line arguments 
try:
    opts, args = getopt.getopt(sys.argv[1:], "x:y:f:", ['x=', 'y=', 'file='])
except getopt.GetoptError:
    print("Unknown parameter, available Options: --help --x <value>, --y <value> -- file <path to config file>")
    sys.exit(1)

targetFile = None
moveX = 0
moveY = 0

for o, a in opts:
    # print help message for command line options
    if o in ('-h', '--help'):
        print("\n Available command line options: ")
        print("--help: print this help message")
        print("--x <value> move all components by value in the x direction")
        print("--y <value> move all components by value in the y direction")
        print("--file: <path> target file, required")
        exit()
    # supply a config file
    if o in ('-x', '--x'):
        moveX = int(a)
    elif o in ('-y', '--y'):
        moveY = int(a)
    elif o in ('-f', '--file'):
        targetFile =  os.path.abspath(a)   
        if not os.path.exists(targetFile):
            sys.exit('ERROR: Target file "%s" was not found!' % targetFile)


print("moving all parts in {} by ({},{})".format(targetFile, moveX, moveY))

with open(targetFile) as fp:
    oldData = json.load(fp, object_pairs_hook=OrderedDict)
    newData = oldData
    newParts = []
    for part in oldData['parts']:
        newPart = part
        oldX = part['x']
        oldY = part['y']
        if oldY >= 9 and oldY <= 10 and type(oldY) is not list and \
            oldX >= 2 and oldX <= 8 and type(oldX) is not list:
            if type(oldX) is list:
                newPart['x'] = [x + moveX for x in oldX]
            else:
                newPart['x'] = oldX + moveX
            if type(oldY) is list:
                newPart['y'] = [y + moveY for y in oldY]
            else:
                newPart['y'] = oldY + moveY
        newParts.append(newPart)
    newData['parts'] = newParts

with open(targetFile, 'w') as outfile:
    json.dump(newData, outfile)