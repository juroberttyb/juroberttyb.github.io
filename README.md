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

run on state or var change
```
useEffect(() => {
    ...
}, [state1, state2, var1, var2...])
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

* can store the previous value of state
```
const prevState = useRef('')
useEffect(() => {
    prevState.current = state1
}, [state1])

return (
    <>
        {prevState.current}
    </>
)
```

---

## [useMemo](https://www.youtube.com/watch?v=THL1OPn72vo)

* this is mainly used when one is concerning about 'referential equality'
* store heavy-work result and not rerun on rerender, unless dependent states changed 
```
const computed = useMemo(() => {
    return compute(_input)
}, [_input]) // dependency array
```

* this is a tricky one, about referential equality
    * darkMode = {...}
        * useEffect triggered every render cause reference of darkMode changes
    * darkMode = useMemo(...)
        * useEffect not triggered cause reference of darkMode is the same accross renders
        * But if variable dark is altered, even the reference does not changed, the value is different, therefore useEffect will be triggered
```

/*
const darkMode = {
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
}
*/

const darkMode = useMemo(() => {
    return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
}, [dark])

useEffect(() => {
    console.log('darkMode changed')
}, [darkMode])

```

## [useCallback](https://www.youtube.com/watch?v=_AyFP5s69N4)

* this is mainly used when one is concerning about 'referential equality'
* useCallback is similar to useMemo, the difference is
    * useMemo => store the return value
        * [num, num+1, num+2] in below example
    * useCallback => store the whole func
        * () => {return [num, num+1, num+2]} in below example
```
// only re-create getNums func when 'num' changed, not on re-render
const getNums = useCallback(() => {
    return [num, num+1, num+2]
}, [num])
```

## [useContext](https://www.youtube.com/watch?v=5LrDIWkK_Bc)

* ...

```

```
