/* @jsx h */
import { h, Component, State, Host, Prop } from "@stencil/core";

function LogIt(target: Object, propertyKey: string) {
  let value: any;
  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(newvalue: any) {
      console.log(`VALUE CHANGE: ${propertyKey} ${value} => ${newvalue}`);
      value = newvalue;
    },
    configurable: true,
  });
}

@Component({
  tag: "name-display",
  styleUrl: "index.css",
  shadow: true,
})
export class NameDisplay {
  @LogIt
  @Prop()
  name: string;

  render() {
    return <Host>Name: {this.name || "not specified"}</Host>;
  }
}

@Component({
  tag: "name-display-container",
  shadow: true,
})
export class NameDisplayContainer {
  @State()
  name = "";

  onInputInput = (evt: UIEvent) => {
    const input = evt.target as HTMLInputElement;
    this.name = input.value;
  };

  render() {
    return (
      <Host>
        <p>
          <name-display name={this.name}></name-display>
        </p>
        <p>
          <label>
            Enter Name: <input onChange={this.onInputInput} />
          </label>
        </p>
      </Host>
    );
  }
}
