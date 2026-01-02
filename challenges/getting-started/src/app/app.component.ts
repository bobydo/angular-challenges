import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>🚀 Welcome to Angular Challenges!</h1>
      
      <div class="challenge-info">
        <h2>Challenge: Getting Started</h2>
        <p><strong>Difficulty:</strong> Beginner</p>
        <p><strong>Goal:</strong> Set up your first Angular challenge environment</p>
      </div>

      <section>
        <h3>What you'll learn:</h3>
        <ul>
          <li>How to set up an Angular application</li>
          <li>Understanding Angular components</li>
          <li>Working with templates and data binding</li>
          <li>Using Angular CLI commands</li>
        </ul>
      </section>

      <section>
        <h3>Your Task:</h3>
        <p>Congratulations! You've successfully set up your first Angular challenge. 🎉</p>
        <p>This is just the beginning. Explore the code, make changes, and see what happens!</p>
      </section>

      <section>
        <h3>Next Steps:</h3>
        <ol>
          <li>Try modifying the template above</li>
          <li>Add a new property to the component</li>
          <li>Display the property in the template using interpolation (double curly braces)</li>
          <li>Create a button that changes the property value</li>
        </ol>
      </section>

      <section>
        <h3>Useful Commands:</h3>
        <ul>
          <li><code>npm start</code> - Start the development server</li>
          <li><code>npm run build</code> - Build the application</li>
          <li><code>npm test</code> - Run tests</li>
        </ul>
      </section>
    </div>
  `,
  styles: [`
    section {
      margin: 30px 0;
    }

    h2 {
      color: #1976d2;
      margin-top: 0;
    }

    h3 {
      color: #333;
    }

    ul, ol {
      line-height: 1.8;
    }

    li {
      margin: 10px 0;
    }
  `]
})
export class AppComponent {
  title = 'getting-started';
}
