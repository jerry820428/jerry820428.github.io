from os import listdir
import os, time
import shutil

print('????')
files = listdir("music")
f = open("music_list.txt", "w", encoding="utf-8")
for i in range(len(files)):
    f.write("\"" + os.path.splitext(files[i])[0] + "\"")
    if i!=len(files)-1:
        f.write(",")
    #print(os.path.splitext(files[i])[0])
print(len(files))
f.close()


