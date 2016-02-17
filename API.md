# ReactCustomProps API

## custom(props [,childPath])
The `custom` function returns a function that evaluates the custom props at the given child path. Custom props functions are resolved with the passed in arguments.
```javascript
// root resolver
const resolver = custom(props);
// root custom props resolved
const customProps = resolver()
```
