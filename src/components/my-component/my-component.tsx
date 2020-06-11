import {Component, h, Prop, State} from '@stencil/core';

@Component({
  tag: 'x-typing-text',
  styleUrl: 'my-component.css',
  shadow: false
})
export class MyComponent {

  @Prop() text: string;
  @Prop() waitingTime: number = 500;
  @Prop() delay: number = 0;

  @State() private finalText = "";

  constructor() {
    setTimeout(() => this.injectText(this.text), this.delay)
  }

  private injectText(text) {
    let count = this.finalText.length;

    this.finalText += text[count];

    if(count < text.length - 1) {
      setTimeout(() => this.injectText(text), this.waitingTime);
    }
  }

  render() {
    return [<span>{this.finalText}</span>,<span class='underscore'>_</span>];
  }
}
