import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

import Header from './components/Header/Header';
import Books from './components/Books/Books';
import BookItem from './components/Books/BookItem';
import CreateBook from './components/Books/CreateBook';
import UpdateBook from './components/Books/UpdateBook';


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Router>
    <Header />
      <Switch>
    <Route exact path="/book" component={Books} />
    <Route exact path="/book/:id" component={BookItem} />
    <Route exact path="/create-book" component={CreateBook} />
    <Route exact path="/book/update/:id" component={UpdateBook} />
      </Switch>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
  );
}

export default App;
