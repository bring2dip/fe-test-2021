import React, { useState } from 'react';
import Card from 'components/Card/Card';
import './App.scss';

const articles = [
  {
    id: '123',
    date: new Date('2019-02-12'),
    title: 'Lorem ipsum has gone dolor sit',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    bgColor: '#006699',
  },
  {
    id: 'xys',
    date: new Date('2020-01-05'),
    title: 'To the moon and back',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    bgColor: '#e15d03',
  },
  {
    id: 'nhv',
    date: new Date('2021-04-09'),
    title: 'Why does the sun go on shining',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
    bgColor: '#7d6fff',
  },
  {
    id: '45t',
    date: new Date('2019-02-12'),
    title: 'Rise of the planet of the apes',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\'',
    bgColor: '#07ab99',
  },
  {
    id: '1a3sdf',
    date: new Date('2020-01-05'),
    title: 'Yes we can',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    bgColor: '#b00b69',
  },
  {
    id: '909jkj',
    date: new Date('2021-04-09'),
    title: 'Wildfire in forests of Nepal',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
    bgColor: '#f00c99',
  },
];

function App() {
  const [numOfArticles, setNumOfArticles] = useState(3);
  const cards = articles.slice(0, numOfArticles).map((article) => (
    <React.Fragment key={article.id}>
      <Card
        date={article.date}
        title={article.title}
        description={article.description}
        bgColor={article.bgColor}
      />
    </React.Fragment>
  ));

  return (
    <div className="container">
      <header className="heading">
        <h1>
          Related Articles
        </h1>
      </header>
      <article className="subheading">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </article>
      <section className="row row-cols-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-1 mb-3">
        {cards}
      </section>
      <div className="more-container">
        <button
          type="button"
          data-testid="loadMoreButton"
          onClick={() => {
            if (numOfArticles === 3) {
              setNumOfArticles(6);
              return;
            }
            setNumOfArticles(3);
          }}
          className="btn btn-ghost-pink"
        >
          {numOfArticles === 3 ? 'READ MORE' : 'READ LESS'}
        </button>
      </div>
    </div>
  );
}

export default App;
