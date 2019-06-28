# fb-utils-node

Form Builder utility methods

## Installing

```sh
npm install @ministryofjustice/fb-utils-node
```

## Usage

```js
const FBUtils = require('@ministryofjustice/fb-utils-node')
```

## Methods

### logger

```js
FBUtils.logger(...args)
```

### clone

Returns a shallow copy of any object

```js
const clonedObj = FBUtils.clone(obj)
```

Objects can be of any type.

By default, the object copy is shallow.

To create a deep copy, pass `true`:

```js
const deeplyClonedObj = FBUtils.clone(obj, true)
```

### FBError

Base class for errors

```js
class MyError extends FBError {}

throw new MyError('An error occurred', {
  data: additionalData
})

```


## Testing

```sh
npm test
# Test output is in [TAP](https://testanything.org/) format
```

Run unit tests only

```sh
npm run test:unit
```

Run linting only

```sh
npm run lint
```
