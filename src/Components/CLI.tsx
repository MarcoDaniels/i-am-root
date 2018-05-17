import * as React from 'react'
import { Component, ReactElement } from 'react'
import { CommandNotFound } from './Utils/Errors'
import User from './User'
import Project from './Project'
import About from './About'
import HelpList from './Help/list'

type Props = {}
type State = {
    input: string
    last: string
    position: number
    history: string[]
    results: ReactElement<any>[]
}

export class CLI extends Component<Props, State> {

    constructor(props: any) {
        super(props)
        this.state = {input: '', last: '', position: 0, history: [], results: []}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleNavigation = this.handleNavigation.bind(this)
    }

    handleNavigation(event: any) {
        switch (event.keyCode) {
            case 38:
            case 40:
                console.log(event.keyCode)
                let position = this.state.position
                if (event.keyCode === 38) { position-- }
                if (event.keyCode === 40) { position++ }

                if (this.state.history[position]) {
                    this.setState({
                        input: this.state.history[position],
                        position: position
                    })
                } else {
                    this.setState({input: ''})
                }

                break
            default:
        }
    }

    handleChange(event: any) {
        event.preventDefault()

        this.setState({
            input: event.target.value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault()

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

        let history = this.state.history
        history.push(this.state.input)

        this.setState({
            input: '',
            last: this.state.input,
            position: history.length,
            history: history,
            results: result
        })
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
                            onKeyDown={this.handleNavigation}
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default CLI