package main

import (
	"fmt"
	"log"
	"os"
)

func main() {
    file, err := os.Open("./hello.go")
    if err != nil{
        log.Fatalln("Error!")
    }

    defer file.Close()
    data := make([]byte, 100)
    // ここでerr:=できるのは、左の要素が変わったからである。詳しくは自分で調べてみて
    count, err := file.Read(data)
    if err != nil {
        log.Fatalln("Error")
    }
    fmt.Println(count, string(data))

    if err = os.Chdir("test"); err != nil{
        log.Fatalln("Error")
    }
}
