# Group log
Group console logs together.

## Installation
Download grouplog from GitHub or install using npm
```
npm install grouplog
```
Import module
```js
let group = require('grouplog');
```

## Examples
### Normal
You can use grouplog or just use console.log in this case.
```js
group.log('something').output;
```
Output
```sh
something
```
### Group
```js
group.log('something').start.end.output;
```
Output
```sh
┌─
│ something
└─
```
### Multiline Group
```js
group.log('Begin request').start.output;
group.log('some stuff happening').mid.output;
group.log('End of request').end.output;
```
Output
```sh
┌─
│ Begin request
│ some stuff happening
│ End of request
└─
```
### Multiline Group with Dividers
```js
group.log('Begin request').start.output;
group.log('some stuff happening').div.output;
group.log('End of request').div.end.output;
```
Output
```sh
┌─
│ Begin request
├─
│ some stuff happening
├─
│ End of request
└─
```