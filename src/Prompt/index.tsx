import * as React from 'react'
import { Component } from 'react'

type Props = { }
type State = {
    input: string
    command: string
}

class Input extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {
            input: '',
            command: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event: any) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event: any) {
        this.setState({
            input: '',
            command: this.state.input
        })
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    <p>value: {this.state.command}</p>
                </label>
            </form>
        )
    }
}

export const Prompt = () =>
    <div>
        <Input/>
    </div>
