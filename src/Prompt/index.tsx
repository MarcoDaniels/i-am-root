import * as React from 'react'
import { Component } from 'react'

class Input extends Component {
    state = {
        command: undefined
    }

    render() {
        return (
            <div>
                <input type="text" onKeyPress={this.submitCommand} />
                <p>value: {this.state.command}</p>
            </div>
        )
    }

    submitCommand = (event: any) => {
        if (event.key === 'Enter') {
            const { value } = event.target

            this.setState({
                command: value
            })
        }
    }
}

export const Prompt = () =>
    <div>
        <Input/>
    </div>
