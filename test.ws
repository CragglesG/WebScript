[4 + 21]
2006 / 4012 + 2
prepare array as [1, 0, 3, 5]
display(array)
array.add(7)
display(array)
func yay {
    display("well this works")
}
func woohoo needs (a, b) {
    display(a, b)
}
yay()
woohoo("number is ", 1)
prepare array as "oops"
display(array)
type S has { x,y,z }
prep S( x:1, y:2, z:3 )
display(S())

prepare g as request
prepare g.url as 'https://google.ie'

g.get()