import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className='div-card'>
            <h3 className='div-card-title'>Game Review App</h3>
            <p>Add and rate your favorite games!</p>
            <p>Use the links on the left to get started.</p>
        </div>;
    }
}
