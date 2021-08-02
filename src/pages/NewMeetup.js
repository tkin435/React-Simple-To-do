import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useHistory } from 'react-router-dom';

function NewMeetupPage() {
  const history = useHistory();

  function addMeetUpHandler(meetUpData) {
    fetch(
      'https://react-summary-56a48-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetUpData),
        header: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add new meet up</h1>
      <NewMeetupForm onAddMeetUp={addMeetUpHandler} />
    </section>
  );
}

export default NewMeetupPage;
