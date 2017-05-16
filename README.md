## Print Environment

#### Node.js module for printing out a filtered set of environment variables

Helpful during the start phase of your application, if you happen to configure your app through
environment variables (which is common for apps deployed to The Cloud™). A typical Linux/Unix
environment will have several dozen declared environment variables, of which most of the time only
a fraction is interesting for your application and thus for you to see in its debug output.

---

The exported function of this module takes the array that is `process.env` and sorts it, then puts
it through a filter with an internal negative list and finally feeds it formatted as `KEY = value`
into a logging sink. The filter will strip away most of the clutter and save you some scrolling on
your dev terminal.

The function takes one parameter, which must be another function that will take one string argument.
This "sink" is obviously the logger of your choice, be it good old `console.log` or an instance of
[debug](https://github.com/visionmedia/debug) or something completely different.

```typescript
export function printEnvironment(logger : (string) => void) : void
```

#### Usage and Examples

You would typically use it in some way like
```javascript
const printEnv = require('print-env');
const log = require('debug')('app:env');

printEnv(log);
```

A declaration for [TypeScript](http://www.typescriptlang.org) is included. The use then is the same
as with the ES6 `import` syntax:
```javascript
import printEnv from 'print-env';
```

Example output when using [debug](https://github.com/visionmedia/debug) as "sink":
```
app:env DEBUG = *,-express:* +3ms
app:env DIFF = /usr/bin/meld +0ms
app:env HOME = /home/horst +0ms
app:env LANG = nb_NO.utf8 +1ms
app:env LANGUAGE = nb_NO +0ms
app:env MAIL = /var/mail/horst +0ms
app:env NODE_ENV = development +0ms
app:env PATH = /usr/local/bin:/usr/bin:/bin +0ms
app:env PWD = /home/horst/test +1ms
app:env USER = horst +0ms
```
The output is taken from a box where the environment contains nearly a hundred exported variables.
Most of it is gone here, the basic stuff (like _HOME_ or _PWD_) was left in.

#### The Negative-List

For a list of all the filtered expressions, check [the main file](/printenv.js) of the repository.
* This list is almost certainly not complete but rather based on what runs on my current box. I will
  take suggestions (open a pull request).
* This list might filter out things that your project depends on (and what you therefore would like
  to have printed anyhow). Don't use it then, or rather fork it and modify to your requirements.
  I have no plans to make this configurable, but simply because of lacking a brilliant idea how to
  do so.
* The filter creates one large regular expression during function execution. There are probably more
  performant takes on this, but this is supposed to be a one-shot during application startup and
  therefore really not a priority.

#### Have fun, be nice and make something!

---

Copyright © 2017 Philipp Gröschler

**[The MIT License](/LICENSE)**
