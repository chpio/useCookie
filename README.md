# useCookie

[on npm](https://www.npmjs.org/package/@neonaut/use-cookie)

A React hook for managing cookies with no dependencies.

## Installation

```bash
npm install @neonaut/use-cookie
```

or

```bash
yarn add @neonaut/use-cookie
```

## Usage

### `useCookie`

```jsx
import useCookie from '@neonaut/use-cookie';

export default function MyComponent(props) {
  const [userToken, setUserToken] = useCookie('token');

  return (
    <div>
      <p>{userToken}</p>
      <button onClick={() => setUserToken('123')}>Change token</button>
    </div>
  );
}
```

`setUserToken` accepts a second argument: `options`. Different to the named
export, for this one it is the second not the third argument. Take a look at
[setCookie](#setcookie) for more details.

This package also has a few other exports that can be used directly.

### `getCookie`

If you need to access a cookie outside of a React component, you can use the
named `getCookie` export:

```js
import { getCookie } from '@neonaut/use-cookie';

function getUser() {
  const xsrfToken = getCookie('XSRF-TOKEN');
  // use to call your API etc
}
```

### `setCookie`

If you need to set a cookie outside of a React component, you can use the
named `setCookie` export:

```js
import { setCookie } from '@neonaut/use-cookie';

function saveLocale(locale) {
  setCookie('locale', locale);
}
```

You can also specify an optional third argument - the same options object as
above:

```ts
{
  // The number of days the cookie is stored (defaults to 7)
  days?: number;
  // The path of the cookie (defaults to '/')
  path?: string;
}
```
