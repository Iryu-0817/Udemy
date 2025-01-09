/*
Go programs express error state with error values.

The error type is a built-in interface similar to
fmt.Stringer:

type error interface {
    Error() string
}
*/

package main

import (
	"fmt"
)

type UserNotFound struct {
	Username string
}

// カスタムエラーを作る時は＆と＊をつける
func (e *UserNotFound) Error() string {
	return fmt.Sprintf("User not found: %v", e.Username)
}

func myFunc() error {
	// Something wrong
	ok := false
	if ok {
		return nil
	}
	// カスタムエラーを作る時は＆と＊をつける
	return &UserNotFound{Username: "mike"}
}

func main() {
	if err := myFunc(); err != nil {
		fmt.Println(err)
	}
}
