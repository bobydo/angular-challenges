# Challenge: Getting Started

## 📖 Description

Welcome to your first Angular challenge! This challenge is designed to help you set up your Angular development environment and get familiar with the basic structure of an Angular application.

## 🎯 Objectives

By completing this challenge, you will:

1. ✅ Set up an Angular workspace
2. ✅ Understand the basic structure of an Angular application
3. ✅ Learn about components, templates, and data binding
4. ✅ Use the Angular CLI to run and build applications

## 🏆 Your Tasks

### Task 1: Explore the Component

Open `src/app/app.component.ts` and examine the structure:
- The `@Component` decorator
- The `selector`, `template`, and `styles` properties
- The component class with the `title` property

### Task 2: Modify the Template

Add a new section to the template that displays a custom message.

### Task 3: Add Interactivity

1. Add a new property to the component class (e.g., `counter = 0`)
2. Create a button in the template
3. Add a click event handler that increments the counter
4. Display the counter value in the template

Example:
```typescript
// In the component class
counter = 0;

incrementCounter() {
  this.counter++;
}
```

```html
<!-- In the template -->
<button (click)="incrementCounter()">Click me!</button>
<p>Counter: {{ counter }}</p>
```

### Task 4: Style Your Component

Modify the component's styles to customize the appearance of your new elements.

## ✅ Acceptance Criteria

- [ ] The application runs without errors
- [ ] You've added a new property to the component
- [ ] You've created a button with a click handler
- [ ] The counter increments when the button is clicked
- [ ] The counter value is displayed in the template

## 🔍 Concepts Covered

- **Components**: The building blocks of Angular applications
- **Templates**: The HTML view of a component
- **Data Binding**: 
  - Interpolation `{{ }}`
  - Event binding `(click)="method()"`
- **Standalone Components**: Modern Angular approach (no NgModules needed)
- **Styles**: Component-scoped CSS

## 📚 Resources

- [Angular Components](https://angular.dev/guide/components)
- [Template Syntax](https://angular.dev/guide/templates)
- [Event Binding](https://angular.dev/guide/templates/event-binding)

## 🎉 What's Next?

Once you've completed this challenge, you're ready to move on to more advanced challenges that cover:
- Angular directives (ngFor, ngIf)
- Reactive forms
- HTTP requests
- Routing and navigation
- State management

Good luck! 🚀
