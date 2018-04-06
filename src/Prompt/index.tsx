import * as React from 'react'
import { Component } from 'react'

type Props = { }
type State = {
    input: string
    command: string
    result: string[]
}

class CommandInput extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = { input: '',  command: '',  result: [''] }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event: any) {
        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event: any) {
        let result = [
            ...this.state.result,
            this.state.input
        ]

        if (this.state.input === 'clear') {
            result = []
        }

        this.setState({
            input: '',
            command: this.state.input,
            result: result
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                {/*TODO: make it component*/}
                {this.state.result.map((value, index) => {
                    return <p key={index}>{value}</p>
                })}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.input} onChange={this.handleChange} />
                    </label>
                </form>
                <p>latest command: {this.state.command}</p>
            </div>
        )
    }
}

export const Prompt = () =>
    <div>
        <CommandInput/>
    </div>
