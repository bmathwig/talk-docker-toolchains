package main

import (
    "io"
    "net/http"
    "fmt"
)

func potato(w http.ResponseWriter, r *http.Request) {
    io.WriteString(w, "Boil 'em Mash 'em Stick 'em in a Stew!")
}

func main() {
    fmt.Println("\nPoe-Tay-Toes!\n localhost:9090")
    http.HandleFunc("/", potato)
    http.ListenAndServe(":9090", nil)
}