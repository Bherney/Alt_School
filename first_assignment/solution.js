function deepEqual(objA, objB) {
  // If they are exactly the same value
  if (objA === objB) {
    return true;
  }

  // If either value is not an object, they cannot be deeply equal
  if (
    objA === null ||
    objB === null ||
    typeof objA !== "object" ||
    typeof objB !== "object"
  ) {
    return false;
  }

  // Get the keys from both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Different number of keys means they are different
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Check every key and recursively compare its value
  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}

console.log(
  deepEqual(
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 2 } }
  )
); // true

console.log(
  deepEqual(
    { a: 1, b: { c: 2 } },
    { a: 1, b: { c: 3 } }
  )
); // false

console.log(
  deepEqual({ a: 1 }, { a: 1, b: 2 })
); // false

function diffObjects(oldObj, newObj) {
  const result = {
    added: {},
    removed: {},
    changed: {}
  };

  // Check for added and changed properties
  for (const key of Object.keys(newObj)) {
    if (!Object.hasOwn(oldObj, key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  // Check for removed properties
  for (const key of Object.keys(oldObj)) {
    if (!Object.hasOwn(newObj, key)) {
      result.removed[key] = oldObj[key];
    }
  }

  return result;
}

console.log(
  diffObjects(
    {
      name: "Setemi",
      role: "Engineer",
      country: "Jamaica"
    },
    {
      name: "Setemi",
      role: "Senior Engineer",
      city: "Kingston"
    }
  )
);

function deepFreeze(obj) {
  // If it isn't an object or is null, there is nothing to freeze
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Freeze all nested objects first
  for (const key of Object.keys(obj)) {
    deepFreeze(obj[key]);
  }

  // Freeze the current object
  return Object.freeze(obj);
}

const config = deepFreeze({
  api: {
    baseUrl: "https://x.com",
    retries: 3
  },
  debug: false
});

config.api.baseUrl = "https://changed.com";
config.debug = true;

console.log(config.api.baseUrl, config.debug);
// "https://x.com" false

console.log(Object.isFrozen(config.api));
// true

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },

    decrement() {
      count--;
    },

    get value() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value);
// 1

console.log(counter.count);
// undefined

const schema = {
  name: "string",
  age: "number",
  isAdmin: "boolean"
};