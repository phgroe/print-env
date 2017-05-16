## Print Environment

#### Node.js module for printing out a filtered set of environment variables

Helpful during the start phase of your application, if you happen to configure your app through environment variables (common for apps deployed to The Cloud™).

The exported function will filter out most of the clutter that a common (unixoid) environment drags along and which is very probably of no interest to your app (or yourself, while developing. So this will save you from scrolling alot on your dev terminal). The function takes one parameter, which must be another function that will take one string argument. This is obviously the logger of your choice, be it `console.log` or [debug](https://github.com/visionmedia/debug) or something completely different.

```typescript
export function printEnvironment(logger : (string) => void) : void
```

You would typically use it in some way like
```javascript
const printEnv = require('print-env');
const log = require('debug')('insertnamehere');

printEnv(log);
```

A declaration for [TypeScript](http://www.typescriptlang.org) is included. The use then is the same as with the ES6 `import` syntax:
```javascript
import printEnv from 'print-env';
```

#### The Negative-List

For a list of all the filtered expressions, check [the main file](/printenv.js) of the repository.
* This list is almost certainly not complete but rather based on what runs on my current box. I will take suggestions (open a pull request).
* This list might filter out things that your project depends on (and what you therefore would like to have printed anyhow). Don't use it then, or rather fork it and modify to your requirements. I have no plans to make this configurable, but simply because of lacking a brilliant idea how to do so.

#### Have fun, be nice and make something!

---

#### MIT License (MIT)

Copyright © 2017 Philipp Gröschler

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
