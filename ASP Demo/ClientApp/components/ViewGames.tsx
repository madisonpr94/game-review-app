import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Game {
    title: string;
    genre: string;
    launchDate: string;
}

interface ViewGamesExampleState {
    games: Game[];
    loaded: boolean;
    errorLoading: boolean;
}

export class ViewGames extends React.Component<RouteComponentProps<{}>, ViewGamesExampleState> {

    constructor() {
        super();

        this.state = {
            games: [],
            loaded: false,
            errorLoading: false
        }


    }

    componentDidMount() {
        fetch('/api/Games/ListGames')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        games: result,
                        loaded: true,
                        errorLoading: false
                    })
                },
                (error) => {
                    this.setState({
                        games: [],
                        loaded: false,
                        errorLoading: true
                    })
                }
            );
    }


    public render() {
        const { games, loaded, errorLoading } = this.state;
        if (errorLoading) {
            return (
                <div className='cards-container justify-center'>
                    <div className='div-card padding-top-0'>
                        <div className='div-card-head-danger'>
                            <i className='fa no-margin fa-warning checked' />
                        </div>
                        <h3 className='div-card-title'>There was an error</h3>
                        <p>Please refresh to try again.</p>
                    </div>
                </div>
            );
        }
        else if (!loaded) {
            return (
                <div className='cards-container justify-center'>
                    <div className='div-card padding-bottom-0'>
                        <h3 className='div-card-title'>Loading...</h3>
                        <div className="load-wheel-container">
                            <div className="load-wheel-ring">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className='cards-container justify-center'>
                    {
                        games.map(game => (
                                    <div className='div-card padding-bottom-0'>
                                    <h3 className='div-card-title'>{game.title}</h3>
                                <p>Genre: {game.genre}</p>
                                <p>Release Date: {new Date(game.launchDate).toLocaleDateString()}</p>
                                    <i className='fa no-margin fa-heart checked' />
                                    <em>57%</em>
                                    <div className='div-card-stripe'>

                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            );
        }
    }
}