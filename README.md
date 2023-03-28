# [Robert's website](https://robert.xyz)

## TODO
* ethereum mailbox
* twn nft market
* piano sheet market
* NTDC

---
## Run Local
```
npm install
npm start
```
---

## Run Build
```
npm run build
npm run serve
```


# React Note
## useEffect

run only once
```
useEffect(() => {
    ...
}, [])
```

run once on every component render
```
useEffect(() => {
    ...
})
```

run on state change
```
useEffect(() => {
    ...
}, [state1, state2...])
```

---

## useRef

* store persistent var accross renders
* useRef does not cause component to rerender when value changed

### component rendered times example
```
const renderCount = useRef(0)
useEffect(() => {
    renderIntoDocument.current = renderCount.current + 1
})
```

* html elements have ref attribute to be reference by useRef var
```
const inputRef = useRef()

function focus() {
    // inputRef.current is referecing <input value>
    // so this will set cursor to the input element
    inputRef.current.focus()
}

return (
    <>
        <input ref={inputRef} value={...} />
        <button onClick={focus}>Focus</button>
    </>
)
```



---
