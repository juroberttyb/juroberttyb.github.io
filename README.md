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

## [useState](https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function)

* useState(var), the var will only be set once on state creation, ignored at rerender
* setState(new state) will cause rerender, but setState(current state) will not
    * current state here means the exact current state object, not just value

## [useEffect](https://stackoverflow.com/questions/58579426/in-useeffect-whats-the-difference-between-providing-no-dependency-array-and-an)

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

## [useRef](https://www.youtube.com/watch?v=t2ypzz6gJm0)

* store persistent var accross renders
* useRef does not cause component to rerender when value changed

### component rendered times example
```
const renderCount = useRef(0)
useEffect(() => {
    renderCount.current = renderCount.current + 1
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
