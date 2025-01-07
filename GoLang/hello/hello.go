package main

import "fmt"

func main() {
    l := []string{"python", "go", "java"}

    for i := 0; i < len(l); i++{
        fmt.Println(i, l[i])
    }

    for i, v := range l{
        fmt.Println(i, v)
    }

    // iを使いたくない場合
    for _, v := range l{
        fmt.Println(v)
    }

    // mapを使う場合
    m := map[string]int{"apple": 100, "banana": 200}

    for k, v := range m{
        fmt.Println(k, v)
    }

    // vを使いたくない場合、スライスと違い、＿を使わずに書く。
    for k := range m{
        fmt.Println(k)
    }

    // kを使いたくない場合は記述が必要。つまり最初だけ使いたくない場合は＿を記述する必要がある
    for _, v := range m{
        fmt.Println(v)
    }
}
