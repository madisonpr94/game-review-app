import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row screen-row'>
                <div className='col-sm-2 nav-div'>
                    <NavMenu />
                </div>
                <div className='col-sm-10 div-content'>
                    { this.props.children }
                </div>
            </div>
        </div>;
    }
}
