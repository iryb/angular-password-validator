import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule, NgStyle],
  template: `
    <div class="container">
      <label for="password" class="label"> Password:</label>
      <input id="password" type="password" [(ngModel)]="password" />
      <p>{{ password }}</p>
      <div class="validation">
        <div class="validation-line" [style]="getFirstValidatorStyles()"></div>
        <div class="validation-line" [style]="getSecondValidatorStyles()"></div>
        <div class="validation-line" [style]="getThirdValidatorStyles()"></div>
      </div>
    </div>
  `,
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password = "";
  minCharacters = 8;

  lessThanMinCharacters(text: string, min: number) {
    return text.length > 0 && text.length < min;
  }

  isEasy(text: string) {
    return (
      /^[a-zA-Z]+$/.test(text) || /^\d+$/.test(text) || /^\W_+$/.test(text)
    );
  }

  isMedium(text: string) {
    return (
      /^[a-zA-Z\W_]+$/.test(text) ||
      /^[0-9a-zA-Z]+$/.test(text) ||
      /^[0-9\W_]+$/.test(text)
    );
  }

  isStrong(text: string) {
    return /^[0-9_a-zA-Z\W]+$/.test(text);
  }

  getFirstValidatorStyles() {
    if (
      this.lessThanMinCharacters(this.password, this.minCharacters) ||
      this.isEasy(this.password)
    ) {
      return {
        backgroundColor: "red",
      };
    } else if (this.isMedium(this.password)) {
      return {
        backgroundColor: "yellow",
      };
    } else if (this.isStrong(this.password)) {
      return {
        backgroundColor: "green",
      };
    }
    return {
      backgroundColor: "#ccc",
    };
  }

  getSecondValidatorStyles() {
    if (this.lessThanMinCharacters(this.password, this.minCharacters)) {
      return {
        backgroundColor: "red",
      };
    } else if (this.isEasy(this.password)) {
      return {
        backgroundColor: "#ccc",
      };
    } else if (this.isMedium(this.password)) {
      return {
        backgroundColor: "yellow",
      };
    } else if (this.isStrong(this.password)) {
      return {
        backgroundColor: "green",
      };
    }
    return {
      backgroundColor: "#ccc",
    };
  }

  getThirdValidatorStyles() {
    if (this.lessThanMinCharacters(this.password, this.minCharacters)) {
      return {
        backgroundColor: "red",
      };
    } else if (this.isEasy(this.password)) {
      return {
        backgroundColor: "#ccc",
      };
    } else if (this.isMedium(this.password)) {
      return {
        backgroundColor: "#ccc",
      };
    } else if (this.isStrong(this.password)) {
      return {
        backgroundColor: "green",
      };
    }
    return {
      backgroundColor: "#ccc",
    };
  }
}
