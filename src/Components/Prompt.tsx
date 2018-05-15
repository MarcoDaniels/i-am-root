import * as React from 'react'
import { Component, ReactElement } from 'react'
import { CommandNotFound } from './Errors'
import User from './User'
import Project from './Project'
import About from './About'
import HelpList from './Help/list'

type Props = {}
type State = {
    input: string
    lastCommand: string
    results: ReactElement<any>[]
}

export class Prompt extends Component<Props, State> {

    // private scrollPrompt: any

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
                result.push(<HelpList key={result.length}/>)
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

    componentDidUpdate() {
        // this.scrollPrompt.scrollIntoView()
    }

    render() {
        return (
            <div className="row">
                <div className="row">
                    {this.state.results.map(value => {
                        let key = value.key ? Number(value.key) + 1 : 1
                        return (
                            <div className="result" key={key}>
                                {value}
                            </div>
                        )
                    })}
                </div>
                <div className="row prompt">
                    <form onSubmit={this.handleSubmit}>
                        <label className="input-command-label">
                            <User/>
                        </label>
                        <input
                            className="input-command"
                            type="text"
                            autoFocus={true}
                            value={this.state.input}
                            onChange={this.handleChange}
                            /*
                            ref={prompt => {
                                this.scrollPrompt = prompt
                            }}
                            */
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Prompt