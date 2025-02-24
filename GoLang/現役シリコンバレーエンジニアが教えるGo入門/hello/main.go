package main

import (
	"encoding/json"
	"fmt"
)

type Person struct {
	// nameを隠したい場合は’-’を指定すると結果から消える
	Name string `json:"-"`
	// Name      string	`json:"name"`

	//Marshal時にstringに戻したければ、stringと記入することで、戻すことができる。
	// Age       int		`json:"age,string"`

	// 0の時に隠したい場合は'omitempty'を使う
	Age       int      `json:"age,omitempty"`
	Nicknames []string `json:"nicknames"`
}

func main() {
	b := []byte(`{"name":"mike", "age":20, "nicknames":["a", "b", "c"]}`)
	var p Person
	if err := json.Unmarshal(b, &p); err != nil {
		fmt.Println(err)
	}
	fmt.Println(p.Name, p.Age, p.Nicknames)

	v, _ := json.Marshal(p)
	fmt.Println(string(v))
}
