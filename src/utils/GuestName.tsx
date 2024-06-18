import { createUseStyles } from 'react-jss';
import { Theme } from '../styles/theme';

interface Props {
    guest: string | undefined;
}

const guests = new Map([
  ['IrinaAndAlex', 'Ира и Саша'],
  ['SlavaAndLena', 'Слава и Лена'],
  ['Darina', 'Дарина'],
  ['PolinaAndAndrey', 'Полина и Андрей'],
  ['AnyaAndArtem', 'Аня и Артём'],
  ['Vika', 'Вика'],
  ['Babushka', 'Бабушка'],
  ['DanyaAndLiza', 'Даня и Лиза'],
  ['DanyaAndNastya', 'Даня и Настя'],
  ['ArtemAndNastya', 'Артем и Настя'],
  ['SvetaAndIgor', 'Трифоновы'],
  ['Kamilla', 'Камилла'],
  ['ArtemAndSomeone', 'Артем и Кто-то еще'],
  ['GoshanAndSasha', 'Гошан и Саша'],
]);

const useStyles = createUseStyles((theme: Theme) => ({
  statementNames: {
    fontFamily: theme.font.rammillas,
    fontSize: 36,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
}));

export function GuestName({ guest }: Props) {
  if (guest) {
    const classes = useStyles();
    return (
      <div className={classes.statementNames}>
        {guest === 'Darina'
                || guest === 'Vika'
                || guest === 'Babushka'
                || guest === 'Kamilla' ? (
                  <span>Дорогая </span>
          ) : (
            <>
              <span>Дорогие</span>
              <br />
            </>
          )}

        <span>{guests.get(guest)}</span>
      </div>
    );
  }
}
