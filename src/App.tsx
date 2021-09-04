import { useRef, useState } from 'react';
import './App.css';
import { CircleProgressProps } from './components/CircleProgress';
import { CoundownTime } from './components/CoundownTime';
import { useTimer } from './hooks';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const circleProgress: CircleProgressProps = {
    backgroundColor: '#f4f4f4',
    progressColor: '#7775dd',
    radius: 80,
    strokeWidth: 8,
  };
  const [futureDate, setFutureDate] = useState(new Date());
  const now = useRef(new Date());
  const timer = useTimer(futureDate);

  const dayPercentage =
    (100 * timer.days) /
    Math.floor(
      Math.round((futureDate.getTime() - now.current.getTime()) / 1000) /
        (24 * 3600)
    );

  const hourPercentage = (100 * timer.hours) / 24;
  const minutePercentage = (100 * timer.minutes) / 60;
  const secondPercentage = (100 * timer.seconds) / 60;

  return (
    <div className="App" style={{ marginTop: '50px' }}>
      <DatePicker
        selected={futureDate}
        onChange={date => setFutureDate(date as Date)}
      />
      {timer.seconds > 0 && (
        <div style={{ marginTop: '50px' }}>
          <CoundownTime
            circleProgress={{ ...circleProgress, percentage: dayPercentage }}
            time={timer.days}
            type="days"
          />
          <CoundownTime
            circleProgress={{ ...circleProgress, percentage: hourPercentage }}
            time={timer.hours}
            type="hours"
          />
          <CoundownTime
            circleProgress={{ ...circleProgress, percentage: minutePercentage }}
            time={timer.minutes}
            type="minutes"
          />
          <CoundownTime
            circleProgress={{ ...circleProgress, percentage: secondPercentage }}
            time={timer.seconds}
            type="seconds"
          />
        </div>
      )}
    </div>
  );
}

export default App;
