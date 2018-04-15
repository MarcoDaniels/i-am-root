import * as React from 'react'
import { Component, ReactElement } from 'react'
import { Project } from '../Project'
import { User } from '../User'

type Props = { }
type State = {
    input: string
    lastCommand: string
    results: ReactElement<any>[]
}

class CommandInput extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = { input: '', lastCommand: '', results: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event: any) {
        this.setState({ input: event.target.value })
    }

    handleSubmit(event: any) {
        let fullInput = this.state.input.split(' ')
        let command = fullInput[0]
        fullInput.shift() // the leftovers are options
        let options = fullInput.join(' ')

        let result = [...this.state.results]

        let key = this.state.results.length
        switch (command) {
            case 'project':
            case 'projects':
                result = [...this.state.results,
                    <Project key={key} options={options}/>
                ]
                break
            case 'clear':
                result = []
                break
            default:
                result = [...this.state.results]
        }

        this.setState({
            input: '',
            lastCommand: this.state.input,
            results: result
        })
        event.preventDefault()
    }

    render() {
        return (
            <div>
                {this.state.results.map((value, index) => { return value })}
                <form onSubmit={this.handleSubmit}>
                    <User/>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                </form>
                <p>latest command: {this.state.lastCommand}</p>
            </div>
        )
    }
}

export const Prompt = () =>
    <div>
        <CommandInput/>
    </div>
