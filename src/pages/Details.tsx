import { createUseStyles } from 'react-jss';
import { useParams } from 'react-router-dom';
import { Theme } from '../styles/theme';
import { AnimatedBaseLayout } from '../components/AnimatedBaseLayout';

const useStyles = createUseStyles((theme: Theme) => ({
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  detailsHeading: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    marginBottom: 30,
  },
  detailsText: {
    fontFamily: theme.font.commons,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
}));

export function Details() {
  const classes = useStyles();

  const { guestsName } = useParams();

  return (
    <AnimatedBaseLayout>
      <div className={classes.detailsContainer}>
        <span className={classes.detailsHeading}>детали</span>
        {guestsName === 'SvetaAndIgor' ? (
          <span className={classes.detailsText}>
            если вы ломаете голову над тем, что нам
            <br />
            подарить, то самым лучшим подарком
            <br />
            будет ”подарок в конвертике”
          </span>
        ) : (
          <span className={classes.detailsText}>
            сразу после ужина мы улетаем в
            <br />
            путешествие, поэтому самым лучшим
            <br />
            подарком будет ”подарок в конвертике”
          </span>
        )}

        <img src="\imgs\IMG_5431.JPG" style={{ width: 100 }} />
        <span className={classes.detailsText}>
          приятным КОМПЛИМЕНТОМ для нас
          <br />
          вместо цветов будет вкусняшка или
          <br />
          игрушка для купера
        </span>
        <img
          src="\imgs\IMG_5426.JPG"
          style={{ aspectRatio: 1, width: 100, margin: 5 }}
        />
        <span className={classes.detailsText}>
          будем благодарны, если вы
          <br />
          воздержитесь от криков “ Горько”, ведь
          <br />
          поцелуй - это знак выражения чувств,
          <br />
          он не может быть по заказу!
        </span>
      </div>
    </AnimatedBaseLayout>
  );
}
