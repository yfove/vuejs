# vuejs

introduction to vue.js

# Directives

a directives job is to reactively apply side egffects to the DOM when the value of its expression changes

## v-if

Used conditionally to render a block if truthy

## v-for

render a list of items based on an array

## v-bind

directive used to bind one or more attributes, or a component prop to an element

#handling user input

## v-on method

adds event listeners that evoke methods on your vue instance

## v-model in vue

create two-way data bindings on from input, textarea, and select elements
updating form input whenever the state changes
makes user synchonization super easy!

## Arguments

some directives can take an argument denotes by a colon after the directive name.

```
<a v-bind:href="url"> ... </a>
```

here `href` is the argument, which tells the `v-bind` directive to bind the element's href attribute to the value of the expression `url`.

## Dynamic Arguments

we can use a JavaScript expression in a directive argument by wrapping it with sqauare brackets.

```
<a v-bind:[attributeName]="url">...</a>
```

## Modifiers

modifiers are special postfixes denoted by a dot, which indicate that a directive should be bound in some special way.

```
<form v-on:submit.prevent="onSubmit">...</form>
```

ie. the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()`

## Shorthands

### v-bind (Shorthand)

```
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- shorthand with dynamic argument -->
<a :[key]="url"> ... </a>
```

### v-on (Shorthand)

```
<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething"> ... </a>

<!-- shorthand with dynamic argument -->
<a @[event]="doSomething"> ... </a>
```

## Caveats

Dynamic argument expressions have constraints, **_spaces and quotes_** are invalid inside HTML attribute names.

When using in-DOM templates (directly written in an HTML file), avoid naming keys with upperrcase characters, as browsers coerce attribute names into lowercase:

```
<!--
This will be converted to v-bind:[someattr] in in-DOM templates.
Unless you have a "someattr" property in your instance, your code won't work.
-->
<a v-bind:[someAttr]="value"> ... </a>
```

#### Javascript Expressions

template expressions are sandboxed and only have access to a restricted list of globals such Math and Date. You should not attemp to access user defined globals in template expressions.
