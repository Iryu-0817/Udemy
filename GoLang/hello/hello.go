package main

import (
	"fmt"
	"log"
)

func main() {
    log.Println("Logging!")
    log.Printf("%T %v", "test", "test")

    // ここでコードの実行が終了する。　
    log.Fatalf("%T %v", "test", "test")
    log.Fatalln("Error!!")

    fmt.Println("ok!")
}
