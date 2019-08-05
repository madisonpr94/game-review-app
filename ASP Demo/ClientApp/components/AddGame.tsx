import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { ChangeEvent, FormEvent } from 'react';
import { MouseEvent } from 'react';

interface AddGameExampleState {
    title: string;
    genre: string;
    date: string;
    submitted: boolean;
}

export class AddGame extends React.Component<RouteComponentProps<{}>, AddGameExampleState> {
    constructor() {
        super();
        this.state = {
            title: '',
            genre: '',
            date: '',
            submitted: false
        };

        this.handleChangeFor = this.handleChangeFor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.submit = this.submit.bind(this);
    }

    public handleChangeFor = (propertyName: string) => (event: FormEvent<HTMLInputElement>) => {
        switch (propertyName) {
            case 'title':
                this.setState({ 'title': event.currentTarget.value });
                break;
            case 'genre':
                this.setState({ 'genre': event.currentTarget.value });
                break;
            case 'date':
                this.setState({ 'date': event.currentTarget.value });
                break;
        }
    }

    submit(opts: {}) {
        // TODO: Validation

        console.log(JSON.stringify(opts));

        var elements = document.getElementsByName('__RequestVerificationToken');
        var value = elements[0].nodeValue as string;

        fetch('/api/Games/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(opts)
        });
    }

    public handleSubmit(event: FormEvent<HTMLFormElement>) {
        var password = prompt("Enter password:");

        // Basic (insecure) authentication to prevent spam attacks
        if (password != "bedrock20!06") {
            alert('Incorrect password');
        }

        else {
            /* Submit form */
            this.submit({
                Title: this.state.title,
                Genre: this.state.genre,
                LaunchDate: new Date(this.state.date).toISOString()
            });

            alert('Form submitted: \n' + this.state.title + ', a(n) ' + this.state.genre + ' game\nLaunched ' + this.state.date);
        }
    }

    public render() {
        return (
            <div className="cards-container justify-center">
                <div className="div-card card-wide">
                    <h3 className="div-card-title">Add a game</h3>
                    <form onSubmit={this.handleSubmit} className="card-form">
                        <label>
                            Title:
                        </label>
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChangeFor('title')} />
                        <label>
                            Genre:
                        </label>
                        <input type="text" name="genre" value={this.state.genre} onChange={this.handleChangeFor('genre')} />
                        <label>Launch Date:
                        </label>
                        <input type="date" name="date" value={this.state.date} onChange={this.handleChangeFor('date')} />
                        <input type="submit" id="submit" value="Add" />
                    </form>
                </div>
            </div>
        );
    }
}