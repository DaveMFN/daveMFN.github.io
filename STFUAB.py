def reproduce(a,b):
    z = fuse(a.gamete(), b.gamete())              
    while z.develops(): z.divide(); z.mutate(p=μ) 
    return Human(z)                               

P = [Human(), Human()]      
while Earth.habitable():    
    for h in P[:]:
        if h.fertile(): P.append(reproduce(h, h.partner()))




