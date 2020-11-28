import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,   
    image: PropTypes.node.isRequired,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title}
        imageText={this.props.image}/>
        }
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <column>animals/>
          <column>plants/>
          <column>minerals/>
        </div>
      </section>
    )
  }
}

export default List;