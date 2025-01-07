package main

import "fmt"

func main() {
    defer fmt.Println("後で実行されます")
    fmt.Println("最初に実行されます")

    //実行される順番に注意  
    fmt.Println("run")
    defer fmt.Println(1)
    defer fmt.Println(2)
    defer fmt.Println(3)
    fmt.Println("success")
}
