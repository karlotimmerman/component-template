import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib"
import React, { ReactNode } from "react"

interface State {
  numClicks: number
  isFocused: boolean
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class MyComponent
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <span>
        Hello, {name}! &nbsp;
        <button
          style={style}
          onClick={this.onClicked}
          disabled={this.props.disabled}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
        >
          Click Me!
        </button>
      </span>
    )
  }

  /** Click handler for our "Click Me!" button. */
  private onClicked = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    this.setState(
      prevState => ({ numClicks: prevState.numClicks + 1 }),
      () => Streamlit.setComponentValue(this.state.numClicks)
    )
  }

  /** Focus handler for our "Click Me!" button. */
  private _onFocus = (): void => {
    this.setState({ isFocused: true })
  }

  /** Blur handler for our "Click Me!" button. */
  private _onBlur = (): void => {
    this.setState({ isFocused: false })
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(MyComponent)
