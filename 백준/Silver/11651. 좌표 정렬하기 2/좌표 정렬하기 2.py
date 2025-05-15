coord_list = []

N = int(input())

for i in range(N):
    x,y = map(int,input().split())
    coord_list.append((x,y))
    
coord_list.sort(key = lambda x:(x[1],x[0]))

for coord in coord_list:
    x,y = coord
    print(x,y)