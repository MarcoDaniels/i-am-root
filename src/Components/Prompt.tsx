import * as React from 'react'
import { Component, ReactElement } from 'react'
import { CommandNotFound } from './Errors'
import User from './User'
import Project from './Project'
import About from './About'
import ListHelp from './Help/ListHelp'

type Props = {}
type State = {
    input: string
    lastCommand: string
    results: ReactElement<any>[]
}

export class Prompt extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {input: '', lastCommand: '', results: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event: any) {
        this.setState({input: event.target.value})
    }

    handleSubmit(event: any) {
        let fullInput = this.state.input.split(' ')
        let command = fullInput[0]
        fullInput.shift() // the leftovers are options
        let options = fullInput.join(' ')

        let result = [
            ...this.state.results,
            <User key={this.state.results.length} lastCommand={this.state.input}/>
        ]

        switch (command) {
            case '': // just a "enter"
                break
            case 'project':
            case 'projects':
                result.push(<Project key={result.length} command={this.state.input} options={options}/>)
                break
            case 'about':
                result.push(<About key={result.length} command={this.state.input} options={options}/>)
                break
            case 'help':
                result.push(<ListHelp key={result.length}/>)
                break
            case 'clear':
                result = []
                break
            default:
                result.push(<CommandNotFound key={result.length} command={this.state.input}/>)
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
                <div className="result">
                    {this.state.results.map(value => {
                        return value
                    })}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <User/>
                    <input
                        type="text"
                        size={50}
                        autoFocus={true}
                        value={this.state.input}
                        onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}

export default Prompt