// Testing operations
[4 + 21]
2006 / 4012 + 2 * 5 - 9

// Testing arrays
prepare array as [1, 0, 3, 5]
display(array)
array.add(7)
display(array)

// Testing functions
func yay {
    display("well this works")
}

func woohoo needs (a, b) {
    display(a, b)
}

yay()
woohoo("number is ", 1)

// Testing structs
type S has { x,y,z }
prep S( x:1, y:2, z:3 )

// Testing Request
prepare g as request('https://www.google.ie')
display(g.get().UNSENT)

// Testing BlockchairAPI
prepare btc as crypto
display(btc.getPrice("bitcoin"))

// btc.setAPIKey(API_Key_Here)
display(btc.getPrice("ethereum", "btc"))