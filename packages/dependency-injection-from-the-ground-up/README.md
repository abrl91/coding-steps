# dependency-injection-from-the-ground-up

## IoC - Inversion of Control

Design principle which recommends the invetsion of different kinds of controls in object-oriented
design to achieve loose coupling between application calsses.

'Controls' refer to any additional responsibilities a class has, other than its main responsibility. This include control over the flow of an application, and control over the flow of an object creation or dependent object creation and binding.

---

## DIP - Dependency Inversion Principle

Like IoC, helps to achive loose coupling between classes.

---

## DI - Dependency Injection

Design pattern which implements the IoC principle to invert the creation dependent object.

---

## IoC Containers

A framework used to manage automatic dependency injection throught the application

To achieve loosely couples classes we need to combine between Ioc, DIP, DI and IoC container.

---

## The dependency injection pattern involves 3 types of classes:

1. client class - depends on the service class
2. service class - provides service to the client class
3. injector class - injects the service class object into the client class.
   Three types of injections:
   constructor injection, property injection, method injection.

The injector class creates an object of the service class, and injects that object to a client object. In this way, the DI pattern separates the responsibility of creating an object of the service class out of the client class.

---

### Resources:

- [Implementing DI Container in JavaScript](https://www.youtube.com/watch?v=zuEn2C_Xcc8&ab_channel=%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%D0%9E%D0%BD%D0%B0%D1%89%D1%83%D0%BA)
- [Inversion of Control Tutorials](https://www.tutorialsteacher.com/ioc/index)
