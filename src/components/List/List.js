import React from 'react';
import styles from './List.scss';
import Hero from './Hero.js';



class List extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <img className={styles.image} src="http://uploads.kodilla.com/bootcamp/fer/11.react/space.png">
      </section>
    )
  }
}

export default List;
