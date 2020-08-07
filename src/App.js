import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';

class Box extends Component {
  render() {
    return(
      <div style={{
        border: '1px solid tomato',
        margin: 5,
        padding: 5,
        fontSize: '1em',
        color: 'tomato',
        fontWeight: 'bolder',
        textAlign:'left'
      }}>
        {this.props.children}
      </div>
    )
  }
}

class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired
  }

  // constructor(props) {
  //   super(props);

  //   if (typeof props.author === 'undefined') {
  //     console.warn('author prop is required');
  //     // throw new Error('author prop is required');
  //   }
  // }

  render() {
    const { title, author, date, children } = this.props;
    return(
      <section>
        <h2>
          {title}
        </h2>
        {
          author && <p><em>Escrito por: {author}</em></p>

        }
        <Box>{date}</Box>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

// Article.propTypes = {
//   author: PropTypes.string
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>
          Children props
        </h4>
        <Article 
          title='Articulo sobre la prop children'
          // author='Axel Lanuza'
          // author={true}
          date={new Date().toLocaleDateString()}
        >
          <p>
            El contenido que envolvemos dentro del componente Article será enviado al componente Box
          </p>
          <strong>
            Y mantiene las etiquetas y componentes que se añadieron dentro.
          </strong>
        </Article>
      </div>
    );
  }
}

export default App;
