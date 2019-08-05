import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { AddGame } from './components/AddGame';
import { ViewGames } from './components/ViewGames';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/addgame' component={ AddGame } />
    <Route path='/viewgames' component={ ViewGames } />
</Layout>;
