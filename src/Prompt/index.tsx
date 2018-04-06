import * as React from 'react'
import { Component } from 'react'
import { Project } from '../Project'
import { User } from '../User'

type Props = { }
type State = {
    input: string
    command: string
    commands: string[]
}

class CommandInput extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = { input: '',  command: '',  commands: [''] }

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
            ...this.state.commands,
            this.state.input
        ]

        if (this.state.input === 'clear') {
            result = []
        }

        this.setState({
            input: '',
            command: this.state.input,
            commands: result
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                {/*TODO: make it component*/}
                {this.state.commands.map((value, index) => {
                    if (value === 'project') {
                        return <Project key={index} projectName={'Joyful Talks'}/>
                    }
                    return <p key={index}>{value}</p>
                })}
                <form onSubmit={this.handleSubmit}>
                    <User/>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
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
