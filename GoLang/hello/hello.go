package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(100 * time.Millisecond)
	boom := time.After(500 * time.Millisecond)
	// for selectの抜け出し方
	OuterLoop2:
		for {
			select {
			case <- tick:
				fmt.Println("tick.")
			case <- boom:
				fmt.Println("Boom!")
				break OuterLoop2

			default:
				fmt.Println("   .")
				time.Sleep(50 * time.Millisecond)
			}
		}
}